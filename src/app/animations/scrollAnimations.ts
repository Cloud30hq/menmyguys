import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

function registerScrollTrigger() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }
}

export function initScrollTrigger(target: HTMLElement | null) {
  if (!target) {
    return () => {};
  }

  registerScrollTrigger();

  const trigger = ScrollTrigger.create({
    trigger: target,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      target.style.setProperty("--scroll-progress", self.progress.toFixed(3));
    },
  });

  return () => {
    trigger.kill();
  };
}

export function initScrollAnimations(container: HTMLElement | null) {
  if (!container) {
    return () => {};
  }

  registerScrollTrigger();

  const ctx = gsap.context(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set("[data-step], [data-step-image], [data-rider-card], [data-testimonial-card]", {
        opacity: 1,
        y: 0,
      });
      gsap.set("[data-progress-bar]", { scaleX: 1 });
      return;
    }

    gsap.defaults({ duration: 0.8, ease: "power2.out" });

    const howItWorks = container.querySelector<HTMLElement>("[data-howitworks]");
    if (howItWorks) {
      const steps = Array.from(howItWorks.querySelectorAll<HTMLElement>("[data-step]"));
      const images = Array.from(howItWorks.querySelectorAll<HTMLElement>("[data-step-image]"));
      const progressBar = howItWorks.querySelector<HTMLElement>("[data-progress-bar]");

      gsap.set(steps, { opacity: 0, y: 12 });
      gsap.set(images, { opacity: 0, y: 12 });
      if (steps[0]) {
        gsap.set(steps[0], { opacity: 1, y: 0 });
      }
      if (images[0]) {
        gsap.set(images[0], { opacity: 1, y: 0 });
      }

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: howItWorks,
              start: "top top",
              end: "+=60%",
              scrub: true,
              pin: true,
              pinSpacing: true,
            },
            defaults: { duration: 0.5, ease: "power2.out" },
          });

          steps.forEach((step, index) => {
            const image = images[index];
            timeline
              .to(step, { opacity: 1, y: 0 }, index === 0 ? 0 : "+=0.05")
              .to(
                steps.filter((_, stepIndex) => stepIndex !== index),
                { opacity: 0.35, y: -6, duration: 0.35 },
                "<"
              );

            if (image) {
              timeline.to(image, { opacity: 1, y: 0 }, "<");
              timeline.to(
                images.filter((_, imageIndex) => imageIndex !== index),
                { opacity: 0, y: -6, duration: 0.4 },
                "<"
              );
            }

            if (progressBar) {
              timeline.to(
                progressBar,
                { scaleX: (index + 1) / steps.length, duration: 0.4 },
                "<"
              );
            }
          });

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        },
        "(max-width: 1023px)": () => {
          gsap.set(steps, { opacity: 1, y: 0 });
          gsap.set(images, { opacity: 1, y: 0 });
          if (progressBar) {
            gsap.set(progressBar, { scaleX: 1 });
          }

          return () => {};
        },
      });
    }

    const restaurants = container.querySelector<HTMLElement>("[data-restaurants]");
    if (restaurants) {
      const parallax = restaurants.querySelector<HTMLElement>("[data-parallax]");
      if (parallax) {
        gsap.to(parallax, {
          y: -30,
          scrollTrigger: {
            trigger: restaurants,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      const statNodes = Array.from(restaurants.querySelectorAll<HTMLElement>("[data-count]"));
      statNodes.forEach((stat) => {
        const value = Number(stat.dataset.count || "0");
        const suffix = stat.dataset.suffix || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: value,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: restaurants,
            start: "top 70%",
          },
          onUpdate: () => {
            const formatted = Math.round(counter.val).toLocaleString();
            stat.textContent = `${formatted}${suffix}`;
          },
        });
      });
    }

    const riders = container.querySelector<HTMLElement>("[data-riders]");
    if (riders) {
      const cards = Array.from(riders.querySelectorAll<HTMLElement>("[data-rider-card]"));
      gsap.fromTo(
        cards,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: riders,
            start: "top 75%",
          },
        }
      );
    }

    const testimonials = container.querySelector<HTMLElement>("[data-testimonials]");
    if (testimonials) {
      const track = testimonials.querySelector<HTMLElement>("[data-testimonial-track]");
      const cards = Array.from(testimonials.querySelectorAll<HTMLElement>("[data-testimonial-card]"));

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          if (!track) {
            return () => {};
          }

          const scrollWidth = track.scrollWidth - track.clientWidth;
          const tween = gsap.to(track, {
            x: scrollWidth ? -scrollWidth : 0,
            ease: "none",
            scrollTrigger: {
              trigger: testimonials,
              start: "top 15%",
              end: () => `+=${track.scrollWidth * 0.4}`,
              scrub: true,
              pin: true,
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        },
      });

      gsap.fromTo(
        cards,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: testimonials,
            start: "top 85%",
          },
        }
      );
    }
  }, container);

  return () => ctx.revert();
}
