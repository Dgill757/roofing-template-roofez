import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const FONTS = [
  ['https://roofez.net/wp-content/themes/roofez/library/fonts/ethnocentricrg.woff2', 'public/fonts/ethnocentricrg.woff2'],
  ['https://roofez.net/wp-content/themes/roofez/library/fonts/VisbyCFDemiBold.woff2', 'public/fonts/VisbyCFDemiBold.woff2'],
  ['https://roofez.net/wp-content/themes/roofez/library/fonts/VisbyCFBold.woff2', 'public/fonts/VisbyCFBold.woff2'],
  ['https://roofez.net/wp-content/themes/roofez/library/fonts/VisbyCFExtraBold.woff2', 'public/fonts/VisbyCFExtraBold.woff2'],
  ['https://roofez.net/wp-content/themes/roofez/library/fonts/VisbyCFHeavy.woff2', 'public/fonts/VisbyCFHeavy.woff2'],
];

const VIDEOS = [
  ['https://roofez.net/wp-content/uploads/2024/05/top-header-video.mp4', 'public/videos/top-header-video.mp4'],
  ['https://roofez.net/wp-content/uploads/Chub%20Cay.mp4', 'public/videos/hero-bg.mp4'],
];

const IMAGES = [
  // Logos
  ['https://roofez.net/wp-content/uploads/2024/03/logo-1.svg', 'public/images/logo-1.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/logo.svg', 'public/images/logo.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/footer-logo.svg', 'public/images/footer-logo.svg'],
  // Hero elements
  ['https://roofez.net/wp-content/uploads/2024/03/Group-25.svg', 'public/images/location-icon.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Vector3.svg', 'public/images/divider-line.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/Google-5-Star.svg', 'public/images/google-5star.svg'],
  ['https://roofez.net/wp-content/uploads/2024/05/Group-64895_2.svg', 'public/images/facebook-rating.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Group-64894.svg', 'public/images/yelp-rating.svg'],
  // Services tabs images
  ['https://roofez.net/wp-content/uploads/2025/04/Horizon_Plumbing_TeamRSshutterstock-standard-scale-4_00x.webp', 'public/images/tab-roof-repair.webp'],
  ['https://roofez.net/wp-content/uploads/2024/05/360_F_433777617_gzb9Y8nNgjNzGDyAOeCAPNSP6CjTKBIr-4.png', 'public/images/tab-reroofing.png'],
  ['https://roofez.net/wp-content/uploads/2024/05/justin-lim-Fpcy-AdFhUg-unsplash-3.png', 'public/images/tab-new-construction.png'],
  // Who we service
  ['https://roofez.net/wp-content/uploads/2025/04/footer-bg.webp', 'public/images/residential-roofing.webp'],
  ['https://roofez.net/wp-content/uploads/2025/04/service-img-2.webp', 'public/images/commercial-roofing.webp'],
  ['https://roofez.net/wp-content/uploads/2024/03/Vector4.svg', 'public/images/orange-line.svg'],
  // Backgrounds
  ['https://roofez.net/wp-content/themes/roofez/library/images/tab-back2.png', 'public/images/tab-back2.png'],
  ['https://roofez.net/wp-content/uploads/2024/03/review-customer-back1.png', 'public/images/review-back.png'],
  // Map
  ['https://roofez.net/wp-content/uploads/2024/05/service-area-map.svg', 'public/images/service-area-map.svg'],
  // Value section
  ['https://roofez.net/wp-content/uploads/2025/04/people-img.webp', 'public/images/team-photo.webp'],
  ['https://roofez.net/wp-content/uploads/2024/06/noun-quality-6557322.svg', 'public/images/icon-quality.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/noun-customer-focus-6831886.svg', 'public/images/icon-customer-focus.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/noun-community-2190176.svg', 'public/images/icon-community.svg'],
  // CTA section
  ['https://roofez.net/wp-content/uploads/2025/04/Mask-group.webp', 'public/images/cta-bg-aerial.webp'],
  ['https://roofez.net/wp-content/uploads/2025/04/home-roof-1.webp', 'public/images/cta-home-roof.webp'],
  ['https://roofez.net/wp-content/uploads/2024/05/Group-65152.svg', 'public/images/chamber-commerce.svg'],
  // Footer social
  ['https://roofez.net/wp-content/uploads/2024/03/Group-64984.svg', 'public/images/icon-instagram.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/Tik-Tok.svg', 'public/images/icon-tiktok.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/Tik-Tok-Orange.svg', 'public/images/icon-tiktok-orange.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Group-64985.svg', 'public/images/icon-facebook.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Group-64986.svg', 'public/images/icon-google-social.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Group-64987-1.svg', 'public/images/icon-mail.svg'],
  ['https://roofez.net/wp-content/uploads/2024/06/Roof-EZ-map-4.png', 'public/images/footer-map.png'],
  // Solar tab image (guess based on pattern)
  ['https://roofez.net/wp-content/uploads/2024/03/Shape.svg', 'public/images/shape.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Shape1.svg', 'public/images/shape1.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Shape2.svg', 'public/images/shape2.svg'],
  ['https://roofez.net/wp-content/uploads/2024/03/Shape3.svg', 'public/images/shape3.svg'],
  // Reliability icon (4th value card)
  ['https://roofez.net/wp-content/uploads/2024/06/noun-reliability-5124501.svg', 'public/images/icon-reliability.svg'],
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const destAbs = path.join(ROOT, dest);
    fs.mkdirSync(path.dirname(destAbs), { recursive: true });
    if (fs.existsSync(destAbs) && fs.statSync(destAbs).size > 0) {
      console.log(`  SKIP ${dest} (exists)`);
      resolve();
      return;
    }
    const file = fs.createWriteStream(destAbs);
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(destAbs);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        console.warn(`  WARN ${dest} — HTTP ${res.statusCode}`);
        resolve();
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log(`  OK  ${dest}`); resolve(); });
    }).on('error', (e) => { console.warn(`  ERR ${dest} — ${e.message}`); resolve(); });
  });
}

async function downloadBatch(items, batchSize = 4) {
  for (let i = 0; i < items.length; i += batchSize) {
    await Promise.all(items.slice(i, i + batchSize).map(([url, dest]) => download(url, dest)));
  }
}

console.log('\n=== Downloading Fonts ===');
await downloadBatch(FONTS);
console.log('\n=== Downloading Images ===');
await downloadBatch(IMAGES);
console.log('\n=== Downloading Videos ===');
await downloadBatch(VIDEOS, 1);
console.log('\nDone!');
