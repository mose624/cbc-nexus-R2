(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  let posts=[];

  function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
  function setMessage(msg,error=false){const el=$("adminBlogStatusMessage");if(el){el.textContent=msg;el.style.color=error?"#b91c1c":"";}}
  function resetForm(){["adminBlogId","adminBlogTitle","adminBlogExcerpt","adminBlogKeywords","adminBlogContent","adminBlogSeoTitle","adminBlogMeta","adminBlogFeaturedImage"].forEach(id=>{if($(id))$(id).value="";});if($("adminBlogCategory"))$("adminBlogCategory").value="CBC/CBE";if($("adminBlogStatus"))$("adminBlogStatus").value="published";if($("adminBlogImage"))$("adminBlogImage").value="";if($("adminBlogImagePreview"))$("adminBlogImagePreview").style.display="none";if($("adminBlogImageStatus"))$("adminBlogImageStatus").textContent="JPG, PNG, WebP or GIF · maximum 8 MB.";setMessage("");}
  function fill(p){$("adminBlogId").value=p.id||"";$("adminBlogTitle").value=p.title||"";$("adminBlogCategory").value=p.category||"CBC/CBE";$("adminBlogExcerpt").value=p.excerpt||"";$("adminBlogKeywords").value=p.keywords||"";$("adminBlogContent").value=p.content||"";$("adminBlogSeoTitle").value=p.seoTitle||p.title||"";$("adminBlogMeta").value=p.metaDescription||p.excerpt||"";$("adminBlogFeaturedImage").value=p.featuredImage||"";$("adminBlogStatus").value=p.status==="published"?"published":"draft";if(p.featuredImage&&$("adminBlogImagePreview")){$("adminBlogImagePreview").src=p.featuredImage;$("adminBlogImagePreview").style.display="block";}window.setAdminModule?.("blog");document.getElementById("adminBlogForm")?.scrollIntoView({behavior:"smooth",block:"start"});setMessage("Editing: "+p.title);}
  async function load(){
    const list=$("adminBlogList");if(!list)return;
    list.innerHTML='<div class="admin-management-card">Loading articles...</div>';
    try{
      const r=await fetch("/api/admin/blog/posts",{credentials:"same-origin"}),j=await r.json();
      if(!r.ok||!j.ok)throw new Error(j.error||"Admin login required.");
      posts=j.posts||[];
      $("adminBlogSummary").textContent=posts.length+" article"+(posts.length===1?"":"s");
      $("adminBlogBadge").textContent=posts.length;
      list.innerHTML=posts.length?posts.map(p=>'<div class="blog-admin-list-card"><h4>'+esc(p.title)+'</h4><div class="blog-admin-list-meta">'+esc(p.status.toUpperCase())+' · '+esc(p.category)+' · '+(p.publishedAt?new Date(p.publishedAt).toLocaleDateString():"Draft")+'</div><div class="blog-admin-list-actions"><button type="button" class="secondary-button" data-blog-edit="'+esc(p.id)+'">Edit</button><button type="button" class="secondary-button" data-blog-delete="'+esc(p.id)+'">Delete</button><a class="secondary-button" target="_blank" href="/blog-article.html?slug='+encodeURIComponent(p.slug)+'">View</a></div></div>').join(""):'<div class="admin-management-card">No articles yet. Create your first article.</div>';
      list.querySelectorAll("[data-blog-edit]").forEach(b=>b.onclick=()=>{const p=posts.find(x=>String(x.id)===String(b.dataset.blogEdit));if(p)fill(p);});
      list.querySelectorAll("[data-blog-delete]").forEach(b=>b.onclick=()=>del(b.dataset.blogDelete));
    }catch(e){list.innerHTML='<div class="admin-management-card">'+esc(e.message||"Could not load blog articles.")+'</div>';setMessage(e.message||"Could not load blog articles.",true);}
  }
  async function uploadImage(file){
    const status=$("adminBlogImageStatus");if(status)status.textContent="Uploading featured image...";
    const r=await fetch("/api/admin/blog/image",{method:"POST",credentials:"same-origin",headers:{"Content-Type":file.type,"X-Blog-File-Name":file.name},body:file});
    const j=await r.json();if(!r.ok||!j.ok)throw new Error(j.error||"Image upload failed.");
    $("adminBlogFeaturedImage").value=j.featuredImage;
    if($("adminBlogImagePreview")){$("adminBlogImagePreview").src=j.featuredImage;$("adminBlogImagePreview").style.display="block";}
    if(status)status.textContent="Featured image uploaded successfully.";
    return j.featuredImage;
  }
  async function save(e){
    e.preventDefault();const button=e.submitter||$("adminBlogForm").querySelector('button[type="submit"]');button?.setAttribute("disabled","disabled");setMessage("Saving article...");
    try{
      let image=$("adminBlogFeaturedImage").value.trim();
      const file=$("adminBlogImage").files?.[0];if(file)image=await uploadImage(file);
      const payload={id:$("adminBlogId").value.trim()||undefined,title:$("adminBlogTitle").value.trim(),category:$("adminBlogCategory").value,excerpt:$("adminBlogExcerpt").value.trim(),keywords:$("adminBlogKeywords").value.trim(),content:$("adminBlogContent").value.trim(),featuredImage:image,seoTitle:$("adminBlogSeoTitle").value.trim(),metaDescription:$("adminBlogMeta").value.trim(),status:$("adminBlogStatus").value,author:"CBE Nexus"};
      const r=await fetch("/api/admin/blog/post",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}),j=await r.json();if(!r.ok||!j.ok)throw new Error(j.error||"Article could not be saved.");
      setMessage(j.post.status==="published"?"Article published successfully. It is now visible on the public Blog page.":"Draft saved successfully.");
      resetForm();await load();
    }catch(err){setMessage(err.message||"Article could not be saved.",true);}finally{button?.removeAttribute("disabled");}
  }
  async function del(id){
    const p=posts.find(x=>String(x.id)===String(id));if(!p||!confirm("Delete this article?"))return;
    try{const r=await fetch("/api/admin/blog/delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id})}),j=await r.json();if(!r.ok||!j.ok)throw new Error(j.error||"Delete failed.");setMessage("Article deleted.");await load();}catch(e){setMessage(e.message||"Delete failed.",true);}
  }
  function init(){
    const tab=document.querySelector('[data-admin-module="blog"]');
    tab?.addEventListener("click",()=>setTimeout(load,80));
    $("adminBlogForm")?.addEventListener("submit",save);
    $("adminBlogNewButton")?.addEventListener("click",resetForm);
    $("adminBlogImage")?.addEventListener("change",e=>{const f=e.target.files?.[0];if(f&&$("adminBlogImagePreview")){$("adminBlogImagePreview").src=URL.createObjectURL(f);$("adminBlogImagePreview").style.display="block";}});
  }
  window.loadAdminBlog=load;
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();