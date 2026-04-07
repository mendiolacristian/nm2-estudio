/* ===== NM2 Estudio PWA ===== */
(() => {
  'use strict';

  // ─── State ───
  const state = {
    view: 'home',        // home | subject | quiz-select | quiz | progress
    subjectId: null,
    subjectTab: 'theory', // theory | questions
    quizSubject: null,
    quizQuestions: [],
    quizIndex: 0,
    quizAnswered: false,
    quizScore: 0,
    quizTotal: 0,
  };

  // ─── Storage helpers ───
  const STORAGE_KEY = 'nm2-progress';

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getProgress() {
    const p = loadProgress();
    if (!p.sections) p.sections = {};   // { sectionId: true }
    if (!p.questions) p.questions = {}; // { questionKey: 'correct'|'wrong' }
    if (!p.quizzes) p.quizzes = {};     // { subjectId: { attempts: n, bestScore: n, bestTotal: n } }
    return p;
  }

  function markSection(sectionId) {
    const p = getProgress();
    p.sections[sectionId] = true;
    saveProgress(p);
  }

  function markQuestion(subjectId, qIndex, correct) {
    const p = getProgress();
    const key = `${subjectId}-q${qIndex}`;
    p.questions[key] = correct ? 'correct' : 'wrong';
    saveProgress(p);
  }

  function saveQuizResult(subjectId, score, total) {
    const p = getProgress();
    if (!p.quizzes[subjectId]) p.quizzes[subjectId] = { attempts: 0, bestScore: 0, bestTotal: total };
    p.quizzes[subjectId].attempts++;
    if (score > p.quizzes[subjectId].bestScore) {
      p.quizzes[subjectId].bestScore = score;
      p.quizzes[subjectId].bestTotal = total;
    }
    saveProgress(p);
  }

  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ─── Computed stats ───
  function getSubjectStats(subjectId) {
    const p = getProgress();
    const subject = DATA.subjects.find(s => s.id === subjectId);
    if (!subject) return { sectionsRead: 0, sectionsTotal: 0, questionsCorrect: 0, questionsTotal: 0, pct: 0 };

    const sectionsTotal = subject.sections.length;
    const sectionsRead = subject.sections.filter(s => p.sections[s.id]).length;

    const questionsTotal = subject.questions.length;
    const questionsCorrect = subject.questions.filter((_, i) => p.questions[`${subjectId}-q${i}`] === 'correct').length;

    // weight: 40% sections read + 60% questions correct
    const sectionPct = sectionsTotal > 0 ? sectionsRead / sectionsTotal : 0;
    const questionPct = questionsTotal > 0 ? questionsCorrect / questionsTotal : 0;
    const pct = Math.round((sectionPct * 40 + questionPct * 60));

    return { sectionsRead, sectionsTotal, questionsCorrect, questionsTotal, pct };
  }

  function getOverallPct() {
    const total = DATA.subjects.reduce((sum, s) => sum + getSubjectStats(s.id).pct, 0);
    return Math.round(total / DATA.subjects.length);
  }

  // ─── DOM refs ───
  const $main = document.getElementById('main');
  const $title = document.getElementById('header-title');
  const $back = document.getElementById('btn-back');
  const $headerProgress = document.getElementById('header-progress');
  const $headerProgressText = document.getElementById('header-progress-text');
  const $navBtns = document.querySelectorAll('.nav-btn');

  // ─── Navigation ───
  function navigate(view, opts = {}) {
    Object.assign(state, opts, { view });
    render();
  }

  $back.addEventListener('click', () => {
    if (state.view === 'subject') navigate('home');
    else if (state.view === 'quiz') navigate('quiz-select');
    else navigate('home');
  });

  $navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.view;
      if (v === 'home') navigate('home');
      else if (v === 'quiz') navigate('quiz-select');
      else if (v === 'progress') navigate('progress');
    });
  });

  // ─── Render router ───
  function render() {
    // Update nav active state
    $navBtns.forEach(btn => {
      const v = btn.dataset.view;
      const isActive = (v === 'home' && (state.view === 'home' || state.view === 'subject'))
        || (v === 'quiz' && (state.view === 'quiz-select' || state.view === 'quiz'))
        || (v === 'progress' && state.view === 'progress');
      btn.classList.toggle('active', isActive);
    });

    // Update header
    const showBack = state.view !== 'home' && state.view !== 'quiz-select' && state.view !== 'progress';
    $back.classList.toggle('hidden', !showBack);
    $headerProgress.classList.add('hidden');

    switch (state.view) {
      case 'home': renderHome(); break;
      case 'subject': renderSubject(); break;
      case 'quiz-select': renderQuizSelect(); break;
      case 'quiz': renderQuiz(); break;
      case 'progress': renderProgress(); break;
    }

    // Scroll to top
    $main.scrollTop = 0;
  }

  // ─── HOME ───
  function renderHome() {
    $title.textContent = 'NM2 Estudio';
    const overall = getOverallPct();

    let html = `
      <div class="home-hero">
        <h2>Exámenes Libres NM2</h2>
        <p>3 al 7 de junio 2026 · MINEDUC</p>
      </div>
      <div class="overall-progress">
        <div class="label"><span>Avance general</span><strong>${overall}%</strong></div>
        <div class="progress-bar"><div class="fill" style="width:${overall}%"></div></div>
      </div>
      <div class="info-card">
        <h4>Sobre el examen</h4>
        <p>5 pruebas · 25 preguntas cada una · 90 minutos · Opción múltiple + preguntas abiertas</p>
      </div>
      <div class="subject-grid">
    `;

    DATA.subjects.forEach(s => {
      const stats = getSubjectStats(s.id);
      html += `
        <div class="subject-card" data-id="${s.id}">
          <div class="subject-icon">${s.icon}</div>
          <div class="subject-info">
            <h3>${s.name}</h3>
            <div class="meta">${stats.sectionsRead}/${stats.sectionsTotal} temas · ${stats.questionsCorrect}/${stats.questionsTotal} correctas</div>
            <div class="subject-progress"><div class="fill" style="width:${stats.pct}%"></div></div>
          </div>
          <div class="subject-pct">${stats.pct}%</div>
        </div>
      `;
    });

    html += '</div>';
    $main.innerHTML = html;

    // Bind clicks
    $main.querySelectorAll('.subject-card').forEach(card => {
      card.addEventListener('click', () => navigate('subject', { subjectId: card.dataset.id, subjectTab: 'theory' }));
    });
  }

  // ─── SUBJECT VIEW ───
  function renderSubject() {
    const subject = DATA.subjects.find(s => s.id === state.subjectId);
    if (!subject) return navigate('home');

    $title.textContent = subject.name;
    const stats = getSubjectStats(subject.id);
    $headerProgress.classList.remove('hidden');
    $headerProgressText.textContent = `${stats.pct}%`;

    let html = `
      <div class="subject-tabs">
        <button class="${state.subjectTab === 'theory' ? 'active' : ''}" data-tab="theory">Materia</button>
        <button class="${state.subjectTab === 'questions' ? 'active' : ''}" data-tab="questions">Preguntas</button>
      </div>
    `;

    if (state.subjectTab === 'theory') {
      html += renderTheory(subject);
    } else {
      html += renderQuestions(subject);
    }

    $main.innerHTML = html;

    // Tab switching
    $main.querySelectorAll('.subject-tabs button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.subjectTab = btn.dataset.tab;
        renderSubject();
      });
    });

    // Theory section toggles
    if (state.subjectTab === 'theory') {
      $main.querySelectorAll('.theory-section').forEach(sec => {
        const header = sec.querySelector('.theory-header');
        const checkEl = sec.querySelector('.check');
        header.addEventListener('click', (e) => {
          if (e.target.closest('.check')) return;
          sec.classList.toggle('open');
        });
        checkEl.addEventListener('click', () => {
          const secId = sec.dataset.sectionId;
          markSection(secId);
          checkEl.classList.add('done');
          checkEl.innerHTML = '✓';
          // update header progress
          const newStats = getSubjectStats(subject.id);
          $headerProgressText.textContent = `${newStats.pct}%`;
        });
      });
    }

    // Question interactions
    if (state.subjectTab === 'questions') {
      bindQuestionInteractions(subject);
    }
  }

  function renderTheory(subject) {
    const p = getProgress();
    let html = '';
    subject.sections.forEach(sec => {
      const done = p.sections[sec.id];
      html += `
        <div class="theory-section" data-section-id="${sec.id}">
          <div class="theory-header">
            <div class="check ${done ? 'done' : ''}">${done ? '✓' : ''}</div>
            <span style="flex:1">${sec.title}</span>
            <span class="chevron">›</span>
          </div>
          <div class="theory-content">${sec.content}</div>
        </div>
      `;
    });
    return html;
  }

  function renderQuestions(subject) {
    const p = getProgress();
    let html = '';
    subject.questions.forEach((q, i) => {
      const key = `${subject.id}-q${i}`;
      const status = p.questions[key]; // 'correct' | 'wrong' | undefined
      const statusIcon = status === 'correct' ? '✓' : status === 'wrong' ? '✗' : '○';
      const statusClass = status === 'correct' ? 'color:var(--success)' : status === 'wrong' ? 'color:var(--error)' : 'color:var(--text-dim)';

      html += `<div class="theory-section question-section" data-q-index="${i}">`;
      html += `<div class="theory-header">
        <span style="font-size:1rem;margin-right:8px;${statusClass}">${statusIcon}</span>
        <span style="flex:1">Pregunta ${i + 1}</span>
        <span class="chevron">›</span>
      </div>`;
      html += `<div class="theory-content">`;

      if (q.stimulus) {
        html += `<div class="quiz-stimulus">${q.stimulus}</div>`;
      }

      html += `<p class="quiz-question">${q.question}</p>`;

      if (q.type === 'multiple' && q.options) {
        html += `<div class="quiz-options" data-q-index="${i}">`;
        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, oi) => {
          let cls = 'quiz-option';
          if (status) {
            cls += ' disabled';
            if (oi === q.answer) cls += ' correct';
            else if (status === 'wrong') cls += '';
          }
          html += `<button class="${cls}" data-oi="${oi}"><span class="letter">${letters[oi]}</span><span>${opt}</span></button>`;
        });
        html += '</div>';
      } else {
        // Open question - show model answer
        html += `<div class="quiz-explanation"><strong>Respuesta modelo:</strong> ${q.answer}</div>`;
        if (!status) {
          html += `<button class="btn btn-secondary" data-mark-open="${i}" style="margin-top:8px;flex:none">Marcar como estudiada</button>`;
        }
      }

      if (status && q.explanation) {
        html += `<div class="quiz-explanation" style="margin-top:12px"><strong>Explicación:</strong> ${q.explanation}</div>`;
      }

      html += '</div></div>';
    });
    return html;
  }

  function bindQuestionInteractions(subject) {
    // Toggle sections
    $main.querySelectorAll('.question-section').forEach(sec => {
      const header = sec.querySelector('.theory-header');
      header.addEventListener('click', () => sec.classList.toggle('open'));
    });

    // Multiple choice answers
    $main.querySelectorAll('.quiz-options').forEach(optGroup => {
      const qi = parseInt(optGroup.dataset.qIndex);
      const q = subject.questions[qi];
      const key = `${subject.id}-q${qi}`;
      const p = getProgress();
      if (p.questions[key]) return; // already answered

      optGroup.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const oi = parseInt(btn.dataset.oi);
          const correct = oi === q.answer;

          // Mark all as disabled
          optGroup.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));

          // Show result
          btn.classList.add(correct ? 'correct' : 'wrong');
          if (!correct) {
            optGroup.querySelector(`.quiz-option[data-oi="${q.answer}"]`).classList.add('correct');
          }

          markQuestion(subject.id, qi, correct);

          // Show explanation
          if (q.explanation) {
            const expDiv = document.createElement('div');
            expDiv.className = 'quiz-explanation';
            expDiv.style.marginTop = '12px';
            expDiv.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
            optGroup.parentElement.appendChild(expDiv);
          }

          // Update header
          const sec = optGroup.closest('.question-section');
          const icon = sec.querySelector('.theory-header span');
          icon.textContent = correct ? '✓' : '✗';
          icon.style.color = correct ? 'var(--success)' : 'var(--error)';

          // Update subject progress
          const newStats = getSubjectStats(subject.id);
          $headerProgressText.textContent = `${newStats.pct}%`;
        });
      });
    });

    // Open question mark buttons
    $main.querySelectorAll('[data-mark-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        const qi = parseInt(btn.dataset.markOpen);
        markQuestion(subject.id, qi, true);
        btn.textContent = '✓ Estudiada';
        btn.disabled = true;
        btn.style.opacity = '.5';

        const sec = btn.closest('.question-section');
        const icon = sec.querySelector('.theory-header span');
        icon.textContent = '✓';
        icon.style.color = 'var(--success)';

        const newStats = getSubjectStats(subject.id);
        $headerProgressText.textContent = `${newStats.pct}%`;
      });
    });
  }

  // ─── QUIZ SELECT ───
  function renderQuizSelect() {
    $title.textContent = 'Pruebas';
    const p = getProgress();

    let html = `
      <div class="quiz-intro">
        <h3>Simulacro de prueba</h3>
        <p>Elige una asignatura para practicar con preguntas tipo examen (25 preguntas aleatorias, 90 minutos)</p>
      </div>
      <div class="quiz-selector">
    `;

    DATA.subjects.forEach(s => {
      const qz = p.quizzes?.[s.id];
      const badge = qz ? `Mejor: ${qz.bestScore}/${qz.bestTotal}` : 'Sin intentos';
      html += `
        <button class="quiz-selector-card" data-id="${s.id}">
          <span style="font-size:1.3rem">${s.icon}</span>
          <span>${s.name}</span>
          <span class="badge">${badge}</span>
        </button>
      `;
    });

    html += '</div>';
    $main.innerHTML = html;

    $main.querySelectorAll('.quiz-selector-card').forEach(card => {
      card.addEventListener('click', () => {
        const subId = card.dataset.id;
        const subject = DATA.subjects.find(s => s.id === subId);
        // Shuffle and pick up to 25 questions
        const shuffled = [...subject.questions].sort(() => Math.random() - 0.5).slice(0, 25);
        navigate('quiz', {
          quizSubject: subId,
          quizQuestions: shuffled,
          quizIndex: 0,
          quizAnswered: false,
          quizScore: 0,
          quizTotal: shuffled.length,
        });
      });
    });
  }

  // ─── QUIZ ───
  function renderQuiz() {
    const subject = DATA.subjects.find(s => s.id === state.quizSubject);
    if (!subject) return navigate('quiz-select');

    $title.textContent = subject.name;
    $headerProgress.classList.remove('hidden');
    $headerProgressText.textContent = `${state.quizIndex + 1}/${state.quizTotal}`;

    // Check if quiz is finished
    if (state.quizIndex >= state.quizQuestions.length) {
      renderQuizResult(subject);
      return;
    }

    const q = state.quizQuestions[state.quizIndex];

    let html = `<div class="quiz-counter">Pregunta ${state.quizIndex + 1} de ${state.quizTotal}</div>`;

    if (q.stimulus) {
      html += `<div class="quiz-stimulus">${q.stimulus}</div>`;
    }

    html += `<p class="quiz-question">${q.question}</p>`;

    if (q.type === 'multiple' && q.options) {
      html += '<div class="quiz-options" id="quiz-opts">';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, oi) => {
        html += `<button class="quiz-option" data-oi="${oi}"><span class="letter">${letters[oi]}</span><span>${opt}</span></button>`;
      });
      html += '</div>';
    } else {
      // Open question in quiz mode
      html += `<textarea class="quiz-textarea" id="quiz-open" placeholder="Escribe tu respuesta..."></textarea>`;
      html += `<button class="btn btn-primary" id="quiz-show-answer" style="margin-bottom:12px">Ver respuesta modelo</button>`;
    }

    html += '<div id="quiz-feedback"></div>';
    html += `<div class="quiz-actions" id="quiz-actions" style="display:none">
      <button class="btn btn-primary" id="quiz-next">${state.quizIndex < state.quizTotal - 1 ? 'Siguiente' : 'Ver resultado'}</button>
    </div>`;

    $main.innerHTML = html;

    // Bind interactions
    if (q.type === 'multiple') {
      const opts = $main.querySelectorAll('.quiz-option');
      opts.forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.quizAnswered) return;
          state.quizAnswered = true;

          const oi = parseInt(btn.dataset.oi);
          const correct = oi === q.answer;
          if (correct) state.quizScore++;

          opts.forEach(b => b.classList.add('disabled'));
          btn.classList.add(correct ? 'correct' : 'wrong');
          if (!correct) {
            $main.querySelector(`.quiz-option[data-oi="${q.answer}"]`).classList.add('correct');
          }

          const fb = document.getElementById('quiz-feedback');
          if (q.explanation) {
            fb.innerHTML = `<div class="quiz-explanation"><strong>${correct ? '¡Correcto!' : 'Incorrecto.'}</strong> ${q.explanation}</div>`;
          }

          document.getElementById('quiz-actions').style.display = 'flex';
        });
      });
    } else {
      // Open question
      document.getElementById('quiz-show-answer').addEventListener('click', () => {
        if (state.quizAnswered) return;
        state.quizAnswered = true;
        state.quizScore++; // credit for studying

        const fb = document.getElementById('quiz-feedback');
        fb.innerHTML = `<div class="quiz-explanation"><strong>Respuesta modelo:</strong> ${q.answer}</div>`;
        if (q.explanation) {
          fb.innerHTML += `<div class="quiz-explanation" style="margin-top:8px"><strong>Explicación:</strong> ${q.explanation}</div>`;
        }

        document.getElementById('quiz-show-answer').style.display = 'none';
        document.getElementById('quiz-actions').style.display = 'flex';
      });
    }

    // Next button
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.quizIndex++;
        state.quizAnswered = false;
        renderQuiz();
        $main.scrollTop = 0;
      });
    }
  }

  function renderQuizResult(subject) {
    const pct = Math.round((state.quizScore / state.quizTotal) * 100);
    const passed = pct >= 60;

    saveQuizResult(subject.id, state.quizScore, state.quizTotal);

    let emoji, message;
    if (pct >= 90) { emoji = '🌟'; message = '¡Excelente! Dominas esta materia.'; }
    else if (pct >= 70) { emoji = '👏'; message = '¡Muy bien! Sigue practicando los temas débiles.'; }
    else if (pct >= 60) { emoji = '👍'; message = 'Aprobado, pero hay temas que reforzar.'; }
    else { emoji = '💪'; message = 'Necesitas repasar más. ¡No te rindas!'; }

    let html = `
      <div style="text-align:center;padding:32px 0">
        <div style="font-size:3rem;margin-bottom:12px">${emoji}</div>
        <h2 style="font-size:1.5rem;margin-bottom:4px">${state.quizScore} / ${state.quizTotal}</h2>
        <p style="color:var(--text-dim);margin-bottom:4px">${pct}% de aciertos</p>
        <p style="color:${passed ? 'var(--success)' : 'var(--error)'};font-weight:600;margin-bottom:16px">
          ${passed ? 'APROBADO' : 'REPROBADO (mínimo 60%)'}
        </p>
        <p style="color:var(--text-dim);font-size:.88rem;margin-bottom:24px">${message}</p>
        <div class="quiz-actions" style="justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="quiz-retry">Repetir prueba</button>
          <button class="btn btn-secondary" id="quiz-back">Volver</button>
        </div>
      </div>
    `;

    $main.innerHTML = html;

    document.getElementById('quiz-retry').addEventListener('click', () => {
      const shuffled = [...subject.questions].sort(() => Math.random() - 0.5).slice(0, 25);
      navigate('quiz', {
        quizSubject: subject.id,
        quizQuestions: shuffled,
        quizIndex: 0,
        quizAnswered: false,
        quizScore: 0,
        quizTotal: shuffled.length,
      });
    });

    document.getElementById('quiz-back').addEventListener('click', () => navigate('quiz-select'));
  }

  // ─── PROGRESS VIEW ───
  function renderProgress() {
    $title.textContent = 'Mi progreso';
    const p = getProgress();
    const overall = getOverallPct();

    const totalSections = DATA.subjects.reduce((sum, s) => sum + s.sections.length, 0);
    const readSections = DATA.subjects.reduce((sum, s) => sum + getSubjectStats(s.id).sectionsRead, 0);
    const totalQuestions = DATA.subjects.reduce((sum, s) => sum + s.questions.length, 0);
    const correctQuestions = DATA.subjects.reduce((sum, s) => sum + getSubjectStats(s.id).questionsCorrect, 0);
    const totalAttempts = Object.values(p.quizzes || {}).reduce((sum, q) => sum + (q.attempts || 0), 0);

    let html = `
      <div class="progress-stat-grid">
        <div class="progress-stat"><div class="value">${overall}%</div><div class="label">Avance total</div></div>
        <div class="progress-stat"><div class="value">${readSections}/${totalSections}</div><div class="label">Temas leídos</div></div>
        <div class="progress-stat"><div class="value">${correctQuestions}/${totalQuestions}</div><div class="label">Respuestas OK</div></div>
        <div class="progress-stat"><div class="value">${totalAttempts}</div><div class="label">Pruebas rendidas</div></div>
      </div>

      <div class="progress-detail">
        <h4>Por asignatura</h4>
    `;

    const subjectColors = {
      lengua: 'var(--c-lengua)',
      mate: 'var(--c-mate)',
      ciencias: 'var(--c-ciencias)',
      sociales: 'var(--c-sociales)',
      ingles: 'var(--c-ingles)',
    };

    DATA.subjects.forEach(s => {
      const stats = getSubjectStats(s.id);
      const color = subjectColors[s.id] || 'var(--accent)';
      const qz = p.quizzes?.[s.id];
      const quizInfo = qz ? ` · Mejor prueba: ${qz.bestScore}/${qz.bestTotal}` : '';

      html += `
        <div class="row">
          <span class="row-label">${s.icon} ${s.name.split(' ')[0]}</span>
          <div class="row-bar"><div class="fill" style="width:${stats.pct}%;background:${color}"></div></div>
          <span class="row-pct">${stats.pct}%</span>
        </div>
      `;
    });

    html += '</div>';

    // Quiz history
    html += '<div class="progress-detail"><h4>Historial de pruebas</h4>';
    let hasQuizzes = false;
    DATA.subjects.forEach(s => {
      const qz = p.quizzes?.[s.id];
      if (qz) {
        hasQuizzes = true;
        const bestPct = Math.round((qz.bestScore / qz.bestTotal) * 100);
        html += `<p style="font-size:.85rem;margin-bottom:6px">${s.icon} ${s.name}: ${qz.attempts} intento(s), mejor ${qz.bestScore}/${qz.bestTotal} (${bestPct}%)</p>`;
      }
    });
    if (!hasQuizzes) html += '<p style="font-size:.85rem;color:var(--text-dim)">Aún no has rendido pruebas de práctica.</p>';
    html += '</div>';

    html += '<button class="reset-btn" id="reset-progress">Reiniciar todo el progreso</button>';

    $main.innerHTML = html;

    document.getElementById('reset-progress').addEventListener('click', () => {
      if (confirm('¿Seguro? Se borrará todo tu progreso de estudio.')) {
        resetProgress();
        renderProgress();
      }
    });
  }

  // ─── Install Prompt ───
  let deferredPrompt = null;

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
  }

  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  function showInstallBanner() {
    if (isStandalone()) return;
    if (localStorage.getItem('nm2-install-dismissed')) return;

    const existing = document.getElementById('install-banner');
    if (existing) return;

    const banner = document.createElement('div');
    banner.id = 'install-banner';

    if (isIOS()) {
      banner.innerHTML = `
        <div class="install-content">
          <div class="install-icon">📲</div>
          <div class="install-text">
            <strong>Instalar NM2 Estudio</strong>
            <p>Toca <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin:0 2px"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg> y luego <strong>"Agregar a Inicio"</strong></p>
          </div>
          <button class="install-close" id="install-dismiss">✕</button>
        </div>
      `;
    } else {
      banner.innerHTML = `
        <div class="install-content">
          <div class="install-icon">📲</div>
          <div class="install-text">
            <strong>Instalar NM2 Estudio</strong>
            <p>Estudia offline desde tu pantalla de inicio</p>
          </div>
          <button class="btn btn-primary install-btn" id="install-accept">Instalar</button>
          <button class="install-close" id="install-dismiss">✕</button>
        </div>
      `;
    }

    document.body.appendChild(banner);

    const dismissBtn = document.getElementById('install-dismiss');
    dismissBtn.addEventListener('click', () => {
      banner.remove();
      localStorage.setItem('nm2-install-dismissed', '1');
    });

    const acceptBtn = document.getElementById('install-accept');
    if (acceptBtn && deferredPrompt) {
      acceptBtn.addEventListener('click', async () => {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
          banner.remove();
        }
        deferredPrompt = null;
      });
    }
  }

  // Android/Chrome install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBanner();
  });

  // Show iOS banner after short delay
  if (isIOS() && !isStandalone()) {
    setTimeout(showInstallBanner, 2000);
  }

  // ─── Init ───
  render();

})();
