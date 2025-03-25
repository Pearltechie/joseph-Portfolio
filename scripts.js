document.addEventListener("DOMContentLoaded", () => {
    // Profile Picture Drop Effect
    gsap.to("#profile-img", { scale: 1, duration: 1.5, ease: "bounce.out", rotation: 360, ease: "elastic.out(1, 0.75)" });

    // Name & Intro Fade In
    gsap.to("#name-text", { opacity: 1, y: -10, duration: 1, delay: 1, ease: "power3.out" });
    gsap.to("#intro-text", { opacity: 1, y: -10, duration: 1, delay: 1.5,  ease: "power3.out"  });

    // Scroll Indicator Animation
    gsap.fromTo("#scroll-icon", { opacity: 0 }, { opacity: 1, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" });

    // Skill Cards Animation
    gsap.from(".skill-card", { opacity: 0, y: 20, stagger: 0.2, duration: 1.5, ease: "power3.out" });

    // Contact Links Animation
    gsap.from(".contact-link", { scale: 0, duration: 1.2, stagger: 0.3, ease: "elastic.out(1, 0.5)" });

    gsap.from(".contact-btn", { scale: 0, duration: 1.2, stagger: 0.3, ease: "elastic.out(1, 0.5)" });
});

