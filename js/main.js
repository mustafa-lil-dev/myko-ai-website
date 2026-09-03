(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Theme toggle (persisted)
  --------------------------------------------------------------------- */
  var root = document.documentElement;
  var THEME_KEY = "myko-theme";

  function applyTheme(t) {
    if (t === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  }
  applyTheme(localStorage.getItem(THEME_KEY) || "dark");

  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var isLight = root.getAttribute("data-theme") === "light";
      var next = isLight ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  });

  /* ---------------------------------------------------------------------
     Mobile menu
  --------------------------------------------------------------------- */
  document.querySelectorAll("[data-menu-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var nav = document.querySelector(".mobile-nav");
      if (nav) nav.classList.toggle("open");
    });
  });
  document.querySelectorAll(".mobile-nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      var nav = document.querySelector(".mobile-nav");
      if (nav) nav.classList.remove("open");
    });
  });

  /* ---------------------------------------------------------------------
     FAQ accordion
  --------------------------------------------------------------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("open");
      item.closest(".faq-list, .prose")
        .querySelectorAll(".faq-item.open")
        .forEach(function (o) { o.classList.remove("open"); });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---------------------------------------------------------------------
     GitHub star count
  --------------------------------------------------------------------- */
  var starEls = document.querySelectorAll("[data-github-stars]");
  if (starEls.length) {
    fetch("https://api.github.com/repos/mustafa-lil-dev/myko-ai-terminal")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && typeof data.stargazers_count === "number") {
          starEls.forEach(function (el) { el.textContent = data.stargazers_count; });
        }
      })
      .catch(function () { /* keep placeholder */ });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal — one restrained treatment, applied per top-level block
  --------------------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------------------------------------------------------------
     Hero terminal typer — one orchestrated moment
  --------------------------------------------------------------------- */
  var typeTarget = document.querySelector("[data-type-target]");
  if (typeTarget) {
    var phrases = [
      "add a dark-mode toggle to the settings panel",
      "fix the flaky test in auth.spec.ts",
      "explain what this migration script does"
    ];
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      typeTarget.textContent = phrases[0];
    } else {
      var pIndex = 0, cIndex = 0, deleting = false;

      function tick() {
        var phrase = phrases[pIndex];
        if (!deleting) {
          cIndex++;
          typeTarget.textContent = phrase.slice(0, cIndex);
          if (cIndex === phrase.length) {
            deleting = false;
            setTimeout(function () { deleting = true; tick(); }, 1800);
            return;
          }
        } else {
          cIndex--;
          typeTarget.textContent = phrase.slice(0, cIndex);
          if (cIndex === 0) {
            deleting = false;
            pIndex = (pIndex + 1) % phrases.length;
          }
        }
        setTimeout(tick, deleting ? 22 : 34);
      }
      tick();
    }
  }

  /* ---------------------------------------------------------------------
     Background mesh — subtle drifting mycelium-node network
  --------------------------------------------------------------------- */
  var canvas = document.getElementById("bg-mesh");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var w, h, nodes, animId;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function accentColor() {
      return root.getAttribute("data-theme") === "light"
        ? "47,156,120"
        : "79,227,172";
    }

    function resize() {
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = Math.min(window.innerHeight, 900);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.max(18, Math.min(46, Math.floor((w * h) / 45000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var color = accentColor();

      nodes.forEach(function (n) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var a = nodes[i], b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.strokeStyle = "rgba(" + color + "," + (0.12 * (1 - dist / 160)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach(function (n) {
        ctx.fillStyle = "rgba(" + color + ",0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduce) animId = requestAnimationFrame(step);
    }

    resize();
    step();
    if (reduce) cancelAnimationFrame(animId);

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        cancelAnimationFrame(animId);
        resize();
        step();
      }, 200);
    });
  }
})();
