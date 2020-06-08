 /*plugins/jquery/jquery-2.1.4.min.js*/ /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
 
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
 /*plugins/modules/modules.js*/ var modules = {
	data: [],
	add: function(module) {
		modules.data.push(module);
	},
	init: function() {

		var i = 0, len = modules.data.length;
		for(i; i < len; i++) {
			window[modules.data[i]].init();
		}

	}
}; /*plugins/tools/tools.js*/ 'use strict';
/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  







var tools = {
	init: function(params) {

		this.client();

		if (params == undefined) return;

		var i = 0;
		var paramsLen = params.length;

		for (i; i < paramsLen; i++) {
			tools[params[i]]();
		}

	},
	client: function() {

		window.client = {
			get: function() {
				this.$document = $(document);
				this.$window = $(window);
				this.windowW = this.$window.width();
				this.windowH = this.$window.height();
				this.isMobile = this.windowW <= 1200;
				this.scrollW = this.getScrollWidth();
				this.isRetina = this.checkRetina();
			},
			getScrollWidth: function() {
				var outer = document.createElement("div");
				outer.style.visibility = "hidden";
				outer.style.width = "100px";
				outer.style.msOverflowStyle = "scrollbar";
				document.body.appendChild(outer);
				var widthNoScroll = outer.offsetWidth;
				outer.style.overflow = "scroll";
				var inner = document.createElement("div");
				inner.style.width = "100%";
				outer.appendChild(inner);
				var widthWithScroll = inner.offsetWidth;
				outer.parentNode.removeChild(outer);
				return widthNoScroll - widthWithScroll;
			},
			checkRetina: function() {
				if (window.matchMedia) {
		            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
		            return (mq && mq.matches || (window.devicePixelRatio > 1));
		        }
			},
		};

		client.get();

		client.$window.on('resize', function() {
			client.get();
		});
	},
	backgrounds: function() {

		var backgrounds = document.querySelectorAll('[data-bg-src]');
		var backgroundsLen = backgrounds.length;
		var i = 0;

		for (i; i < backgroundsLen; i++) {
			var block = backgrounds[i];

			var src = block.getAttribute("data-bg-src") || "";
			var size = block.getAttribute("data-bg-size") || "auto";
			var pos = block.getAttribute("data-bg-pos") || "auto";
			var repeat = "no-repeat";

			block.style.background = "url(" + src + ") " + pos + " / " + size + " " + repeat;
		}
	},
	tabs: function() {

		window.tabs = {
			init: function() {
					var ctrl = this;

					var elements = document.querySelectorAll("[data-tabs]");
					var classInitialized = "tabs_initialized";

					ctrl.classTabActive = "tabs__tab_active";
					ctrl.classBtnActive = "tabs__btn_active";
					ctrl.tagTab = "[data-tab]";
					ctrl.tagBtn = "[data-open-tab]";

					var i = 0;
					var elementsLen = elements.length;

					for (i; i < elementsLen; i++) {
						var block = elements[i];

						var firstTabId = block.querySelector("[data-tab]").getAttribute("data-tab");
						ctrl.open(block, firstTabId);
						block.classList.add(classInitialized);
					}

					ctrl.events();
				},
				open: function(block, id) {
					var ctrl = this;

					var elements = block.querySelectorAll(ctrl.tagTab);
					var i = 0;
					var elementsLen = elements.length;

					for (i; i < elementsLen; i++) {
						var currentTab = elements[i];
						currentTab.classList.remove(ctrl.classTabActive);
					}

					block.querySelector("[data-tab='" + id + "']").classList.add(ctrl.classTabActive);

					var btns = block.querySelectorAll(ctrl.tagBtn);
					var t = 0;
					var btnsLen = btns.length;

					for (t; t < btnsLen; t++) {
						var currentBtn = btns[t];
						currentBtn.classList.remove(ctrl.classBtnActive);
					}

					block.querySelector("[data-open-tab='" + id + "']").classList.add(ctrl.classBtnActive);
				},
				events: function() {
					var ctrl = this;

					client.$document.on('click', '[data-open-tab]', function() {
						var btn = $(this);
						var block = btn.closest('.tabs');
						var id = btn.data('open-tab');

						ctrl.open(block[0], id);
					});

				}
		};

		tabs.init();

	},
	modals: function() {

		window.modals = {
			init: function() {
				var ctrl = this;

				ctrl.container = document.querySelector("[data-modals]");

				ctrl.tagBtnClose = "[data-modal-close]";
				ctrl.tagBtnOpen = "[data-modal-open]";
				ctrl.classModalActive = "modal_active";

				ctrl.countOpened = 0;

				ctrl.events();

			},
			open: function(id, callback) {
				var ctrl = modals;

				var currentModal = document.querySelector("[data-modal='" + id + "']");
				if (currentModal === null) {
					return;
				}
				//ctrl.hideOverflow();
				currentModal.classList.add(ctrl.classModalActive);

				ctrl.countOpened++;

				$(currentModal).trigger('modalOpened');

				if (callback) callback(currentModal);

			},
			close: function(id, callback) {

				var ctrl = this;

				if (!ctrl.countOpened) return;

				var currentModal = document.querySelector("[data-modal='" + id + "']");
				if (currentModal === null) {
					return;
				}
				currentModal.classList.remove(ctrl.classModalActive);

				ctrl.countOpened--;

				// if (!ctrl.countOpened) {
				// 	setTimeout(function() {
				// 		ctrl.showOverflow();
				// 	}, 500);
				// }

				$(currentModal).trigger('modalClosed');

				if (callback) callback(currentModal);

			},
			closeAll: function(callback) {
				var ctrl = this;

				var elements = ctrl.container.querySelectorAll("[data-modal]");
				var elementsLen = elements.length;

				for (var i = 0; i < elementsLen; i++) {
					var el = elements[i];
					el.classList.remove(ctrl.classModalActive);
				}

				ctrl.countOpened = 0;

				// setTimeout(function() {
				// 	ctrl.showOverflow();
				// }, 500);

				//$(elements).trigger('modalClosed');

				if (callback) callback();

			},
			hideOverflow: function() {

				var ctrl = this;

				document.body.style.overflowY = "hidden";
				document.body.style.paddingRight = client.scrollW+"px";

			},
			showOverflow: function() {
				var ctrl = this;

				document.body.style.overflowY = "auto";
				document.body.style.paddingRight = "0";

			},
			events: function() {
				var ctrl = this;

				client.$document.on('click', ctrl.tagBtnClose, function(e) {
					e.preventDefault();

					var id = $(this).closest('.modal').data('modal');

					ctrl.close(id);

				});

				client.$document.on('click', ctrl.tagBtnOpen, function(e) {
					e.preventDefault();

					var id = $(this).data('modal-open');

					ctrl.open(id);

				});

			}
		};

		modals.init();

	},
	preloader: function() {

		window.preloader = {
			init: function() {
				var ctrl = this;

				ctrl.urls = ctrl.getUrls();

				if (!ctrl.urls.length) {
					ctrl.done();
					console.log(ctrl.urls);
					return;

				}

				ctrl.loadImages(ctrl.urls);
				

			},
			getUrls: function() {
				var ctrl = this;

				var urls = [];

				var images = $('img');
				var imagesLen = images.length;
				var i = 0;

				var backgrounds = document.querySelectorAll('[data-bg-src]');
				var backgroundsLen = backgrounds.length;
				var k = 0;

				for (i; i < imagesLen; i++) {
					var url = images[i].getAttribute('src');
					urls.push(url);
				}

				for (k; k < backgroundsLen; k++) {
					var url = backgrounds[k].getAttribute('data-bg-src');
					urls.push(url);
				}

				ctrl.total = imagesLen+backgroundsLen;
				ctrl.loaded = 0;


				return urls;
			},
			loadImages: function(arr) {
				var ctrl = this;

				var i = 0;
				var arrLen = arr.length;

				for (i; i < arrLen; i++) {
					var url = arr[i];

					var img = new Image();
					img.src = url;

					img.addEventListener('load', function() {
						ctrl.loaded++;
						ctrl.check();
					});

					img.addEventListener('error', function() {
						ctrl.loaded++;
						ctrl.check();
					})
;				}
			},
			getProgress: function() {
				var ctrl = this;

				return (ctrl.loaded/ctrl.total).toFixed(2);
			},
			check: function() {
				var ctrl = this;
				if (ctrl.loaded === ctrl.total)
					ctrl.done();
			},
			done: function() {
				/*var event = new CustomEvent("preloaderDone");
				document.dispatchEvent(event);*/
				var event; // The custom event that will be created

				if (document.createEvent) {
					event = document.createEvent("HTMLEvents");
					event.initEvent("preloaderDone", true, true);
				} else {
					event = document.createEventObject();
					event.eventType = "preloaderDone";
				}

				event.eventName = "preloaderDone";

				if (document.createEvent) {
					document.dispatchEvent(event);
				} else {
					document.fireEvent("on" + event.eventType, event);
				}
			}
		}

		preloader.init();

	},
	select: function() {

		window.customSelect = {
		  init: function() {

		    var _this = this;

		    _this.html = {
		      $elements: $("[data-custom-select]")
		    };

		    _this.render();

		    _this.events();

		  },
		  render: function() {

		    var _this = this;

		    _this.html.$elements.each(function() {

		      var $el = $(this);
		      var $select = $el.find("select");
		      var options = [];

		      $select.find("option").each(function() {
		        var $option = $(this);
		        var val = $option.val();
		        var text = $option.text();
		        var isSelected = $option.prop("selected");

		        options.push({
		          value: val,
		          text: text,
		          isSelected: isSelected
		        });

		      });

		      var html = _this.build(options);

		      $el.append(html);

		    });

		  },
		  build: function(options) {

		    var currentText = '';

		    var itemsList = '';

		    var i = 0, len = options.length;
		    for (i; i < len; i++) {
		      var val = options[i].value;
		      var text = options[i].text;
		      var isSelected = options[i].isSelected;

		      if (val.length && !isSelected) {
		        var item = '<button class="custom-select__item" data-select-item-value="' + val + '" data-select-item-text="' + text + '">' + text + '</button>';
		        itemsList += item;
		      }

		      if (val.length && isSelected) {
		        var item = '<button class="custom-select__item custom-select__item_hide" data-select-item-value="' + val + '" data-select-item-text="' + text + '">' + text + '</button>';
		        itemsList += item;
		      }

		      if (isSelected) {
		      	$(this).addClass('custom-select__item_hide');
		        currentText = text;
		      }
		    }

		    var totalHtml = '<div class="custom-select__outer">' +
		                        '<button class="custom-select__head">' +
		                          '<div class="custom-select__value">' +
		                            currentText +
		                          '</div>' +
		                        '</button>' +
		                        '<div class="custom-select__body">' +
		                          '<div class="custom-select__list">' +
		                            itemsList +
		                          '</div>' +
		                        '</div>' +
		                      '</div>';

		    return totalHtml;

		  },
		  setActiveItem: function($customSelect, $select, val, text) {

		    var _this = this;

		    $customSelect.find(".custom-select__value").text(text);
		    $select.val(val);
		    _this.close($customSelect);
		    $select.trigger('change');

		  },
		  open: function($customSelect) {

		    $customSelect.find(".custom-select__body").slideDown(300);
		    $customSelect.addClass('custom-select_opened');

		  },
		  close: function($customSelect) {

		    $customSelect.find(".custom-select__body").slideUp(300);
		    $customSelect.removeClass('custom-select_opened');

		  },
		  closeAll: function() {

		    var _this = this;

		    _this.html.$elements.each(function() {
		      var $el = $(this);

		      $el.find(".custom-select__body").slideUp(300);
		      $el.removeClass('custom-select_opened');

		    });

		    
		  },
		  rebuildSelect: function($select) {

			var _this = this;

			$select.siblings('.custom-select__outer').remove();
			var $el = $select.parent();

			var options = [];

			$select.find("option").each(function() {
				var $option = $(this);
				var val = $option.val();
				var text = $option.text();
				var isSelected = $option.prop("selected");

				options.push({
					value: val,
					text: text,
					isSelected: isSelected
				});

			});

			var html = _this.build(options);

			$el.append(html);

		  },
		  events: function() {

		    var _this = this;

		    client.$document.on('click', '.custom-select__head', function(e) {
		    	e.preventDefault();

		      var $customSelect = $(this).closest('[data-custom-select]');
		      if ($customSelect.hasClass('custom-select_opened')) {
		        // close
		        _this.close($customSelect);
		      } else {
		        _this.closeAll();
		        // open
		        _this.open($customSelect);
		      }

		    });

		    client.$document.on('click', '[data-select-item-value]', function(e) {
		      e.preventDefault();

		      var $option = $(this);
		      var $customSelect = $option.closest("[data-custom-select]");
		      var $select = $customSelect.find("select");

		      var val = $option.data('select-item-value');
		      var text = $option.data('select-item-text');

		      _this.setActiveItem($customSelect, $select, val, text);

		      setTimeout(function(){
			      $option.siblings().removeClass('custom-select__item_hide');
			      $option.addClass('custom-select__item_hide');
		      }, 300);
		    });

		    client.$document.on('click', function(e) {
		      if (!$(e.target).hasClass('custom-select') && !$(e.target).closest('.custom-select').length) {
		        _this.closeAll();
		      }
			});


			_this.html.$elements.find('select').on('reinitSelect', function() {
				var $select = $(this);

				_this.rebuildSelect($select);
			});

		  }
		};

		customSelect.init();

	},
	forms: function() {

		window.forms = {
			init: function() {

				var th = forms;

				th.elements = {
					$form: $("[data-form]")
				};

				th.elements.$form.find('input, textarea').each(function() {
					var $inp = $(this);
					if ($inp.val().length){
						$(this).closest('.fieldset').addClass('has-data');
					}
				});

				th.events();

			},
			onSubmit: function($form) {

				var th = forms;

				var data = $form.serializeArray();
				var fd = new FormData();

				var $fileInputs = $form.find('input[type="file"]');
				$fileInputs.each(function() {
					var $inp = $(this);

					fd.append($inp.attr('name'), $inp[0].files[0]);

				});

				if (th.validate($form, data, fd)) {

          grecaptcha.ready(function() {
            grecaptcha.execute('6LfVwW8UAAAAAMAqyFice4pgxRNh57XovXa7mNi7', {action: 'sendform'})
            .then(function(token) {
              fd.append('token', token);
              th.send($form, data, fd);
            });
          });
        }

			},
			onError: function($form, msg) {

				console.log(msg);

				var th = forms;
				modals.open($form.data('error-id'));

			},
			onSuccess: function($form, msg) {

				console.log(msg);

				var th = forms;

				modals.closeAll();
				modals.open($form.data('success-id'));
				$form[0].reset();
				$form.find(".focus").removeClass('focus has-error');

			},
			validate: function($form, data, fd) {

				var th = forms;

				var isValid = 1;

				var validateTypes = {
					name: function(val) {
						return val.length > 1;
					},
					email: function(val) {
						var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    			return re.test(String(val).toLowerCase());
					},
					message: function(val) {
						return val.length > 5;
					},
					phone: function(val) {
						return val.length > 5;
					}
				}

				var len = data.length;
				for (len; len--;) {
					var field = data[len];
					var origName = field.name;
					var $inp = $form.find("[name='"+origName+"']");
					var isReq = $inp.data('required');
					if (typeof isReq === typeof undefined || isReq === false) {
						continue;
					}
					var name = $inp.data('field-name');
					var value = field.value;
					var $field = $inp.closest('.fieldset');
					if (!validateTypes.hasOwnProperty(name)) {
						continue;
					}
					if (!validateTypes[name](value)) {
						isValid = 0;
						$field.addClass('has-error');
					} else {
						$field.removeClass('has-error');
					}
				}

				var $agreement = $form.find('[data-field-name="agreement"]');
				if ($agreement.length) {
					var $field = $agreement.closest('.fieldset');
					if (!$agreement.prop('checked')) {
						isValid = 0;
						$field.addClass('has-error');
					} else {
						$field.removeClass('has-error');
					}
				}

				// validate files
				var requiredFiles = $form.find('input[type="file"][data-required]');
				requiredFiles.each(function() {
					var $inp = $(this);
					var name = $inp.attr('name');
					var $field = $inp.closest('.fieldset');
					if (fd.get(name) == 'undefined' || fd.get(name) == undefined) {
						isValid = 0;
						if ($field.length) {
							$field.addClass('has-error');
						}
					} else {
						if ($field.length) {
							$field.removeClass('has-error');
						}
					}
				});

				return isValid;
			},
			send: function($form, data, fd) {

				var th = forms;

				data.forEach(function(item) {
					fd.append(item.name, item.value);
				});

				$.ajax({
				  type: $form.attr('method'),
				  url: $form.attr('action'),
				  processData: false,
  				  contentType: false,
				  data: fd,
				  success: function(msg){
				  	if (msg.status === 1) {
				  		th.onSuccess($form, msg);
				  	} else {
				  		th.onError($form, msg);
				  	}
				  },
				  error: function(msg){
				  	th.onError($form, msg);
				  }
				});

			},
			events: function() {

				var th = forms;

				th.elements.$form.on('submit', function(e) {
					e.preventDefault();
					var $form = $(this).closest('form');
					th.onSubmit($form);
				});

				th.elements.$form.find('input, textarea').focus(function() {
					$(this).closest('.fieldset').removeClass('has-error').addClass('focus');
				});

				th.elements.$form.find('input, textarea').blur(function() {
					var $inp = $(this);
					$inp.closest('.fieldset').removeClass('focus');
					if (!$inp.val().length) {
						$inp.closest('.fieldset').removeClass('has-data');
					} else {
						$inp.closest('.fieldset').addClass('has-data');
					}
				});

				th.elements.$form.find('input, textarea').on('keyup', function() {
					var $inp = $(this);
					if ($inp.val().length){
						$(this).closest('.fieldset').addClass('has-data');
					} else {
						$(this).closest('.fieldset').removeClass('has-data');
					}
				});

			}
		};

		forms.init();

	}
};








































 /*plugins/slick/slick.min.js*/ !function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
 /*plugins/isotope/isotope.pkgd.min.js*/ /*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){
return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d}); /*plugins/textAnimation/textAnimation.js*/ 

