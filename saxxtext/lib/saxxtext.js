function setAnimationSaxx(t,e){!function(t,e){setTimeout(function(){var s,o=document.querySelectorAll(t);for(s=0;s<o.length;++s)o[s].removeAttribute("class",e)},900)}(t,e),function(t,e){var s,o=document.querySelectorAll(t);for(s=0;s<o.length;++s)o[s].setAttribute("class",e)}(t,e)}function setSaxxMouseEffect(t,e,s,o){var r=document.querySelectorAll(t);for(i=0;i<r.length;++i)r[i].addEventListener("mouseover",function(){this.style.color=o,this.style.cursor="default",this.setAttribute("class",e)}),r[i].addEventListener("mousemove",function(){this.style.color=o,this.style.cursor="default",this.setAttribute("class",e)}),r[i].addEventListener("mouseout",function(){this.style.color=s,this.style.cursor="default",this.removeAttribute("class",e)})}
