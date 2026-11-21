import "./main.js";
import { track } from "./track.js";
import { waUrl } from "./wa.js";

var form = document.getElementById("check-form");
var err = document.getElementById("err");
var started = false;
form.addEventListener("input", function () {
  if (!started) { started = true; track("check_start", { page: location.pathname }); }
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var biz = form.biz.value.trim();
  var kind = form.kind.value;
  if (!biz || !kind) { err.hidden = false; (biz ? form.kind : form.biz).focus(); return; }
  err.hidden = true;
  track("check_submit", { business_type: kind });
  var text = "היי ישי, אשמח לבדיקה חינם.\nשם העסק: " + biz + "\nסוג העסק: " + kind;
  window.open(waUrl(text), "_blank", "noopener") || (location.href = waUrl(text));
});
