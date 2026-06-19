document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  document.querySelectorAll(".service-more").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".service-card");
      const expanded = card.classList.toggle("expanded");
      button.firstChild.textContent = expanded ? "Свернуть " : "Подробнее ";
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -35px" });

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
});
