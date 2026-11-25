/* COCO-SSD (ehtiyat model) fayllarını www/models/coco altına qoyur. Uğursuz olsa build dayanmır. */
const fs=require('fs'),path=require('path');
const BASE=process.env.COCO_BASE||'https://storage.googleapis.com/tfjs-models/savedmodel/';
const OUT=process.env.COCO_OUT||'www/models/coco';
async function get(url){const r=await fetch(url);if(!r.ok)throw new Error(url+' -> '+r.status);return r}
async function dl(name,dir){
  const m=await (await get(BASE+name+'/model.json')).json();
  fs.mkdirSync(dir,{recursive:true});
  for(const g of m.weightsManifest)for(const p of g.paths){
    fs.writeFileSync(path.join(dir,p),Buffer.from(await (await get(BASE+name+'/'+p)).arrayBuffer()));
  }
  fs.writeFileSync(path.join(dir,'model.json'),JSON.stringify(m));
}
(async()=>{
  for(const [n,d] of [['ssdlite_mobilenet_v2','lite'],['ssd_mobilenet_v2','v2']]){
    const dir=path.join(OUT,d);
    try{await dl(n,dir);console.log('OK',n)}
    catch(e){console.log('WARN',n,e.message);fs.rmSync(dir,{recursive:true,force:true})}
  }
})();
