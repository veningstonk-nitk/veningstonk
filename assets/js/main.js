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

  /* publication filter and search */
  var list = document.getElementById("publist");
  if (list) {
    var items = Array.prototype.slice.call(list.children);
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var q = document.getElementById("q"), cnt = document.getElementById("count");
    var active = {};
    var apply = function () {
      var term = q.value.trim().toLowerCase(), any = Object.keys(active).length > 0, n = 0;
      items.forEach(function (li) {
        var ok = (!any || active[li.getAttribute("data-type")]) && (!term || li.textContent.toLowerCase().indexOf(term) > -1);
        li.hidden = !ok; if (ok) n++;
      });
      cnt.textContent = "Showing " + n + " of " + items.length + " items";
    };
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var f = c.getAttribute("data-f"), on = c.getAttribute("aria-pressed") !== "true";
        c.setAttribute("aria-pressed", on); if (on) active[f] = 1; else delete active[f]; apply();
      });
    });
    q.addEventListener("input", apply); apply();
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