var animations = {

  init: function() {

    var th = animations;
    th.$splitLetters = $("[data-split-letters]");
    th.$splitLettersBig = $("[data-split-letters-big]");

    th.prepareElements();
    //th.start();

  },

  prepareElements: function() {

    var th = animations;

    th.$splitLetters.each(function(){

      var $letters = $(this);

      splitLines($letters);

      var $lines = $letters.find('.line');

      var isSpace = 0;

      $lines.each(function() {
        var $l = $(this);
        var arrayLetters = $l.text().split('');
        var string = '';
        var delay = 0;
        var step = .05;
        var tr = .5;
        var trStep = .03;

        for (i = 0; i < arrayLetters.length; i++) {

          var transition = 'transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -webkit-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -o-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's;';
          delay = delay+step;
          tr = tr+trStep;

          var element = '<span class="letter" style="'+transition+'">'+ arrayLetters[i] +'</span>';
          var next = i+1;

          if (next < arrayLetters.length && arrayLetters[next] == ' ') {
            element = '<span class="letter" style="'+transition+'">'+ arrayLetters[i] +'&nbsp;</span>';
          }

          if (arrayLetters[i] == ' ') {
            element = '';
          }

          string += element;

        };

        $l.html(string);

      });

    });

    th.$splitLettersBig.each(function(){

      var $letters = $(this);

      splitLines($letters);

      var $lines = $letters.find('.line');

      var isSpace = 0;

      $lines.each(function() {
        var $l = $(this);
        var arrayLetters = $l.text().split('');
        var string = '';
        var delay = 0;
        var step = .1;
        var tr = 1;
        var trStep = .03;

        for (i = 0; i < arrayLetters.length; i++) {

          var transition = 'transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -webkit-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -o-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's;';
          delay = delay+step;
          tr = tr+trStep;

          var element = '<span class="letter" style="'+transition+'">'+ arrayLetters[i] +'</span>';
          var next = i+1;

          if (next < arrayLetters.length && arrayLetters[next] == ' ') {
            element = '<span class="letter" style="'+transition+'">'+ arrayLetters[i] +'&nbsp;</span>';
          }

          if (arrayLetters[i] == ' ') {
            element = '';
          }

          string += element;

        };

        $l.html(string);

      });

    });

  },

  start: function() {

    var th = animations;

    th.showElement();

    $(window).on('scroll', function(){
      th.showElement();
    })

  },

  showElement: function(){

    var th = animations;

    th.$splitLetters.each(function() {
      var $el = $(this);
      if (isElementInViewport($el)) {
        var delay = $el.data('split-letters');

        setTimeout(function(){
          $el.addClass('show');
        }, delay);

      }
    });

    th.$splitLettersBig.each(function() {
      var $el = $(this);
      if (isElementInViewport($el)) {
        var delay = $el.data('split-letters');

        setTimeout(function(){
          $el.addClass('show');
        }, delay);

      }
    });
  }
};



function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};



function splitLines($block) {

  var text = $block.html(function(i, h){
    return h.replace(/(\S+\s*)/g, '<span>$1</span>');
  });

  var  pt = 0,
  obj = {},
  curPt = 0,
  k = 0,
  output = '';

  $('span', $block).each(function(i, el){
    curPt = $(el).offset().top;
    var text = $(this).html();

    if(curPt > pt) {
      pt = curPt;
      obj[++k] = [];
    };

    try {
      obj[k].push(text);
    } catch(error) {}

  });

  var layout = "";

  $.each(obj, function(i, line){
    layout += '<span class="line">' +  line.join('')  + '</span>';
  });

  $block.html(layout);

};





// // Wrap every letter in a span
// $('.ml7 .letters').each(function(){
//   $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
// });

// anime.timeline({loop: false})
//   .add({
//     targets: '.ml7 .letter',
//     translateY: ["1.1em", 0],
//     translateX: [0, 0],
//     translateZ: 0,
//     rotateZ: [0, 0],
//     duration: 750,
//     easing: "easeOutExpo",
//     delay: function(el, i) {
//       return 50 * i;
//     }
//   }).add({
//     targets: '.ml7',
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

