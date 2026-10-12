(() => {
  "use strict";
  if (document.getElementById("cbeInternationalSidebar")) return;
  const items = [
    { label: "IGCSE", href: "igcse.html", match: ["igcse.html"] },
    { label: "A Level", href: "a-levels.html", match: ["a-levels.html"] },
    { label: "Cambridge", href: "cambridge-international.html", match: ["cambridge-international.html"] },
    { label: "Edexcel", href: "pearson-edexcel.html", match: ["pearson-edexcel.html"] },
    { label: "Pearson", href: "pearson-edexcel.html", match: [] },
    { label: "IB", href: "ib.html", match: ["ib.html"] },
    { label: "O Level", href: "o-levels.html", match: ["o-levels.html"] }
  ];
  const path = (window.location.pathname.split("/").pop() || "international-curriculum.html").toLowerCase();
  const sidebar = document.createElement("aside");
  sidebar.id = "cbeInternationalSidebar";
  sidebar.setAttribute("aria-label", "International curriculum filters");
  const brand = document.createElement("a");
  brand.className = "intl-side-brand";
  brand.href = "international-curriculum.html";
  brand.innerHTML = 'CBE Nexus<small>International Hub</small>';
  sidebar.appendChild(brand);
  const heading = document.createElement("p");
  heading.className = "intl-side-heading";
  heading.textContent = "Filter by curriculum";
  sidebar.appendChild(heading);
  const links = document.createElement("nav");
  links.className = "intl-side-links";
  links.setAttribute("aria-label", "Choose curriculum");
  items.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.innerHTML = '<span class="intl-side-dot" aria-hidden="true"></span>';
    const label = document.createElement("span");
    label.textContent = item.label;
    a.appendChild(label);
    if (item.match.includes(path)) a.setAttribute("aria-current", "page");
    links.appendChild(a);
  });
  sidebar.appendChild(links);
  const foot = document.createElement("div");
  foot.className = "intl-side-footer";
  foot.textContent = "Browse past papers, revision materials and learning resources by curriculum.";
  sidebar.appendChild(foot);
  document.body.insertBefore(sidebar, document.body.firstChild);
})();