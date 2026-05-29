import sharp from "sharp";

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#090909"/>
      <stop offset="60%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0b0b0b"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8f722b"/>
      <stop offset="50%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#8f722b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="42%">
      <stop offset="0%" stop-color="#d4af37" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#d4af37" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="80" y="80" width="1040" height="470" fill="none" stroke="url(#gold)" stroke-opacity="0.45" stroke-width="2"/>
  <line x1="170" y1="300" x2="400" y2="300" stroke="url(#gold)" stroke-opacity="0.65" stroke-width="2"/>
  <line x1="800" y1="300" x2="1030" y2="300" stroke="url(#gold)" stroke-opacity="0.65" stroke-width="2"/>
  <circle cx="600" cy="300" r="26" fill="none" stroke="url(#gold)" stroke-width="2" stroke-opacity="0.9"/>
  <path d="M586 286 L600 318 L614 286" fill="#d4af37" fill-opacity="0.9"/>

  <text x="600" y="248" text-anchor="middle" fill="#e8d7a0" font-size="22" letter-spacing="7" font-family="Georgia, serif">
    LUXURY GROOMING
  </text>
  <text x="600" y="360" text-anchor="middle" fill="#f6efdb" font-size="86" letter-spacing="6" font-weight="700" font-family="Georgia, serif">
    MOOCH SALOON
  </text>
  <text x="600" y="420" text-anchor="middle" fill="#d1b877" font-size="30" letter-spacing="2" font-family="Georgia, serif">
    Premium Barber &amp; Luxury Grooming • Pushkar
  </text>
</svg>
`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 88, chromaSubsampling: "4:4:4" })
  .toFile("public/og-image.jpg");

console.log("generated public/og-image.jpg");