modules.add('animations'); /*plugins/buttonAnimations/buttonAnimations.js*/ 
var buttonAnimations = {

	init: function(){

		var th = buttonAnimations;
		th.$btns = $('[data-button]');

		if (!th.$btns.length) return

		th.check();
		th.events();
	},

	check: function(){

		var th = buttonAnimations;
		var scrollTop = $(document).scrollTop();
		var checkpoint = scrollTop + client.windowH - 30;

		th.$btns.each(function(){

			var $btn = $(this);
			var topPosition = $btn.offset().top;
			var delay = $btn.data('button');
			var hoverDelay = delay + 2000;

			if (checkpoint >= topPosition && !$btn.hasClass('button_active')) {

				setTimeout(function(){
					$btn.addClass('button_active');
				}, delay);
				setTimeout(function(){
					$btn.addClass('button_hover');
				}, hoverDelay);

			};

		})


	},

	events: function(){

		var th = buttonAnimations;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};


modules.add('buttonAnimations');

 /*plugins/wow/wow.min.js*/ (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
      factory(module, exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports);
      global.WOW = mod.exports;
    }
  })(this, function (module, exports) {
    'use strict';
  
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  
    var _class, _temp;
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
  
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  
    function isIn(needle, haystack) {
      return haystack.indexOf(needle) >= 0;
    }
  
    function extend(custom, defaults) {
      for (var key in defaults) {
        if (custom[key] == null) {
          var value = defaults[key];
          custom[key] = value;
        }
      }
      return custom;
    }
  
    function isMobile(agent) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
      );
    }
  
    function createEvent(event) {
      var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
      var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
  
      var customEvent = void 0;
      if (document.createEvent != null) {
        // W3C DOM
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        // IE DOM < 9
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
  
      return customEvent;
    }
  
    function emitEvent(elem, event) {
      if (elem.dispatchEvent != null) {
        // W3C DOM
        elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        elem[event]();
      } else if ('on' + event in (elem != null)) {
        elem['on' + event]();
      }
    }
  
    function addEvent(elem, event, fn) {
      if (elem.addEventListener != null) {
        // W3C DOM
        elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        // IE DOM
        elem.attachEvent('on' + event, fn);
      } else {
        // fallback
        elem[event] = fn;
      }
    }
  
    function removeEvent(elem, event, fn) {
      if (elem.removeEventListener != null) {
        // W3C DOM
        elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        // IE DOM
        elem.detachEvent('on' + event, fn);
      } else {
        // fallback
        delete elem[event];
      }
    }
  
    function getInnerHeight() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      }
  
      return document.documentElement.clientHeight;
    }
  
    // Minimalistic WeakMap shim, just in case.
    var WeakMap = window.WeakMap || window.MozWeakMap || function () {
      function WeakMap() {
        _classCallCheck(this, WeakMap);
  
        this.keys = [];
        this.values = [];
      }
  
      _createClass(WeakMap, [{
        key: 'get',
        value: function get(key) {
          for (var i = 0; i < this.keys.length; i++) {
            var item = this.keys[i];
            if (item === key) {
              return this.values[i];
            }
          }
          return undefined;
        }
      }, {
        key: 'set',
        value: function set(key, value) {
          for (var i = 0; i < this.keys.length; i++) {
            var item = this.keys[i];
            if (item === key) {
              this.values[i] = value;
              return this;
            }
          }
          this.keys.push(key);
          this.values.push(value);
          return this;
        }
      }]);
  
      return WeakMap;
    }();
  
    // Dummy MutationObserver, to avoid raising exceptions.
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
      function MutationObserver() {
        _classCallCheck(this, MutationObserver);
  
        if (typeof console !== 'undefined' && console !== null) {
          console.warn('MutationObserver is not supported by your browser.');
          console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
        }
      }
  
      _createClass(MutationObserver, [{
        key: 'observe',
        value: function observe() {}
      }]);
  
      return MutationObserver;
    }(), _class.notSupported = true, _temp);
  
    // getComputedStyle shim, from http://stackoverflow.com/a/21797294
    var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
      var getComputedStyleRX = /(\-([a-z]){1})/g;
      return {
        getPropertyValue: function getPropertyValue(prop) {
          if (prop === 'float') {
            prop = 'styleFloat';
          }
          if (getComputedStyleRX.test(prop)) {
            prop.replace(getComputedStyleRX, function (_, _char) {
              return _char.toUpperCase();
            });
          }
          var currentStyle = el.currentStyle;
  
          return (currentStyle != null ? currentStyle[prop] : void 0) || null;
        }
      };
    };
  
    var WOW = function () {
      function WOW() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  
        _classCallCheck(this, WOW);
  
        this.defaults = {
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
          callback: null,
          scrollContainer: null,
          resetAnimation: true
        };
  
        this.animate = function animateFactory() {
          if ('requestAnimationFrame' in window) {
            return function (callback) {
              return window.requestAnimationFrame(callback);
            };
          }
          return function (callback) {
            return callback();
          };
        }();
  
        this.vendors = ['moz', 'webkit'];
  
        this.start = this.start.bind(this);
        this.resetAnimation = this.resetAnimation.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.scrollCallback = this.scrollCallback.bind(this);
        this.scrolled = true;
        this.config = extend(options, this.defaults);
        if (options.scrollContainer != null) {
          this.config.scrollContainer = document.querySelector(options.scrollContainer);
        }
        // Map of elements to animation names:
        this.animationNameCache = new WeakMap();
        this.wowEvent = createEvent(this.config.boxClass);
      }
  
      _createClass(WOW, [{
        key: 'init',
        value: function init() {
          this.element = window.document.documentElement;
          if (isIn(document.readyState, ['interactive', 'complete'])) {
            this.start();
          } else {
            addEvent(document, 'DOMContentLoaded', this.start);
          }
          this.finished = [];
        }
      }, {
        key: 'start',
        value: function start() {
          var _this = this;
  
          this.stopped = false;
          this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
          this.all = this.boxes.slice(0);
          if (this.boxes.length) {
            if (this.disabled()) {
              this.resetStyle();
            } else {
              for (var i = 0; i < this.boxes.length; i++) {
                var box = this.boxes[i];
                this.applyStyle(box, true);
              }
            }
          }
          if (!this.disabled()) {
            addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            addEvent(window, 'resize', this.scrollHandler);
            this.interval = setInterval(this.scrollCallback, 50);
          }
          if (this.config.live) {
            var mut = new MutationObserver(function (records) {
              for (var j = 0; j < records.length; j++) {
                var record = records[j];
                for (var k = 0; k < record.addedNodes.length; k++) {
                  var node = record.addedNodes[k];
                  _this.doSync(node);
                }
              }
              return undefined;
            });
            mut.observe(document.body, {
              childList: true,
              subtree: true
            });
          }
        }
      }, {
        key: 'stop',
        value: function stop() {
          this.stopped = true;
          removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          removeEvent(window, 'resize', this.scrollHandler);
          if (this.interval != null) {
            clearInterval(this.interval);
          }
        }
      }, {
        key: 'sync',
        value: function sync() {
          if (MutationObserver.notSupported) {
            this.doSync(this.element);
          }
        }
      }, {
        key: 'doSync',
        value: function doSync(element) {
          if (typeof element === 'undefined' || element === null) {
            element = this.element;
          }
          if (element.nodeType !== 1) {
            return;
          }
          element = element.parentNode || element;
          var iterable = element.querySelectorAll('.' + this.config.boxClass);
          for (var i = 0; i < iterable.length; i++) {
            var box = iterable[i];
            if (!isIn(box, this.all)) {
              this.boxes.push(box);
              this.all.push(box);
              if (this.stopped || this.disabled()) {
                this.resetStyle();
              } else {
                this.applyStyle(box, true);
              }
              this.scrolled = true;
            }
          }
        }
      }, {
        key: 'show',
        value: function show(box) {
          this.applyStyle(box);
          box.className = box.className + ' ' + this.config.animateClass;
          if (this.config.callback != null) {
            this.config.callback(box);
          }
          emitEvent(box, this.wowEvent);
  
          if (this.config.resetAnimation) {
            addEvent(box, 'animationend', this.resetAnimation);
            addEvent(box, 'oanimationend', this.resetAnimation);
            addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            addEvent(box, 'MSAnimationEnd', this.resetAnimation);
          }
  
          return box;
        }
      }, {
        key: 'applyStyle',
        value: function applyStyle(box, hidden) {
          var _this2 = this;
  
          var duration = box.getAttribute('data-wow-duration');
          var delay = box.getAttribute('data-wow-delay');
          var iteration = box.getAttribute('data-wow-iteration');
  
          return this.animate(function () {
            return _this2.customStyle(box, hidden, duration, delay, iteration);
          });
        }
      }, {
        key: 'resetStyle',
        value: function resetStyle() {
          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            box.style.visibility = 'visible';
          }
          return undefined;
        }
      }, {
        key: 'resetAnimation',
        value: function resetAnimation(event) {
          if (event.type.toLowerCase().indexOf('animationend') >= 0) {
            var target = event.target || event.srcElement;
            target.className = target.className.replace(this.config.animateClass, '').trim();
          }
        }
      }, {
        key: 'customStyle',
        value: function customStyle(box, hidden, duration, delay, iteration) {
          if (hidden) {
            this.cacheAnimationName(box);
          }
          box.style.visibility = hidden ? 'hidden' : 'visible';
  
          if (duration) {
            this.vendorSet(box.style, { animationDuration: duration });
          }
          if (delay) {
            this.vendorSet(box.style, { animationDelay: delay });
          }
          if (iteration) {
            this.vendorSet(box.style, { animationIterationCount: iteration });
          }
          this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });
  
          return box;
        }
      }, {
        key: 'vendorSet',
        value: function vendorSet(elem, properties) {
          for (var name in properties) {
            if (properties.hasOwnProperty(name)) {
              var value = properties[name];
              elem['' + name] = value;
              for (var i = 0; i < this.vendors.length; i++) {
                var vendor = this.vendors[i];
                elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
              }
            }
          }
        }
      }, {
        key: 'vendorCSS',
        value: function vendorCSS(elem, property) {
          var style = getComputedStyle(elem);
          var result = style.getPropertyCSSValue(property);
          for (var i = 0; i < this.vendors.length; i++) {
            var vendor = this.vendors[i];
            result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
          }
          return result;
        }
      }, {
        key: 'animationName',
        value: function animationName(box) {
          var aName = void 0;
          try {
            aName = this.vendorCSS(box, 'animation-name').cssText;
          } catch (error) {
            // Opera, fall back to plain property value
            aName = getComputedStyle(box).getPropertyValue('animation-name');
          }
  
          if (aName === 'none') {
            return ''; // SVG/Firefox, unable to get animation name?
          }
  
          return aName;
        }
      }, {
        key: 'cacheAnimationName',
        value: function cacheAnimationName(box) {
          // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
          // box.dataset is not supported for SVG elements in Firefox
          return this.animationNameCache.set(box, this.animationName(box));
        }
      }, {
        key: 'cachedAnimationName',
        value: function cachedAnimationName(box) {
          return this.animationNameCache.get(box);
        }
      }, {
        key: 'scrollHandler',
        value: function scrollHandler() {
          this.scrolled = true;
        }
      }, {
        key: 'scrollCallback',
        value: function scrollCallback() {
          if (this.scrolled) {
            this.scrolled = false;
            var results = [];
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              if (box) {
                if (this.isVisible(box)) {
                  this.show(box);
                  continue;
                }
                results.push(box);
              }
            }
            this.boxes = results;
            if (!this.boxes.length && !this.config.live) {
              this.stop();
            }
          }
        }
      }, {
        key: 'offsetTop',
        value: function offsetTop(element) {
          // SVG elements don't have an offsetTop in Firefox.
          // This will use their nearest parent that has an offsetTop.
          // Also, using ('offsetTop' of element) causes an exception in Firefox.
          while (element.offsetTop === undefined) {
            element = element.parentNode;
          }
          var top = element.offsetTop;
          while (element.offsetParent) {
            element = element.offsetParent;
            top += element.offsetTop;
          }
          return top;
        }
      }, {
        key: 'isVisible',
        value: function isVisible(box) {
          var offset = box.getAttribute('data-wow-offset') || this.config.offset;
          var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
          var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
          var top = this.offsetTop(box) - 100;
          var bottom = top + box.clientHeight + 100;
  
          return top <= viewBottom && bottom >= viewTop;
        }
      }, {
        key: 'disabled',
        value: function disabled() {
          return !this.config.mobile && isMobile(navigator.userAgent);
        }
      }]);
  
      return WOW;
    }();
  
    exports.default = WOW;
    module.exports = exports['default'];
  }); /*plugins/animateNumber/animateNumber.min.js*/ /*
 jQuery animateNumber plugin v0.0.14
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);
 /*blocks/main/preloader/js/preloader.js*/ var preloaderCtrl = {

	init: function(){

		var th = preloaderCtrl;
		if (th.isDone) return;

		th.elements = {
			$preloader: $('[data-preloader]'),
			$progressLine: $('[data-progress-line]')
		}

		if (!th.elements.$preloader) return;

		th.check();
		th.events();
	},

	check: function(){

		var th = preloaderCtrl;

		th.timer = setInterval(function() {
			var progress = preloader.getProgress();
			th.elements.$progressLine.css("transform", "scaleX("+ progress +")");
		}, 100);
	},

	stop: function(){

		var th = preloaderCtrl;

		var $slider = $("[data-mobile-poster]");
		if ($slider.hasClass('slick-initialized')) {
			$slider.slick('slickGoTo', 0);
			posterSliderCtrl.navCtrl(0);
		} else {
			$slider.on('init', function() {
				$slider.slick('slickGoTo', 0);
				posterSliderCtrl.navCtrl(0);
			});
		}

		new WOW().init();

		clearInterval(th.timer);
		th.isDone = 1;

		setTimeout(function() {
			$('[data-preloader]').fadeOut();
			animations.start();
			//!client.isMobile && poster.fadeTo(0);
			posterSliderCtrl.navCtrl(0);
		}, 200);

	},

	events: function(){

		var th = preloaderCtrl;

		//$(document).on('preloaderDone', th.stop);


	}

};

modules.add('preloaderCtrl');
$(document).on('preloaderDone', preloaderCtrl.stop); /*blocks/main/header/js/header.js*/ var searchCtrl = {

	init: function(){

		var th = searchCtrl;
		th.$btn = $('[data-search-btn]');
		th.$header = $('[data-header]');
		th.$menu = $('[data-header]').find('.menu');
		th.$searchForm = $('[data-search]').find('.search__form');
		th.searchIsActive = false;

		th.events();
	},

	searchShow: function(){

		var th = searchCtrl;

		th.$menu.fadeOut(500);
		th.$searchForm.fadeIn(500);
		th.searchIsActive = true;
		projectsDropdownCtrl.dropdownHide();

	},

	searchHide: function(){

		var th = searchCtrl;

		th.$menu.fadeIn(500);
		th.$searchForm.fadeOut(500);
		th.searchIsActive = false;

	},

	events: function(){

		var th = searchCtrl;

		th.$btn.click(function(){
			if (!th.searchIsActive) {
				th.searchShow();
			} else {
				th.searchHide();
			}

		});

		$(document).click(function(e){

			var $target = $(e.target);
			var $check = $target.closest('.search');
			if (!$check.length && !$target.hasClass('.search') && !th.$header.hasClass('header_min')) {
				th.searchHide();
			}
		});

		$(document).scroll(function(){
			if (th.searchIsActive) {
				th.searchHide();
			}
		});

		$(window).on('resize', function() {
			if (th.searchIsActive) {
				th.searchHide();
			}
		});

	}

};


var projectsDropdownCtrl = {

	init: function(){

		var th = projectsDropdownCtrl;
		th.$btn = $('[data-projects-btn]');
		th.$dropdown = $('[data-projects-dropdown]');

		th.events();
	},

	dropdownShow: function(){

		var th = projectsDropdownCtrl;

		th.$dropdown.slideDown();
		th.$btn.addClass('button-projects_active');

	},

	dropdownHide: function(){

		var th = projectsDropdownCtrl;

		th.$dropdown.slideUp();
		th.$btn.removeClass('button-projects_active');

	},

	events: function(){

		var th = projectsDropdownCtrl;

		th.$btn.click(function(){

			if (!th.$btn.hasClass('button-projects_active')) {
				th.dropdownShow();
			} else {
				th.dropdownHide();
			}

		});

		$(document).click(function(e){

			var $target = $(e.target);
			if (!$target.hasClass('button-projects') && th.$btn.hasClass('button-projects_active')) {
				th.dropdownHide();
			}
		});

		$(document).scroll(function(){
			if (th.$btn.hasClass('button-projects_active')) {
				th.dropdownHide();
			}
		})

	}

};


