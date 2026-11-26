/* White, simplified service icons: primary shape 100% white, secondary 30% white */
const W_FRAME = `<rect x="7.5" y="3.5" width="88" height="93" rx="28.5" stroke="url(#fr)" stroke-width="1.1"/>
<defs><linearGradient id="fr" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>`;
const WHITE_ICONS = {
save:`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="108"><rect width="102" height="108" fill="#fff"/>
<path d="M26.94 59.14A23.58 8.06 0 0 0 74.09 59.14" stroke="#000" stroke-width="2.6"/>
<path d="M26.94 44.8A23.58 8.06 0 0 0 74.09 44.8" stroke="#000" stroke-width="2.6"/></mask>
<g mask="url(#m)" fill="#fff">
<path d="M50.52 85.12C63.54 85.12 74.09 81.51 74.09 77.06C74.09 72.6 63.54 68.99 50.52 68.99C37.5 68.99 26.94 72.6 26.94 77.06C26.94 81.51 37.5 85.12 50.52 85.12Z"/>
<path d="M74.09 59.14H26.94V77.06H74.09V59.14Z"/>
<path d="M50.52 67.2C63.54 67.2 74.09 63.59 74.09 59.14C74.09 54.68 63.54 51.07 50.52 51.07C37.5 51.07 26.94 54.68 26.94 59.14C26.94 63.59 37.5 67.2 50.52 67.2Z"/>
<path d="M74.09 44.8H26.94V59.14H74.09V44.8Z"/>
<path d="M50.52 52.86C63.54 52.86 74.09 49.25 74.09 44.8C74.09 40.35 63.54 36.74 50.52 36.74C37.5 36.74 26.94 40.35 26.94 44.8C26.94 49.25 37.5 52.86 50.52 52.86Z"/></g>
<g fill="#fff" fill-opacity=".3" stroke="#fff" stroke-opacity=".3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
<path d="M50.52 33.5V23.3"/><path d="M50.52 30.46C43.78 29.27 39.85 25.09 38.73 17.92C45.47 17.92 49.4 22.1 50.52 30.46Z"/><path d="M50.52 26.88C56.13 26.28 59.78 22.7 61.46 16.13C55.29 16.13 51.64 19.71 50.52 26.88Z"/></g>
${W_FRAME}</svg>`,
card:`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-5 -2)">
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="112" height="112"><rect width="112" height="112" fill="#fff"/>
<path d="M40.17 54.42L32.78 55.46C31.25 55.67 30.18 57.09 30.4 58.62L31.05 63.24C31.26 64.77 32.68 65.84 34.21 65.62L41.6 64.58C43.13 64.37 44.2 62.95 43.98 61.42L43.34 56.8C43.12 55.27 41.7 54.2 40.17 54.42Z" fill="#000"/>
<path d="M70.01 52.11C72.91 54.84 73.34 57.92 71.31 61.35M74.24 48.69C78.63 53.1 79.32 58.03 76.32 63.48" stroke="#000" stroke-width="2.43" stroke-linecap="round"/>
<path d="M58.48 70.69L34.45 74.07C33.43 74.22 32.72 75.16 32.86 76.18C33.01 77.2 33.95 77.91 34.97 77.77L59 74.39C60.02 74.25 60.73 73.3 60.59 72.28C60.45 71.26 59.5 70.55 58.48 70.69Z" fill="#000"/></mask>
<path d="M74.59 18.66L32.93 29.05C28.43 30.17 25.69 34.73 26.81 39.23L32.23 60.97C33.35 65.47 37.91 68.21 42.41 67.08L84.07 56.7C88.57 55.57 91.31 51.02 90.19 46.51L84.77 24.78C83.65 20.28 79.09 17.54 74.59 18.66Z" fill="#fff" fill-opacity=".3"/>
<path mask="url(#m)" d="M75.58 38.13L29.37 44.63C24.27 45.34 20.71 50.06 21.43 55.17L24.81 79.2C25.52 84.3 30.24 87.86 35.35 87.14L81.56 80.65C86.66 79.93 90.22 75.21 89.5 70.1L86.13 46.07C85.41 40.97 80.69 37.41 75.58 38.13Z" fill="#fff"/></g>
${W_FRAME}</svg>`,
loan:`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 -4)">
<circle cx="50.5" cy="51.5" r="24.5" fill="#fff" fill-opacity=".3"/>
<path d="M55.57 19.71L30.31 59.14H47.15L42.1 87.81L70.73 44.8H52.2L55.57 19.71Z" fill="#fff" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></g>
${W_FRAME}</svg>`,
send:`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="108"><rect width="102" height="108" fill="#fff"/>
<path d="M55.38 55.3L78 25L58.95 67.15L55.38 55.3Z" fill="#666"/></mask>
<g mask="url(#m)" fill="#fff"><path d="M33.95 46.08L78 25L67.29 71.11L55.38 55.3L33.95 46.08Z"/><path d="M55.38 55.3L56.57 68.47L61.33 60.57"/></g>
<path d="M31.57 60.57C34.75 59.69 37.92 60.57 41.1 63.2M28 68.47C31.97 67.15 35.94 68.03 39.9 71.11" stroke="#fff" stroke-opacity=".3" stroke-width="2.2" stroke-linecap="round"/>
${W_FRAME}</svg>`,
bill:`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="108"><rect width="102" height="108" fill="#fff"/>
<circle cx="65.92" cy="60.93" r="15.2" fill="#000"/></mask>
<path mask="url(#m)" d="M28.02 16.28H76.25V79.82L69.36 74.67L62.47 79.82L55.58 74.67L48.69 79.82L41.8 74.67L34.91 79.82L28.02 74.67V16.28Z" fill="#fff" fill-opacity=".3"/>
<path d="M65.49 28.3H38.79C37.6 28.3 36.64 29.27 36.64 30.45C36.64 31.64 37.6 32.6 38.79 32.6H65.49C66.68 32.6 67.64 31.64 67.64 30.45C67.64 29.27 66.68 28.3 65.49 28.3Z" fill="#fff"/>
<path d="M55.58 38.61H38.36C37.41 38.61 36.64 39.38 36.64 40.33C36.64 41.27 37.41 42.04 38.36 42.04H55.58C56.54 42.04 57.31 41.27 57.31 40.33C57.31 39.38 56.54 38.61 55.58 38.61Z" fill="#fff"/>
<mask id="t" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="108"><rect width="102" height="108" fill="#fff"/>
<path d="M59.89 60.93L64.2 65.23L71.95 56.64" stroke="#000" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></mask>
<circle mask="url(#t)" cx="65.92" cy="60.93" r="12.06" fill="#fff"/>
${W_FRAME}</svg>`
};
function whiteIcon(key){const p='w'+(++__icoN)+'_';return WHITE_ICONS[key].replace(/id="([^"]+)"/g,(m,a)=>`id="${p}${a}"`).replace(/url\(#([^)]+)\)/g,(m,a)=>`url(#${p}${a})`);}
WHITE_ICONS.switch=`<svg viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="#fff" fill-opacity=".3"><circle cx="63" cy="36" r="9.5"/><path d="M48.5 70c1.6-11 7.6-18 14.5-18c9.5 0 17 8 17 19.5V74H60z"/></g>
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="102" height="108"><rect width="102" height="108" fill="#fff"/><circle cx="44" cy="40" r="15" fill="#000"/><path d="M20 82c0-15.5 10.7-26.5 24-26.5S68 66.5 68 82v4H20z" fill="#000"/></mask>
<g fill="#fff"><circle cx="44" cy="40" r="11.5"/><path d="M23 80c0-13.6 9.4-23.5 21-23.5S65 66.4 65 80v3H23z"/></g>
<path d="M70 79h11m0 0l-4-4m4 4l-4 4" stroke="#fff" stroke-opacity=".3" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
${W_FRAME}</svg>`;
