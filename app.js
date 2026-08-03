const CHO=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const JUNG=['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const JONG=['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const consonants=[
 {j:'ㄱ',name:'기역',on:'g/k',fin:'k'},{j:'ㄲ',name:'쌍기역',on:'kk',fin:'k'},{j:'ㄴ',name:'니은',on:'n',fin:'n'},
 {j:'ㄷ',name:'디귿',on:'d/t',fin:'t'},{j:'ㄸ',name:'쌍디귿',on:'tt',fin:''},{j:'ㄹ',name:'리을',on:'r/l',fin:'l'},
 {j:'ㅁ',name:'미음',on:'m',fin:'m'},{j:'ㅂ',name:'비읍',on:'b/p',fin:'p'},{j:'ㅃ',name:'쌍비읍',on:'pp',fin:''},
 {j:'ㅅ',name:'시옷',on:'s/sh',fin:'t'},{j:'ㅆ',name:'쌍시옷',on:'ss',fin:'t'},{j:'ㅇ',name:'이응',on:'–/ng',fin:'ng'},
 {j:'ㅈ',name:'지읒',on:'j',fin:'t'},{j:'ㅉ',name:'쌍지읒',on:'jj',fin:''},{j:'ㅊ',name:'치읓',on:'ch',fin:'t'},
 {j:'ㅋ',name:'키읔',on:'k',fin:'k'},{j:'ㅌ',name:'티읕',on:'t',fin:'t'},{j:'ㅍ',name:'피읖',on:'p',fin:'p'},{j:'ㅎ',name:'히읗',on:'h',fin:'t'}
];
const vowels=[
 {j:'ㅏ',r:'a'},{j:'ㅐ',r:'ae'},{j:'ㅑ',r:'ya'},{j:'ㅒ',r:'yae'},{j:'ㅓ',r:'eo'},{j:'ㅔ',r:'e'},
 {j:'ㅕ',r:'yeo'},{j:'ㅖ',r:'ye'},{j:'ㅗ',r:'o'},{j:'ㅘ',r:'wa'},{j:'ㅙ',r:'wae'},{j:'ㅚ',r:'oe'},
 {j:'ㅛ',r:'yo'},{j:'ㅜ',r:'u'},{j:'ㅝ',r:'wo'},{j:'ㅞ',r:'we'},{j:'ㅟ',r:'wi'},{j:'ㅠ',r:'yu'},
 {j:'ㅡ',r:'eu'},{j:'ㅢ',r:'ui'},{j:'ㅣ',r:'i'}
];
const finals=[
 {j:'ㄱ',r:'k'},{j:'ㄲ',r:'k'},{j:'ㄳ',r:'k'},{j:'ㄴ',r:'n'},{j:'ㄵ',r:'n'},{j:'ㄶ',r:'n'},
 {j:'ㄷ',r:'t'},{j:'ㄹ',r:'l'},{j:'ㄺ',r:'k'},{j:'ㄻ',r:'m'},{j:'ㄼ',r:'l'},{j:'ㄽ',r:'l'},
 {j:'ㄾ',r:'l'},{j:'ㄿ',r:'p'},{j:'ㅀ',r:'l'},{j:'ㅁ',r:'m'},{j:'ㅂ',r:'p'},{j:'ㅄ',r:'p'},
 {j:'ㅅ',r:'t'},{j:'ㅆ',r:'t'},{j:'ㅇ',r:'ng'},{j:'ㅈ',r:'t'},{j:'ㅊ',r:'t'},{j:'ㅋ',r:'k'},
 {j:'ㅌ',r:'t'},{j:'ㅍ',r:'p'},{j:'ㅎ',r:'t'}
];
const batchimGroups=[
 {sound:'ㄱ /k/',desc:'Mouth closes — no air release',class:'purple',items:['ㄱ','ㄲ','ㄳ','ㄺ','ㅋ'],example:'부엌 (kitchen)'},
 {sound:'ㄴ /n/',desc:'Tongue to roof — nasal release through nose',class:'green',items:['ㄴ','ㄵ','ㄶ'],example:'산 (mountain)'},
 {sound:'ㄷ /t/',desc:'Tongue at teeth — no air release',class:'gray',items:['ㄷ','ㅅ','ㅆ','ㅈ','ㅊ','ㅌ','ㅎ'],example:'옷 (clothes)'},
 {sound:'ㄹ /l/',desc:'Tongue to roof — air releases out the sides',class:'orange',items:['ㄹ','ㄼ','ㄽ','ㄾ','ㅀ'],example:'물 (water)'},
 {sound:'ㅁ /m/',desc:'Lips close — nasal release',class:'red',items:['ㅁ','ㄻ'],example:'밤 (night)'},
 {sound:'ㅂ /p/',desc:'Lips press shut — no air release',class:'blue',items:['ㅂ','ㅄ','ㄿ','ㅍ'],example:'밥 (rice / meal)'},
 {sound:'ㅇ /ng/',desc:'Sound resonates at the back of the mouth',class:'gold',items:['ㅇ'],example:'방 (room)'}
];
const presets=[
 {word:'안녕하세요',rom:'an·nyeong·ha·se·yo',en:'hello',meaning:'안녕하세요 · Hello',desc:'가장 널리 쓰이는 정중한 한국어 인사말입니다.'},
 {word:'한글',rom:'han·geul',en:'hangeul',meaning:'한글 · Hangeul',desc:'한국어를 적는 고유 문자 체계입니다.'},
 {word:'안녕',rom:'an·nyeong',en:'annyeong',meaning:'안녕 · Hi / Bye',desc:'가까운 사이에서 인사하거나 헤어질 때 사용합니다.'},
 {word:'사랑',rom:'sa·rang',en:'sarang',meaning:'사랑 · Love',desc:'사람이나 존재를 아끼고 소중히 여기는 마음입니다.'},
 {word:'감사',rom:'gam·sa',en:'gamsa',meaning:'감사 · Thanks',desc:'고마운 마음을 뜻하는 말입니다.'},
 {word:'밥',rom:'bap',en:'bap',meaning:'밥 · Rice / Meal',desc:'익힌 쌀밥 또는 식사를 뜻합니다.'},
 {word:'물',rom:'mul',en:'mul',meaning:'물 · Water',desc:'사람과 생명체의 생활에 꼭 필요한 액체입니다.'},
 {word:'한국',rom:'han·guk',en:'hanguk',meaning:'한국 · Korea',desc:'동아시아 한반도에 위치한 나라입니다.'},
 {word:'친구',rom:'chin·gu',en:'chingu',meaning:'친구 · Friend',desc:'가깝게 사귀는 사람을 뜻합니다.'},
 {word:'엄마',rom:'eom·ma',en:'eomma',meaning:'엄마 · Mom',desc:'어머니를 친근하게 부르는 말입니다.'},
 {word:'아빠',rom:'a·ppa',en:'appa',meaning:'아빠 · Dad',desc:'아버지를 친근하게 부르는 말입니다.'}
];
const dictionaryData={
 '안녕하세요':{rom:'annyeonghaseyo',meaning:'Hello / Good day',example:'안녕하세요. 만나서 반갑습니다. · Hello. Nice to meet you.'},
 '안녕':{rom:'annyeong',meaning:'Hi / Bye',example:'안녕! 내일 또 봐. · Bye! See you tomorrow.'},
 '한글':{rom:'hangeul',meaning:'Korean alphabet',example:'저는 한글을 공부해요. · I study Hangeul.'},
 '한국':{rom:'hanguk',meaning:'Korea',example:'한국에 가고 싶어요. · I want to go to Korea.'},
 '한국어':{rom:'hangugeo',meaning:'Korean language',example:'저는 한국어를 공부해요. · I study Korean.'},
 '친구':{rom:'chingu',meaning:'Friend',example:'민수는 제 친구예요. · Minsu is my friend.'},
 '학교':{rom:'hakgyo',meaning:'School',example:'저는 학교에 가요. · I go to school.'},
 '학생':{rom:'haksaeng',meaning:'Student',example:'저는 학생입니다. · I am a student.'},
 '선생님':{rom:'seonsaengnim',meaning:'Teacher',example:'선생님, 안녕하세요. · Hello, teacher.'},
 '사랑':{rom:'sarang',meaning:'Love',example:'사랑해요. · I love you.'},
 '사랑해요':{rom:'saranghaeyo',meaning:'I love you',example:'가족을 사랑해요. · I love my family.'},
 '감사':{rom:'gamsa',meaning:'Thanks / Gratitude',example:'감사의 마음을 전해요. · I express my gratitude.'},
 '감사합니다':{rom:'gamsahamnida',meaning:'Thank you',example:'도와주셔서 감사합니다. · Thank you for helping me.'},
 '죄송합니다':{rom:'joesonghamnida',meaning:"I'm sorry",example:'늦어서 죄송합니다. · I am sorry for being late.'},
 '물':{rom:'mul',meaning:'Water',example:'물 주세요. · Water, please.'},
 '밥':{rom:'bap',meaning:'Rice / Meal',example:'밥을 먹어요. · I eat a meal.'},
 '김치':{rom:'gimchi',meaning:'Kimchi',example:'김치를 좋아해요. · I like kimchi.'},
 '커피':{rom:'keopi',meaning:'Coffee',example:'커피 한 잔 주세요. · One coffee, please.'},
 '책':{rom:'chaek',meaning:'Book',example:'책을 읽어요. · I read a book.'},
 '집':{rom:'jip',meaning:'Home / House',example:'집에 가요. · I go home.'},
 '엄마':{rom:'eomma',meaning:'Mom',example:'엄마가 집에 있어요. · Mom is at home.'},
 '아빠':{rom:'appa',meaning:'Dad',example:'아빠와 공원에 가요. · I go to the park with Dad.'},
 '네':{rom:'ne',meaning:'Yes',example:'네, 알겠습니다. · Yes, I understand.'},
 '아니요':{rom:'aniyo',meaning:'No',example:'아니요, 괜찮아요. · No, it is okay.'},
 '주세요':{rom:'juseyo',meaning:'Please give me',example:'물 주세요. · Water, please.'},
 '괜찮아요':{rom:'gwaenchanayo',meaning:"It's okay / I'm okay",example:'네, 괜찮아요. · Yes, I am okay.'}
};

function assemble(c,v,f=''){
 const ci=CHO.indexOf(c),vi=JUNG.indexOf(v),fi=JONG.indexOf(f);
 if(ci<0||vi<0||fi<0)return `${c||''}${v||''}${f||''}`;
 return String.fromCharCode(44032+ci*588+vi*28+fi);
}
function decompose(text){
 const arr=[];for(const ch of text){
  if(ch===' '){arr.push({type:'space'});continue}
  const code=ch.charCodeAt(0);
  if(code>=44032&&code<=55203){const b=code-44032;arr.push({type:'syllable',cho:CHO[Math.floor(b/588)],jung:JUNG[Math.floor((b%588)/28)],jong:JONG[b%28]})}
 }return arr;
}
function romanSyl(s){
 const on=consonants.find(x=>x.j===s.cho)?.on.split('/')[0]||'';
 const vo=vowels.find(x=>x.j===s.jung)?.r||'';
 const fi=finals.find(x=>x.j===s.jong)?.r||'';
 return(on==='–'?'':on)+vo+fi;
}
function romanizeText(text){
 const toks=decompose(text);let out='',prev=false;
 toks.forEach(t=>{if(t.type==='space'){out=out.replace(/\s+$/,'')+' ';prev=false}else{if(prev)out+='·';out+=romanSyl(t);prev=true}});
 return out.trim();
}

function charCard(item,detailId,type){
 const b=document.createElement('button');b.className='char-card';b.innerHTML=`<span class="big">${item.j}</span><span class="sound">${item.sound}</span>`;
 b.onclick=()=>{
  document.querySelectorAll('.char-card').forEach(x=>x.classList.remove('active'));b.classList.add('active');
  const d=document.getElementById(detailId);
  if(type==='con')d.innerHTML=`<div class="hero">${item.j}</div><div><div class="name">${item.name}</div><div class="explain">Initial sound: ${item.sound}</div></div>`;
  else d.innerHTML=`<div class="hero">${item.j}</div><div><div class="name">${item.r}</div><div class="explain">Vowel sound: ${item.r}</div></div>`;
 };return b;
}
const basic=consonants.filter(x=>!['ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'].includes(x.j)),doubles=consonants.filter(x=>['ㄲ','ㄸ','ㅃ','ㅆ','ㅉ'].includes(x.j));
basic.forEach(x=>document.getElementById('basicConsonants').appendChild(charCard({j:x.j,name:x.name,sound:x.on},'consonantDetail','con')));
doubles.forEach(x=>document.getElementById('doubleConsonants').appendChild(charCard({j:x.j,name:x.name,sound:x.on},'consonantDetail','con')));
const basicV=['ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ'];
vowels.filter(x=>basicV.includes(x.j)).forEach(x=>document.getElementById('basicVowels').appendChild(charCard(x,'vowelDetail','vow')));
vowels.filter(x=>!basicV.includes(x.j)).forEach(x=>document.getElementById('combinedVowels').appendChild(charCard(x,'vowelDetail','vow')));

const acc=document.getElementById('batchimAccordion');
batchimGroups.forEach((g,idx)=>{
 const item=document.createElement('div');item.className=`acc-item ${g.class}${idx===0?' open':''}`;
 item.innerHTML=`<button class="acc-head"><span>${g.sound}</span><span class="desc">${g.desc}</span><span>${idx===0?'▲':'▼'}</span></button><div class="acc-body"><div class="grid"></div></div>`;
 const grid=item.querySelector('.grid');
 g.items.forEach(ch=>{
  const f=finals.find(x=>x.j===ch);const b=document.createElement('button');b.className='char-card';b.innerHTML=`<span class="big">${ch}</span><span class="sound">/${f?.r||''}/</span>`;
  b.onclick=()=>{document.getElementById('batchimSelected').innerHTML=`<div class="symbol">${ch}</div><div><strong>받침 ${ch}</strong><span>대표 끝소리 /${f?.r||''}/ · 예시 ${g.example}</span></div>`};grid.appendChild(b);
 });
 item.querySelector('.acc-head').onclick=()=>{item.classList.toggle('open');item.querySelector('.acc-head span:last-child').textContent=item.classList.contains('open')?'▲':'▼'};
 acc.appendChild(item);
});

let demo={cho:'ㄱ',jung:'ㅏ',jong:''},demoSlot='con';
function renderDemo(){
 demoCon.textContent=demo.cho;demoVow.textContent=demo.jung;demoFin.textContent=demo.jong;
 slotConSymbol.textContent=demo.cho;slotVowSymbol.textContent=demo.jung;slotFinSymbol.textContent=demo.jong;
 demoResult.textContent=assemble(demo.cho,demo.jung,demo.jong);demoRoman.textContent=romanSyl(demo);
 document.querySelectorAll('[data-demo-slot]').forEach(x=>x.classList.toggle('active',x.dataset.demoSlot===demoSlot));
 document.querySelectorAll('[data-demo-tab]').forEach(x=>x.className='tab '+x.dataset.demoTab+(x.dataset.demoTab===demoSlot?' active '+x.dataset.demoTab:''));
 renderDemoKeys();
}
function renderDemoKeys(){
 demoKeys.innerHTML='';let items,selected;
 if(demoSlot==='con'){items=consonants.map(x=>({j:x.j,r:x.on}));selected=demo.cho}
 else if(demoSlot==='vow'){items=vowels;selected=demo.jung}
 else{items=[{j:'',r:'none',none:true},...finals];selected=demo.jong}
 items.forEach(it=>{const b=document.createElement('button');b.className='key'+(it.none?' none':'')+(selected===it.j?' active':'');b.innerHTML=it.none?'받침 없음<span>none</span>':`${it.j}<span>${it.r}</span>`;b.onclick=()=>{if(demoSlot==='con')demo.cho=it.j;else if(demoSlot==='vow')demo.jung=it.j;else demo.jong=it.j;renderDemo()};demoKeys.appendChild(b)});
}
document.querySelectorAll('[data-demo-slot]').forEach(x=>x.onclick=()=>{demoSlot=x.dataset.demoSlot;renderDemo()});
document.querySelectorAll('[data-demo-tab]').forEach(x=>x.onclick=()=>{demoSlot=x.dataset.demoTab;renderDemo()});
demoReset.onclick=()=>{demo={cho:'ㄱ',jung:'ㅏ',jong:''};demoSlot='con';renderDemo()};demoRemoveFinal.onclick=()=>{demo.jong='';demoSlot='fin';renderDemo()};renderDemo();

document.querySelectorAll('.mode-btn').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.mode-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
 clickMode.style.display=b.dataset.mode==='click'?'block':'none';typeMode.classList.toggle('active',b.dataset.mode==='type');
});

