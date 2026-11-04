/* Edit this block only. Leave a value empty ("") to hide that link. */
var SITE = {
  email: "veningstonk@nitk.edu.in",
  scholarUrl: "https://scholar.google.co.in/citations?user=Xpx5ZXoAAAAJ&hl=en",
  scopusUrl: "https://www.scopus.com/authid/detail.uri?authorId=46161708100",
  rid: "http://www.researcherid.com/rid/N-7942-2016",
  s2: "https://www.semanticscholar.org/author/K.-Veningston/3174376",
  dblp: "https://dblp.org/pid/155/5809.html",
  openreview: "https://openreview.net/profile?id=%7EVENINGSTON_K1",
  githubUrl: "https://github.com/veningstonk-nitk",
  linkedinUrl: "https://www.linkedin.com/in/veningston-k-87bba04a/",
  departmentUrl: ""   // add the NITK CSE department page URL here
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
  }

  /* publication filter and search */
  var list = document.getElementById("publist");
  if (list) {
    var items = Array.prototype.slice.call(list.children);
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var q = document.getElementById("q"), cnt = document.getElementById("count");
    var active = "all";
    var apply = function () {
      var term = q.value.trim().toLowerCase(), n = 0;
      items.forEach(function (li) {
        var ok = (active === "all" || li.getAttribute("data-type") === active) && (!term || li.textContent.toLowerCase().indexOf(term) > -1);
        li.hidden = !ok; if (ok) n++;
      });
      cnt.textContent = "Showing " + n + (active === "all" ? " of " + items.length + " items" : " item" + (n === 1 ? "" : "s"));
    };
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        active = c.getAttribute("data-f");
        chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        apply();
      });
    });
    q.addEventListener("input", apply); apply();
  }

  /* talks: show more */
  var tt = document.getElementById("talk-toggle");
  if (tt) {
    var more = document.querySelectorAll("#talklist li.more");
    tt.textContent = "Show all " + (more.length + 12) + " talks";
    tt.addEventListener("click", function () {
      var open = tt.getAttribute("aria-expanded") !== "true";
      more.forEach(function (li) { li.hidden = !open; });
      tt.setAttribute("aria-expanded", open);
      tt.textContent = open ? "Show fewer" : "Show all " + (more.length + 12) + " talks";
    });
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
