/* CBE Nexus — University course quick-reference layer
   Uses each institution's programme-area description to surface representative
   course examples. CUE/KUCCPS links remain the authority for the exact,
   currently approved/available programme list. */
(function(){
  const CUE="https://www.cue.or.ke/index.php?id=22&layout=edit&option=com_content&view=article";
  const KUCCPS="https://students.kuccps.ac.ke/programmes/";
  const MAP={
    education:[
      "Bachelor of Education (Arts)","Bachelor of Education (Science)",
      "Bachelor of Education (Early Childhood / Primary Education)",
      "Postgraduate Diploma in Education","Master of Education","PhD in Education"
    ],
    medicine:[
      "Bachelor of Medicine and Bachelor of Surgery (MBChB)","Bachelor of Science in Nursing",
      "Bachelor of Public Health","Bachelor of Medical Laboratory Sciences",
      "Master of Public Health","PhD in Health Sciences"
    ],
    health:[
      "Bachelor of Science in Nursing","Bachelor of Public Health",
      "Bachelor of Medical Laboratory Sciences","Bachelor of Science in Health Systems Management",
      "Master of Public Health","PhD in Health Sciences"
    ],
    law:["Bachelor of Laws (LL.B.)","Postgraduate Diploma in Law","Master of Laws (LL.M.)","PhD in Law"],
    engineering:[
      "Bachelor of Engineering / Bachelor of Science in Engineering",
      "Civil Engineering","Electrical & Electronic Engineering","Mechanical Engineering",
      "Master of Engineering / Engineering","PhD in Engineering"
    ],
    computing:[
      "Bachelor of Science in Computer Science","Bachelor of Information Technology",
      "Bachelor of Software Engineering","Bachelor of Science in Cyber Security / Computer Security",
      "Master of Science in Computer Science / IT","PhD in Computing / Information Technology"
    ],
    business:[
      "Bachelor of Commerce","Bachelor of Business Administration / Management",
      "Bachelor of Accounting / Finance","Bachelor of Entrepreneurship",
      "Master of Business Administration (MBA)","PhD in Business / Management"
    ],
    science:[
      "Bachelor of Science","Bachelor of Science in Biology / Biological Sciences",
      "Bachelor of Science in Chemistry","Bachelor of Science in Physics / Mathematics",
      "Master of Science","PhD in Science"
    ],
    agriculture:[
      "Bachelor of Science in Agriculture","Bachelor of Science in Agribusiness",
      "Bachelor of Science in Agricultural Economics / Extension","Bachelor of Science in Animal Science",
      "Master of Science in Agriculture / Agribusiness","PhD in Agriculture"
    ],
    social:[
      "Bachelor of Arts in Sociology / Social Sciences","Bachelor of Arts in Economics",
      "Bachelor of Arts in Psychology / Counselling","Bachelor of Arts in Development Studies",
      "Master of Arts in Social Sciences / Development Studies","PhD in Social Sciences"
    ],
    communication:[
      "Bachelor of Arts in Communication / Journalism","Bachelor of Arts in Media Studies",
      "Bachelor of Arts in Public Relations","Bachelor of Arts in Film / Broadcast Production",
      "Master of Arts in Communication / Media","PhD in Communication / Media"
    ],
    theology:[
      "Bachelor of Theology / Divinity","Bachelor of Arts in Religious Studies",
      "Master of Theology / Divinity","Master of Arts in Biblical / Theological Studies",
      "PhD in Theology / Religious Studies"
    ],
    tourism:[
      "Bachelor of Tourism Management","Bachelor of Hospitality Management",
      "Bachelor of Travel and Tourism / Hotel Management","Master of Tourism / Hospitality Management"
    ],
    agriculture2:[
      "Bachelor of Environmental Science / Natural Resources","Bachelor of Forestry / Agroforestry",
      "Master of Environmental Science / Natural Resources","PhD in Environmental Studies"
    ],
    mining:[
      "Bachelor of Science in Mining / Mineral Processing","Bachelor of Science in Geology",
      "Bachelor of Science in Geospatial / Earth Sciences","Master of Science in Geology / Mining"
    ]
  };
  const areaRules=[
    ["medicine","medicine"],["health","health"],["law","law"],["engineering","engineering"],
    ["comput","computing"],["ict","computing"],["business","business"],["finance","business"],
    ["account","business"],["science","science"],["agriculture","agriculture"],["animal","agriculture"],
    ["social","social"],["education","education"],["theology","theology"],["relig","theology"],
    ["communication","communication"],["media","communication"],["tourism","tourism"],
    ["hospitality","tourism"],["mining","mining"],["geology","mining"],["environment","agriculture2"],
    ["forestry","agriculture2"],["natural resources","agriculture2"]
  ];
  function coursesFor(card){
    const text=(card.querySelector("h2")?.textContent+" "+card.textContent).toLowerCase();
    const keys=[];
    areaRules.forEach(([needle,key])=>{if(text.includes(needle)&&!keys.includes(key))keys.push(key);});
    let out=[];
    keys.forEach(k=>out=out.concat(MAP[k]||[]));
    if(!out.length) out=MAP.business.concat(MAP.social);
    return [...new Set(out)].slice(0,18);
  }
  function levelMatch(course,level){
    if(!level||level==="all") return true;
    const c=course.toLowerCase();
    if(level==="phd") return c.includes("phd")||c.includes("doctor");
    if(level==="masters") return c.includes("master");
    if(level==="postgraduate diploma") return c.includes("postgraduate diploma");
    if(level==="degree") return !c.includes("master")&&!c.includes("phd")&&!c.includes("postgraduate diploma");
    if(level==="diploma") return c.includes("diploma");
    if(level==="certificate") return c.includes("certificate");
    return true;
  }
  function esc(v){return String(v).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));}
  function enhance(){
    const list=document.querySelector("#instList");
    if(!list) return;
    const level=document.querySelector("#courseLevel")?.value||"all";
    list.querySelectorAll(".inst-card").forEach(card=>{
      if(card.dataset.courseEnhanced==="1") card.querySelector(".cbe-course-box")?.remove();
      const courses=coursesFor(card).filter(c=>levelMatch(c,level));
      const box=document.createElement("div");
      box.className="cbe-course-box";
      box.style.cssText="margin:12px 0;padding:12px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0";
      box.innerHTML="<strong style='color:#166534'>🎓 Courses / programmes to explore</strong><div style='display:flex;flex-wrap:wrap;gap:6px;margin-top:8px'>"+
        courses.map(c=>"<span style='font-size:.75rem;background:#fff;border:1px solid #cbd5e1;border-radius:999px;padding:5px 7px;color:#334155'>"+esc(c)+"</span>").join("")+
        "</div><p style='font-size:.72rem;color:#64748b;margin:9px 0 0'>Quick reference based on the institution's listed programme areas. Confirm the exact current programme, approval and intake with CUE, KUCCPS and the university.</p>"+
        "<div style='display:flex;gap:7px;flex-wrap:wrap;margin-top:7px'><a href='"+CUE+"' target='_blank' rel='noopener' style='font-size:.72rem;font-weight:800'>CUE approved programmes ↗</a><a href='"+KUCCPS+"' target='_blank' rel='noopener' style='font-size:.72rem;font-weight:800'>KUCCPS programmes ↗</a></div>";
      const before=card.querySelector(".inst-btn,.inst-unavailable");
      card.insertBefore(box,before||null);
      card.dataset.courseEnhanced="1";
    });
  }
  document.addEventListener("DOMContentLoaded",function(){
    const list=document.querySelector("#instList");
    if(!list)return;
    const obs=new MutationObserver(()=>enhance());
    obs.observe(list,{childList:true,subtree:true});
    setTimeout(enhance,50);
    document.querySelector("#courseLevel")?.addEventListener("change",()=>setTimeout(enhance,30));
  });
})();