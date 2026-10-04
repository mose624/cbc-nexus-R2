(function(){
  const root=document.getElementById('educationHubHomeArticles'); if(!root)return;
  const fallback=[
    {title:'How to Become a Teacher in Dubai: Complete Guide for Kenyan Teachers',slug:'how-to-become-a-teacher-in-dubai-complete-guide-for-kenyan-teachers',category:'Teacher Jobs',excerpt:'Practical guidance for teachers exploring international teaching opportunities.'},
    {title:'Fully Funded Scholarships for Kenyan Students: How to Find and Apply',slug:'fully-funded-scholarships-for-kenyan-students-how-to-find-and-apply',category:'Scholarships',excerpt:'Learn how to search for opportunities, check eligibility and prepare a strong application.'},
    {title:'How to Write an International Teacher CV That Gets Interviews',slug:'how-to-write-an-international-teacher-cv-that-gets-interviews',category:'Teacher CV',excerpt:'Build a focused CV that presents your teaching experience, skills and achievements clearly.'}
  ];
  const esc=s=>String(s||'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
  function render(posts){const list=(posts||[]).filter(p=>p&&p.slug&&p.title).slice(0,6);if(!list.length)return;root.innerHTML=list.map(p=>'<article class="education-hub-card"><div class="education-hub-card-body"><span class="tag">'+esc(p.category||'Education')+'</span><h3><a href="blog-article.html?slug='+encodeURIComponent(p.slug)+'">'+esc(p.title)+'</a></h3><p>'+esc(p.excerpt||'Read this practical education guide from CBE Nexus.')+'</p><a class="read" href="blog-article.html?slug='+encodeURIComponent(p.slug)+'">Read guide →</a></div></article>').join('');}
  fetch('/api/blog/posts',{headers:{Accept:'application/json'}}).then(r=>r.ok?r.json():Promise.reject()).then(j=>render(j.posts||[])).catch(()=>render(fallback));
})();

