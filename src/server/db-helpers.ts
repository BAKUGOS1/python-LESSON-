import { eq } from "drizzle-orm";
import { db } from "@/db";
import {
  users,
  courses,
  enrollments,
  modules,
  type User,
  type Course,
  type Enrollment,
  type Module,
} from "@/db/schema";

// ── User helpers ───────────────────────────────────────────────────────────────

/**
 * Fetch a single user by email address.
 * Returns `undefined` when no user is found.
 */
export async function getUserByEmail(email: string): Promise<User | undefined> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  return result[0];
}

/**
 * Fetch a single user by ID.
 * Returns `undefined` when no user is found.
 */
export async function getUserById(id: string): Promise<User | undefined> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);
  return result[0];
}

// ── Course helpers ─────────────────────────────────────────────────────────────

/**
 * Fetch a published course by its URL slug, including all ordered modules.
 * Returns `undefined` when not found or unpublished.
 */
export async function getCourseBySlug(
  slug: string
): Promise<(Course & { modules: Module[] }) | undefined> {
  const course = await db.query.courses.findFirst({
    where: (c, { eq: eqFn }) => eqFn(c.slug, slug),
    with: {
      modules: {
        orderBy: (m, { asc }) => [asc(m.orderIndex)],
      },
    },
  });
  return course;
}

/**
 * Fetch all published courses, newest first.
 */
export async function getAllPublishedCourses(): Promise<Course[]> {
  return db
    .select()
    .from(courses)
    .where(eq(courses.published, true))
    .orderBy(courses.createdAt);
}

// ── Enrollment helpers ─────────────────────────────────────────────────────────

/**
 * Fetch all courses a user is enrolled in, with enrollment metadata.
 */
export async function getUserEnrollments(
  userId: string
): Promise<(Enrollment & { course: Course })[]> {
  const rows = await db.query.enrollments.findMany({
    where: (e, { eq: eqFn }) => eqFn(e.userId, userId),
    with: { course: true },
    orderBy: (e, { desc }) => [desc(e.enrolledAt)],
  });
  return rows;
}

/**
 * Check whether a user is already enrolled in a course.
 */
export async function isUserEnrolled(
  userId: string,
  courseId: string
): Promise<boolean> {
  const row = await db
    .select({ id: enrollments.id })
    .from(enrollments)
    .where(eq(enrollments.userId, userId))
    .limit(1);

  return row.length > 0;
}

// ── Module helpers ─────────────────────────────────────────────────────────────

/**
 * Get all modules for a course, sorted by orderIndex ascending.
 */
export async function getCourseModules(courseId: string): Promise<Module[]> {
  return db
    .select()
    .from(modules)
    .where(eq(modules.courseId, courseId))
    .orderBy(modules.orderIndex);
}
