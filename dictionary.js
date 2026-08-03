const DICTIONARY_URLS = {
  krdictHome: 'https://krdict.korean.go.kr/eng/',
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

  const getWord=()=>input.value.trim();

  async function copyWord(word){
    if(!word) return false;
    try{
      await navigator.clipboard.writeText(word);
      return true;
    }catch{
      try{
        input.focus();
        input.select();
        return document.execCommand('copy');
      }catch{
        return false;
      }
    }
  }

  function openTab(url){
    return window.open(url,'_blank','noopener,noreferrer');
  }

  krdict?.addEventListener('click',async()=>{
    const word=getWord();
    const copied=await copyWord(word);
    const tab=openTab(DICTIONARY_URLS.krdictHome);

    if(!tab){
      status.textContent='새 탭이 차단되었습니다. 브라우저의 팝업 허용 설정을 확인해 주세요.';
      return;
    }

    if(word && copied){
      status.textContent=`“${word}”를 복사하고 한국어기초사전을 열었습니다. 새 탭의 검색창에 붙여넣어 주세요.`;
    }else if(word){
      status.textContent=`한국어기초사전을 열었습니다. 새 탭의 검색창에 “${word}”를 입력해 주세요.`;
    }else{
      status.textContent='한국어기초사전을 새 탭으로 열었습니다.';
    }
  });

  naver?.addEventListener('click',()=>{
    const word=getWord();
    const url=word ? DICTIONARY_URLS.naverSearch(word) : DICTIONARY_URLS.naverHome;
    const tab=openTab(url);

    if(!tab){
      status.textContent='새 탭이 차단되었습니다. 브라우저의 팝업 허용 설정을 확인해 주세요.';
      return;
    }

    status.textContent=word
      ? `네이버 국어사전에서 “${word}” 검색 결과를 열었습니다.`
      : '네이버 국어사전을 새 탭으로 열었습니다.';
  });

  speak?.addEventListener('click',()=>{
    const word=getWord();
    if(!word){
      status.textContent='먼저 발음을 들을 단어를 입력해 주세요.';
      input.focus();
      return;
    }
    speakKorean(word);
    status.textContent=`“${word}” 발음을 재생했습니다.`;
  });

  copy?.addEventListener('click',async()=>{
    const word=getWord();
    if(!word){
      status.textContent='먼저 복사할 단어를 입력해 주세요.';
      input.focus();
      return;
    }

    const copied=await copyWord(word);
    status.textContent=copied
      ? `“${word}”를 복사했습니다.`
      : '자동 복사에 실패했습니다. 단어를 직접 선택해 복사해 주세요.';
  });

  input.addEventListener('keydown',event=>{
    if(event.key==='Enter') krdict?.click();
  });
});
