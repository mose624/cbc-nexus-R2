const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const marker = 'CBE_NEXUS_ADMIN_PHYSICS_FIX_V1';

if (!fs.existsSync(indexPath)) process.exit(0);

let html = fs.readFileSync(indexPath, 'utf8');
if (html.includes(marker)) process.exit(0);

const script = `\n<!-- ${marker} -->\n<script>\n(function(){\n  'use strict';\n  const FIX_MARKER = '${marker}';\n  function ensurePhysics(){\n    const curriculum = document.getElementById('adminCurriculumInput');\n    const subject = document.getElementById('adminSubjectInput');\n    if(!subject) return;\n    const value = String(curriculum?.value || 'CBC/CBE').trim();\n    if(value !== 'CBC/CBE') return;\n    if(!Array.from(subject.options).some(o => String(o.value || o.textContent).trim() === 'Physics')){\n      const option = document.createElement('option');\n      option.value = 'Physics';\n      option.textContent = 'Physics';\n      subject.appendChild(option);\n    }\n  }\n  function boot(){\n    ensurePhysics();\n    const subject = document.getElementById('adminSubjectInput');\n    const curriculum = document.getElementById('adminCurriculumInput');\n    const grade = document.getElementById('adminGradeInput');\n    [curriculum, grade, subject].forEach(el => el && el.addEventListener('change', () => setTimeout(ensurePhysics, 0)));\n    const observer = new MutationObserver(() => ensurePhysics());\n    if(subject) observer.observe(subject, {childList:true});\n    if(curriculum) observer.observe(curriculum, {attributes:true, childList:true, subtree:true});\n  }\n  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});\n  else boot();\n})();\n</script>\n`;

const insertion = html.lastIndexOf('</body>');
if (insertion >= 0) html = html.slice(0, insertion) + script + html.slice(insertion);
else html += script;

fs.writeFileSync(indexPath, html, 'utf8');
console.log('CBE Nexus: Admin KICD/CBC Physics subject option ensured.');
