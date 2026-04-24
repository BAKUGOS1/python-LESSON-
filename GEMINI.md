# GEMINI.md — AI Agent Instructions for HinglishTech

> This file is auto-read by Antigravity, Gemini CLI, and compatible AI coding assistants.
> It encodes the integrated methodology from 5 curated skill repositories.

---

## 🧠 Development Methodology (from: superpowers)

Before writing ANY code, follow this mandatory workflow:

### Phase 1 — Brainstorm
- Ask clarifying questions about what the user really wants
- Explore 2-3 alternative approaches
- Present the design in readable chunks for validation
- Save the approved design document before moving forward

### Phase 2 — Plan
- Break implementation into 2–5 minute tasks
- Each task must include: exact file paths, complete code, and verification steps
- Emphasize YAGNI (You Aren't Gonna Need It) and DRY (Don't Repeat Yourself)
- Use TDD: write failing tests FIRST, then write the minimal code to pass them

### Phase 3 — Execute
- Work through tasks sequentially with subagent-style discipline
- After each task: review spec compliance, then review code quality
- NEVER declare success without running verification

### Phase 4 — Review & Finish
- Run full test suite before merging
- Check for regressions
- Clean up work branch

**Philosophy:**
- Test-Driven Development — write tests first, always
- Systematic over ad-hoc — process over guessing
- Complexity reduction — simplicity is the primary goal
- Evidence over claims — verify before declaring success

---

## 🎨 UI/UX Design System (from: ui-ux-pro-max-skill)

Every UI task must begin with design system generation. Apply these rules:

### Pre-Build Checklist
- [ ] No emojis as icons — use SVG (Heroicons / Lucide)
- [ ] `cursor-pointer` on ALL clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Light mode text contrast ≥ 4.5:1 (WCAG AA)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive breakpoints: 375px, 768px, 1024px, 1440px

### Design System Output (generate per project)
For any UI task, determine:
1. **Pattern** — Hero-Centric, Feature Grid, Dashboard, etc.
2. **Style** — Glassmorphism, Soft UI, Brutalism, Neumorphism, Bento Grid, Dark Mode, AI-Native
3. **Colors** — Industry-appropriate palette (avoid generic red/blue/green; use HSL-tuned colors)
4. **Typography** — Curated Google Fonts pairing (e.g., Inter + Cormorant, Outfit + Roboto)
5. **Key Effects** — Micro-animations, smooth transitions, subtle shadows
6. **Anti-Patterns to Avoid** — Documented per industry (e.g., no AI purple/pink gradients for banking)

### Tech Stack Guidelines
- Default: HTML + Vanilla CSS (no Tailwind unless explicitly requested)
- React/Next.js: only when user specifies a web app
- Always import Google Fonts, never use browser defaults
- Smooth gradients, glassmorphism, and micro-animations are expected
- Premium, state-of-the-art feel — never basic MVPs

---

## 🛠️ Agentic Skills Available (from: antigravity-awesome-skills)

Installed to: `~/.gemini/antigravity/skills`

### Universal Starter Skills
| Skill | Purpose |
|-------|---------|
| `@brainstorming` | Planning before implementation |
| `@test-driven-development` | TDD-oriented RED-GREEN-REFACTOR |
| `@debugging-strategies` | Systematic 4-phase root cause process |
| `@lint-and-validate` | Lightweight quality checks |
| `@security-auditor` | Security-focused code review |
| `@frontend-design` | UI/UX interaction quality |
| `@api-design-principles` | API shape and consistency |
| `@create-pr` | Package work into a clean pull request |

### Usage
```
Use @brainstorming to plan this feature
Use @security-auditor to review this API endpoint
Use @frontend-design to improve this component
```

---

## 🔍 AI System Prompt Intelligence (from: system_prompts_leaks)

Reference prompts are available for:
- Claude (Opus 4.6, Sonnet 4.6, Claude Code)
- GPT (5.4, 5.3, Codex)
- Gemini (3.1 Pro, 3 Flash, CLI)
- Grok (4.2, 4)
- Perplexity, Notion AI, Copilot, etc.

**Use these to:** Understand how top AI systems are instructed, calibrate tone/format expectations, and reverse-engineer best practices for prompting.

---

## 🤖 Agent Harness Patterns (from: claude-code)

Key architectural patterns for agent systems:

- **Tool Wiring** — tools.py defines all agent capabilities as metadata
- **Task Decomposition** — task.py breaks work into atomic verifiable units
- **Query Engine** — renders structured summaries of current workspace state
- **Port Manifest** — tracks implementation status against a target spec
- **Commands Registry** — commands.py catalogs all available agent commands

**When building agent systems:**
- Always have a manifest of what's implemented vs. what's pending
- Each agent command should be independently testable
- Verification steps are mandatory — never assume completion

---

## 📋 Project-Specific Rules

### Code Quality
- Always preserve existing comments and docstrings unless explicitly told otherwise
- Never auto-run potentially destructive commands
- Keep responses concise; summarize at end of each turn
- Format responses in GitHub-style Markdown

### SEO (all web pages)
- Unique `<title>` and `<meta description>` per page
- Single `<h1>` with proper heading hierarchy
- Semantic HTML5 elements
- Unique IDs on all interactive elements

### File Organization
- Project code goes in workspace: `c:\Users\MOHIT KUMAR\OneDrive\Desktop\hinglishtech`
- Scratch/temp files: `~/.gemini/antigravity/brain/<conversation-id>/scratch/`
- Never write project files to Desktop directly

---

*Last updated: 2026-04-22 | Integrated from BAKUGOS1 skill repositories*