let tokens=[],activeIndex=0,wordSlot='con',loadedPreset='안녕하세요',edited=false;
function markEdited(){edited=true;loadedPreset='';dictMain.textContent='사용자 조립 표현 · Custom phrase';dictDesc.textContent='직접 초성, 중성, 받침을 조합하고 있습니다.'}
function loadPreset(word){
 const p=presets.find(x=>x.word===word);tokens=decompose(word);activeIndex=Math.max(0,tokens.findIndex(x=>x.type==='syllable'));wordSlot='con';loadedPreset=word;edited=false;
 dictMain.textContent=p.meaning;dictDesc.textContent=p.desc;renderWord();
}
function romanText(){
 if(!edited){const p=presets.find(x=>x.word===loadedPreset);if(p)return p.rom}
 let out='',prev=false;tokens.forEach(t=>{if(t.type==='space'){out=out.replace(/\s+$/,'')+' ';prev=false}else{if(prev)out+='·';out+=romanSyl(t);prev=true}});return out.trim();
}
function getWord(){return tokens.map(t=>t.type==='space'?' ':assemble(t.cho,t.jung,t.jong)).join('')}
function renderPresets(){presetRow.innerHTML='';presets.forEach(p=>{const b=document.createElement('button');b.className='preset'+(!edited&&loadedPreset===p.word?' active':'');b.innerHTML=`${p.word}<span>${p.en}</span>`;b.onclick=()=>loadPreset(p.word);presetRow.appendChild(b)})}
function renderCards(){
 wordCards.innerHTML='';let count=0;
 tokens.forEach((t,i)=>{if(t.type==='space'){const s=document.createElement('button');s.className='space-card'+(i===activeIndex?' active':'');s.textContent='SPACE';s.onclick=()=>{activeIndex=i;renderWord()};wordCards.appendChild(s);return}
 count++;const c=document.createElement('button');c.className='syllable-card'+(i===activeIndex?' active':'');c.innerHTML=`<span class="num">${count}</span><span class="ko">${assemble(t.cho,t.jung,t.jong)}</span><span class="ro">${romanSyl(t)}</span>`;c.onclick=()=>{activeIndex=i;renderWord()};wordCards.appendChild(c)});
 const add=document.createElement('button');add.className='add-card';add.textContent='+';add.onclick=addSyllable;wordCards.appendChild(add);fullRoman.textContent=romanText()||'—';
}
function renderWordEditor(){
 const t=tokens[activeIndex];if(!t){wordEditor.innerHTML='<div class="detail">+ 버튼으로 음절을 추가하세요.</div>';return}
 if(t.type==='space'){wordEditor.innerHTML='<div class="detail">띄어쓰기가 선택되어 있습니다.</div>';return}
 wordEditor.innerHTML=`<div class="demo-layout"><div><div class="visual-stack">
 <div class="cell con"><small>자음 (CON)</small>${t.cho}</div><div class="cell vow"><small>모음 (VOW)</small>${t.jung}</div><div class="cell fin"><small>받침 (FINAL)</small>${t.jong}</div>
 </div><div class="result"><div class="ko">${assemble(t.cho,t.jung,t.jong)}</div><div class="ro">${romanSyl(t)}</div></div></div>
 <div class="slots"><div class="slot con ${wordSlot==='con'?'active':''}" data-word-slot="con"><div class="symbol">${t.cho}</div><div><b>자음</b><span>Click to change</span></div></div>
 <div class="slot vow ${wordSlot==='vow'?'active':''}" data-word-slot="vow"><div class="symbol">${t.jung}</div><div><b>모음</b><span>Click to change</span></div></div>
 <div class="slot fin ${wordSlot==='fin'?'active':''}" data-word-slot="fin"><div class="symbol">${t.jong}</div><div><b>받침</b><span>Optional</span></div></div></div></div>
 <div class="tabs"><button class="tab con ${wordSlot==='con'?'active con':''}" data-word-tab="con">자음</button><button class="tab vow ${wordSlot==='vow'?'active vow':''}" data-word-tab="vow">모음</button><button class="tab fin ${wordSlot==='fin'?'active fin':''}" data-word-tab="fin">받침</button></div><div class="keypad" id="wordKeys"></div>`;
 wordEditor.querySelectorAll('[data-word-slot]').forEach(x=>x.onclick=()=>{wordSlot=x.dataset.wordSlot;renderWordEditor()});
 wordEditor.querySelectorAll('[data-word-tab]').forEach(x=>x.onclick=()=>{wordSlot=x.dataset.wordTab;renderWordEditor()});renderWordKeys();
}
function renderWordKeys(){
 const root=document.getElementById('wordKeys'),t=tokens[activeIndex];let items,selected;
 if(wordSlot==='con'){items=consonants.map(x=>({j:x.j,r:x.on}));selected=t.cho}else if(wordSlot==='vow'){items=vowels;selected=t.jung}else{items=[{j:'',r:'none',none:true},...finals];selected=t.jong}
 items.forEach(it=>{const b=document.createElement('button');b.className='key'+(it.none?' none':'')+(selected===it.j?' active':'');b.innerHTML=it.none?'받침 없음<span>none</span>':`${it.j}<span>${it.r}</span>`;b.onclick=()=>{if(wordSlot==='con')t.cho=it.j;else if(wordSlot==='vow')t.jung=it.j;else t.jong=it.j;markEdited();renderWord()};root.appendChild(b)});
}
function addSyllable(){const t={type:'syllable',cho:'ㅇ',jung:'ㅏ',jong:''};const i=tokens.length?Math.min(activeIndex+1,tokens.length):0;tokens.splice(i,0,t);activeIndex=i;wordSlot='con';markEdited();renderWord()}
function renderWord(){renderPresets();renderCards();renderWordEditor()}
wordReset.onclick=()=>loadPreset('안녕하세요');addSpace.onclick=()=>{if(!tokens.length)return;const i=Math.min(activeIndex+1,tokens.length);if(tokens[i-1]?.type==='space'||tokens[i]?.type==='space')return;tokens.splice(i,0,{type:'space'});activeIndex=i;markEdited();renderWord()};
removeWordFinal.onclick=()=>{const t=tokens[activeIndex];if(t&&t.type==='syllable'){t.jong='';wordSlot='fin';markEdited();renderWord()}};
deleteSelected.onclick=()=>{if(!tokens[activeIndex])return;tokens.splice(activeIndex,1);activeIndex=Math.max(0,Math.min(activeIndex,tokens.length-1));markEdited();renderWord()};
speakWord.onclick=()=>speakKorean(getWord());loadPreset('안녕하세요');


