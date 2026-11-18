/* Lab R Group — custom SVG icon & illustration library
   Primitives-only (circles, rectangles, lines). */

const LABR_ICONS = {
  chart: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6"  y="22" width="5" height="12" rx="1.5" fill="var(--blue-deep)"/>
    <rect x="14" y="14" width="5" height="20" rx="1.5" fill="var(--green-deep)"/>
    <rect x="22" y="8"  width="5" height="26" rx="1.5" fill="var(--yellow-deep)"/>
    <rect x="30" y="18" width="5" height="16" rx="1.5" fill="var(--blue-deep)" opacity=".65"/>
  </svg>`,

  target: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="15" stroke="var(--blue-deep)" stroke-width="2" opacity=".35"/>
    <circle cx="20" cy="20" r="10" stroke="var(--green-deep)" stroke-width="2" opacity=".6"/>
    <circle cx="20" cy="20" r="5"  fill="var(--yellow-deep)"/>
    <circle cx="20" cy="20" r="2"  fill="var(--bg2)"/>
  </svg>`,

  network: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="8"  x2="8"  y2="22" stroke="var(--blue-deep)" stroke-width="1.5" opacity=".5"/>
    <line x1="20" y1="8"  x2="32" y2="22" stroke="var(--blue-deep)" stroke-width="1.5" opacity=".5"/>
    <line x1="8"  y1="22" x2="20" y2="32" stroke="var(--blue-deep)" stroke-width="1.5" opacity=".5"/>
    <line x1="32" y1="22" x2="20" y2="32" stroke="var(--blue-deep)" stroke-width="1.5" opacity=".5"/>
    <line x1="8"  y1="22" x2="32" y2="22" stroke="var(--blue-deep)" stroke-width="1.5" opacity=".5"/>
    <circle cx="20" cy="8"  r="3.5" fill="var(--blue-deep)"/>
    <circle cx="8"  cy="22" r="3.5" fill="var(--green-deep)"/>
    <circle cx="32" cy="22" r="3.5" fill="var(--yellow-deep)"/>
    <circle cx="20" cy="32" r="3.5" fill="var(--blue-deep)"/>
  </svg>`,

  dotGrid: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="2.5" fill="var(--blue-deep)"  opacity=".5"/>
    <circle cx="20" cy="10" r="2.5" fill="var(--blue-deep)"  opacity=".5"/>
    <circle cx="30" cy="10" r="3.2" fill="var(--yellow-deep)"/>
    <circle cx="10" cy="20" r="2.5" fill="var(--green-deep)"/>
    <circle cx="20" cy="20" r="3.2" fill="var(--green-deep)"/>
    <circle cx="30" cy="20" r="2.5" fill="var(--green-deep)" opacity=".5"/>
    <circle cx="10" cy="30" r="3.2" fill="var(--blue-deep)"/>
    <circle cx="20" cy="30" r="2.5" fill="var(--blue-deep)"  opacity=".5"/>
    <circle cx="30" cy="30" r="2.5" fill="var(--blue-deep)"  opacity=".5"/>
  </svg>`,

  stack: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6"  y="22" width="24" height="10" rx="2" fill="var(--yellow-deep)"/>
    <rect x="8"  y="14" width="24" height="10" rx="2" fill="var(--green-deep)"/>
    <rect x="10" y="6"  width="24" height="10" rx="2" fill="var(--blue-deep)"/>
  </svg>`,

  globe: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="var(--blue-deep)" stroke-width="2"/>
    <circle cx="20" cy="20" r="14" stroke="var(--green-deep)" stroke-width="1.5" stroke-dasharray="2 4" opacity=".7"/>
    <circle cx="12" cy="14" r="2" fill="var(--yellow-deep)"/>
    <circle cx="26" cy="22" r="2" fill="var(--green-deep)"/>
    <circle cx="18" cy="28" r="2" fill="var(--blue-deep)"/>
  </svg>`,

  flask: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="6"  width="8" height="4"  rx="1" fill="var(--blue-deep)"/>
    <rect x="14" y="10" width="12" height="3" fill="var(--blue-deep)" opacity=".4"/>
    <rect x="12" y="16" width="16" height="18" rx="4" fill="var(--green-deep)" opacity=".25"/>
    <rect x="12" y="24" width="16" height="10" rx="4" fill="var(--green-deep)"/>
    <circle cx="18" cy="29" r="1.5" fill="var(--bg2)" opacity=".7"/>
    <circle cx="23" cy="27" r="1"   fill="var(--bg2)" opacity=".7"/>
  </svg>`,

  compass: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="var(--blue-deep)" stroke-width="2"/>
    <rect x="18.5" y="8" width="3" height="14" fill="var(--yellow-deep)"/>
    <rect x="18.5" y="20" width="3" height="12" fill="var(--blue-deep)"/>
    <circle cx="20" cy="20" r="2.5" fill="var(--green-deep)"/>
  </svg>`,

  scatter: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="34" x2="36" y2="34" stroke="var(--border)" stroke-width="1.5"/>
    <line x1="6" y1="34" x2="6"  y2="6"  stroke="var(--border)" stroke-width="1.5"/>
    <circle cx="11" cy="28" r="2" fill="var(--blue-deep)"/>
    <circle cx="16" cy="22" r="2" fill="var(--green-deep)"/>
    <circle cx="21" cy="18" r="2.5" fill="var(--yellow-deep)"/>
    <circle cx="26" cy="14" r="2" fill="var(--green-deep)"/>
    <circle cx="31" cy="10" r="2" fill="var(--blue-deep)"/>
    <circle cx="14" cy="30" r="1.8" fill="var(--blue-deep)" opacity=".5"/>
    <circle cx="24" cy="20" r="1.8" fill="var(--green-deep)" opacity=".5"/>
  </svg>`,

  sigma: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="5"  height="24" rx="1.5" fill="var(--blue-deep)"  opacity=".35"/>
    <rect x="14" y="14" width="5" height="18" rx="1.5" fill="var(--green-deep)"/>
    <rect x="22" y="18" width="5" height="14" rx="1.5" fill="var(--yellow-deep)"/>
    <rect x="30" y="12" width="5" height="20" rx="1.5" fill="var(--blue-deep)" opacity=".6"/>
    <line x1="4" y1="10" x2="36" y2="10" stroke="var(--green-deep)" stroke-width="1.2" stroke-dasharray="3 3"/>
    <line x1="4" y1="30" x2="36" y2="30" stroke="var(--yellow-deep)" stroke-width="1.2" stroke-dasharray="3 3"/>
  </svg>`,

  chat: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="22" height="16" rx="3" fill="var(--blue-deep)" opacity=".25"/>
    <rect x="6" y="10" width="22" height="16" rx="3" stroke="var(--blue-deep)" stroke-width="1.5"/>
    <rect x="14" y="18" width="20" height="14" rx="3" fill="var(--green-deep)"/>
    <circle cx="20" cy="25" r="1.4" fill="var(--bg2)"/>
    <circle cx="25" cy="25" r="1.4" fill="var(--bg2)"/>
    <circle cx="30" cy="25" r="1.4" fill="var(--bg2)"/>
  </svg>`
};

/* Large illustration banners for CTA cards (16:9 panels) */
const LABR_BANNERS = {
  blog: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="180" fill="var(--blue)"/>
    <circle cx="60"  cy="50"  r="60" fill="var(--yellow)" opacity=".7"/>
    <circle cx="260" cy="150" r="80" fill="var(--green)" opacity=".6"/>
    <rect x="70"  y="60"  width="180" height="14" rx="3" fill="var(--bg2)" opacity=".9"/>
    <rect x="70"  y="82"  width="140" height="8"  rx="2" fill="var(--bg2)" opacity=".7"/>
    <rect x="70"  y="96"  width="160" height="8"  rx="2" fill="var(--bg2)" opacity=".7"/>
    <rect x="70"  y="110" width="100" height="8"  rx="2" fill="var(--bg2)" opacity=".7"/>
    <circle cx="56" cy="66" r="6" fill="var(--bg2)"/>
    <circle cx="56" cy="86" r="4" fill="var(--bg2)" opacity=".7"/>
    <circle cx="56" cy="100" r="4" fill="var(--bg2)" opacity=".7"/>
    <circle cx="56" cy="114" r="4" fill="var(--bg2)" opacity=".7"/>
  </svg>`,

  projects: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="180" fill="var(--green)"/>
    <circle cx="270" cy="40"  r="55" fill="var(--blue)" opacity=".75"/>
    <circle cx="40"  cy="160" r="70" fill="var(--yellow)" opacity=".7"/>
    <rect x="60"  y="110" width="14" height="40" rx="3" fill="var(--blue-deep)"/>
    <rect x="82"  y="90"  width="14" height="60" rx="3" fill="var(--green-deep)"/>
    <rect x="104" y="70"  width="14" height="80" rx="3" fill="var(--yellow-deep)"/>
    <rect x="126" y="100" width="14" height="50" rx="3" fill="var(--blue-deep)"/>
    <rect x="148" y="60"  width="14" height="90" rx="3" fill="var(--green-deep)"/>
    <rect x="170" y="80"  width="14" height="70" rx="3" fill="var(--yellow-deep)"/>
    <rect x="192" y="95"  width="14" height="55" rx="3" fill="var(--blue-deep)"/>
    <line x1="50" y1="150" x2="260" y2="150" stroke="var(--bg2)" stroke-width="2" opacity=".8"/>
  </svg>`,

  book: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="180" fill="var(--yellow)"/>
    <circle cx="60"  cy="40"  r="60" fill="var(--blue)" opacity=".65"/>
    <circle cx="260" cy="150" r="70" fill="var(--green)" opacity=".7"/>
    <rect x="100" y="50"  width="120" height="90" rx="5" fill="var(--bg2)"/>
    <rect x="110" y="60"  width="100" height="4" rx="2" fill="var(--muted)" opacity=".4"/>
    <rect x="110" y="72"  width="80"  height="4" rx="2" fill="var(--muted)" opacity=".4"/>
    <rect x="110" y="84"  width="90"  height="4" rx="2" fill="var(--muted)" opacity=".4"/>
    <rect x="110" y="100" width="60"  height="30" rx="3" fill="var(--blue)" opacity=".8"/>
    <rect x="175" y="100" width="45"  height="30" rx="3" fill="var(--green)"/>
    <rect x="92"  y="48"  width="8"   height="94" rx="2" fill="var(--blue-deep)"/>
  </svg>`,

  tools: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="180" fill="var(--blue)"/>
    <circle cx="80"  cy="140" r="70" fill="var(--green)" opacity=".7"/>
    <circle cx="250" cy="50"  r="60" fill="var(--yellow)" opacity=".75"/>
    <circle cx="160" cy="90"  r="46" fill="var(--bg2)" opacity=".95"/>
    <circle cx="160" cy="90"  r="32" stroke="var(--blue-deep)" stroke-width="2"/>
    <circle cx="160" cy="90"  r="18" stroke="var(--green-deep)" stroke-width="2"/>
    <circle cx="160" cy="90"  r="6"  fill="var(--yellow-deep)"/>
    <rect x="156" y="40" width="8" height="20" rx="2" fill="var(--blue-deep)"/>
    <rect x="156" y="120" width="8" height="20" rx="2" fill="var(--blue-deep)"/>
    <rect x="110" y="86" width="20" height="8" rx="2" fill="var(--green-deep)"/>
    <rect x="190" y="86" width="20" height="8" rx="2" fill="var(--green-deep)"/>
  </svg>`,

  chatbot: `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <rect width="320" height="180" fill="var(--green)"/>
    <circle cx="50"  cy="60"  r="55" fill="var(--blue)" opacity=".7"/>
    <circle cx="280" cy="140" r="60" fill="var(--yellow)" opacity=".75"/>
    <rect x="70"  y="50"  width="140" height="50" rx="10" fill="var(--bg2)"/>
    <circle cx="90"  cy="75" r="4" fill="var(--blue-deep)"/>
    <circle cx="108" cy="75" r="4" fill="var(--blue-deep)"/>
    <circle cx="126" cy="75" r="4" fill="var(--blue-deep)"/>
    <rect x="110" y="90"  width="140" height="50" rx="10" fill="var(--yellow)"/>
    <rect x="126" y="108" width="80"  height="6"  rx="2" fill="var(--text)" opacity=".6"/>
    <rect x="126" y="120" width="60"  height="6"  rx="2" fill="var(--text)" opacity=".4"/>
  </svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const k = el.dataset.icon;
    if (LABR_ICONS[k]) el.innerHTML = LABR_ICONS[k];
  });
  document.querySelectorAll('[data-banner]').forEach(el => {
    const k = el.dataset.banner;
    if (LABR_BANNERS[k]) el.innerHTML = LABR_BANNERS[k];
  });
});