var headerCtrl = {

	init: function(){

		var th = headerCtrl;
		th.$header = $('[data-header]');
		th.$sections = $('[data-color-section]');
		th.isDark = null;

		th.check();
		th.events();
	},

	check: function(){

		var th = headerCtrl;
		var scrollTop = $(document).scrollTop();
		var width = th.$header.width();

		var isLast = 1;

		th.$sections.each(function(i){

			var $section = $(this);
			var topPosition = $section.offset().top - $(window).scrollTop();

			//var height = $section.outerHeight();
			//var bottomPosition = topPosition + height;

			if (topPosition > 0) {

				isLast = 0;

				var color = th.$sections.eq(i-1).data('color-section');

				if (th.isDark == null) {
					if (color == 'dark') {
						th.headerWhite();
					}
	
					if (color == 'white') {
						th.headerDark();
					}
				}

				if (color == 'dark' && th.isDark === 0) {
					th.headerDark();
				}

				if (color == 'white' && th.isDark === 1) {
					th.headerWhite();
				}

				return false;

			}
		});

		if (isLast) {
			var color = th.$sections.eq(th.$sections.length-1).data('color-section');
			if (color == 'dark' && th.isDark === 0) {
				th.headerDark();
			}

			if (color == 'white' && th.isDark === 1) {
				th.headerWhite();
			}
		}

		th.$header.css('width', client.windowW);

	},

	headerWhite: function(){

		var th = headerCtrl;

		th.$header.addClass('header_dark');
		th.isDark = 0;
	},

	headerDark: function(){

		var th = headerCtrl;

		th.$header.removeClass('header_dark');
		th.isDark = 1;
	},

	events: function(){

		var th = headerCtrl;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};


var headerMinCtrl = {

	init: function(){

		var th = headerMinCtrl;

		th.classes = {
			headerMin: 'header_min'
		};

		th.elements = {
			$header: $('[data-header]'),
			$headerBtn: $('[data-header]').find('.button-header'),
			$menu: $('[data-header]').find('.menu'),
			$poster: $('[data-poster]'),
			$search: $('[data-search]')
		};

		th.data = {
			// offset: th.elements.$poster.height() - 200,
			offset: client.windowH - 200,
			isMin: 0,
			isDesk: true
		};

		th.check();
		th.events();
	},

	check: function(){

		var th = headerMinCtrl;
		var scroll = $(window).scrollTop();
		if (client.windowW > 1200) {
			th.data.isDesk = true;
		} else {
			th.data.isDesk = false;
		};

		if (th.data.isDesk) {

			if ((scroll >= th.data.offset) && !th.data.isMin) {

				th.headerMin();
			}

			if (scroll < th.data.offset && th.data.isMin) {

				th.headerDefault();
			}
		} else {

			th.headerMin();
		}
	},

	headerMin: function(){

		var th = headerMinCtrl;

		th.elements.$header.addClass(th.classes.headerMin);
		th.elements.$menu.fadeOut(500);
		th.elements.$search.fadeOut(500);
		th.elements.$headerBtn.fadeIn(500);
		th.data.isMin = 1;

	},

	headerDefault: function(){

		var th = headerMinCtrl;

		th.elements.$header.removeClass(th.classes.headerMin);
		th.elements.$menu.fadeIn();
		th.elements.$search.fadeIn();
		th.elements.$headerBtn.fadeOut();
		th.data.isMin = 0;

	},

	events: function(){

		var th = headerMinCtrl;

		$(document).on('scroll', function(){

			th.check();

		});

		$(window).on('resize', function(){

			th.data.offset = client.windowH - 200;
			th.check();

		});

	}

};





var navModalCtrl = {

	init: function(){

		var th = navModalCtrl;
		th.$btn = $('[data-nav-btn]');
		th.$btnInNav = $('[data-btn-in-nav]');
		th.$header = $('[data-header]');
		th.$navBg = $('[data-nav-bg]');
		th.$navModal = $('[data-modal=navigation]');
		th.status = false;

		th.events();
	},

	showNav: function(){

		var th = navModalCtrl;

		th.$btn.addClass('button-header_active');
		modals.open('navigation');
		animations.showElement();
		th.$navBg.addClass('show');

		if (th.$header.hasClass('header_dark')) {
			th.$header.removeClass('header_dark');
			th.status = true;
		};

		setTimeout(function(){
			th.$btnInNav.addClass('button_active');
		}, 2000);
		setTimeout(function(){
			th.$btnInNav.addClass('button_hover');
		}, 4000);
	},

	hideNav: function(){

		var th = navModalCtrl;

		th.$btn.removeClass('button-header_active');
		th.$navBg.removeClass('show');

		modals.close('navigation');

		if (th.status) {
			th.$header.addClass('header_dark');
			th.status = false;
		};

		th.$btnInNav.removeClass('button_active');
		th.$btnInNav.removeClass('button_hover');

	},

	events: function(){

		var th = navModalCtrl;

		th.$btn.click(function(){

			if (!th.$btn.hasClass('button-header_active')) {
				th.showNav();
			} else {
				th.hideNav();
			}

		});

		th.$navModal.on('modalOpened', function(){
			modals.hideOverflow();
		});

		th.$navModal.on('modalClosed', function(){
			modals.showOverflow();
		});

		// $(document).click(function(e){

		// 	var $target = $(e.target);
		// 	if (!$target.hasClass('button-projects') && th.$btn.hasClass('button-projects_active')) {
		// 		th.dropdownHide();
		// 	}
		// });

		// $(document).scroll(function(){
		// 	if (th.$btn.hasClass('button-projects_active')) {
		// 		th.dropdownHide();
		// 	}
		// })

	}

};


var headerBgCtrl = {

	init: function(){

		var th = headerBgCtrl;
		th.$headerBg = $('[data-header-bg]');
		// th.status = false;

		th.check();
		th.events();
	},

	check: function(){

		var th = headerBgCtrl;
		var scrollTop = $(document).scrollTop();
		if (scrollTop < 50 && !th.$headerBg.hasClass('header__bg_transparent')) {
			th.transparent();
		};
		if (scrollTop >= 50 && th.$headerBg.hasClass('header__bg_transparent')) {
			th.color();
		};
		// if (scrollTop < 50 && !client.isMobile && !th.$headerBg.hasClass('header__bg_hide')) {
		// 	th.hideBg();
		// };
		// if (scrollTop >= 50 && th.$headerBg.hasClass('header__bg_hide')) {
		// 	th.showBg();
		// };


		// if (scrollTop < 50 && client.isMobile && !th.$headerBg.hasClass('header__bg_transparent')) {
		// 	th.transparent();
		// };
		// if (scrollTop >= 50 && th.$headerBg.hasClass('header__bg_transparent')) {
		// 	th.color();
		// };


		// if (scrollTop < client.windowH && client.isMobile && !th.$headerBg.hasClass('header__bg_transparent')) {
		// 	th.transparent();
		// };
		// if (scrollTop >= client.windowH && th.$headerBg.hasClass('header__bg_transparent')) {
		// 	th.color();
		// };

	},

	hideBg: function(){

		var th = headerBgCtrl;
		th.$headerBg.addClass('header__bg_hide');

	},

	showBg: function(){

		var th = headerBgCtrl;
		th.$headerBg.removeClass('header__bg_hide');

	},

	transparent: function(){

		var th = headerBgCtrl;
		th.$headerBg.addClass('header__bg_transparent');
	},

	color: function(){

		var th = headerBgCtrl;
		th.$headerBg.removeClass('header__bg_transparent');

	},

	events: function(){

		var th = headerBgCtrl;

		$(window).resize(th.check);
		$(document).scroll(th.check);

	}

};

modules.add('searchCtrl');
modules.add('projectsDropdownCtrl');
modules.add('headerCtrl');
modules.add('headerMinCtrl');
modules.add('navModalCtrl');
modules.add('headerBgCtrl');

 /*blocks/main/poster/js/poster.js*/ if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

window.loaded = 0;
window.onload = function() {
	window.loaded = 1;
};


function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}



var cursor = {
	init: function() {

		var th = cursor;

		if (!$(".cursor").length) return;

		th.elements = {
			$poster: $('.poster'),
			$cursor: $(".cursor__element"),
			$elementsHide: $("[data-cursor-hide]")
		};

		th.data = {
			lastMouseX: client.windowW/2,
			lastMouseY: client.windowH/2,
			mouseX: client.windowW/2,
			mouseY: client.windowH/2,
			timeout: 200,
			timer: null,
			moving: 0,
			isCursorActive: 0,
			scrollTop: $(window).scrollTop()
		};

		th.events();
		th.updatePosition();

	},
	startMove: function() {

		var th = cursor;

		th.data.moving = 1;

		th.data.timer = setInterval(function() {
			th.data.timeout -= 100;
			th.data.timeout <= 0 && th.stopMove();
		}, 100);

	},
	stopMove: function() {
		
		var th = cursor;

		clearInterval(th.data.timer);

		th.data.moving = 0;

		th.data.lastMouseX = th.data.mouseX;
		th.data.lastMouseY = th.data.mouseY;
		th.updatePosition();

	},
	setColor: function(color) {

		var th = cursor;

		var $c = th.elements.$cursor;

		if (color && !th.data.isCursorActive) {
			$c.addClass('cursor__element_active');
			th.data.isCursorActive = 1;
		}

		if (!color && th.data.isCursorActive) {
			$c.removeClass('cursor__element_active');
			th.data.isCursorActive = 0;
		}


	},
	updatePosition: function() {

		var th = cursor;

		var $c = th.elements.$cursor;
		var x = th.data.mouseX;
		var y = th.data.mouseY;

		var speed = Math.pow(th.data.mouseX - th.data.lastMouseX, 2) + Math.pow(th.data.mouseY - th.data.lastMouseY, 2);

		var pos = x + 'px, ' + y + 'px, 1px';
		var scale = 1 + Math.sqrt(speed/11000);

		$c.css({
			'-moz-transform': 'translate3d(' + pos + ') scale(' + scale + ')',
			'-webkit-transform': 'translate3d(' + pos + ') scale(' + scale + ')',
			'transform': 'translate3d(' + pos + ') scale(' + scale + ')'
		});

		th.data.timeout = 200;

	},
	hide: function() {

		var th = cursor;

		th.elements.$cursor.addClass('cursor__element_hide');

	},
	show: function() {

		var th = cursor;

		th.elements.$cursor.removeClass('cursor__element_hide');

	},
	events: function() {

		var th = cursor;

		th.elements.$poster.on('mousemove', function(e) {
			th.data.lastMouseX = th.data.mouseX;
			th.data.lastMouseY = th.data.mouseY;
			th.data.mouseX = e.clientX;
			th.data.mouseY = e.clientY + th.data.scrollTop;

			!th.data.moving && th.startMove();

			th.updatePosition();
		});



		th.elements.$elementsHide.on('mouseenter', function() {
			th.hide();
		});

		th.elements.$elementsHide.on('mouseleave', function() {
			th.show();
		});

		$(window).on('scroll', function() {
			th.data.scrollTop = $(this).scrollTop();
		})

	}
};



