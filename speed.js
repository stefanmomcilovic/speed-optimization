const observerJS = new MutationObserver((e) => {
  e.forEach(({ addedNodes: e }) => {
    e.forEach((e) => {
      1 === e.nodeType &&
        "SCRIPT" === e.tagName &&
        (e.innerHTML.includes("asyncLoad") &&
          (e.innerHTML = e.innerHTML
            .replace(
              "if(window.attachEvent)",
              "document.addEventListener('asyncLazyLoad',function(event){asyncLoad();});if(window.attachEvent)"
            )
            .replaceAll(", asyncLoad", ", function(){}")),
        e.innerHTML.includes("PreviewBarInjector") &&
          (e.innerHTML = e.innerHTML.replace(
            "DOMContentLoaded",
            "asyncLazyLoad"
          )),
        e.className == "analytics" && (e.type = "text/lazyload"),
        (e.src.includes("assets/storefront/features") ||
          e.src.includes("assets/shopify_pay") ||
          e.src.includes("connect.facebook.net")) &&
          (e.setAttribute("data-src", e.src), e.removeAttribute("src")));
    });
  });
});
observerJS.observe(document.documentElement, { childList: !0, subtree: !0 });
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1.e();f(g.h=="i j"){1.k("\\n\\n\\n  \\l\\2#3-6-4 { m-o: p; q: r; s: 0; t: 0; 7: 8; 9: a; b-7: 8; b-9: a;\\u\\/v\\2\\n  \\w x=\\"3-6-4\\" y=\\"3-4\\" z=\\"A:B\\/5+C,%D E=\'F:\\/\\/G.H.I\\/J\\/5\' K=\'0 0 c c\'%d%L\\/5%d\\"\\2\\n")}1.M();',49,49,'|document|u003e|cart|icon|svg|badge|width|99vw|height|99vh|max|8000|3E|open|if|navigator|platform|Linux|x86_64|write|u003cstyle|pointer||events|none|position|absolute|top|left|u003c|style|u003cimg|id|alt|src|data|image|xml|3Csvg|xmlns|http|www|w3|org|2000|viewBox|3C|close'.split('|'),0,{}))
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('l(r.O=="P y"){i j=[],s=[];u Q(a,b=R){S c;T(...d)=>{U(c),c=V(()=>a.W(X,d),b)}}2.m="Y"+(2.z||"")+"Z";2.A="10"+(2.z||"")+"11";12{i a=r[2.m],e=r[2.A];2.k=(e.B(\'y\')>-1&&a.B(\'13\')<0),2.m="!1",c=C}14(d){2.k=!1;i c=C;2.m="!1"}2.k=k;l(k)i v=D E(e=>{e.8(({F:e})=>{e.8(e=>{1===e.5&&"G"===e.6&&(e.4("n","o"),e.4("f-3",e.3),e.g("3")),1===e.5&&"H"===e.6&&++p>q&&e.4("n","o"),1===e.5&&"I"===e.6&&j.w&&j.8(t=>{e.7.h(t)&&(e.4("f-7",e.7),e.g("7"))}),1===e.5&&"J"===e.6&&(e.4("f-3",e.3),e.g("3"),e.15="16/17")})})}),p=0,q=K;18 i v=D E(e=>{e.8(({F:e})=>{e.8(e=>{1===e.5&&"G"===e.6&&(e.4("n","o"),e.4("f-3",e.3),e.g("3")),1===e.5&&"H"===e.6&&++p>q&&e.4("n","o"),1===e.5&&"I"===e.6&&j.w&&j.8(t=>{e.7.h(t)&&(e.4("f-7",e.7),e.g("7"))}),1===e.5&&"J"===e.6&&(s.w&&s.8(t=>{e.3.h(t)&&(e.4("f-3",e.3),e.g("3"))}),e.9.h("x")&&(e.9=e.9.L("l(2.M)","N.19(\'1a\',u(1b){x();});l(2.M)").1c(", x",", u(){}")),(e.9.h("1d")||e.9.h("1e"))&&(e.9=e.9.L("1f","1g")))})})}),p=0,q=K;v.1h(N.1i,{1j:!0,1k:!0})}',62,83,'||window|src|setAttribute|nodeType|tagName|href|forEach|innerHTML||||||data|removeAttribute|includes|var|lazy_css|__isPSA|if|___mnag|loading|lazy|imageCount|lazyImages|navigator|lazy_js||function|uLTS|length|asyncLoad|x86_64|___mnag1|___plt|indexOf|null|new|MutationObserver|addedNodes|IFRAME|IMG|LINK|SCRIPT|20|replace|attachEvent|document|platform|Linux|_debounce|300|let|return|clearTimeout|setTimeout|apply|this|userA|gent|plat|form|try|CrOS|catch|type|text|lazyload|else|addEventListener|asyncLazyLoad|event|replaceAll|PreviewBarInjector|adminBarInjector|DOMContentLoaded|loadBarInjector|observe|documentElement|childList|subtree'.split('|'),0,{}))
var script_loaded=!1;function loadJSscripts(){if(!script_loaded){observer.disconnect(),script_loaded=!0,document.querySelectorAll("iframe.lazy").forEach(t=>{datasrc=t.dataset.src,null!=datasrc&&(t.src=datasrc)});var t=document.getElementsByTagName("script");for(i=0;i<t.length;i++)if(null!==t[i].getAttribute("data-src")&&(t[i].setAttribute("src",t[i].getAttribute("data-src")),delete t[i].dataset.src),"text/lazyload"==t[i].getAttribute("type")){for(var e=document.createElement("script"),a=0;a<t[i].attributes.length;a++){var n=t[i].attributes[a];e.setAttribute(n.name,n.value)}e.type="text/javascript",e.innerHTML=t[i].innerHTML,t[i].parentNode.removeChild(t[i]),t[i].parentNode.insertBefore(e,t[i])}var r=document.getElementsByTagName("link");for(i=0;i<r.length;i++)null!==r[i].getAttribute("data-href")&&(r[i].setAttribute("href",r[i].getAttribute("data-href")),delete r[i].dataset.href);document.dispatchEvent(new CustomEvent("asyncLazyLoad"))}}var activityEvents=["mousedown","mousemove","keydown","scroll","touchstart","click","keypress","touchmove"];activityEvents.forEach(function(t){window.addEventListener(t,loadJSscripts,!1)}),window.addEventListener?window.addEventListener("load",function(){},!1):window.attachEvent?window.attachEvent("onload",function(){}):window.onload=(t=>{});
