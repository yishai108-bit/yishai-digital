// Yishai's WhatsApp number (050-659-2011), international format without "+"
var PHONE = "972506592011";
var TEXT = "היי ישי, הגעתי מהאתר שלך. אשמח שתסתכל על העסק שלי:";
document.querySelectorAll(".wa-link").forEach(function(a){
  a.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(TEXT);
  a.target = "_blank"; a.rel = "noopener";
});
var nav = document.getElementById("nav");
addEventListener("scroll", function(){ nav.classList.toggle("scrolled", scrollY > 8); }, {passive:true});
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
