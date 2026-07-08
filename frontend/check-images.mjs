import fs from 'fs';

const siteData = fs.readFileSync('src/data/siteData.ts', 'utf-8');

const urls = Array.from(siteData.matchAll(/https:\/\/images\.unsplash\.com\/[^\s'"]+/g)).map(m => m[0]);
console.log(`Found ${urls.length} urls to check.`);

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log(`BROKEN: ${res.status} - ${url}`);
      } else {
        // console.log(`OK: ${url}`);
      }
    } catch (e) {
      console.log(`ERROR: ${e.message} - ${url}`);
    }
  }
  console.log('Done checking.');
}

checkUrls();
