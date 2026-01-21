Perfect. I’ll break this into a clean, junior-friendly, followable task.md that you (or anyone working with you) can execute step by step without confusion.

Think of this as your single source of truth while building.

⸻

task.md

Project: Animated Food Delivery Website (Chowdeck-style)
Objective: Build a high-performance, animation-rich landing website with scroll-based storytelling.

⸻
always update review and progress logs

✅ PHASE 0 — PROJECT SETUP (FOUNDATION)

Task 0.1 — Initialize project
	•	Create a new Next.js project (App Router)
	•	Enable TypeScript
	•	Clean default boilerplate
	•	Push initial commit

Done when:
App runs locally with a blank page.

⸻

Task 0.2 — Install core dependencies
	•	Install Tailwind CSS
	•	Install GSAP
	•	Install Framer Motion
	•	Install Lenis (smooth scrolling)

Done when:
Tailwind styles work and libraries are installed without errors.

⸻

Task 0.3 — Project structure

Create folders:

/app
  /components
  /animations
  /styles

	•	Create empty component files:
	•	Hero.tsx
	•	HowItWorks.tsx
	•	Restaurants.tsx
	•	Riders.tsx
	•	Testimonials.tsx
	•	CTA.tsx
	•	Create animation files:
	•	heroAnimations.ts
	•	scrollAnimations.ts

Rule:
❗ No animation logic inside components.

⸻

✅ PHASE 1 — PAGE STRUCTURE (NO ANIMATIONS YET)

Task 1.1 — Base layout
	•	Set up global layout
	•	Add navigation placeholder
	•	Add smooth scroll wrapper (Lenis ready)

Done when:
Page scrolls normally with no animation.

⸻

Task 1.2 — Hero section (static)
	•	Add headline text
	•	Add subtitle
	•	Add CTA button
	•	Add phone mockup image placeholder

Done when:
Hero looks correct without motion.

⸻

Task 1.3 — How It Works section (static)
	•	Create 3 steps
	•	Add text + image placeholders
	•	Use clean spacing and typography

⸻

Task 1.4 — Restaurants section (static)
	•	Add heading
	•	Add benefit cards
	•	Add stat placeholders

⸻

Task 1.5 — Riders section (static)
	•	Add rider value proposition
	•	Add 2–3 feature cards

⸻

Task 1.6 — Testimonials section (static)
	•	Add testimonial cards
	•	Add brand/logo placeholders

⸻

Task 1.7 — Final CTA section (static)
	•	Strong headline
	•	One clear action button

Checkpoint:
🚫 Still no animations.

⸻

✅ PHASE 2 — HERO ANIMATIONS

Task 2.1 — Hero entrance animation

Using GSAP:
	•	Animate headline fade-up
	•	Animate subtitle fade-up (delay)
	•	Animate phone mockup slide-in
	•	Animate CTA button subtle scale

Done when:
Hero animates once on page load.

⸻

Task 2.2 — Button micro-interaction

Using Framer Motion:
	•	Hover scale
	•	Tap feedback
	•	Cursor feel responsive

⸻

✅ PHASE 3 — SCROLL-BASED STORYTELLING

Task 3.1 — Enable ScrollTrigger
	•	Register GSAP ScrollTrigger
	•	Confirm scroll events fire correctly

⸻

Task 3.2 — How It Works scroll animation
	•	Pin section during scroll
	•	Animate step text transitions
	•	Swap images per scroll step
	•	Add progress indicator

Done when:
Scrolling feels like moving through steps.

⸻

Task 3.3 — Restaurants parallax
	•	Parallax images on scroll
	•	Animate stats count-up
	•	Subtle background movement

⸻

Task 3.4 — Riders motion cards
	•	Cards fade-in on scroll
	•	Slight stagger animation
	•	Hover lift effect

⸻

Task 3.5 — Testimonials horizontal scroll
	•	Horizontal sliding testimonials
	•	Staggered entry
	•	Infinite or loop effect (optional)

⸻

✅ PHASE 4 — SMOOTH SCROLL & REFINEMENT

Task 4.1 — Integrate Lenis
	•	Replace native scroll
	•	Sync GSAP with Lenis
	•	Test scroll smoothness

⸻

Task 4.2 — Motion consistency
	•	Standardize animation duration
	•	Reduce excessive movement
	•	Ensure one dominant motion per section

⸻

✅ PHASE 5 — PERFORMANCE & ACCESSIBILITY

Task 5.1 — Performance checks
	•	Lazy-load images
	•	Reduce heavy assets
	•	Test mobile scroll performance

⸻

Task 5.2 — Accessibility
	•	Respect prefers-reduced-motion
	•	Ensure readable contrast
	•	Keyboard navigation works

⸻

✅ PHASE 6 — POLISH & RELEASE

Task 6.1 - redisgn to matvh chowdeck style
- match most of the sections and pages stle and design
- smooth scrolling and automation

✅ PHASE 7 — POLISH & RELEASE

Task 7.1 — SEO & metadata
	•	Page title
	•	Meta description
	•	Open Graph tags

⸻

Task 7.2 — Final review

Ask:
	•	Does it feel fast?
	•	Does it feel premium?
	•	Is the message clear in 5 seconds?

⸻

Task 7.3 — Deploy
	•	Deploy to Vercel
	•	Test live performance
	•	Share preview link

⸻

🧠 RULES TO REMEMBER
	•	Build static first, animate later
	•	Separate animation logic from UI
	•	Smooth > flashy
	•	Emotion before features

⸻

3-Line Summary
	•	This task.md is your execution roadmap
	•	Finish each phase before moving on
	•	If it feels expensive, you did it right

⸻

If you want, next I can:
	•	Convert this into a Notion task board
	•	Generate a starter repo with empty tasks
	•	Or write task-linked GSAP code stubs so each task already has a scaffold

Just say the word.