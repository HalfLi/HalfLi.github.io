import {mkdir,copyFile,readFile,writeFile,stat,readdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
const catalog=JSON.parse((await readFile('assets/catalog.js','utf8')).split('=',2)[1].trim().replace(/;$/,''));
if(catalog.length!==34 || catalog.some(p=>!p.complete || !p.duration))throw Error('Complete video catalog required.');
let videoBytes=0;
for(const p of catalog)videoBytes+=(await stat(p.preview)).size;
if(videoBytes>250*1024*1024)throw Error('Video library exceeds deployment media budget.');
await mkdir('dist/assets',{recursive:true});
for(const file of ['index.html','styles.css','script.js'])await copyFile(file,`dist/${file}`);
for(const file of ['catalog.js','planning-videos.js','titles.js','jamsil.jpg','rancel.jpg','edit-8.jpg'])await copyFile(`assets/${file}`,`dist/assets/${file}`);
for(let i=1;i<=34;i++)for(const ext of ['jpg','mp4']){
  const name=`work-${String(i).padStart(2,'0')}.${ext}`;await copyFile(`assets/${name}`,`dist/assets/${name}`);
}
for(const name of (await readdir('assets')).filter(name=>/^hover-work-\d{2}\.mp4$/.test(name))){
  videoBytes+=(await stat(`assets/${name}`)).size;
  await copyFile(`assets/${name}`,`dist/assets/${name}`);
}
for(const name of ['motion-cosmic.jpg','motion-cosmic.mp4','hover-motion-cosmic.mp4','motion-mx.jpg','motion-mx.mp4','hover-motion-mx.mp4']){
  if(name.endsWith('.mp4'))videoBytes+=(await stat(`assets/${name}`)).size;
  await copyFile(`assets/${name}`,`dist/assets/${name}`);
}
if(videoBytes>250*1024*1024)throw Error('Full videos and hover clips exceed deployment budget.');
await writeFile('dist/robots.txt','User-agent: *\nDisallow:\n');
await writeFile('dist/_headers',`/
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=3600
  X-Content-Type-Options: nosniff
`);
// Reviewer build has no title-editing controls or write endpoint.
let html=await readFile('dist/index.html','utf8');
html=html.replace('<details class="title-settings">','<details class="title-settings" hidden>');
// Keep the public URL out of search results while allowing direct-link review tools to fetch it.
html=html.replace('content="noindex, nofollow, noarchive"','content="noindex, follow"');
await writeFile('dist/index.html',html);
console.log('Static feedback site prepared.');
