module.exports=function(b){var d=b.target,k=b.animations,n=void 0===b.defaultDuration?250:b.defaultDuration,p=void 0===b.defaultEasing?"linear":b.defaultEasing,c=void 0===b.DEBUG?!1:b.DEBUG;c&&console.info("DEBUG: simpleAnimation startet with config:",b);var l=[],m=[];k.forEach(function(a,b){c&&console.info("DEBUG: process "+(b+1)+". animation with options:",a);var e=a.attribute,h=void 0===a.duration?n:a.duration,k=void 0===a.easing?p:a.easing,f=a.animateTo;if(void 0===a.pctToScroll?0:a.pctToScroll){c&&
console.info('DEBUG: "pctToScroll" is true, convert "'+f+'"');var g=-1!==e.indexOf("height"),q=-1!==e.indexOf("width");if(!g&&!q)throw Error("Invalid direction");g=(g?d.scrollHeight:d.scrollWidth)*(parseFloat(f)/100)+"px";c&&console.info('DEBUG: converted "'+f+'" to "'+g+'" from attribute "'+e+'"');f=g}m.push({attribute:e,animateTo:f});h=e+" "+(h/1E3+"s")+" "+k;l.push(h);c&&console.info('DEBUG: animate "'+e+'" to "'+f+'" with transition: '+h)});c&&console.info("DEBUG: transitions to append: "+l.join());
d.style.transition=l.join();c&&console.info("DEBUG: transitions now are: "+d.style.transition);m.forEach(function(a){c&&console.info("DEBUG: attribute to append: "+a.attribute+", value to append: "+a.animateTo);d.style[a.attribute]=a.animateTo;c&&console.info('DEBUG: attribute "'+a.attribute+'" now is: '+d.style[a.attribute])})};
