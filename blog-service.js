const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const PORT = Number(process.env.PORT || 10000);
const DATA = path.join(__dirname, 'backend-data');
const FILE = path.join(DATA, 'blog-posts.json');
const ADMIN_TOKEN = String(process.env.BLOG_ADMIN_TOKEN || '').trim();
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
async function readPosts(){await fs.mkdir(DATA,{recursive:true});try{return JSON.parse(await fs.readFile(FILE,'utf8'));}catch{return []}}
async function writePosts(posts){await fs.mkdir(DATA,{recursive:true});await fs.writeFile(FILE,JSON.stringify(posts,null,2));}
function clean(v,n=10000){return String(v??'').trim().slice(0,n)}
function slugify(v){return clean(v,180).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));}
function body(req){return new Promise((resolve,reject)=>{let s='';req.on('data',c=>{s+=c;if(s.length>2e6){reject(new Error('Body too large'));req.destroy()}});req.on('end',()=>resolve(s));req.on('error',reject)})}
function authorized(req){if(!ADMIN_TOKEN)return false;return String(req.headers.authorization||'').replace(/^Bearer\s+/i,'')===ADMIN_TOKEN}
async function handle(req,res,url){
 if(req.method==='GET'&&url.pathname==='/api/blog/posts'){const posts=(await readPosts()).filter(p=>p.status==='published').sort((a,b)=>new Date(b.publishedAt)-new Date(a.publishedAt));json(res,200,{ok:true,posts});return}
 if(req.method==='GET'&&url.pathname.startsWith('/api/blog/post/')){const slug=decodeURIComponent(url.pathname.slice('/api/blog/post/'.length));const p=(await readPosts()).find(x=>x.slug===slug&&x.status==='published');if(!p){json(res,404,{ok:false,error:'Article not found'});return}json(res,200,{ok:true,post:p});return}
 if(req.method==='GET'&&url.pathname==='/api/admin/blog/posts'){if(!authorized(req)){json(res,401,{ok:false,error:'Blog admin authorization required'});return}json(res,200,{ok:true,posts:await readPosts()});return}
 if(req.method==='POST'&&url.pathname==='/api/admin/blog/post'){if(!authorized(req)){json(res,401,{ok:false,error:'Blog admin authorization required'});return}try{const p=JSON.parse(await body(req)||'{}');if(!clean(p.title,180)||!clean(p.content,50000)){json(res,400,{ok:false,error:'Title and content are required'});return}const posts=await readPosts();const id=clean(p.id,100)||`post-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;const item={id,title:clean(p.title,180),slug:clean(p.slug,180)||slugify(p.title),category:clean(p.category,80)||'Education',excerpt:clean(p.excerpt,500),content:clean(p.content,50000),featuredImage:clean(p.featuredImage,1000),author:clean(p.author,120)||'CBE Nexus',seoTitle:clean(p.seoTitle,180)||clean(p.title,180),metaDescription:clean(p.metaDescription,300)||clean(p.excerpt,300),keywords:clean(p.keywords,500),featured:Boolean(p.featured),status:['draft','published'].includes(p.status)?p.status:'draft',publishedAt:p.publishedAt||new Date().toISOString(),updatedAt:new Date().toISOString()};await writePosts([item,...posts.filter(x=>x.id!==id)]);json(res,200,{ok:true,post:item});return}catch(e){json(res,400,{ok:false,error:e.message||'Could not save article'});return}}
 if(req.method==='POST'&&url.pathname==='/api/admin/blog/delete'){if(!authorized(req)){json(res,401,{ok:false,error:'Blog admin authorization required'});return}const p=JSON.parse(await body(req)||'{}');const posts=await readPosts();await writePosts(posts.filter(x=>x.id!==p.id));json(res,200,{ok:true});return}
 if(req.method==='GET'&&url.pathname==='/sitemap.xml'){const posts=(await readPosts()).filter(p=>p.status==='published');const base=process.env.PUBLIC_BASE_URL||`http://localhost:${PORT}`;const urls=[`${base}/blog.html`,...posts.map(p=>`${base}/blog-article.html?slug=${encodeURIComponent(p.slug)}`)];res.writeHead(200,{'Content-Type':'application/xml; charset=utf-8'});res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc></url>`).join('')}</urlset>`);return}
 return false;
}
const server=http.createServer(async(req,res)=>{try{const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);if(await handle(req,res,url))return;let file=url.pathname==='/'?'/blog.html':url.pathname;file=file.replace(/\.\./g,'');const full=path.join(__dirname,file);try{const data=await fs.readFile(full);res.writeHead(200,{'Content-Type':mime[path.extname(full)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found')}}catch(e){console.error(e);json(res,500,{ok:false,error:'Server error'})}});
server.listen(PORT,'0.0.0.0',()=>console.log(`CBE Nexus Blog running on ${PORT}`));
