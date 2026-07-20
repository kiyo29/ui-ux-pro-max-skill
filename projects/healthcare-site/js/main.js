document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("uh-menu-btn");
  const mobileMenu = document.getElementById("uh-mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", isOpen);
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  const backToTop = document.getElementById("uh-back-to-top");
  if (backToTop) {
    const toggleVisibility = () => {
      backToTop.classList.toggle("uh-visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const fab = document.querySelector(".uh-fab");
  if (fab) {
    const darkSections = Array.from(
      document.querySelectorAll(".uh-surface-brand, .uh-surface-teal, .uh-surface-dark")
    );
    const updateFabTheme = () => {
      const probeY = fab.getBoundingClientRect().top + fab.offsetHeight / 2;
      const onDark = darkSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return probeY >= rect.top && probeY <= rect.bottom;
      });
      fab.classList.toggle("uh-fab-on-dark", onDark);
    };
    window.addEventListener("scroll", updateFabTheme, { passive: true });
    window.addEventListener("resize", updateFabTheme);
    updateFabTheme();
  }

  const complianceLinks = document.querySelectorAll(".uh-compliance-nav a");
  if (complianceLinks.length) {
    const sections = Array.from(complianceLinks)
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const setActive = () => {
      let currentId = sections[0] && sections[0].id;
      const scrollPos = window.scrollY + 140;
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) currentId = section.id;
      });
      complianceLinks.forEach((link) => {
        link.classList.toggle("uh-active", link.getAttribute("href") === `#${currentId}`);
      });
    };

    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-track]");
    const slides = Array.from(track.children);
    const prevBtn = carousel.querySelector("[data-prev]");
    const nextBtn = carousel.querySelector("[data-next]");
    const dotsWrap = carousel.querySelector("[data-dots]");
    if (!track || !slides.length) return;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "uh-carousel-dot";
      dot.setAttribute("aria-label", `Go to feature ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    const goTo = (index) => {
      const clamped = Math.max(0, Math.min(index, slides.length - 1));
      track.scrollTo({ left: slides[clamped].offsetLeft, behavior: "smooth" });
    };

    const current = () => {
      let closest = 0;
      let closestDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - track.scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const update = () => {
      const idx = current();
      dots.forEach((dot, i) => dot.classList.toggle("uh-active", i === idx));
      if (prevBtn) prevBtn.disabled = idx === 0;
      if (nextBtn) nextBtn.disabled = idx === slides.length - 1;
    };

    if (prevBtn) prevBtn.addEventListener("click", () => goTo(current() - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(current() + 1));

    let scrollTimer;
    track.addEventListener(
      "scroll",
      () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(update, 80);
      },
      { passive: true }
    );
    window.addEventListener("resize", () => goTo(current()));

    update();
  });

  // Pricing: audience toggle (Practices / Hospital Groups)
  const audienceButtons = document.querySelectorAll("[data-audience-btn]");
  if (audienceButtons.length) {
    const panels = document.querySelectorAll("[data-audience-panel]");
    const billingToggleWrap = document.getElementById("billing-toggle");
    const setAudience = (audience) => {
      audienceButtons.forEach((btn) => {
        btn.classList.toggle("uh-active", btn.dataset.audienceBtn === audience);
      });
      panels.forEach((panel) => {
        panel.classList.toggle("uh-active", panel.dataset.audiencePanel === audience);
      });
      if (billingToggleWrap) {
        billingToggleWrap.classList.toggle("uh-force-hidden", audience === "hospitals");
      }
    };
    audienceButtons.forEach((btn) => {
      btn.addEventListener("click", () => setAudience(btn.dataset.audienceBtn));
    });
    setAudience(audienceButtons[0].dataset.audienceBtn);
  }

  // Pricing: billing toggle (Yearly / Monthly)
  const billingButtons = document.querySelectorAll("[data-billing-btn]");
  const pricingRoot = document.getElementById("pricing-root");
  if (billingButtons.length && pricingRoot) {
    const setBilling = (billing) => {
      billingButtons.forEach((btn) => {
        btn.classList.toggle("uh-active", btn.dataset.billingBtn === billing);
      });
      pricingRoot.classList.toggle("uh-billing-monthly", billing === "monthly");
    };
    billingButtons.forEach((btn) => {
      btn.addEventListener("click", () => setBilling(btn.dataset.billingBtn));
    });
    setBilling("yearly");
  }

  // FAQ accordion
  document.querySelectorAll("[data-faq-item]").forEach((item, i) => {
    const q = item.querySelector("[data-faq-q]");
    if (!q) return;
    if (i === 0) item.classList.add("uh-open");
    q.addEventListener("click", () => {
      item.classList.toggle("uh-open");
    });
  });
});
