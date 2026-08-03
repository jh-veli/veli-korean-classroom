const DICTIONARY_URLS = {
  krdictHome: 'https://krdict.korean.go.kr/eng/mainAction?nation=eng',
  krdictSearch(word){
    return `https://krdict.korean.go.kr/eng/dicSearch/search?nation=eng&nationCode=6&ParaWordNo=&mainSearchWord=${encodeURIComponent(word)}`;
  },
  naverHome: 'https://ko.dict.naver.com/',
  naverSearch(word){
    return `https://ko.dict.naver.com/#/search?query=${encodeURIComponent(word)}`;
  }
};

document.addEventListener('DOMContentLoaded',()=>{
  const input=document.getElementById('externalDictInput');
  const status=document.getElementById('externalDictStatus');
  const krdict=document.getElementById('openKrdict');
  const naver=document.getElementById('openNaverDict');
  const speak=document.getElementById('speakDictionaryWord');
  const copy=document.getElementById('copyDictionaryWord');

  if(!input || !status) return;

  const word=()=>input.value.trim();

  function openTab(url,message){
    const tab=window.open(url,'_blank','noopener,noreferrer');
    if(tab) status.textContent=message;
    else status.textContent='새 탭이 차단되었습니다. 브라우저의 팝업 허용 설정을 확인해 주세요.';
  }

  krdict?.addEventListener('click',()=>{
    const q=word();
    openTab(
      q ? DICTIONARY_URLS.krdictSearch(q) : DICTIONARY_URLS.krdictHome,
      q ? `한국어기초사전에서 “${q}” 검색 결과를 열었습니다.` : '한국어기초사전을 열었습니다.'
    );
  });

  naver?.addEventListener('click',()=>{
    const q=word();
    openTab(
      q ? DICTIONARY_URLS.naverSearch(q) : DICTIONARY_URLS.naverHome,
      q ? `네이버 국어사전에서 “${q}” 검색 결과를 열었습니다.` : '네이버 국어사전을 열었습니다.'
    );
  });

  speak?.addEventListener('click',()=>{
    const q=word();
    if(!q){status.textContent='먼저 발음을 들을 단어를 입력해 주세요.';input.focus();return;}
    speakKorean(q);
    status.textContent=`“${q}” 발음을 재생했습니다.`;
  });

  copy?.addEventListener('click',async()=>{
    const q=word();
    if(!q){status.textContent='먼저 복사할 단어를 입력해 주세요.';input.focus();return;}
    try{
      await navigator.clipboard.writeText(q);
    }catch{
      input.select();
      document.execCommand('copy');
    }
    status.textContent=`“${q}”를 복사했습니다.`;
  });

  input.addEventListener('keydown',event=>{
    if(event.key==='Enter') krdict?.click();
  });
});
