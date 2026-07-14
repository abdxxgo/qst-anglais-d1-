const fs = require('fs');
let c = fs.readFileSync('d1__onco_ue11_2_fevrier2026.html', 'utf8');
const btn = `
  <!-- Bouton Retour à l'accueil -->
  <a href="index.html" style="position: fixed; bottom: 20px; left: 20px; z-index: 1000; display:inline-flex; align-items:center; gap:8px; color:var(--text, #fff); text-decoration:none; font-weight: 500; background: var(--card, #1e1e2d); padding: 10px 16px; border-radius: 50px; border: 1px solid var(--border, #333); box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: all 0.2s;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
    Retour à l'accueil
  </a>
`;
c = c.replace('</body>', btn + '\n</body>');
fs.writeFileSync('d1__onco_ue11_2_fevrier2026.html', c);
console.log("Updated d1__onco_ue11_2_fevrier2026.html");
