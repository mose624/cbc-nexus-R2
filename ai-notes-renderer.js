/* CBE Nexus AI Academy — accessible, safe lesson-note renderer.
   Supports the Markdown structures used in the Academy notes without a runtime dependency. */
(function(){
  "use strict";
  function escapeHTML(value){
    return String(value==null?"":value).replace(/[&<>"']/g,function(ch){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch];
    });
  }
  function inline(value){
    let out=escapeHTML(value);
    out=out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,function(_,label,url){
      return '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+label+'</a>';
    });
    out=out.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");
    out=out.replace(/__([^_]+)__/g,"<strong>$1</strong>");
    out=out.replace(/\*([^*\n]+)\*/g,"<em>$1</em>");
    out=out.replace(/_([^_\n]+)_/g,"<em>$1</em>");
    out=out.replace(/`([^`]+)`/g,"<code>$1</code>");
    out=out.replace(/(^|\s)(https?:\/\/[^\s<]+)/g,'$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>');
    return out;
  }
  function render(markdown){
    const lines=String(markdown==null?"":markdown).replace(/\r\n?/g,"\n").split("\n");
    const blocks=[];let paragraph=[],list=[],listType="",code=[],inCode=false;
    function flushParagraph(){if(paragraph.length){blocks.push("<p>"+paragraph.map(inline).join("<br>")+"</p>");paragraph=[];}}
    function flushList(){if(list.length){const tag=listType==="ol"?"ol":"ul";blocks.push("<"+tag+">"+list.map(x=>"<li>"+inline(x)+"</li>").join("")+"</"+tag+">");list=[];listType="";}}
    function flushCode(){if(code.length){blocks.push("<pre><code>"+escapeHTML(code.join("\n"))+"</code></pre>");code=[];}}
    for(const line of lines){
      if(/^\s*```/.test(line)){flushParagraph();flushList();if(inCode){flushCode();inCode=false;}else{inCode=true;}continue;}
      if(inCode){code.push(line);continue;}
      if(!line.trim()){flushParagraph();flushList();continue;}
      let m;
      if((m=line.match(/^\s{0,3}(#{1,4})\s+(.+)$/))){flushParagraph();flushList();const n=m[1].length+1;blocks.push("<h"+n+">"+inline(m[2])+"</h"+n+">");continue;}
      if((m=line.match(/^\s*[-*+]\s+(.+)$/))){flushParagraph();if(listType&&listType!=="ul")flushList();listType="ul";list.push(m[1]);continue;}
      if((m=line.match(/^\s*\d+[.)]\s+(.+)$/))){flushParagraph();if(listType&&listType!=="ol")flushList();listType="ol";list.push(m[1]);continue;}
      if((m=line.match(/^\s*>\s?(.*)$/))){flushParagraph();flushList();blocks.push("<blockquote><p>"+inline(m[1])+"</p></blockquote>");continue;}
      paragraph.push(line);
    }
    flushParagraph();flushList();if(inCode)flushCode();
    return blocks.join("\n");
  }
  window.CBENotesRenderer={render:render,escapeHTML:escapeHTML};
})();