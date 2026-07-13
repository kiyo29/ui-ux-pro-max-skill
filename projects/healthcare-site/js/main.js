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
});
