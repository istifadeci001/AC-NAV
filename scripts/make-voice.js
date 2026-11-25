/* Hazır səs faylları: espeak-ng ilə scripts/phrases.json-dakı cümlələri səsləndirib www/voice/ altına qoyur.
   Telefonun TTS mühərriki işləməsə belə tətbiq bu faylları WebAudio ilə çalır.
   Alınmasa build dayanmır; tətbiq telefon səsinə qayıdır. */
const fs=require('fs'),cp=require('child_process');
const OUT='www/voice';fs.mkdirSync(OUT,{recursive:true});
const ph=JSON.parse(fs.readFileSync('scripts/phrases.json','utf8'));
const trFix=t=>t.replace(/ə/g,'e').replace(/Ə/g,'E').replace(/x/g,'h').replace(/X/g,'H').replace(/q/g,'k').replace(/Q/g,'K');
let lang='az';
try{
  const v=cp.execSync('espeak-ng --voices').toString();
  if(!/\saz\s/.test(v)){lang='tr';console.log('espeak-ng: az yoxdur, tr işlədilir')}
}catch(e){console.log('espeak-ng tapılmadı, səs faylları yaradılmır');process.exit(0)}
const idx={};let ok=0;
ph.forEach((p,i)=>{
  const id='v'+String(i).padStart(4,'0'),wav='/tmp/'+id+'.wav',mp3=OUT+'/'+id+'.mp3';
  try{
    cp.execFileSync('espeak-ng',['-v',lang,'-s','145','-p','45','-w',wav,lang==='tr'?trFix(p.text):p.text]);
    cp.execFileSync('ffmpeg',['-y','-loglevel','error','-i',wav,'-ac','1','-ar','22050','-b:a','48k',mp3]);
    idx[p.key]=id+'.mp3';ok++;
  }catch(e){console.log('WARN',p.key,String(e.message).split('\n')[0])}
  try{fs.unlinkSync(wav)}catch(e){}
});
fs.writeFileSync(OUT+'/index.json',JSON.stringify(idx));
console.log('səs faylı:',ok,'/',ph.length,'dil:',lang);
