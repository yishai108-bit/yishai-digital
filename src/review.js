// Yishai's WhatsApp number (050-659-2011), international format without "+"
var PHONE = "972506592011";
var rating = 0;
var starsEl = document.getElementById("stars");
var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>';
for (var i = 1; i <= 5; i++) {
  var b = document.createElement("button");
  b.type = "button"; b.innerHTML = STAR; b.dataset.v = i;
  b.setAttribute("role", "radio"); b.setAttribute("aria-label", i + " כוכבים");
  b.onclick = function(){ rating = +this.dataset.v; paint(); };
  starsEl.appendChild(b);
}
function paint(){ starsEl.querySelectorAll("button").forEach(function(b){ var on = +b.dataset.v <= rating; b.classList.toggle("on", on); b.setAttribute("aria-checked", +b.dataset.v === rating); }); }

function v(id){ return document.getElementById(id).value.trim(); }
document.getElementById("f").addEventListener("submit", function(e){
  e.preventDefault();
  var name = v("name"), biz = v("biz"), q1 = v("q1"), q2 = v("q2"), q3 = v("q3");
  if (!name || !(q1 || q2 || q3)) { document.getElementById("err").style.display = "block"; return; }
  var lines = ["המלצה ל-yishai.digital", "", "שם: " + name];
  if (biz) lines.push("עסק: " + biz);
  if (rating) lines.push("דירוג: " + rating + " מתוך 5");
  if (q1) lines.push("", "מה עשינו: " + q1);
  if (q2) lines.push("", "מה השתנה: " + q2);
  if (q3) lines.push("", "לחבר שמתלבט: " + q3);
  lines.push("", document.getElementById("ok").checked ? "מותר להציג באתר עם השם." : "לא להציג באתר.");
  location.href = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(lines.join("\n"));
  document.getElementById("f").style.display = "none";
  document.getElementById("thanks").style.display = "block";
});
