// Click and form tracking.
// GA_ID = the Google Analytics 4 measurement ID ("G-XXXXXXXXXX").
// While it is empty, nothing is loaded and nothing is sent.
export const GA_ID = "";

export function initTracking() {
  if (!GA_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
}

export function track(name, params) {
  try { if (window.gtag) window.gtag("event", name, params || {}); } catch (e) {}
}

// Any element with data-track="event_name" (and optional data-loc) is counted on click.
export function bindClicks(root) {
  (root || document).addEventListener("click", function (e) {
    const el = e.target.closest("[data-track]");
    if (el) track(el.dataset.track, { location: el.dataset.loc || "", page: location.pathname });
  });
}
