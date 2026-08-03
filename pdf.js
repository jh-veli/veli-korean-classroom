document.addEventListener('DOMContentLoaded',()=>{
  const student=document.getElementById('summaryStudent');
  const date=document.getElementById('summaryDate');
  const words=document.getElementById('summaryWords');
  const sentences=document.getElementById('summarySentences');
  const pronunciation=document.getElementById('summaryPronunciation');
  const homework=document.getElementById('summaryHomework');
  const next=document.getElementById('summaryNext');
  const preview=document.getElementById('summaryPreview');

  if(!student || !preview) return;

  date.value=new Date().toISOString().slice(0,10);

  const escapeHtml=(value)=>value.replace(/[&<>"']/g,char=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[char]);

  const lines=(value)=>value.split(/\n+/).map(v=>v.trim()).filter(Boolean);

  function renderList(value){
    const items=lines(value);
    return items.length ? `<ul>${items.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '<div class="summary-sheet-text">—</div>';
  }

  function buildSummary(){
    const lessons=[...document.querySelectorAll('.lesson-checks input:checked')].map(input=>input.value);
    preview.innerHTML=`
      <article class="summary-sheet">
        <header class="summary-sheet-header">
          <div class="summary-sheet-title">Veli Korean Classroom</div>
          <div class="summary-sheet-meta">
            <span><strong>Student:</strong> ${escapeHtml(student.value.trim() || '—')}</span>
            <span><strong>Date:</strong> ${escapeHtml(date.value || '—')}</span>
          </div>
        </header>

        <section class="summary-sheet-section">
          <h3>Today's Lesson · 오늘 배운 내용</h3>
          ${lessons.length ? `<ul>${lessons.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul>` : '<div class="summary-sheet-text">—</div>'}
        </section>

        <section class="summary-sheet-section">
          <h3>Today's Words · 오늘의 단어</h3>
          ${renderList(words.value)}
        </section>

        <section class="summary-sheet-section">
          <h3>Today's Sentences · 오늘의 문장</h3>
          ${renderList(sentences.value)}
        </section>

        <section class="summary-sheet-section">
          <h3>Pronunciation Notes · 발음 포인트</h3>
          <div class="summary-sheet-text">${escapeHtml(pronunciation.value.trim() || '—')}</div>
        </section>

        <section class="summary-sheet-section">
          <h3>Review / Homework · 복습 / 숙제</h3>
          <div class="summary-sheet-text">${escapeHtml(homework.value.trim() || '—')}</div>
        </section>

        <section class="summary-review">
          <strong>Next Lesson · 다음 수업</strong>
          <div class="summary-sheet-text">${escapeHtml(next.value.trim() || '—')}</div>
        </section>
      </article>
    `;
  }

  document.getElementById('previewSummary')?.addEventListener('click',()=>{
    buildSummary();
    preview.scrollIntoView({behavior:'smooth',block:'start'});
  });

  document.getElementById('saveSummaryPdf')?.addEventListener('click',()=>{
    buildSummary();
    setTimeout(()=>window.print(),100);
  });

  document.getElementById('resetSummary')?.addEventListener('click',()=>{
    student.value='';
    date.value=new Date().toISOString().slice(0,10);
    words.value='';
    sentences.value='';
    pronunciation.value='';
    homework.value='';
    next.value='';
    document.querySelectorAll('.lesson-checks input').forEach(input=>input.checked=false);
    preview.innerHTML='<div class="summary-empty">입력 후 ‘미리보기’를 눌러 주세요.</div>';
  });
});
