/* Edit this block only. Leave a value empty ("") to hide that link. */
var SITE = {
  email: "",          // e.g. "veningston@nitk.edu.in" (add once your NITK address is issued)
  scholarUrl: "",     // Google Scholar profile URL
  scopusUrl: "",      // Scopus author URL
  githubUrl: "",      // https://github.com/<username>
  linkedinUrl: "",
  departmentUrl: ""   // NITK CSE department page
};

(function () {
  document.getElementById("yr").textContent = new Date().getFullYear();

  Object.keys(SITE).forEach(function (k) {
    if (k === "email" || !SITE[k]) return;
    var li = document.querySelector('[data-site="' + k + '"]');
    if (!li) return;
    li.querySelector("a").href = SITE[k];
    li.hidden = false;
  });

  if (SITE.email) {
    var a = document.getElementById("email-link");
    a.href = "mailto:" + SITE.email;
    a.textContent = SITE.email.replace("@", " [at] ").replace(/\./g, " [dot] ");
    a.textContent = SITE.email;
    document.getElementById("email-line").hidden = false;
  }

  /* highlight current section in nav */
  var links = {};
  document.querySelectorAll(".nav a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("on"); links[k].removeAttribute("aria-current"); });
          links[e.target.id].classList.add("on");
          links[e.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
})();
