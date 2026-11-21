import { initTracking, bindClicks } from "./track.js";
import { bindWaLinks } from "./wa.js";

initTracking();
bindClicks();
bindWaLinks("היי ישי, הגעתי מהאתר שלך. אשמח שתסתכל על העסק שלי:");

var nav = document.getElementById("nav");
if (nav) addEventListener("scroll", function(){ nav.classList.toggle("scrolled", scrollY > 8); }, {passive:true});
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, {rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
}
if (matchMedia("(hover:none)").matches && "IntersectionObserver" in window) {
  var fo = new IntersectionObserver(function(es){
    es.forEach(function(e){ e.target.classList.toggle("on", e.isIntersecting); });
  }, {rootMargin:"-30% 0px -30% 0px"});
  document.querySelectorAll(".flip").forEach(function(f){ fo.observe(f); });
}

