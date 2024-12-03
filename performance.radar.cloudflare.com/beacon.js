!function(){"use strict";let e=document.getElementsByTagName("BODY")[0];if(e){var t=document.createElement("span");t.width=0,t.height=0,t.style.setProperty("display","none","important"),e.appendChild(t)}const r=document.getElementById("term"),n=(e,t="Details")=>{r&&(r.innerHTML+="object"==typeof e?`<details>\n                             <summary style="display:list-item;cursor:pointer">${t}</summary>\n                             <span class="fix" style="font-size:85%">${JSON.stringify(e,null,4)}</span>\n                           </details>`:`<p><span class="clock">${(new Date).toISOString()}</span><span class="msg">${e}<span></p>`)},a=e=>new Promise((t=>setTimeout(t,e))),o=()=>Math.floor(1e8*Math.random())+1,s=async e=>new Promise(((r,n)=>{var a=!1;let s=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${o()}`;if(t){var i=document.createElement("img");i.width=0,i.height=0,i.hidden=!0,i.style.setProperty("display","none","important"),i.referrerPolicy="no-referrer",i.onload=()=>{a=!0,r({asset:s,extra:{failure:!1}})},i.setAttribute("src",s),t.appendChild(i)}setTimeout((()=>{a||r({asset:s,extra:{failure:!0}})}),3e3)})),i=async e=>new Promise(((t,r)=>{var n=!1;let a=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${o()}`;fetch(a).then((e=>e.json())).then((e=>{n=!0,t({asset:a,extra:{failure:!1}})})),setTimeout((()=>{n||t({asset:a,extra:{failure:!0}})}),2e3)})),c=async e=>new Promise(((t,r)=>{var n=!1;let a=`${e}${-1!==e.indexOf("?")?"&":"?"}r=${o()}`;fetch(a).then((e=>e.json())).then((e=>{n=!0,t({asset:a,extra:{responseRegion:e.colo,failure:!1}})})),setTimeout((()=>{n||t({asset:a,extra:{failure:!0}})}),2e3)})),d=()=>Math.floor(Date.now()/1e3),l=e=>e.match(/h1|http\/1/)?"http/1.x":e.match(/h2|http\/2/)?"http/2":!!e.match(/h3|http\/3/)&&"http/3",m=async e=>{const t=e.reduce(((e,t)=>e+t.assets.length),0);if(!(()=>{if(location.hostname.match(/^(127\.0\.0\.1|localhost|192\.168\.[0-9]{1,3}\.[0-9]{1,3})$/))return!0;if(void 0!==window.webdriver)return!1;if(!performance.getEntries().some((e=>e.name.match(/^https:\/\/performance\.radar\.(?:staging\.)?cloudflare\.com\/beacon\.js$/))))return!1;if("https:"!==location.protocol)return!1;if(void 0===performance)return!1;if("function"!=typeof performance.clearResourceTimings)return!1;if("undefined"==typeof sessionStorage)return!1;const e=sessionStorage.getItem("ts");return!(e&&parseInt(e)+900>d())})()||!t)return void n("No measurements to do.");n(`Taking ${t} measurements...`);let r=0;const o=document.querySelector("#cf-error-details h1, .cf-code-label");if(o){const e=o.innerText.match(/Error\s+(?:code\s+)?(\d+)/i);e&&(r=parseInt(e[1])||0)}if(-1!==[1005,1006,1007,1008,1009,1010,1011,1012,1106].indexOf(r))return;performance.clearResourceTimings();let m=[];for(var f in e){let t,r=e[f];switch(r.type){case"coloName":t=c;break;case"api":t=i;break;default:t=s}let o=r.assets,d=0;for(var u in o){if(await t(`${r.prefix}${o[u].url}`,o[u].fetch).then((e=>{let t,a=e.asset,s={targetEntity:o[u].targetName,preWarmedRequest:!1,transferSize:o[u].es||r.es,asset:a,...o[u].extra,...e.extra};const i=o[u].fetch?"fetch":"img",c=`<a href='${o[u].url}' rel='nofollow noreferrer external'>${o[u].targetName}</a>`;if(e.extra&&e.extra.failure){s.transferSize=0;t=`<span style='color:${r.canFail?"#ebcf34":"#eb5334"}'>Failed to measure ${c} (${i})</span>`}else t=`Measured ${c} (${i})`;s.targetObjectHash=o[u].digest,s.targetObjectHash||(s.targetObjectHash="0000000000000000000000000000000000000000000000000000000000000000"),n(t),e.extra&&e.extra.failure&&!r.canFail?d++:m.push(s)})).catch((e=>{n(e)})),d>3)return void n("Too many failed measurements. Nothing to submit.");await a(50)}}const p=performance.getEntriesByType("resource");let h=[];if(p)for(var S in m){let e=m[S],t=p[p.map((e=>e.name)).indexOf(e.asset)];if(t&&performance.timeOrigin||!0===e.failure){if(delete e.asset,e.instanceTimeMs=Math.trunc(performance.timeOrigin),!0===e.failure)e={...e,instanceTimeMs:0,preWarmedRequest:!1,responseRegion:"",domainLookupStart:0,domainLookupEnd:0,connectStart:0,connectEnd:0,connectSecureStart:0,responseStart:0,requestStart:0,responseEnd:0,transferSize:0,encodedBodySize:0,decodedBodySize:0,serverTimeMs:0,connectProtocol:"n/a"};else{e={...e,domainLookupStart:t.domainLookupStart,domainLookupEnd:t.domainLookupEnd,connectStart:t.connectStart,connectEnd:t.connectEnd,connectSecureStart:t.secureConnectionStart,responseStart:t.responseStart,requestStart:t.requestStart,responseEnd:t.responseEnd,transferSize:t.transferSize,encodedBodySize:t.encodedBodySize,decodedBodySize:t.decodedBodySize};let r=l(t.nextHopProtocol);r&&(e.connectProtocol=r)}h.push(e)}}else console.log("Performance API not found");var y;h.length>0?(y={sessionTimeMs:Date.now(),triggerCode:r,measurements:h},fetch("https://performance.radar.cloudflare.com/api/beacon",{method:"POST",referrer:"",referrerPolicy:"no-referrer",headers:{"Content-Type":"application/json;charset=UTF-8","X-Submit-Token":"1733013307-add0641977e977c6f8376badda31f55dc8df8165c4a7cec657fcf51684cdef96","Access-Control-Allow-Origin":"*"},body:JSON.stringify(y)}).then((function(e){return e.json()})).then((function(e){n(y,"&nbsp;Sent data (click to expand)..."),n('Measurements successfully sent to <a href="https://radar.cloudflare.com/">Radar</a>.'),sessionStorage.setItem("ts",String(d())),n('<span style="color:#67b522">Thank you for helping us build a better Internet.</span>')}))):n("No measurements to submit.")};function f(){r&&(r.innerHTML=""),m([{"name":"group-workers-fetch-cache-on","prefix":"","rate":0.15,"canFail":false,"allowMobile":false,"assets":[{"targetName":"wrk-cf-rust-fetch-cache-on","es":913,"url":"https://serverless-benchmarks-rust.compute-pipe.com/?test=14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33&img=1","digest":"14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33"},{"targetName":"wrk-fastly-rust-fetch-cache-on","es":302,"url":"https://uniquely-peaceful-hagfish.edgecompute.app/?test=14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33&img=1","digest":"14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33"},{"targetName":"wrk-fastly-js-fetch-cache-on","es":302,"url":"https://exactly-huge-arachnid.edgecompute.app/?test=14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33&img=1","digest":"14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33"},{"targetName":"wrk-cf-js-fetch-cache-on","es":913,"url":"https://serverless-benchmarks-js.compute-pipe.com/?test=14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33&img=1","digest":"14016c4aaf282fbb6ae2ea8fbcbf139c641c291709185b8fb8a38913177b9b33"}],"num_targets":4,"num_bytes":0},{"name":"group-cdn-03","rate":0.9,"prefix":"","canFail":false,"allowMobile":true,"assets":[{"targetName":"cdnetworks","es":442,"url":"https://p36.cedexis-test.com/img/17653/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"verizon","es":358,"url":"https://p16999.cedexis-test.com/img/16999/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"limelight","es":330,"url":"https://p17003.cedexis-test.com/img/17003/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"bunny","es":869,"url":"https://jsdelivr.b-cdn.net/gh/jimaek/testobjects@0.0.1/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400}],"num_targets":4,"num_bytes":409600},{"name":"group-cdn-01","rate":1,"prefix":"","canFail":false,"allowMobile":true,"assets":[{"targetName":"fastly-c","es":557,"url":"https://fastly.cedexis-test.com/img/20367/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"akamai-c","es":395,"url":"https://cedexis-test.akamaized.net/img/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"cdn-cloudflare-cp","es":777,"url":"https://benchmarks.cdn.compute-pipe.com/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"google","es":200,"url":"https://benchmark.1e100cdn.net/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400},{"targetName":"cloudfront-c","es":488,"url":"https://p29.cedexis-test.com/img/r20-100KB.png","digest":"27bce9e85eaf3567a4695ba2b612e32615394d80d0a3a2dcb07b1fbfdfababc7","size":102400}],"num_targets":5,"num_bytes":512000}])}!document.readyState||"complete"!==document.readyState&&"interactive"!==document.readyState?window.addEventListener("DOMContentLoaded",(()=>{f()})):f()}();
