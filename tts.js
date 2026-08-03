function speakKorean(text){
  if(!text) return;
  if(!('speechSynthesis' in window)){
    alert('이 브라우저에서는 음성 재생을 지원하지 않습니다.');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}
