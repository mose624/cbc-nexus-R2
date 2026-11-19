(function () {
  "use strict";
  function buildCountryDashboard() {
    var match = location.pathname.match(/^\/global-schools\/([^/]+)\/?$/);
    if (!match) return;
    var slug = decodeURIComponent(match[1]).toLowerCase();
    var countries = window.CBE_GLOBAL_COUNTRIES || [];
    var country = countries.find(function (item) { return item && item.slug === slug; });
    var data = (window.CBE_GLOBAL_COUNTRY_DATA || {})[slug] || {};
    var root = document.getElementById("gsCountry");
    if (!root) return;
    var name = (country && country.name) || document.getElementById("countryName")?.textContent || slug.replace(/-/g, " ").replace(/\b\w/g, function (x) { return x.toUpperCase(); });
    var query = encodeURIComponent(name);
    var exams = (data.exams || []).filter(function (exam) { return exam && exam.name; }).slice(0, 5);
    var existing = document.getElementById("country-learning-hub");
    if (existing) existing.remove();
    ["gsHero", "gsDirectory", "gsSearchWrap"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.add("gs-hidden");
    });
    root.classList.remove("gs-hidden");

    var styleId = "cbe-country-dashboard-restored-style";
    if (!document.getElementById(styleId)) {
      var style = document.createElement("style");
      style.id = styleId;
      style.textContent = [
        "#country-learning-hub{display:block!important;width:100%;margin:0 0 24px;overflow:hidden;background:#f1f5f8;color:#102d4d;font-family:Arial,Helvetica,sans-serif;box-shadow:0 5px 22px rgba(15,45,70,.1);position:relative;z-index:1}",
        "#country-learning-hub *{box-sizing:border-box}",
        "#country-learning-hub .cbe-learning-hero{position:relative;isolation:isolate;display:flex;align-items:center;min-height:250px;overflow:hidden;padding:28px clamp(22px,3.2vw,54px);background:#064b3b;color:#fff}",
        "#country-learning-hub .cbe-country-hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-2;opacity:.72}",
        "#country-learning-hub .cbe-learning-hero:before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(0,57,42,.94),rgba(0,76,54,.78) 52%,rgba(0,63,47,.35))}",
        "#country-learning-hub .cbe-learning-copy{position:relative;z-index:1;max-width:850px}",
        "#country-learning-hub .cbe-country-image-credit{display:inline-block;margin-top:12px;color:#fff!important;font-size:11px;font-weight:700;text-decoration:underline;text-underline-offset:3px}",
        "#country-learning-hub .cbe-learning-hero h2{margin:0 0 10px;color:#fff;font-size:clamp(30px,3.4vw,52px);line-height:1.08;font-weight:900}",
        "#country-learning-hub .cbe-learning-tag{display:inline-block;padding:8px 18px;border-radius:999px;background:#f3c52e;color:#172d42;font-size:clamp(14px,1.35vw,20px);font-weight:900}",
        "#country-learning-hub .cbe-learning-hero p{margin:12px 0 0;color:#fff;font-size:clamp(13px,1.15vw,18px);line-height:1.5}",
        "#country-learning-hub .cbe-learning-body{display:grid;grid-template-columns:minmax(0,2fr) minmax(300px,1fr);gap:22px;padding:24px clamp(18px,2.4vw,40px) 30px;background:linear-gradient(135deg,#f3f6f8,#eaf0f4)}",
        "#country-learning-hub .cbe-learning-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}",
        "#country-learning-hub .cbe-learning-card{display:flex;min-width:0;min-height:220px;flex-direction:column;align-items:flex-start;padding:20px 18px;border:1px solid #d3dce4;border-radius:11px;background:#fff;color:#102d4d!important;text-decoration:none!important;box-shadow:0 2px 6px rgba(17,46,73,.1);transition:transform .18s,box-shadow .18s}",
        "#country-learning-hub .cbe-learning-card:hover{transform:translateY(-3px);box-shadow:0 8px 18px rgba(17,46,73,.14)}",
        "#country-learning-hub .cbe-learning-icon{display:grid;place-items:center;width:82px;height:82px;margin:0 0 16px;border-radius:50%;color:#fff;font-size:34px;font-weight:800}",
        "#country-learning-hub .teal{background:#087f7b}#country-learning-hub .green{background:#16845b}#country-learning-hub .purple{background:#7040a2}#country-learning-hub .blue{background:#2867bd}#country-learning-hub .gold{background:#d6a10c}#country-learning-hub .red{background:#c9272c}#country-learning-hub .orange{background:#e65d3e}",
        "#country-learning-hub .cbe-learning-card strong{color:#102d4d;font-size:clamp(14px,1.25vw,19px);line-height:1.25}",
        "#country-learning-hub .cbe-learning-description{margin-top:9px;color:#667587;font-size:12px;line-height:1.45;flex:1}",
        "#country-learning-hub .cbe-learning-cta{margin-top:15px;color:#647487;font-size:12px;font-weight:700}",
        "#country-learning-hub .cbe-learning-right{display:flex;flex-direction:column;gap:16px;min-width:0}",
        "#country-learning-hub .cbe-learning-panel{overflow:hidden;border:1px solid #d4dfe7;border-radius:11px;background:#fff;box-shadow:0 2px 6px rgba(17,46,73,.08);padding:0}",
        "#country-learning-hub .cbe-learning-panel.exam{border-left:10px solid #d4a10e}#country-learning-hub .cbe-learning-panel.system{border-left:10px solid #13885c}",
        "#country-learning-hub .cbe-learning-panel h3{display:flex;align-items:center;gap:12px;margin:0;padding:18px 18px 13px;color:#102d4d;font-size:clamp(16px,1.45vw,21px);line-height:1.3}",
        "#country-learning-hub .cbe-learning-links{padding:0 18px 12px}",
        "#country-learning-hub .cbe-learning-links a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 3px;border-top:1px solid #e8edf1;color:#102d4d!important;font-size:14px;line-height:1.35;text-decoration:none!important}",
        "#country-learning-hub .cbe-learning-links a b{color:#7b8997;font-size:20px}",
        "@media(max-width:1100px){#country-learning-hub .cbe-learning-body{grid-template-columns:minmax(0,1.5fr) minmax(270px,1fr);gap:16px}#country-learning-hub .cbe-learning-grid{gap:11px}#country-learning-hub .cbe-learning-card{padding:16px;min-height:195px}#country-learning-hub .cbe-learning-icon{width:66px;height:66px;font-size:28px}}",
        "@media(max-width:850px){#country-learning-hub .cbe-learning-body{grid-template-columns:1fr;padding:16px}#country-learning-hub .cbe-learning-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}",
        "@media(max-width:600px){#country-learning-hub .cbe-learning-hero{min-height:180px;padding:22px 16px}#country-learning-hub .cbe-learning-hero h2{font-size:28px}#country-learning-hub .cbe-learning-tag{font-size:13px;padding:7px 12px}#country-learning-hub .cbe-learning-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}#country-learning-hub .cbe-learning-card{min-height:180px;padding:14px}#country-learning-hub .cbe-learning-icon{width:58px;height:58px;font-size:25px;margin-bottom:12px}#country-learning-hub .cbe-learning-card strong{font-size:14px}#country-learning-hub .cbe-learning-description,#country-learning-hub .cbe-learning-cta{font-size:10px}}"
      ].join("\n");
      document.head.appendChild(style);
    }

    function el(tag, cls, text) {
      var node = document.createElement(tag);
      if (cls) node.className = cls;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function loadCountryHeroImage(countryName, countrySlug, image, creditLink) {
      var overrides = {
        "Côte d’Ivoire": "Côte d'Ivoire",
        "The Gambia": "The Gambia",
        "Türkiye": "Turkey",
        "Czechia": "Czech Republic",
        "Palestine": "State of Palestine",
        "Vatican City": "Vatican City"
      };
      var title = overrides[countryName] || countryName;
      var cache = window.CBE_COUNTRY_HERO_IMAGES || (window.CBE_COUNTRY_HERO_IMAGES = {});
      if (cache[countrySlug]) {
        image.src = cache[countrySlug].src;
        if (cache[countrySlug].page) {
          creditLink.href = cache[countrySlug].page;
          creditLink.hidden = false;
        }
        return;
      }
      var endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=1600&titles=" + encodeURIComponent(title);
      // Show a classroom banner immediately while the country-specific Wikimedia
      // image loads. A slow or failed lookup must never leave the hero blank.
      image.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80";
      image.alt = "Students learning in a classroom while the " + countryName + " country image loads";
      fetch(endpoint, { headers: { "Accept": "application/json" } })
        .then(function (response) {
          if (!response.ok) throw new Error("Country image lookup unavailable");
          return response.json();
        })
        .then(function (payload) {
          var pages = payload && payload.query && payload.query.pages;
          var page = pages && Object.keys(pages).map(function (key) { return pages[key]; }).find(function (item) { return item && item.thumbnail && item.thumbnail.source; });
          if (!page) throw new Error("No representative country image found");
          var result = {
            src: page.thumbnail.source,
            page: "https://en.wikipedia.org/wiki/" + encodeURIComponent((page.title || title).replace(/ /g, "_"))
          };
          cache[countrySlug] = result;
          image.src = result.src;
          image.alt = "Representative image of " + countryName + " for its CBE Nexus education profile";
          creditLink.href = result.page;
          creditLink.hidden = false;
        })
        .catch(function () {
          // Keep the immediate classroom fallback visible if Wikimedia is unavailable.
          creditLink.hidden = true;
        });
    }
    var hub = el("section");
    hub.id = "country-learning-hub";
    var hero = el("header", "cbe-learning-hero");
    var heroImage = el("img", "cbe-country-hero-image");
    heroImage.alt = "Representative image of " + name + " for its CBE Nexus education profile";
    heroImage.loading = "eager";
    heroImage.decoding = "async";
    heroImage.fetchPriority = "high";
    heroImage.referrerPolicy = "no-referrer";
    hero.appendChild(heroImage);
    var heroCopy = el("div", "cbe-learning-copy");
    heroCopy.appendChild(el("span", "cbe-learning-tag", "Learn • Practise • Revise • Succeed"));
    heroCopy.appendChild(el("p", "", "Explore curriculum learning resources and prepare for " + (exams.slice(0, 2).map(function (x) { return x.name; }).join(" and ") || "national examinations") + "."));
    var imageCredit = el("a", "cbe-country-image-credit", "Country image source and details");
    imageCredit.target = "_blank";
    imageCredit.rel = "noopener noreferrer";
    imageCredit.hidden = true;
    heroCopy.appendChild(imageCredit);
    hero.appendChild(heroCopy);
    loadCountryHeroImage(name, slug, heroImage, imageCredit);
    var body = el("div", "cbe-learning-body");
    var left = el("div");
    var grid = el("div", "cbe-learning-grid");
    var items = [
      ["∑","teal","Mathematics Notes","Free online lessons, worked examples and chapter practice","/country-online-notes.html?country="+query+"&subject=Mathematics"],
      ["⚗","green","Chemistry Notes","Free chemistry notes, worked calculations and revision questions","/country-online-notes.html?country="+query+"&subject=Chemistry"],
      ["🧬","purple","Biology Notes","Free biology notes, labelled diagrams and practice questions","/country-online-notes.html?country="+query+"&subject=Biology"],
      ["⚛","blue","Physics Notes","Free physics notes, diagrams and worked calculations","/country-online-notes.html?country="+query+"&subject=Physics"],
      ["🎓","gold","University Notes","Explore existing diploma, undergraduate, postgraduate and research study notes for "+name,"/university-resources.html?country="+query+"#subject-hubs"],
      ["▤","gold","Past Papers","Past examination papers and revision resources","/resources.html?country="+query+"&type=past-papers"],
      ["☑","red","Mock Exams","Practise with examination-style tasks","/resource-category.html?type=mock-exams&country="+query],
      ["⚡","blue","Interactive Quizzes","Country-selected quizzes, self-check questions and explanations","/interactive-questions.html?country="+query],
      ["x²","purple","Worked Examples","Step-by-step solutions and explanations","/global-mathematics.html?country="+query],
      ["⚗","green","Science Practicals","Investigations, experiments and lab guidance","/country-practical-skills.html?country="+query],
      ["▶","orange","Video Lessons","Visual explanations and topic demonstrations","/resource-category.html?type=video-lessons&country="+query],
      ["🎓","gold","Scholarships","Further study and funding opportunities","/scholarships-opportunities.html?country="+query],
      ["🏛","blue","National Exam Resources","Explore national examinations and revision-paper links","/resources.html?country="+query+"&type=exam-resources"],
      ["▦","teal","Curriculum & Syllabuses","Explore national curriculum and school programmes","/global-schools/"+slug+"#curriculum"]
    ];
    items.forEach(function (item) {
      var card = el("a", "cbe-learning-card");
      card.href = item[4];
      card.appendChild(el("span", "cbe-learning-icon " + item[1], item[0]));
      card.appendChild(el("strong", "", item[2]));
      card.appendChild(el("span", "cbe-learning-description", item[3]));
      card.appendChild(el("span", "cbe-learning-cta", "Explore learning resources  ›"));
      grid.appendChild(card);
    });
    left.appendChild(grid);
    var right = el("div", "cbe-learning-right");
    var examPanel = el("section", "cbe-learning-panel exam");
    examPanel.appendChild(el("h3", "", "🎓  Examination preparation"));
    var examLinks = el("div", "cbe-learning-links");
    exams.forEach(function (exam) {
      if (!exam.url) return;
      var a = el("a");
      a.href = exam.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(el("span", "", exam.name));
      a.appendChild(el("b", "", "→"));
      examLinks.appendChild(a);
    });
    [
      ["Past papers by year","/resources.html?country="+query+"&type=past-papers"],
      ["Marking schemes and model answers","/resources.html?country="+query+"&type=marking-schemes"]
    ].forEach(function (item) {
      var a = el("a");
      a.href = item[1];
      a.appendChild(el("span", "", item[0]));
      a.appendChild(el("b", "", "→"));
      examLinks.appendChild(a);
    });
    examPanel.appendChild(examLinks);
    var systemPanel = el("section", "cbe-learning-panel system");
    systemPanel.appendChild(el("h3", "", "🏛️  Explore " + name + "'s education system"));
    var systemLinks = el("div", "cbe-learning-links");
    [
      ["National curriculum","#curriculum"],
      ["Schools directory","#schools"],
      ["Examination authority","#exams"],
      ["University admission guidance","#further"]
    ].forEach(function (item) {
      var a = el("a");
      a.href = item[1];
      a.appendChild(el("span", "", item[0]));
      a.appendChild(el("b", "", "→"));
      systemLinks.appendChild(a);
    });
    systemPanel.appendChild(systemLinks);
    right.append(examPanel, systemPanel);
    body.append(left, right);
    hub.append(hero, body);
    root.insertBefore(hub, root.firstChild);
  }
  // Render immediately: this deferred script is loaded after the legacy country renderer.
  // Re-render synchronously after its window.load refresh as well; no timers or delayed paint.
  buildCountryDashboard();
  window.addEventListener("load", buildCountryDashboard, { once: true });
})();