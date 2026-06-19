/* 최준혁 Portfolio — interactions */
(function () {
  "use strict";

  // --- Sticky nav background on scroll ---
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Mobile menu toggle ---
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      toggle.textContent = menu.classList.contains("open") ? "✕" : "☰";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.textContent = "☰";
      });
    });
  }

  // --- Scroll reveal ---
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // --- Lightbox for galleries ---
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = '<button class="lightbox__close" aria-label="닫기">✕</button><img alt="">';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img");
  function openLb(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".gallery figure img, .fcard__img img").forEach(function (img) {
    img.addEventListener("click", function () { openLb(img.src, img.alt); });
  });
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lightbox__close")) closeLb();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLb();
  });

  // --- Footer year ---
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = "2026";
})();