var poster = {
	isInited: 0,
	init: function() {

		if (!document.querySelectorAll('[data-effect-bg]').length) return;

		if (client.isMobile) return;

		if (poster.isInited) return;

		if (!window.loaded) {

			window.onload = function() {
				window.loaded = 1;
				poster.init();
			}

			return;

		}

		var th = poster;

		th.device = {
			tablet: 0,
			desktop: 0
		};


		th.duration = 10000;

		th.timer = null;

		th.elements = {
			blocks: document.querySelectorAll('.poster'),
			list: document.querySelector('.poster__list'),
			cards: document.querySelectorAll('.poster__list .card'),
			image: document.querySelector('.poster__image'),
			current: document.querySelector('.status__current'),
			total: document.querySelector('.status__total'),
			images: document.querySelector('.poster__images'),
			fakeCards: document.querySelectorAll('.poster__fake-headings .card')
		};

		th.mouseX = 0;
		th.mouseY = 0;

		th.width = th.elements.blocks[0].offsetWidth;
		th.height = th.elements.blocks[0].offsetHeight;

		th.startDrag = 0;
		th.offset = 0;
		th.current = 0;
		th.listWidth = 0;


		th.mouseDown = 0;

		th.active = 0;

		th.sizes = [];
		th.positions = [];

		th.currentSlide = 0;

		var cards = th.elements.cards;
		var cardsLen = cards.length;
		for (var i = 0; i < cardsLen; i++) {
			var card = cards[i];
			var w = card.offsetWidth;
			th.sizes.push(w);
			th.positions.push(card.offsetLeft);
			th.listWidth += w;

			if (i > 0) {
				card.classList.add('card_next');
			}
		}

		th.elements.list.width = th.listWidth;

		th.OrigDragK = th.dragK = th.listWidth/th.width;

		//th.OrigDragK = th.dragK = 1.8;

		th.elements.current.innerHTML = '01';
		var total = th.sizes.length;
		if (total < 10) {
			total = "0" + total;
		}
		th.elements.total.innerHTML = total;

		th.events();
		th.drag();

		th.elements.blocks[0].querySelector('.poster__image').classList.add('poster__image_active');


		$('.poster__fake-headings .line, .poster-mob .card .line').each(function() {
			var $l = $(this);
			var $letters = $l.find('.letter');
			var count = $letters.length;
			var string = '';
			var delay = 0;
			var step = .05;
			var tr = .5;
			var trStep = .03;
	
			for (i = 0; i < count; i++) {
	
			  //var transition = 'transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -webkit-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's; -o-transition: all '+(tr+trStep)+'s ease ' + (delay+step) + 's;';
			  delay = delay+step;
			  tr = tr+trStep;
			  $letters.eq(i).css({
				'-webkit-transition': 'all ' + (tr+trStep) + 's ease ' + (delay+step) + 's',
				'-moz-transition': 'all ' + (tr+trStep) + 's ease ' + (delay+step) + 's',
				'transition': 'all ' + (tr+trStep) + 's ease ' + (delay+step) + 's',
			  });
			  
			};
	
		  });


		if (!client.isMobile) th.start();
		posterSliderCtrl.navCtrl(th.currentSlide);
		th.fadeTitle(0);
		th.isInited = 1;


	},
	update: function() {

		var th = poster;

		var ky = th.mouseY/th.height;
		var kx = th.mouseX/th.width;

		var max = .8;

		var x = -max+max*ky*2;
		var y = -max+max*kx*2;

		$(th.elements.images).css({
			'-moz-transform': 'rotateX('+x+'deg) rotateY('+y+'deg) translateZ(-15vw) scale(1.25)',
			'-webkit-transform': 'rotateX('+x+'deg) rotateY('+y+'deg) translateZ(-15vw) scale(1.25)',
			'transform': 'rotateX('+x+'deg) rotateY('+y+'deg) translateZ(-15vw) scale(1.25)'
		});

	},
	start: function() {

		var th = poster;

		th.timer = setInterval(function() {
			th.next(true);
		}, th.duration);
		posterSliderCtrl.navCtrl(th.currentSlide);

	},
	stop: function() {

		var th = poster;

		clearInterval(th.timer);
		posterSliderCtrl.elements.$navCards.removeClass('card_active');

		

	},
	next: function(fade) {

		var th = poster;

		var total = th.sizes.length;

		th.currentSlide++;
		if (th.currentSlide >= total) {
			th.currentSlide = 0;
		}

		if (fade) {
			th.fadeTo(th.currentSlide);
		} else {
			th.goto(th.currentSlide);
		}

	},
	drag: function() {

		var th = poster;

		var k = th.dragK;

		var h = th.mouseX - th.startDrag;

		var c = th.current;


		th.current = h*k;

		var x = th.offset+th.current;

		if (x > 0 && h > 0) {
			x = x/5;
		}

		var len = th.positions.length;
		for (len; len--;) {
			var p = th.positions[len];

			if (-x > (p - th.sizes[len]/2)) {

				
				th.currentSlide = len;
				th.elements.cards.forEach(function(item, i) {
					if (i < th.currentSlide) {
						item.classList.remove('card_next');
						item.classList.add('card_prev');
					}
		
					if (i === th.currentSlide) {
						item.classList.remove('card_next');
						item.classList.remove('card_prev');
					}
		
					if (i > th.currentSlide) {
						item.classList.remove('card_prev');
						item.classList.add('card_next');
					}
				});


				var cardsLen = th.elements.cards.length;
				for (cardsLen; cardsLen--;) {
					var card = th.elements.cards[cardsLen];
					card.classList.remove('card_active');

					if (cardsLen === th.currentSlide) {
						card.classList.add('card_active');
					}
				}

				break;
			}
		}
		

		th.elements.list.style.transform = 'translate3d(' + x + 'px, 0, 1px)';


	},
	fadeTo: function(active) {

		var th = poster;

		if (!document.querySelectorAll('[data-effect-bg]').length) return;

		//th.elements.cards[th.currentSlide].querySelector('.card__h2').classList.remove('card__h2_show');
		//th.elements.cards[th.currentSlide].querySelector('.card__h2').classList.remove('card__h2_fading-animation');

		//th.active = active;
		th.currentSlide = active;

		var x = -th.positions[active];
		th.elements.list.style.transform = 'translate3d(' + x + 'px, 0, 1px)';

		th.offset = x;

		th.elements.list.classList.add('poster__list_no-transition');

		var bgs = th.elements.blocks[0].querySelectorAll('.poster__image');
		bgs.forEach(function(item) {
			item.classList.remove('poster__image_active');
		});
		bgs[active].classList.add('poster__image_active');

		th.elements.cards.forEach(function(item) {
			item.classList.add('card_no-transition');
			item.classList.remove('card_active');
			//item.querySelector('.card__h2').classList.remove('card__h2_fading-animation');
		});
		th.elements.cards[active].classList.add('card_active');
		th.elements.cards[active].querySelector('.card__h2').classList.add('card__h2_fading-animation');

		var current = active+1;

		if (current < 10) {
			current = "0" + current;
		}

		th.elements.current.innerHTML = current;

		setTimeout(function() {
			th.elements.cards.forEach(function(item) {
				item.classList.remove('card_no-transition');
				// item.querySelector('.card__h2').classList.remove('card__h2_fading-animation');
			});
			th.elements.list.classList.remove('poster__list_no-transition');
		}, 200);

		th.elements.cards.forEach(function(item, i) {
			if (i < th.currentSlide) {
				item.classList.remove('card_next');
				item.classList.add('card_prev');
			}

			if (i === th.currentSlide) {
				item.classList.remove('card_next');
				item.classList.remove('card_prev');
				//item.querySelector('.card__h2').classList.add('card__h2_fading-animation');
			}

			if (i > th.currentSlide) {
				item.classList.remove('card_prev');
				item.classList.add('card_next');
			}
		});

		th.fadeTitle(active);

		posterSliderCtrl.navCtrl(active);

		th.stop();
		th.start();


	},
	fadeTitle: function(index) {

		var th = poster;

		var activeClass = 'card_active';

		th.elements.fakeCards.forEach(function(item) {
			item.classList.remove(activeClass);
		});

		th.elements.fakeCards[index].classList.add(activeClass);

	},
	changeTitle: function(index) {

		var th = poster;

		var activeClass = 'card_active';

		th.elements.fakeCards.forEach(function(item) {
			item.classList.add('no-transition');
			item.classList.remove(activeClass);
		});

		th.elements.fakeCards[index].classList.add(activeClass);

		setTimeout(function() {
			th.elements.fakeCards.forEach(function(item) {
				item.classList.remove('no-transition');
			});
		});

	},
	goto: function(active) {

		var th = poster;

		th.elements.list.classList.add('animated');

		var x = -th.positions[active];
		th.elements.list.style.transform = 'translate3d(' + x + 'px, 0, 1px)';

		th.offset = x;


		var bgs = th.elements.blocks[0].querySelectorAll('.poster__image');
		var bgLen = bgs.length;
		for (bgLen; bgLen--;) {
			var bg = bgs[bgLen];
			bg.classList.remove('poster__image_active');
		}
		bgs[active].classList.add('poster__image_active');

		var cardsLen = th.elements.cards.length;
		for (cardsLen; cardsLen--;) {
			var card = th.elements.cards[cardsLen];
			card.classList.remove('card_active');
		}
		th.elements.cards[active].classList.add('card_active');

		var current = active+1;

		if (current < 10) {
			current = "0" + current;
		}

		th.elements.current.innerHTML = current;

		setTimeout(function() {
			th.elements.list.classList.remove('animated');
		}, 700);

		th.currentSlide = active;

		th.elements.cards.forEach(function(item, i) {
			if (i < th.currentSlide) {
				item.classList.remove('card_next');
				item.classList.add('card_prev');
			}

			if (i === th.currentSlide) {
				item.classList.remove('card_next');
				item.classList.remove('card_prev');
			}

			if (i > th.currentSlide) {
				item.classList.remove('card_prev');
				item.classList.add('card_next');
			}
		});


		//th.fadeTitle(active);
		th.changeTitle(active);

		posterSliderCtrl.navCtrl(active);


		th.stop();
		th.start();
		


	},
	eventsDesktop: function() {

		var th = poster;

		var len = th.elements.blocks.length;

		for (len; len--;) {
			var block = th.elements.blocks[len];
			var dr = block.querySelector('.poster__draggable');

			document.querySelector('.poster__content').addEventListener('mousemove', function(e) {

				th.mouseX = e.x;
				th.mouseY = e.y;

				if (!th.mouseDown) {
					th.update();
				}

			});

			dr.addEventListener('mousemove', function(e) {

				th.mouseX = e.x;
				th.mouseY = e.y;

				if (th.mouseDown) {
					// e=e || window.event;
					// pauseEvent(e);
					th.drag();
				}
			});

			document.querySelector('.poster__content').addEventListener('mousedown', function(e) {
				
				if ($(e.target).hasClass('watch-video') || $(e.target).closest('.watch-video').length) return;

				th.mouseDown = 1;
				th.startDrag = th.mouseX;
				block.classList.add('poster_active');
				cursor.setColor(1);
				$(".poster__draggable").css('z-index', '2');
				th.stop();

				th.elements.cards[th.currentSlide].querySelector('.card__h2').classList.remove('card__h2_fading-animation');
				
			});
			

			dr.addEventListener('mouseup', function() {
				th.mouseDown = 0;
				th.offset += th.current;
				th.current = 0;
				block.classList.remove('poster_active');
				cursor.setColor(0);
				if (th.offset > 0) {
					th.offset = 0;
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				if (th.offset < (-th.listWidth + th.sizes[th.sizes.length-1])) {
					th.offset = (-th.listWidth + th.sizes[th.sizes.length-1]);
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				th.goto(th.currentSlide);
				$(".poster__draggable").css('z-index', '1');

				th.stop();
				th.start();
			});

			document.querySelector('.poster__content').addEventListener('mouseup', function() {
				th.mouseDown = 0;
				th.offset += th.current;
				th.current = 0;
				block.classList.remove('poster_active');
				if (th.offset > 0) {
					th.offset = 0;
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				if (th.offset < (-th.listWidth + th.sizes[th.sizes.length-1])) {
					th.offset = (-th.listWidth + th.sizes[th.sizes.length-1]);
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				th.goto(th.currentSlide);
				$(".poster__draggable").css('z-index', '1');
			});

			dr.addEventListener('mouseleave', function() {
				th.mouseDown = 0;
				th.offset += th.current;
				th.current = 0;
				block.classList.remove('poster_active');
				if (th.offset > 0) {
					th.offset = 0;
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				if (th.offset < (-th.listWidth + th.sizes[th.sizes.length-1])) {
					th.offset = (-th.listWidth + th.sizes[th.sizes.length-1]);
					th.elements.list.classList.add('animated');
					setTimeout(function() {
						th.elements.list.classList.remove('animated');
					}, 700);
				}

				th.goto(th.currentSlide);
			});


		}


		var modal = document.querySelector('[data-modal="video"]');
		if (modal != undefined) {
			$(modal).on('modalOpened', function() {
				th.stop();
			});
	
			$(modal).on('modalClosed', function() {
				th.start();
			});
		}
		
	},
	onResize: function(width) {

		var th = poster;

		th.stop();

		th.width = width;
		th.height = th.elements.blocks[0].offsetHeight;

		th.startDrag = 0;
		th.offset = 0;
		th.current = 0;
		th.listWidth = 0;

		th.sizes = [];
		th.positions = [];

		var cards = th.elements.cards;
		var cardsLen = cards.length;
		for (var i = 0; i < cardsLen; i++) {
			var card = cards[i];
			var w = card.offsetWidth;
			th.sizes.push(w);
			th.positions.push(card.offsetLeft);
			th.listWidth += w;
			card.classList.remove('card_next');
			card.classList.remove('card_prev');
			card.classList.remove('card_active');

			if (i > 0) {
				card.classList.add('card_next');
			}
		}

		th.elements.list.width = th.listWidth;

		th.OrigDragK = th.dragK = th.listWidth/th.width;



		th.drag();

		th.elements.blocks[0].querySelectorAll('.poster__image').forEach(function(item, i) {
			item.classList.remove('poster__image_active');
		});

		th.goto(th.currentSlide);

		if (client.isMobile) {
			th.stop();
		}

	},
	events: function() {

		var th = poster;

		if (client.windowW > 1200) {
			th.eventsDesktop();
			th.device.desktop = 1;
		} else {
			// th.eventsTablet();
			// th.device.tablet = 1;
		}

		$(window).on('resize', function() {

			var w = $(this).width();

			if (w > 1200 && !th.device.desktop) {
				th.eventsDesktop();
			}


			th.onResize(w);

		});

	}
};


var posterSliderCtrl = {
	init: function() {

		var th = posterSliderCtrl;

		th.elements = {
			$navCards: $(".poster__slider-nav .card")
		};

		th.events();

	},

	navCtrl: function(cardIndex) {


		var th = posterSliderCtrl;
		th.elements.$navCards.removeClass('card_active');
		$('.poster__slider-nav .card').eq(cardIndex).addClass('card_active');



	},

	events: function() {

		var th = posterSliderCtrl;


		th.elements.$navCards.on('click', function(e){

			var $card = $(this);
			var cardIndex = $card.index();

			

				if (!client.isMobile) {
					if (poster.currentSlide != cardIndex) {
						poster.fadeTo(cardIndex);
						th.navCtrl(cardIndex);
					}
				} else {
					posterMob.goto(cardIndex);
					th.navCtrl(cardIndex);
				}
			

		})

	}
};


var scrollAnimatedCtrl = {

	init: function() {

		var th = scrollAnimatedCtrl;

		th.elements = {
			$scrollLine: $("[data-animated-one]")
		};

		th.events();

	},

	events: function() {

		var th = scrollAnimatedCtrl;

		$(window).scroll(function(){

			th.elements.$scrollLine.each(function(e){

				if ($(document).scrollTop() + $(window).height() > $(this).offset().top && $(document).scrollTop() - $(this).offset().top < $(this).height()) {

					if (!$(this).hasClass('scroll_animated')) {
						$(this).addClass('scroll_animated');
					}
				}

			})



		});

	}
};


var posterMob = {
	init: function() {

		var th = posterMob;

		th.elements = {
			$poster: $(".poster-mob"),
			$current: $(".poster-mob .status__current"),
			$count: $(".poster-mob .status__total"),
			$slider: $('.poster-mob__slider')
		};

		th.data = {
			count: null,
			current: 1,
			isActive: 0
		};

		th.events();

		th.elements.$slider.on('init', function(slick) {

			th.setSize();

			setTimeout(function() {
				var count = th.elements.$slider.slick('getSlick').slideCount;

				th.data.count = count;
				var c = count;
				if (c < 10) {
					c = '0' + c;
				}
				var cu = th.data.current;
				if (cu < 10) {
					cu = '0' + cu;
				}
				th.elements.$current.text(cu);
				th.elements.$count.text(c);
				th.elements.$slider.find('video').each(function() {
					this.play();
				});

			}, 500);

		});

		var options = th.elements.$slider.data('mobile-poster');
		if (client.isMobile) {
			//options.autoplay = true;
			th.data.isActive = 1;
		}
		//th.elements.$slider.slick(options);

	},
	setSize: function() {

		var th = posterMob;

		var height = $(window).height();

		if (client.windowW < 768) {
			th.elements.$poster.css('height', height);
		}

		if (client.windowW < 768 && !th.data.isActive) {
			th.elements.$poster.css('height', height);
			th.data.isActive = 1;
			setTimeout(function() {
				th.elements.$slider.slick('setPosition');
				//th.elements.$slider.slick('slickSetOption', 'autoplay', true);
				//th.elements.$slider.slick('slickGoTo', poster.currentSlide);
			}, 500);
		}
		if (client.windowW > 767 && th.data.isActive) {
			th.data.isActive = 0;
			th.elements.$poster.css('height', 'auto');
			//th.elements.$slider.slick('slickSetOption', 'autoplay', false);
		}

	},
	goto: function(index) {

		var th = posterMob;

		th.elements.$slider.slick('slickGoTo', index);

	},
	events: function() {

		var th = posterMob;

		th.elements.$slider.on('beforeChange', function(e, slick, prev, next) {
			var n = next+1;
			if (n < 10) {
				n = '0' + n;
			}
			th.elements.$current.text(n);
			//posterSliderCtrl.navCtrl(next);

			$('.poster-mob__slider-nav .item').removeClass('item_active');
			$('.poster-mob__slider-nav .item').eq(next).addClass('item_active');

			var v = th.elements.$slider.find('.slick-active video');
			if (v.length) {
				v[0].play();
			}
		});

		$('.poster-mob__slider-nav .item').on('click', function() {
			var index = $(this).index();
			th.elements.$slider.slick('slickGoTo', index);
		});

		$(window).on('resize', function() {
			th.setSize();
		});

		window.addEventListener("orientationchange", function() {
			th.setSize();
		}, false);

	}
};


window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();


window.cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (timPtr) {
        window.clearTimeout(timPtr);
    };
})();


modules.add('poster');
modules.add('posterSliderCtrl');
modules.add('scrollAnimatedCtrl');
modules.add('cursor');
modules.add('posterMob'); /*blocks/main/types/js/types.js*/ var typesHoverCtrl = {

	init: function(){

		var th = typesHoverCtrl;

		th.$cards = $('[data-types-card]');
		th.$bgWrap = $('[data-bg-wrap]');
		th.$bgImgs = $('[data-types-bg]');
		th.$list = $('[data-types-list]');

		th.events();
	},

	addOpacity: function($nearby){

		var th = typesHoverCtrl;

		$nearby.each(function(e){
			$(this).addClass('card_opacity');
		})

	},

	currentBg: function(index){

		var th = typesHoverCtrl;
		th.$bgImgs.removeClass('types__img_active');
		var $img = th.$bgImgs.eq(index);
		$img.addClass('types__img_active');

	},

	removeOpacity: function(){

		var th = typesHoverCtrl;

		th.$cards.removeClass('card_opacity');

	},

	events: function(){

		var th = typesHoverCtrl;

		th.$cards.hover(function(e){
			if (!client.isMobile) {
				var $card = $(this);
				var index = $card.index();
				var $nearby = $card.siblings(".card");
				th.addOpacity($nearby);
				th.currentBg(index);
			}
		}, function(){
			if (!client.isMobile) {
				th.removeOpacity();
			}
		});

		th.$list.hover(function(){
			if (!client.isMobile) {
				th.$list.addClass('types__list_active');
				th.$bgWrap.addClass('types__bg_active');
			}
		}, function(){
			if (!client.isMobile) {
				th.$list.removeClass('types__list_active');
				th.$bgImgs.removeClass('types__img_active');
				th.$bgWrap.removeClass('types__bg_active');
			}
		});

	}

};

modules.add('typesHoverCtrl'); /*blocks/main/career/js/career.js*/ 

var requirementsCtrl = {

	init: function(){

		var th = requirementsCtrl;
		th.$btn = $('[data-requirements-btn]');

		th.events();
	},

	requirementsShow: function($target, $requirements){

		$requirements.slideDown();
		$target.addClass('active');

	},

	requirementsHide: function($target, $requirements){

		$requirements.slideUp();
		$target.removeClass('active');

	},

	events: function(){

		var th = requirementsCtrl;

		th.$btn.click(function(e){

			var $target = $(this);
			var $requirements = $target.next();
			if (!$target.hasClass('active')) {
				th.requirementsShow($target, $requirements);
			} else {
				th.requirementsHide($target, $requirements);
			}

		})

	}

};


modules.add('requirementsCtrl'); /*blocks/main/map/js/map.js*/ var mapCtrl = {

	init: function() {

		var th = mapCtrl;

		th.elements = {
			$mapCountries : $('[data-map-country]'),
			$mapMarks : $('[data-mark-country]')
		}

		th.events();

	},

	hover: function(country){

		var th = mapCtrl;

		var $mapCountry = $('[data-map-country='+ country +']');

		$mapCountry.find('use').attr('fill', '#262626');

	},

	unhover: function(country){

		var th = mapCtrl;

		var $mapCountry = $('[data-map-country='+ country +']');

		$mapCountry.find('use').attr('fill', '#141414');

	},

	events: function(){

		var th = mapCtrl;

		th.elements.$mapMarks.hover(function(e){

			var $cityCard = $(this);
			var contry = $cityCard.data('mark-country');

			th.hover(contry);

		}, function(e){

			var $cityCard = $(this);
			var contry = $cityCard.data('mark-country');

			th.unhover(contry);

		})

	}
};

var addressCtrl = {

	init: function() {

		var th = addressCtrl;

		th.elements = {
			$select :  $('[data-custom-select=address]'),
			$options : $('[data-custom-select=address]').find('button.custom-select__item'),
			$addresses: $('[data-address]')
		}

		th.check();
		th.events();

	},

	check: function(){

		var th = addressCtrl;
		var $checkedCity = th.elements.$select.find('[selected]').val();
		th.showAddress($checkedCity);

	},

	showAddress: function(city) {

		var th = addressCtrl;
		th.elements.$addresses.removeClass('info__address_active');
		var $currentAddress = $('[data-address='+ city +']');
		$currentAddress.addClass('info__address_active');

	},

	events: function(){

		var th = addressCtrl;

		th.elements.$options.on('click', function(e){

			var value = $(this).data('select-item-value');

			th.showAddress(value);

		});

	}
};

modules.add('mapCtrl');
modules.add('addressCtrl'); /*blocks/main/modals/js/modals.js*/ 

var uploadCtrl = {

	init: function(){
		

		var th = uploadCtrl;

		th.$label = $("[data-upload-filename]");
		th.$uploadBtn = $('[data-upload]');
		th.$input = th.$uploadBtn.find('input');
		th.$closedBtn = $('[data-result-close]');
		th.$result = $('[data-result]');

		th.events();
	},

	getName: function(str){

		

		var th = uploadCtrl;

		var attach_size = 2.5*1024*1024; //5Ð¼Ð±
		var attach_file = str.files[0];

		if(attach_file.size > attach_size){
			$('.upload__select').css('color', 'red'); //ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð°Ñ‚Ñ‚Ð°Ñ‡, ÐµÑÐ»Ð¸ Ð¿Ñ€ÐµÐ²Ñ‹ÑˆÐµÐ½ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ñ„Ð°Ð¹Ð»Ð°
			$('.upload__input').val('or upload a resume'); //ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð°Ñ‚Ñ‚Ð°Ñ‡, ÐµÑÐ»Ð¸ Ð¿Ñ€ÐµÐ²Ñ‹ÑˆÐµÐ½ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ñ„Ð°Ð¹Ð»Ð°
			
		} else {

		}

	  if (str.value.lastIndexOf('\\')){
	    var i = str.value.lastIndexOf('\\')+1;
	  } else {
	    var i = str.value.lastIndexOf('/')+1;
	  }

	  var filename = str.value.slice(i);

	  th.showResult(filename);
	},

	showBtn: function(){

		var th = uploadCtrl;

	  th.$uploadBtn.removeClass('upload_hide');
	  th.$result.removeClass('result_show');
	  th.$input.val('');

	},

	showResult: function(filename){

		var th = uploadCtrl;

	  th.$uploadBtn.addClass('upload_hide');
	  th.$result.addClass('result_show');
	  th.$label.html(filename);

	},

	events: function(){

		var th = uploadCtrl;

		th.$closedBtn.on('click', function(e){

			e.preventDefault();
			th.showBtn();
		})

	}

};




// var videoSrcCtrl = {

// 	init: function(){

// 		var th = videoSrcCtrl;
// 		th.$btn = $('[data-modal-open=video]');
// 		th.$modal = $('[data-modal=video]');
// 		th.$iframe = th.$modal.find('iframe');

// 		th.events();
// 	},

// 	insertLink: function(src){

// 		var th = videoSrcCtrl;

// 		th.$iframe.attr('src', src);

// 	},

// 	clearLink: function(){

// 		var th = videoSrcCtrl;

// 		th.$iframe.attr('src', '');

// 	},

// 	events: function(){

// 		var th = videoSrcCtrl;

// 		th.$btn.click(function(e){

// 			var src = $(this).data('src');
// 			th.insertLink(src);

// 		});

// 		th.$modal.on('modalClosed', function(){

// 			th.clearLink();

// 		});

// 	}

// };



var selectCitiCtrl = {

	init: function(){

		var th = selectCitiCtrl;
		th.$btn = $('[data-mark-country]');
		th.$select = $('[data-custom-select=city]');
		th.$items = th.$select.find('[data-select-item-value]');

		th.events();
	},

	checkCity: function(value, text){

		var th = selectCitiCtrl;
		var $oldCheckCity = th.$select.find('[selected]');
		$oldCheckCity.removeAttr('selected');
		var $currentCity = $('option[value='+ value +']');
		$currentCity.attr('selected', true);
		customSelect.setActiveItem(th.$select, $currentCity, value, text);

	},

	hideActiveItem: function(value){

		var th = selectCitiCtrl;
		var $currentItem = $('[data-select-item-value='+ value +']');
    th.$items.removeClass('custom-select__item_hide');
    $currentItem.addClass('custom-select__item_hide');

	},

	events: function(){

		var th = selectCitiCtrl;

		th.$btn.on('click', function(e){

			var text = $(this).find('h3').text();
			var value = $(this).data('city');

			th.checkCity(value, text);
			th.hideActiveItem(value);

		});

	}

};



var selectVacancyCtrl = {

	init: function(){

		var th = selectVacancyCtrl;
		th.$btn = $('[data-vacancy]');
		th.$select = $('[data-custom-select=vacancy]');
		th.$items = th.$select.find('[data-select-item-value]');

		th.events();
	},

	checkVacancy: function(value, text){

		var th = selectVacancyCtrl;
		var $oldCheckVacancy = th.$select.find('[selected]');
		$oldCheckVacancy.removeAttr('selected');
		var $currentVacancy = $('option[value='+ value +']');
		$currentVacancy.attr('selected', true);
		customSelect.setActiveItem(th.$select, $currentVacancy, value, text);

	},

	hideActiveItem: function(value){

		var th = selectVacancyCtrl;
		var $currentItem = $('[data-select-item-value='+ value +']');
    th.$items.removeClass('custom-select__item_hide');
    $currentItem.addClass('custom-select__item_hide');

	},

	events: function(){

		var th = selectVacancyCtrl;

		th.$btn.on('click', function(e){

			var text = $(this).data('vacancy-text');
			var value = $(this).data('vacancy');

			th.checkVacancy(value, text);
			th.hideActiveItem(value);

		});

	}

};

var formsCtrl = {
	init: function() {

		var th = formsCtrl;

		th.elements = {
			$modalSuccess: $("[data-modal='thank']")
		};

		th.events();

	},
	events: function() {

		var th = formsCtrl;

		th.elements.$modalSuccess.on('modalClosed', function() {
			modals.closeAll();
			navModalCtrl.hideNav();
			document.body.style.overflowY = "auto";
			document.body.style.paddingRight = "0";
		});

	}
};

modules.add('uploadCtrl');
//modules.add('videoSrcCtrl');
modules.add('selectCitiCtrl');
modules.add('selectVacancyCtrl');
modules.add('formsCtrl');
 /*blocks/all-projects/projects/js/projects.js*/ 

//  todo
var projectsCardCtrl = {

	init: function(){

		var th = projectsCardCtrl;
		th.$inner = $('.all-projects__inner');

		if (!th.$inner.length) return;

		th.data = {
			isShow: 0
		};

		$(document).on('preloaderDone', function() {
			th.check();
			th.events();
		});
	},

	check: function(){

		var th = projectsCardCtrl;

		if (th.data.isShow) return;
		


	},
	
	events: function() {

		var th = projectsCardCtrl;

		$(document).on('scroll', function() {
			th.check();
		});

	}

};




var viewCardCtrl = {

	init: function(){

		var th = viewCardCtrl;

		th.elements = {
			$btns: $('[data-view]'),
			$cards: $('[data-filter-card]'),
			$firstBtn: $('[data-view=2]'),
			$secondBtn: $('[data-view=4]'),
			$wrap: $('[data-isotope]')
		};

		th.data = {
			column: 4,
			isImac: false
		};

		th.h = $('.all-projects__card').eq(0).outerHeight();
		th.w = $('.all-projects__card').eq(0).outerWidth();

		$('.all-projects__card').each(function() {
			var $card = $(this);

			$card.addClass('card_no-padding');
			$card.css({
				'height': th.h,
				'width': th.w
			})
		});

		if (client.windowW <= 1900) {
			var padding = (client.windowW - (th.w * th.data.column + th.data.column * 2)) / 2;
		} else {
			var padding = (client.windowW - (th.w * th.data.column * 2 + th.data.column * 2 * 2)) / 2;
		}

		$('.all-projects__body .wrapper_large').css({
			'padding-left': padding,
			'padding-right': padding
		});

		var activeHash = window.location.hash;
		if (activeHash === "") {
			th.setUrls('?all');
		} else {
			th.setUrls('');
		}


		setTimeout(function() {
			th.checkImac();
			th.setSizes();
			if (client.windowW > 1900 && th.data.column === 4) {
				th.cardReduction();
			}
		}, 500);

		th.events();

	},
	setUrls: function(query) {

		var th = viewCardCtrl;

		$(".all-projects .card").each(function() {
			var $a = $(this);

			var link = $a.attr('href');

			if (query === '') {

				link = link.replace('?all', '');
				$a.attr('href', link);
				 
			} else {
				if (link.indexOf(query) === -1) {
					link += query;
					$a.attr('href', link);
				}
			}
		});

	},
	setSizes: function() {

		var th = viewCardCtrl;

		$('.all-projects__card').each(function(){
			var $card = $(this);
			$card.removeClass('card_no-padding');
			$card.css({
				'height': 'auto',
				'width': ''
			})
		});

		$('.all-projects__body .wrapper_large').css({
			'padding': ''
		});

		th.h = $('.all-projects__card').eq(0).outerHeight();
		th.w = $('.all-projects__card').eq(0).outerWidth();

		$('.all-projects__card').each(function() {
			var $card = $(this);
			$card.addClass('card_no-padding');
			$card.css({
				'height': th.h,
				'width': th.w
			});
		});

		if (client.windowW < 1900) {
			var padding = (client.windowW - (th.w * th.data.column + th.data.column * 2)) / 2;
		} else {
			var padding = (client.windowW - (th.w * th.data.column * 2 + th.data.column * 2 * 2)) / 2;
		}

		$('.all-projects__body .wrapper_large').css({
			'padding-left': padding,
			'padding-right': padding
		})

		isotope.isotopeLayout();

	},
	checkImac: function(){

		var th = viewCardCtrl;

		if (client.windowW >= 1900 && !th.data.isImac) {
			th.renameBtns();
		}

		if (client.windowW < 1900 && th.data.isImac) {
			th.defaultBtns();
		}

	},

	renameBtns: function(){

		var th = viewCardCtrl;
		th.data.isImac = true;
		th.elements.$firstBtn.html('4');
		th.elements.$secondBtn.html('8');

	},

	defaultBtns: function(){

		var th = viewCardCtrl;
		th.data.isImac = false;
		th.elements.$firstBtn.html('2');
		th.elements.$secondBtn.html('4');

	},

	check: function(btn, number){

		var th = viewCardCtrl;

		if (number == 4 && th.data.column == 2) {
			th.cardReduction();
			th.activateButton(btn);
			th.setSizes()
		}

		if (number == 2 && th.data.column == 4) {
			th.cardsIncrease();
			th.activateButton(btn);
			th.setSizes()
		}

	},

	activateButton:function(btn){

		var th = viewCardCtrl;
		th.elements.$btns.removeClass('view__button_active');
		btn.addClass('view__button_active');

	},

	cardReduction: function(){

		var th = viewCardCtrl;

		th.elements.$cards.each(function(e){
			$(this).addClass('card_small');
			th.setSizes();
		});

		isotope.check();
		th.data.column = 4;


		

	},

	cardsIncrease: function(){

		var th = viewCardCtrl;

		th.elements.$cards.each(function(e){
			$(this).removeClass('card_small');
			th.setSizes();
		});

		isotope.check();
		th.data.column = 2;


	},

	events: function(){

		var th = viewCardCtrl;

		th.elements.$btns.on('click', function(e){
			var $btn = $(this);
			var number = $btn.data("view");
			th.check($btn, number);
		});

		$(window).resize(function(){
			th.checkImac();
			th.setSizes();
		});

		$(document).on('click', '.all-projects [data-filter]', function() {
			var query = '?all';

			if ($(this).data('filter') === '*') {
				th.setUrls(query);
			} else {
				th.setUrls('');
			}
		});

	}

};

modules.add('viewCardCtrl');
modules.add('projectsCardCtrl');



 /*blocks/project/hero/js/hero.js*/ var projectParallaxCtrl = {

	init: function(){

		var th = projectParallaxCtrl;
		th.$heroBg = $('[data-hero-bg]');
		th.$heroInner = $('[data-hero-inner]');

		!client.isMobile && th.parallax();
		th.events();

		var height = $(window).height();
		//th.$heroInner.css('height', height);
		if (client.windowW < 768) {
			th.$heroInner.css('height', height);
		} else {

			if (client.windowW <= 1200) {
				th.$heroInner.css('height', '480px');
			} else {
				th.$heroInner.css('height', height);
			}
		}
	},

	parallax: function(){

		var th = projectParallaxCtrl;
		var scrollTop = $(window).scrollTop();

		th.$heroBg.css({
			'-moz-transform': 'translate3d(0px, '+ scrollTop / 2 +'px, 1px)',
			'-webkit-transform': 'translate3d(0px, '+ scrollTop / 2 +'px, 1px)',
			'transform': 'translate3d(0px, '+ scrollTop / 2 +'px, 1px)'
		});
		th.$heroInner.css({
			'-moz-transform': 'translate3d(0px, '+ scrollTop / 4 +'px, 1px)',
			'-webkit-transform': 'translate3d(0px, '+ scrollTop / 4 +'px, 1px)',
			'transform': 'translate3d(0px, '+ scrollTop / 4 +'px, 1px)'
		});

	},

	events: function(){

		var th = projectParallaxCtrl;

		$(window).on('scroll', function() {
			!client.isMobile && th.parallax();
		});

		$(window).on('resize', function() {
			var height = $(window).height();
			
			if (client.windowW < 768) {
				th.$heroInner.css('height', height);
			} else {

				if (client.windowW <= 1200) {
					th.$heroInner.css('height', '480px');
				} else {
					th.$heroInner.css('height', height);
				}
			}
		})

	}

};


var projectArrowCtrl = {

	init: function(){

		var th = projectArrowCtrl;
		th.$arrow = $('[data-project-arrow]');

		if (!th.$arrow.length) return

		th.check();
		th.events();
	},

	check: function(){

		var th = projectArrowCtrl;
		var scrollTop = $(document).scrollTop();
		var checkpoint = scrollTop + client.windowH - 50;
		var topPosition = th.$arrow.offset().top;

		if (checkpoint >= topPosition && !th.$arrow.hasClass('hero__back_active')) {

			setTimeout(function(){
				th.$arrow.addClass('hero__back_active');
			}, 1000)

		};

	},

	events: function(){

		var th = projectArrowCtrl;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};

modules.add('projectArrowCtrl');


modules.add('projectParallaxCtrl'); /*blocks/about/we-best/js/we-best.js*/ 
var animateNumberCtrl = {

	init: function(){
		var th = animateNumberCtrl;
		th.$numbers = $('[data-animate-number]');

		if (!th.$numbers) return;

		th.check();
		th.events();
	},

	check: function(){

		var th = animateNumberCtrl;
		var scrollTop = $(document).scrollTop();
		var checkpoint = scrollTop + client.windowH;

		th.$numbers.each(function(){

			var $number = $(this);
			var topPosition = $number.offset().top;

			if (checkpoint >= topPosition && !$number.hasClass('card__bg_active')) {

				var value = $number.data('animate-number');
				var delay = $number.data('animate-delay');
				$number.addClass('card__bg_active');

				setTimeout(function(){
					$number.animateNumber({ number: value });
				}, delay)


			};
		})


	},

	events: function(){

		var th = animateNumberCtrl;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};


modules.add('animateNumberCtrl');

 /*blocks/about/gallery/js/gallery.js*/ 


var gallerySliderCtrl = {
	init: function() {

		var th = gallerySliderCtrl;

		th.elements = {
			$slick: $("[data-gallery-slick]"),
			$counterTotal: $(".counter__total"),
			$counterCurrent: $(".counter__current")
		};

		th.build();
		th.events();

	},

	build: function() {

		var th = gallerySliderCtrl;

		var items = th.elements.$slick.find('.item');
		var sum = items.length;
		if (sum < 10){
			th.elements.$counterTotal.html('0'+ sum +'')
		} else {
			th.elements.$counterTotal.html(sum)
		}

		

	},

	events: function(){

		var th = gallerySliderCtrl;

		th.elements.$slick.on('afterChange', function(event, slick, currentSlide, nextSlide){
			var num = currentSlide + 1;
			if (num < 10) {
		  	th.elements.$counterCurrent.html('0'+ num +'');
			} else {
		  	th.elements.$counterCurrent.html(num);
			}
		});
	}
};

modules.add('gallerySliderCtrl'); /*blocks/about/awards/js/awards.js*/ 


var awardsCut = {
	init: function() {

		var th = awardsCut;

		th.elements = {
			$btn: $('.awards__button'),
			$cutDesk: $('.awards__list_desk .awards__cut'),
			$cutTablet: $('.awards__list_tablet .awards__cut')
		};

		th.classes = {
			btnShow: 'awards__button_show'
		};

		th.data = {
			visibleCount: 7,
			stepCount: 7,
			total: th.elements.$cutDesk.find('.card').length,
			heightDesk: 0,
			heightTablet: 0,
			isMobile: client.isMobile
		};

		th.onInit();

		th.events();
		th.cut();

	},
	onInit: function() {

		var th = awardsCut;

		if (th.data.total > th.data.visibleCount) {
			th.elements.$btn.addClass(th.classes.btnShow);
		}
	},
	cut: function() {

		var th = awardsCut;

		var deskHeight = 0;
		th.elements.$cutDesk.find('.card').each(function(i) {

			var h = $(this).outerHeight();
			deskHeight += h;

			if (i >= th.data.visibleCount-1) {
				return false;
			}
		});

		var tabHeight = 0;
		th.elements.$cutTablet.find('.card').each(function(i) {
			var h = $(this).outerHeight();
			tabHeight += h;

			if (i >= th.data.visibleCount-1) {
				return false;
			}
		});

		th.elements.$cutDesk.css({
			'height': deskHeight
		});

		th.elements.$cutTablet.css({
			'height': tabHeight
		});

		th.data.heightDesk = deskHeight;
		th.data.heightTablet = tabHeight;


	},
	loadMore: function() {

		var th = awardsCut;

		var deskHeight = 0;
		var count = 0;
		th.elements.$cutDesk.find('.card').each(function(i) {

			if (i < th.data.visibleCount) return;

			var h = $(this).outerHeight();
			deskHeight += h;
			count++;

			if (i >= (th.data.visibleCount-1) + th.data.stepCount) {
				return false;
			}

		});

		th.data.heightDesk += deskHeight;

		var tabHeight = 0;
		th.elements.$cutTablet.find('.card').each(function(i) {

			if (i < th.data.visibleCount) return;

			var h = $(this).outerHeight();
			tabHeight += h;

			if (i >= (th.data.visibleCount-1) + th.data.stepCount) {
				return false;
			}

		});

		th.data.heightTablet += tabHeight;



		th.data.visibleCount += count;

		if (th.data.visibleCount >= th.data.total) {
			th.hideButton();
		}

		th.elements.$cutDesk.animate({
			'height': th.data.heightDesk
		}, 1000);

		th.elements.$cutTablet.animate({
			'height': th.data.heightTablet
		}, 1000);

	},
	hideButton: function() {
		
		var th = awardsCut;

		th.elements.$btn.slideUp();

	},
	refresh: function() {

		var th = awardsCut;

		if (!client.isMobile) {


			var deskHeight = 0;
			th.elements.$cutDesk.find('.card').each(function(i) {

				var h = $(this).outerHeight();
				deskHeight += h;
				if (i >= th.data.visibleCount-1) {
					return false;
				}

			});
			

			th.elements.$cutDesk.css({
				'height': deskHeight
			});

			th.data.heightDesk = deskHeight;


			th.data.isMobile = 0;
			return;
		}

		if (client.isMobile) {

			var tabHeight = 0;
			th.elements.$cutTablet.find('.card').each(function(i) {

				var h = $(this).outerHeight();
				tabHeight += h;
				if (i >= th.data.visibleCount-1) {
					return false;
				}

			});


			th.elements.$cutTablet.css({
				'height': tabHeight
			});

			th.data.heightTablet = tabHeight;
	


			th.data.isMobile = 1;
			return;
		}

	},
	events: function() {

		var th = awardsCut;

		th.elements.$btn.on('click', function() {
			th.loadMore();
		});

		$(window).on('resize', function() {
			setTimeout(function() {
				th.refresh();
			}, 0);
		});

	}
}


var awardsCtrl = {
	init: function() {

		var th = awardsCtrl;

		th.elements = {
			$btns: $("[data-award-btn]")
			// $counterTotal: $(".counter__total"),
			// $counterCurrent: $(".counter__current")
		};

		th.events();

	},

	cardActivation: function($card, $cardBody){

		var th = awardsCtrl;

		$card.addClass('card_active');
		$cardBody.slideDown(function() {
			awardsCut.refresh();
		});

	},

	cardDeactivation: function($card, $cardBody){

		var th = awardsCtrl;

		$card.removeClass('card_active');
		$cardBody.slideUp(function() {
			awardsCut.refresh();
		});

	},

	events: function() {

		var th = awardsCtrl;

		th.elements.$btns.click(function(e){

			if (client.windowW < 768) {
	      var $target = $(e.target);
	      var $card = $target.closest('.card');
	      var $cardBody = $target.next();

	      if ($card.hasClass('card_active')) {
	      	th.cardDeactivation($card, $cardBody);
	      } else {
	      	th.cardActivation($card, $cardBody);
	      }
	    };
		});

	}
};

modules.add('awardsCtrl');
modules.add('awardsCut'); /*blocks/about/team/js/team.js*/ 
var teamCardCtrl = {

	init: function(){

		var th = teamCardCtrl;
		th.$team = $('[data-team-list]');

		if (!th.$team.length) return

		th.check();
		th.events();
	},

	check: function(){

		var th = teamCardCtrl;
		var scrollTop = $(document).scrollTop();
		var checkpoint = scrollTop + client.windowH - 100;
		var topPosition = th.$team.offset().top;

		if (checkpoint >= topPosition && !th.$team.hasClass('team__list_active')) {

			th.$team.addClass('team__list_active')

		};

	},

	events: function(){

		var th = teamCardCtrl;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};


modules.add('teamCardCtrl');

 /*blocks/blog/blog/js/blog.js*/ 
var blogCardCtrl = {

	init: function(){

		var th = blogCardCtrl;
		th.$blog = $('[data-blog-list]');

		if (!th.$blog.length) return;


		if (preloader.getProgress() != 1.00) {
			$(document).on('preloaderDone', th.animate);
		} else {
			th.animate()
		}

	},

	animate: function(){

		var th = blogCardCtrl;

		th.$blog.addClass('blog__inner_active');
	}

};


modules.add('blogCardCtrl');
 /*blocks/career/career/js/career.js*/ var vacancyRequirementsCtrl = {

	init: function(){

		var th = vacancyRequirementsCtrl;
		th.$btns = $('[data-vacancy-requirements-btn]');

		th.events();
	},

	requirementsShow: function($target, $requirements){

		$requirements.slideDown();
		$target.addClass('active');

	},

	requirementsHide: function($target, $requirements){

		$requirements.slideUp();
		$target.removeClass('active');

	},

	events: function(){

		var th = vacancyRequirementsCtrl;

		th.$btns.click(function(e){

			var $target = $(this);
			var $requirements = $target.next();

			if (client.windowW < 768) {
				if (!$target.hasClass('active') && client.windowW < 768) {
					th.requirementsShow($target, $requirements);
				} else {
					th.requirementsHide($target, $requirements);
				}
			}

		});

	}

};


var vacancyHeightCtrl = {

	init: function(){

		var th = vacancyHeightCtrl;
		th.$cards = $('[data-vacancy-requirements]');
		th.maxHeight = 0;
		th.documentReady = false;
		th.windowLoad = false;

		th.events();
	},

	onWindowLoad: function(){

		var th = vacancyHeightCtrl;
		th.windowLoad = true;
		th.checkLoad();

	},

	onDocumentReady: function(){

		var th = vacancyHeightCtrl;
		th.documentReady = true;
		th.checkLoad();

	},

	checkLoad: function(){

		var th = vacancyHeightCtrl;

		if (th.windowLoad && th.documentReady) {
			th.check();
		}

	},

	check: function(){

		var th = vacancyHeightCtrl;

		if (client.windowW >= 768) {
			th.$cards.each(function(){
				var $card = $(this);
				$card.css('height', 'auto');
				var height = $card.innerHeight();
				if (height > th.maxHeight) {
					th.maxHeight = height;
				}
			})

			th.$cards.each(function(){
				var $card = $(this);
				$card.innerHeight(th.maxHeight);
			})
		} else {
			th.$cards.each(function(){
				var $card = $(this);
				$card.css('height', 'auto');
			})
		}
	},

	events: function(){

		var th = vacancyHeightCtrl;


		$(window).resize(function(){
			th.maxHeight = 0;
			th.check();
		});
	}

};


modules.add('vacancyHeightCtrl');

modules.add('vacancyRequirementsCtrl'); /*blocks/media/media/js/media.js*/ 
var mediaJournalCtrl = {

	init: function(){

		var th = mediaJournalCtrl;
		th.$cards = $('[data-media-card]');
		th.$cardBtns = $('[data-media-card-btn]');
		th.$journals = $('[data-journal]');
		th.$close = $('[data-journal-close]');
		th.$list = $('[data-media-list]');

		if (!th.$cardBtns.length) return;

		th.check();
		th.events();
	},

	check: function(){

		var th = mediaJournalCtrl;
		var listWidth = th.$list.outerWidth();
		var checkpoint = th.$list.offset().left + listWidth;

		th.$cards.each(function(){

			var $card = $(this);
			var $journal = $card.find('[data-journal]')
			var journalWidth = $journal.outerWidth();
			var offsetLeft = $card.offset().left;
			var rightBorder = offsetLeft + journalWidth;

			if (rightBorder > checkpoint) {
				$journal.addClass('journal_right');
			}

			if (rightBorder <= checkpoint && $journal.hasClass('journal_right')) {
				$journal.removeClass('journal_right');
			}

		})

	},

	showJournal: function($mediaBtn){

		var th = mediaJournalCtrl;

		var $journal = $mediaBtn.siblings('[data-journal]');
		var $card = $mediaBtn.closest('.card');
		th.hideJournalAll();
		$card.addClass('card_active');
		var k = client.windowW > 767 && client.windowW < 1201 ? 2 : 1;
		var offsetRight = client.windowW - $card.offset().left - ($card.width()*k);
		console.log(offsetRight);
		if (offsetRight < 24) {
			$journal.css({'left': 'auto', 'right': 0})
		}
		$journal.slideDown().addClass('journal_active');

	},

	hideJournal: function($closeJournal){

		var th = mediaJournalCtrl;
		var $journal = $closeJournal.closest('[data-journal]');
		var $card = $closeJournal.closest('.card');

		$journal.slideUp(function() {
			$journal.css({'right': 'auto', 'left': 0});
		});
		$card.removeClass('card_active');

	},

	hideJournalAll: function(){

		var th = mediaJournalCtrl;
		th.$journals.each(function(){

			var $journal = $(this);

			if ($journal.hasClass('journal_active')) {
				var $card = $journal.closest('.card');
				$journal.slideUp(function() {
					$journal.css({'right': 'auto', 'left': 0})
				}).removeClass('journal_active');
				$card.removeClass('card_active');
			}

		})


	},

	events: function(){

		var th = mediaJournalCtrl;

		th.$cardBtns.on('click', function(){

			var $mediaBtn = $(this);
			th.showJournal($mediaBtn);

		});

		th.$close.on('click', function(){

			var $closeJournal = $(this);
			th.hideJournal($closeJournal);

		});

		$(document).on('click', function(e){
			var $target = $(e.target);

			if (!$target.closest('[data-media-list]').length){
				th.hideJournalAll();
			}
		});

	}

};

//  todo
var mediaCardCtrl = {

	init: function(){
		var th = mediaCardCtrl;
		th.$media = $('[data-media-list]');

		if (!th.$media.length) return
		th.animate();
		if (preloader.getProgress() != 1.00) {
			$(document).on('preloaderDone', th.animate);
		} else {
			th.animate()
		}
	},

	animate: function(){

		var th = mediaCardCtrl;
		th.$media.addClass('media__inner_active');

	}

};



modules.add('mediaJournalCtrl');


modules.add('mediaCardCtrl');

 /*blocks/search-results/search-results/js/search-results.js*/ 
var searchCardCtrl = {

	init: function(){

		var th = searchCardCtrl;
		th.$search = $('[data-search-list]');

		if (!th.$search.length) return

		th.check();
		th.events();
	},

	check: function(){

		var th = searchCardCtrl;
		var scrollTop = $(document).scrollTop();
		var checkpoint = scrollTop + client.windowH - 100;
		var topPosition = th.$search.offset().top;

		if (checkpoint >= topPosition && !th.$search.hasClass('search-results__inner_active')) {

			setTimeout(function(){
				th.$search.addClass('search-results__inner_active')
			}, 2000);

		};

	},

	events: function(){

		var th = searchCardCtrl;

		$(document).scroll(function(){

			th.check();

		});

		$(window).resize(function(){

			th.check();

		});

	}

};


modules.add('searchCardCtrl');

 /*js/sliders.js*/ 

var sliders = {
	init: function() {

		var th = sliders;

		th.elements = {
			$slicks: $("[data-slick]"),
			$customSlicks: $("[data-custom-slick]"),
			$sliders: $("[data-slick-slider]")
		};

		th.build();

	},

	build: function() {

		var th = sliders;

		


	}
};

modules.add('sliders'); /*js/isotope.js*/ 

var isotope = {
	init: function() {

		var th = isotope;

		th.elements = {
			$filter: $("[data-isotope]"),
			$btnsBlock: $('#filters'),
			$btns: $('#filters').find('button')
		};

		th.check();
		th.events();

	},

	check: function() {

		var th = isotope;

		var anc = window.location.hash.replace("#", "");

		// th.$grid = th.elements.$filter.isotope({
		//   itemSelector: '[data-filter-card]',
		//   layoutMode: 'fitRows',
		//   filter: '*'
		// });

		if (anc !== "") {
			var filterValue = "[data-filter-card="+ anc +"]";
			var $currentBtn = $('[data-filter="'+ filterValue +'"]');


			th.$grid = th.elements.$filter.isotope({
				itemSelector: '[data-filter-card]',
				layoutMode: 'fitRows',
				initLayout: false
			});

			th.$grid.one("arrangeComplete", function() {
				//th.build(filterValue, $currentBtn);
				
				setTimeout(function() {
					th.build(filterValue, $currentBtn, anc);
				}, 200);
			});
			th.$grid.isotope();
		} 
		else {
			// th.$grid = th.elements.$filter.isotope({
				// itemSelector: '[data-filter-card]',
				// layoutMode: 'fitRows'
			// });
		};

	},

	isotopeLayout: function(){

		var th = isotope;

		//th.$grid.isotope('layout');

	},

	build: function(filterValue, $currentBtn, anc){

		var th = isotope;

		th.elements.$btns.removeClass('filters__button_active');
		th.$grid.isotope({
		  itemSelector: '[data-filter-card]',
		  filter: filterValue,
		  layoutMode: 'fitRows'
		});
		$currentBtn.addClass('filters__button_active');

		var hash = '#' + anc;


		if (anc === '*') {
			if(history.pushState) {
				history.pushState(null, null, window.location.pathname + window.location.search);
			}
			else {
				location.hash = '';
			}
		} else {
			if(history.pushState) {
				history.pushState(null, null, hash);
			}
			else {
				location.hash = hash;
			}
		}

	},

	events: function(){

		var th = isotope;

		th.elements.$btnsBlock.on( 'click', 'button', function() {
		var $currentBtn = $( this );
			
		  var filterValue = $currentBtn.attr('data-filter');
		  
		  var currentCards = $(filterValue)
		  var currentImages = currentCards.find('.card__bg:not(.b-loaded)');

		  currentImages.each(function(){
		  	var lazyImgSrc = $(this).data('src');
		  	console.log(this);
		  	$(this).attr('src', lazyImgSrc);
		  	$(this).addClass('b-loaded');
		  	
		  });
		  if (filterValue === "*") {
		  	th.build(filterValue, $currentBtn, '*');
		  } else {
			var anc = filterValue.split('=')[1].slice(0, -1);
		  	th.build(filterValue, $currentBtn, anc);
		  }
		});

	}
};

modules.add('isotope');





// var isotope = {
// 	init: function() {

// 		var th = isotope;

// 		th.elements = {
// 			// $filter: $("[data-isotope]"),
// 			$btnsBlock: $('#filters'),
// 			$btns: $('#filters').find('button'),
// 			$grid: $('[data-isotope]')
// 		};

// 		th.isInit = false;
// 		th.filterValue = false;

// 		// th.$grid = $(th.elements.$filter);

// 		// th.isotopeInit();
// 		th.check();
// 		th.events();
// 		// th.getHashFilter();

// 	},

// 	// getHashFilter: function() {
// 	//   var hash = location.hash;
// 	//   // get filter=filterName
// 	//   var matches = location.hash.match( /filter=([^&]+)/i );
// 	//   console.log("matches", matches);
// 	//   var hashFilter = matches && matches[1];
// 	//   console.log("hashFilter", hashFilter);
// 	//   return hashFilter && decodeURIComponent( hashFilter );
// 	// },

// 	isotopeInit: function(){

// 		var th = isotope;

//     th.elements.$grid.isotope({
//       itemSelector: '[data-filter-card]',
// 		  layoutMode: 'fitRows'
//     });

// 	},

// 	check: function() {

// 		var th = isotope;
// 		var anc = window.location.hash.replace("#", "");

// 		if (anc !== "" && !isInit) {

// 		  th.filterValue = "[data-filter-card="+ anc +"]";
// 		  var $currentBtn = $('[data-filter="'+ filterValue +'"]');
// 		  th.filtration($currentBtn);
// 		} else {
// 			th.isotopeInit();
// 		}

// 	},

// 	filtration: function($currentBtn){

// 		var th = isotope;

// 		th.elements.$btns.removeClass('filters__button_active');
// 		th.elements.$grid.isotope({
// 		  itemSelector: '[data-filter-card]',
// 		  filter: th.filterValue,
// 		  layoutMode: 'fitRows'
// 		});
// 		$currentBtn.addClass('filters__button_active');

// 	},

// 	events: function(){

// 		var th = isotope;

// 		th.elements.$btnsBlock.on( 'click', 'button', function() {
// 			var $currentBtn = $(this);
// 		  th.filterValue = $currentBtn.attr('data-filter');
// 		  th.filtration($currentBtn);
// 		});

// 	}
// }; /*js/video.js*/ 

var customPlayer = function($video) {

    var th = this;

    var $video = $video;
    var video = $video[0];
    var timer = null;
    var duration = undefined;

    var $parent = $video.closest('.custom-video');
    var $progress = $parent.find('.custom-video__progress');
    var $canvas = $parent.find('.custom-video__canvas');
    var ctx = $canvas[0].getContext('2d');

    var width = $canvas.width();
    var height = $canvas.height();
    var ratio = null;
    var lineY = 0;

    var controls = {
        $button: $parent.find('.custom-video__button')
    };

    var step = function() {

        timer = requestAnimationFrame(step);
       
        update();

    };

    var update = function() {

        ctx.clearRect(0, 0, width, height);

        var k = video.currentTime/duration;
        var offset = k*width;
        ctx.strokeStyle = "#4F4F4F";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();

        ctx.strokeStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(offset, lineY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(offset, height);
        ctx.stroke();

    };

    var setCanvas = function() {

        width = $canvas.width();
        height = $canvas.height();

        var devicePixelRatio = window.devicePixelRatio || 1,
        backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                            ctx.mozBackingStorePixelRatio ||
                            ctx.msBackingStorePixelRatio ||
                            ctx.oBackingStorePixelRatio ||
                            ctx.backingStorePixelRatio || 1;

        ratio = devicePixelRatio / backingStoreRatio;

        $canvas[0].width = width*ratio;
        $canvas[0].height = height*ratio;

        ctx.scale(ratio, ratio);

        lineY = height/2;

        update();

    };

    var methods = function() {

        th.play = function() {
            step();
            video.play();
            controls.$button.addClass('custom-video__button_active');
        };
        
        th.pause = function() {
            video.pause();
            cancelAnimationFrame(timer);
            controls.$button.removeClass('custom-video__button_active');
        };

        th.stop = function() {
            video.pause();
            video.currentTime = 0;
            controls.$button.removeClass('custom-video__button_active');
            cancelAnimationFrame(timer);
            update();
        };

    };

    var events = function() {

        $video.on('videoPlay', function() {
            th.play();
        });

        $video.on('videoPause', function() {
            th.pause();
        });

        $video.on('videoStop', function() {
            th.stop();
        });

        if (!video.duration) {
            video.oncanplay = function() {
                duration = video.duration;
            };
        } else {
            duration = video.duration;
        }

        video.onended = function() {
            th.stop();
        };

        controls.$button.on('click', function() {
            if (controls.$button.hasClass('custom-video__button_active')) {
                th.pause();
            } else {
                th.play();
            }
        });

        $progress.on('click', function(e) {
            var parentOffset = $(this).offset();
            var relX = e.pageX - parentOffset.left;
            var time = relX/width*duration;
            video.currentTime = time;
            update();
        });

        $video.on('click', function() {
            if (controls.$button.hasClass('custom-video__button_active')) {
                th.pause();
            } else {
                th.play();
            }
        });

        $(window).on('resize', setCanvas);

    };

    setCanvas();
    methods();
    events();

};

var mobileVideo = {
    init: function() {

        var th = mobileVideo;

        th.elements = {
            $btns: $("[data-mobile-src]"),
            $video: $(".mobile-video"),
            $source: $(".mobile-video source")
        };

        if (!th.elements.$video.length) return;

        th.events();

    },
    play: function(src) {

        var th = mobileVideo;

        if (client.isMobile) {
            modals.open('mobile-video');
            th.elements.$source.attr('src', src);
            th.elements.$video[0].oncanplay = function() {
                th.elements.$video[0].play();
            };
            th.elements.$video[0].load();
        }

    },
    events: function() {

        var th = mobileVideo;

        th.elements.$btns.on('click', function() {
            var src = $(this).data('mobile-src');
            th.play(src);
        });

        $("[data-modal='mobile-video']").on('modalClosed', function() {
            th.elements.$video[0].pause();
            th.elements.$source.attr('src', '');
        });

        th.elements.$video[0].addEventListener("webkitendfullscreen", function(){
            if(document.fullScreenElement || document.webkitIsFullScreen == true || document.mozFullScreen || document.msFullscreenElement ){

            } else {
                modals.close('mobile-video');
            }
        }, false);

    }
};

var video = {
    init: function() {

        var th = video;

        th.elements = {
            $videoModals: $(".modal_video"),
            $videos: $('[data-custom-video]'),
            $btns: $('[data-desktop-video]')
        };

        th.elements.$videos.each(function() {
            new customPlayer($(this));
        });

        th.events();

    },
    events: function() {

        var th = video;

        th.elements.$btns.on('click', function() {
            if (client.isMobile) return;
            var id = $(this).data('desktop-video');
            modals.open(id);
            $('[data-modal="'+ id +'"]').find('video').trigger('videoPlay');
        });

        th.elements.$videoModals.on('modalClosed', function() {
            $(this).find('video').trigger('videoStop');
        });

        // th.elements.$videoModals.on('modalOpened', function() {
        //     $(this).find('video').trigger('videoPlay');
        // });

        
    }
};

modules.add('video');
modules.add('mobileVideo');





window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();


window.cancelAnimationFrame = (function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (timPtr) {
        window.clearTimeout(timPtr);
    };
})(); /*js/app.js*/ 

var ydznApp = {

	init: function() {

		var th = ydznApp;

		tools.init(['backgrounds', 'modals', 'select', 'forms', 'preloader']);

		modules.init();

	}
};


$(document).ready(function() {

	if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$('body').addClass('browser-safari');
	}

	$(window).resize(function() {
		setTimeout(function() {
			poster.init();
		}, 300);
	});

	if ($(window).width() <= 1200) {
		$('[data-wow-delay]').each(function() {
			$(this).attr('data-wow-delay', '0s');
		});

		$('[data-split-letters]').each(function() {
			$(this).attr('data-split-letters', '0');
		});

		$('[data-button]').each(function() {
			$(this).attr('data-button', '0');
		});
	}

	ydznApp.init();

	var offset = 0;


	if (!$('[data-vacancy-requirements]').length) return;

	vacancyHeightCtrl.onDocumentReady();


});

$(window).load(function(){
	//projectsCardCtrl.done();
	if (!$('[data-vacancy-requirements]').length) return;

	vacancyHeightCtrl.onWindowLoad();

});