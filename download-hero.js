import https from 'https';
import fs from 'fs';
import path from 'path';

const filesToDownload = [
  {
    id: '18dqt-5vnW0xT7lKibTCS5MBGCaMrOV1g',
    dest: 'hero-bg.jpg'
  },
  {
    id: '1lWaFVALg5i055sAJQb2jxiRUpuSMF91e',
    dest: 'automacao-industrial.jpg'
  },
  {
    id: '1-FW-vdSm0Fe2RYlwrhHW8Qi2-NMQT2bB',
    dest: 'projetos-industriais.jpg'
  },
  {
    id: '1fKV8a28aNevUSNNLjd_-fbw7LK8o8j2W',
    dest: 'data-center.jpg'
  },
  {
    id: '1pc9cpuuyw1MinfypZdKLUj4e2C17__A1',
    dest: 'infraestrutura-industrial.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect recursively
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: Status Code ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded image to ${dest}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {}); // delete file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const file of filesToDownload) {
    const targetUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;
    const destPath = path.join(process.cwd(), 'public', file.dest);
    
    // Make sure target directories exist
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`Starting high-resolution image download from Google Drive ID: ${file.id} to ${file.dest}...`);
    try {
      await download(targetUrl, destPath);
    } catch (err) {
      console.error(`Error downloading image ${file.dest}:`, err);
      process.exit(1);
    }
  }
  console.log('All image downloads completed successfully!');
  process.exit(0);
}

run();
