// Yishai's WhatsApp number (050-659-2011), international format without "+"
export const PHONE = "972506592011";
export function waUrl(text) {
  return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text);
}
export function bindWaLinks(text) {
  document.querySelectorAll(".wa-link").forEach(function (a) {
    a.href = waUrl(text);
    a.target = "_blank"; a.rel = "noopener";
  });
}
