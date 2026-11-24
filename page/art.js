// Flat illustrations for the story panels, drawn as inline SVG. Each takes the panel's width and height.
const svg = (w, h, body, bg) =>
  `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">` +
  `<rect width="${w}" height="${h}" fill="${bg}"/>${body}</svg>`;

const ART = {
  // A share price leaping upward beside a chip.
  nvidia(w, h) {
    let grid = '';
    for (let x = 0; x < w; x += 24) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#20304a" stroke-width="1"/>`;
    const pts = [[150, 100], [168, 96], [184, 104], [198, 99], [212, 106], [226, 101], [240, 92], [252, 60], [266, 44], [282, 34], [300, 24], [316, 18]];
    const line = pts.map((p) => p.join(',')).join(' ');
    const area = `${line} 316,${h} 150,${h}`;
    let pins = '';
    for (let i = 0; i < 5; i++) {
      pins += `<rect x="${78 + i * 9}" y="70" width="4" height="8" fill="#9aa6b2"/><rect x="${78 + i * 9}" y="112" width="4" height="6" fill="#9aa6b2"/>`;
    }
    return svg(w, h, grid +
      `<polygon points="${area}" fill="#1f8f4e" opacity=".35"/>` +
      `<polyline points="${line}" fill="none" stroke="#38d27a" stroke-width="4" stroke-linejoin="round"/>` +
      `<polygon points="316,10 306,24 322,26" fill="#38d27a"/>` +
      pins + `<rect x="72" y="76" width="48" height="38" rx="4" fill="#2b3440" stroke="#9aa6b2" stroke-width="2"/>` +
      `<rect x="84" y="86" width="24" height="18" fill="#76b900"/>`, '#0f1b2d');
  },

  // A satellite with a warning trefoil on a dashed orbit over the Earth's rim.
  orbit(w, h) {
    let stars = '';
    const s = [[20, 90], [60, 100], [110, 78], [200, 16], [250, 64], [300, 90], [180, 104], [140, 12], [290, 14], [40, 70]];
    s.forEach(([x, y]) => { stars += `<circle cx="${x}" cy="${y}" r="1.3" fill="#e8e8f0"/>`; });
    const tre = (cx, cy, r) => {
      let p = '';
      for (let k = 0; k < 3; k++) {
        const a0 = (k * 120 - 90 - 30) * Math.PI / 180, a1 = (k * 120 - 90 + 30) * Math.PI / 180;
        p += `<path d="M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 0 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z" fill="#111"/>`;
      }
      return `<circle cx="${cx}" cy="${cy}" r="${r + 2}" fill="#f5c400"/>${p}<circle cx="${cx}" cy="${cy}" r="${r * 0.25}" fill="#f5c400"/><circle cx="${cx}" cy="${cy}" r="${r * 0.15}" fill="#111"/>`;
    };
    return svg(w, h, stars +
      `<ellipse cx="160" cy="150" rx="230" ry="62" fill="#1d5fa8"/>` +
      `<ellipse cx="160" cy="150" rx="230" ry="62" fill="none" stroke="#7fb6ea" stroke-width="3"/>` +
      `<path d="M70,128 Q120,104 160,112 T250,120" fill="#2e8b57" opacity=".8"/>` +
      `<ellipse cx="190" cy="86" rx="150" ry="30" fill="none" stroke="#c8d2e0" stroke-width="1.5" stroke-dasharray="5 5"/>` +
      `<g transform="translate(262,84)">` +
      `<rect x="-52" y="-9" width="34" height="18" fill="#3a6fb0" stroke="#c8d2e0"/><rect x="18" y="-9" width="34" height="18" fill="#3a6fb0" stroke="#c8d2e0"/>` +
      `<line x1="-18" y1="0" x2="18" y2="0" stroke="#c8d2e0" stroke-width="2"/>` +
      `<rect x="-13" y="-15" width="26" height="30" rx="3" fill="#b9bec7" stroke="#eef1f5"/>` + tre(0, 0, 9) + `</g>`, '#0b0f24');
  },

  // A departures board where every row reads CANCELLED, and a parked jet.
  board(w, h) {
    const rows = ['LONDON', 'PARIS', 'MADRID'];
    let t = `<rect x="150" y="70" width="166" height="44" rx="3" fill="#111"/>`;
    rows.forEach((c, i) => {
      const y = 82 + i * 13;
      t += `<text x="156" y="${y}" fill="#ffd23f" font-family="Courier New" font-weight="700" font-size="11">${c}</text>` +
        `<text x="236" y="${y}" fill="#ff5a4f" font-family="Courier New" font-weight="700" font-size="11">CANCELLED</text>`;
    });
    const jet = `<g transform="translate(14,78)">` +
      `<path d="M0,10 L86,8 Q100,8 104,14 Q100,20 86,20 L0,18 Z" fill="#e9edf2" stroke="#7d8794"/>` +
      `<path d="M40,14 L60,34 L70,34 L58,14 Z" fill="#c9d1db" stroke="#7d8794"/>` +
      `<path d="M4,10 L-2,-6 L8,-6 L18,10 Z" fill="#c0141c"/>` +
      `<line x1="-10" y1="32" x2="118" y2="32" stroke="#6b6b6b" stroke-width="2"/></g>`;
    return svg(w, h, `<rect y="${h - 16}" width="${w}" height="16" fill="#8e9aa6"/>` + t + jet, '#c9dbe8');
  },

  fall(w, h) {
    const p = [[96, 24], [112, 30], [126, 26], [140, 40], [154, 36], [168, 50], [184, 56]];
    return svg(w, h, `<line x1="90" y1="58" x2="186" y2="58" stroke="#c4b8a8"/>` +
      `<polyline points="${p.map((q) => q.join(',')).join(' ')}" fill="none" stroke="#c0141c" stroke-width="3.5" stroke-linejoin="round"/>` +
      `<polygon points="186,62 176,52 190,50" fill="#c0141c"/>`, '#f0e6dc');
  },

  scales(w, h) {
    return svg(w, h, `<g transform="translate(120,28)" stroke="#5b4a2e" stroke-width="2.5" fill="none">` +
      `<line x1="0" y1="2" x2="0" y2="32"/><line x1="-30" y1="6" x2="30" y2="6"/>` +
      `<path d="M-30,6 L-38,22 L-22,22 Z" fill="#d9c9a6"/><path d="M30,6 L22,22 L38,22 Z" fill="#d9c9a6"/>` +
      `<line x1="-14" y1="33" x2="14" y2="33"/></g>`, '#efe6d3');
  },

  catalan(w, h) {
    let st = '';
    for (let i = 0; i < 4; i++) st += `<rect x="96" y="${14 + i * 12}" width="92" height="6" fill="#d52b1e"/>`;
    return svg(w, h, `<rect x="96" y="10" width="92" height="48" fill="#fcdd09"/>` + st, '#efe6d3');
  },

  eu(w, h) {
    let st = '';
    for (let k = 0; k < 12; k++) {
      const a = k * 30 * Math.PI / 180;
      st += `<circle cx="${58 + 14 * Math.cos(a)}" cy="${47 + 14 * Math.sin(a)}" r="2.3" fill="#ffcc00"/>`;
    }
    const bank = `<g transform="translate(118,32)" fill="#e8eef8"><polygon points="0,9 22,0 44,9"/><rect x="3" y="11" width="5" height="14"/>` +
      `<rect x="14" y="11" width="5" height="14"/><rect x="25" y="11" width="5" height="14"/><rect x="36" y="11" width="5" height="14"/>` +
      `<rect x="0" y="26" width="44" height="4"/></g><line x1="112" y1="32" x2="168" y2="64" stroke="#ff4d4d" stroke-width="4"/>`;
    return svg(w, h, st + bank, '#123f8c');
  },

  train(w, h) {
    return svg(w, h, `<line x1="80" y1="56" x2="${w}" y2="56" stroke="#6b5a45" stroke-width="2"/>` +
      `<rect x="100" y="28" width="80" height="24" rx="4" fill="#d9541e"/>` +
      `<rect x="108" y="33" width="14" height="9" fill="#fff"/><rect x="128" y="33" width="14" height="9" fill="#fff"/><rect x="148" y="33" width="14" height="9" fill="#fff"/>` +
      `<circle cx="114" cy="54" r="4" fill="#333"/><circle cx="166" cy="54" r="4" fill="#333"/>`, '#f1e3cf');
  },

  tower(w, h) {
    return svg(w, h, `<circle cx="168" cy="20" r="14" fill="#8a8a8a" opacity=".55"/><circle cx="182" cy="12" r="10" fill="#9a9a9a" opacity=".5"/>` +
      `<path d="M150,62 L160,14 L170,62 Z M154,44 L166,44 M152,54 L168,54" stroke="#4a4a4a" stroke-width="2.5" fill="none"/>` +
      `<path d="M120,62 L132,40 L140,62 Z" fill="#ff7a1a"/>`, '#f2e0c8');
  },

  hazard(w, h) {
    return svg(w, h, `<rect x="92" y="38" width="22" height="22" fill="#9c9282"/><rect x="118" y="30" width="18" height="30" fill="#a89e8d"/>` +
      `<polygon points="160,12 186,58 134,58" fill="#f5c400" stroke="#111" stroke-width="2.5"/>` +
      `<text x="155" y="52" font-family="Arial" font-weight="900" font-size="24" fill="#111">!</text>`, '#ece3d2');
  },

  ball(w, h) {
    return svg(w, h, `<rect y="52" width="${w}" height="12" fill="#5aa469"/>` +
      `<circle cx="160" cy="42" r="14" fill="#fff" stroke="#111" stroke-width="2"/>` +
      `<polygon points="160,36 166,40 164,47 156,47 154,40" fill="#111"/>` +
      `<text x="20" y="48" font-family="Arial" font-weight="800" font-size="12" fill="#1b4d2a">2031 US · 2035 UK</text>`, '#cfe8d2');
  },

  convoy(w, h) {
    const car = (x) => `<rect x="${x}" y="34" width="40" height="16" rx="4" fill="#3c4650"/><rect x="${x + 8}" y="26" width="22" height="10" rx="2" fill="#56626e"/>` +
      `<circle cx="${x + 9}" cy="51" r="4" fill="#111"/><circle cx="${x + 31}" cy="51" r="4" fill="#111"/>`;
    return svg(w, h, `<rect y="54" width="${w}" height="10" fill="#b49a76"/>` + car(98) + car(146) +
      `<circle cx="164" cy="38" r="2.4" fill="#fff"/><circle cx="172" cy="42" r="2.4" fill="#fff"/>`, '#efe1c9');
  },

  mic(w, h) {
    return svg(w, h, `<rect x="96" y="32" width="12" height="20" rx="6" fill="#333"/>` +
      `<path d="M90,46 Q102,62 114,46" stroke="#333" stroke-width="2.5" fill="none"/><line x1="102" y1="56" x2="102" y2="63" stroke="#333" stroke-width="2.5"/>` +
      `<line x1="132" y1="34" x2="140" y2="62" stroke="#c0141c" stroke-width="3"/><line x1="142" y1="34" x2="150" y2="62" stroke="#c0141c" stroke-width="3"/>` +
      `<line x1="152" y1="34" x2="160" y2="62" stroke="#c0141c" stroke-width="3"/>`, '#eadfd6');
  },
};