function renderTypedCards(text){
 typedCards.innerHTML='';
 if(!text)return;
 const typedTokens=decompose(text);
 typedTokens.forEach(t=>{
  if(t.type==='space'){
   const s=document.createElement('div');s.className='typed-space';s.textContent='SPACE';typedCards.appendChild(s);
  }else{
   const c=document.createElement('div');c.className='typed-card';
   c.innerHTML=`<div class="ko">${assemble(t.cho,t.jung,t.jong)}</div><div class="ro">${romanSyl(t)}</div>`;
   typedCards.appendChild(c);
  }
 });
}
function applyTypedText(){
 const text=typeInput.value.trim();
 typedKorean.textContent=text||'한글을 입력해 보세요.';
 typedRoman.textContent=text?romanizeText(text):'';
 renderTypedCards(text);
}
applyTyped.onclick=applyTypedText;
typeInput.addEventListener('input',applyTypedText);
typeInput.addEventListener('keydown',e=>{if(e.key==='Enter')applyTypedText()});
sendToBuilder.onclick=()=>{
 const text=typeInput.value.trim();
 if(!text)return;
 tokens=decompose(text);
 activeIndex=Math.max(0,tokens.findIndex(x=>x.type==='syllable'));
 wordSlot='con';
 markEdited();
 document.querySelectorAll('.mode-btn').forEach(x=>x.classList.toggle('active',x.dataset.mode==='click'));
 clickMode.style.display='block';
 typeMode.classList.remove('active');
 renderWord();
 clickMode.scrollIntoView({behavior:'smooth',block:'start'});
};
speakTyped.onclick=()=>speakKorean(typeInput.value.trim());
clearTyped.onclick=()=>{
 typeInput.value='';
 typedKorean.textContent='한글을 입력해 보세요.';
 typedRoman.textContent='';
 typedCards.innerHTML='';
};