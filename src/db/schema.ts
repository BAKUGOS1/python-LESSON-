import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  pgEnum,
  uniqueIndex,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations, type InferSelectModel } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";

// ── Helpers ────────────────────────────────────────────────────────────────────

const cuid = () => text("id").primaryKey().$defaultFn(() => createId());
const now = () => timestamp("created_at").notNull().defaultNow();
const updatedNow = () => timestamp("updated_at").notNull().defaultNow();

// ── Enums ──────────────────────────────────────────────────────────────────────

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const courseLevelEnum = pgEnum("course_level", [
  "beginner",
  "intermediate",
  "advanced",
]);
export const paymentStatusEnum = pgEnum("payment_status", [
  "created",
  "paid",
  "failed",
  "refunded",
]);

// ── users ──────────────────────────────────────────────────────────────────────

export const users = pgTable("users", {
  id: cuid(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  name: text("name"),
  image: text("image"),
  role: userRoleEnum("role").notNull().default("user"),
  createdAt: now(),
  updatedAt: updatedNow(),
});

// ── sessions ───────────────────────────────────────────────────────────────────

export const sessions = pgTable("sessions", {
  id: cuid(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
});

// ── accounts (Better Auth OAuth) ───────────────────────────────────────────────

export const accounts = pgTable("accounts", {
  id: cuid(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  providerId: text("provider_id").notNull(),
  accountId: text("account_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  expiresAt: timestamp("expires_at"),
});

// ── verification (Better Auth) ─────────────────────────────────────────────────

export const verification = pgTable("verification", {
  id: cuid(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});

// ── courses ────────────────────────────────────────────────────────────────────

export const courses = pgTable("courses", {
  id: cuid(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  coverImage: text("cover_image"),
  level: courseLevelEnum("level").notNull().default("beginner"),
  language: text("language").notNull().default("hi"),
  durationMinutes: integer("duration_minutes").notNull().default(0),
  price: integer("price").notNull().default(0), // paise (₹ × 100)
  published: boolean("published").notNull().default(false),
  featured: boolean("featured").notNull().default(false),
  createdAt: now(),
  updatedAt: updatedNow(),
});

// ── modules ────────────────────────────────────────────────────────────────────

export const modules = pgTable(
  "modules",
  {
    id: cuid(),
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    orderIndex: integer("order_index").notNull().default(0),
    mdxPath: text("mdx_path"),
    durationMinutes: integer("duration_minutes").notNull().default(0),
  },
  (t) => [uniqueIndex("modules_course_slug_idx").on(t.courseId, t.slug)]
);

// ── enrollments ────────────────────────────────────────────────────────────────

export const enrollments = pgTable(
  "enrollments",
  {
    id: cuid(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseId: text("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    enrolledAt: timestamp("enrolled_at").notNull().defaultNow(),
    completedAt: timestamp("completed_at"),
  },
  (t) => [uniqueIndex("enrollments_user_course_idx").on(t.userId, t.courseId)]
);

// ── progress ───────────────────────────────────────────────────────────────────

export const progress = pgTable(
  "progress",
  {
    id: cuid(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    moduleId: text("module_id")
      .notNull()
      .references(() => modules.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at").notNull().defaultNow(),
    lastAccessedAt: timestamp("last_accessed_at").notNull().defaultNow(),
  },
  (t) => [uniqueIndex("progress_user_module_idx").on(t.userId, t.moduleId)]
);

// ── comments ───────────────────────────────────────────────────────────────────

export const comments = pgTable("comments", {
  id: cuid(),
  moduleId: text("module_id")
    .notNull()
    .references(() => modules.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  parentId: text("parent_id"), // self-reference defined in relations
  content: text("content").notNull(),
  upvotes: integer("upvotes").notNull().default(0),
  createdAt: now(),
  updatedAt: updatedNow(),
  deletedAt: timestamp("deleted_at"),
});

// ── payments ───────────────────────────────────────────────────────────────────

export const payments = pgTable("payments", {
  id: cuid(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "restrict" }),
  courseId: text("course_id").references(() => courses.id, {
    onDelete: "set null",
  }),
  razorpayOrderId: text("razorpay_order_id").notNull().unique(),
  razorpayPaymentId: text("razorpay_payment_id"),
  amount: integer("amount").notNull(), // paise
  currency: text("currency").notNull().default("INR"),
  status: paymentStatusEnum("status").notNull().default("created"),
  metadata: jsonb("metadata"),
  createdAt: now(),
});

// ── certificates ───────────────────────────────────────────────────────────────

export const certificates = pgTable("certificates", {
  id: cuid(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  courseId: text("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  issuedAt: timestamp("issued_at").notNull().defaultNow(),
  certificateNumber: text("certificate_number").notNull().unique(),
});

// ── Relations ──────────────────────────────────────────────────────────────────

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
  enrollments: many(enrollments),
  progress: many(progress),
  comments: many(comments),
  payments: many(payments),
  certificates: many(certificates),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  modules: many(modules),
  enrollments: many(enrollments),
  payments: many(payments),
  certificates: many(certificates),
}));

export const modulesRelations = relations(modules, ({ one, many }) => ({
  course: one(courses, { fields: [modules.courseId], references: [courses.id] }),
  progress: many(progress),
  comments: many(comments),
}));

export const enrollmentsRelations = relations(enrollments, ({ one }) => ({
  user: one(users, { fields: [enrollments.userId], references: [users.id] }),
  course: one(courses, { fields: [enrollments.courseId], references: [courses.id] }),
}));

export const progressRelations = relations(progress, ({ one }) => ({
  user: one(users, { fields: [progress.userId], references: [users.id] }),
  module: one(modules, { fields: [progress.moduleId], references: [modules.id] }),
}));

export const commentsRelations = relations(comments, ({ one, many }) => ({
  module: one(modules, { fields: [comments.moduleId], references: [modules.id] }),
  user: one(users, { fields: [comments.userId], references: [users.id] }),
  parent: one(comments, {
    fields: [comments.parentId],
    references: [comments.id],
    relationName: "commentReplies",
  }),
  replies: many(comments, { relationName: "commentReplies" }),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  user: one(users, { fields: [payments.userId], references: [users.id] }),
  course: one(courses, { fields: [payments.courseId], references: [courses.id] }),
}));

export const certificatesRelations = relations(certificates, ({ one }) => ({
  user: one(users, { fields: [certificates.userId], references: [users.id] }),
  course: one(courses, { fields: [certificates.courseId], references: [courses.id] }),
}));

// ── TypeScript Inferred Types ──────────────────────────────────────────────────

export type User = InferSelectModel<typeof users>;
export type Session = InferSelectModel<typeof sessions>;
export type Account = InferSelectModel<typeof accounts>;
export type Verification = InferSelectModel<typeof verification>;
export type Course = InferSelectModel<typeof courses>;
export type Module = InferSelectModel<typeof modules>;
export type Enrollment = InferSelectModel<typeof enrollments>;
export type Progress = InferSelectModel<typeof progress>;
export type Comment = InferSelectModel<typeof comments>;
export type Payment = InferSelectModel<typeof payments>;
export type Certificate = InferSelectModel<typeof certificates>;
