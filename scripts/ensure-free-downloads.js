const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const serverPath = path.join(root, 'server.js');

// Client-side hook: expose a visible FREE download button and bypass the paid download handler for KSh 0 resources.
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  const marker = 'CBE_NEXUS_FREE_DOWNLOADS_V1';
  if (!html.includes(marker)) {
    const block = `\n<!-- ${marker} -->\n<script src="/free-resource-download.js?v=20261005-1" defer></script>\n<style id="free-resource-download-style">.free-download-button{background:#15803d!important;color:#fff!important;border-color:#166534!important;font-weight:800!important;margin-left:8px}.free-download-button:hover{background:#166534!important}.free-download-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:999px;background:#dcfce7;color:#166534;font-weight:800;font-size:.78rem}</style>\n`;
    const at = html.lastIndexOf('</body>');
    html = at >= 0 ? html.slice(0, at) + block + html.slice(at) : html + block;
    fs.writeFileSync(indexPath, html, 'utf8');
  }
}

// Server-side secure endpoint: only approved resources whose effective price is exactly KSh 0 can be downloaded.
if (fs.existsSync(serverPath)) {
  let server = fs.readFileSync(serverPath, 'utf8');
  const marker = 'CBE_NEXUS_FREE_R2_ENDPOINT_V1';
  if (!server.includes(marker)) {
    const anchor = '  if(req.method==="GET"&&url.pathname==="/api/r2/file"){';
    const handler = `  // ${marker}\n  if(req.method==="GET"&&url.pathname==="/api/r2/free-file"){\n    const key=String(url.searchParams.get("key")||"").trim();\n    const resourceId=String(url.searchParams.get("resourceId")||"").trim();\n    if(!key||!resourceId){sendJson(res,400,{ok:false,error:"Resource and file are required."});return true;}\n    try{\n      let resource=null;\n      if(supabaseConfigured){\n        const {data,error}=await supabase.from("resources").select("id,r2_key,status,price,discount_price,filename").eq("id",resourceId).maybeSingle();\n        if(error)throw error; resource=data;\n      }else{\n        const rows=await readJsonStore("resources.json"); resource=rows.find(r=>String(r.id)===resourceId)||null;\n      }\n      if(!resource||String(resource.status||"").toLowerCase()!=="approved"){sendJson(res,404,{ok:false,error:"Resource is not available for download."});return true;}\n      const storedKey=String(resource.r2_key||"").trim();\n      if(!storedKey||storedKey!==key){sendJson(res,403,{ok:false,error:"Invalid resource file."});return true;}\n      const price=resourcePrice(resource);\n      if(price!==0){sendJson(res,402,{ok:false,error:"This resource requires payment before download."});return true;}\n      const target=await createDownloadUrl(storedKey, String(resource.filename||storedKey.split("/").pop()||"resource.bin"));\n      res.writeHead(302,{Location:target,"Cache-Control":"private, no-store"});res.end();\n    }catch(error){console.error("Free R2 download error:",error);sendJson(res,500,{ok:false,error:"Free download could not be opened."});}\n    return true;\n  }\n`;
    if (server.includes(anchor)) {
      server = server.replace(anchor, handler + anchor);
      fs.writeFileSync(serverPath, server, 'utf8');
    } else {
      console.error('Free download patch: server anchor not found.');
      process.exitCode = 1;
    }
  }
}

console.log('CBE Nexus: KSh 0 resources are configured for direct free download.');
