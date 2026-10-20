import {access,readFile,readdir,stat} from 'node:fs/promises';
import {join,relative} from 'node:path';

const root='dist';
const required=['index.html','styles.css','script.js','robots.txt','_headers','assets/catalog.js','assets/planning-videos.js','assets/titles.js'];
for(const file of required)await access(join(root,file));

const catalogSource=await readFile(join(root,'assets/catalog.js'),'utf8');
const catalog=JSON.parse(catalogSource.split('=',2)[1].trim().replace(/;$/,''));
if(catalog.length!==34)throw Error(`Expected 34 direct-edit projects, received ${catalog.length}.`);

for(const project of catalog){
  for(const key of ['image','preview']){
    if(!project[key])throw Error(`${project.id} is missing ${key}.`);
    await access(join(root,project[key]));
  }
  if(project.hoverPreview)await access(join(root,project.hoverPreview));
}

const files=[];
async function walk(directory){
  for(const entry of await readdir(directory,{withFileTypes:true})){
    const path=join(directory,entry.name);
    if(entry.isDirectory())await walk(path);else files.push(path);
  }
}
await walk(root);
const maxBytes=25*1024*1024;
let totalBytes=0;
for(const file of files){
  const size=(await stat(file)).size;
  totalBytes+=size;
  if(size>maxBytes)throw Error(`${relative(root,file)} exceeds Cloudflare Pages' 25 MiB asset limit.`);
}

const html=await readFile(join(root,'index.html'),'utf8');
if(/chatgpt\.site|daringbard|appgprj_|openai\/hosting/i.test(html))throw Error('Hosted output contains a ChatGPT Sites-specific reference.');
if(!html.includes('content="noindex, follow"'))throw Error('Expected direct-review robots policy was not emitted.');

console.log(JSON.stringify({files:files.length,totalMiB:Number((totalBytes/1024/1024).toFixed(2)),largestFileLimitMiB:25,projects:catalog.length},null,2));
