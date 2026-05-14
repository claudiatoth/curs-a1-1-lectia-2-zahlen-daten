// ============================================
// TEST FINAL - Lecția 2: Zahlen, Alter und Daten
// Claudia Toth · A1.1 · 15 întrebări mixte
// ============================================

function normalizeTestAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/\s+/g, ' ')
        .replace(/[.,!?;:]/g, '');
}

const finalTestData = [
    // 4× Cifre
    { type: 'luckentext', category: '🔢 Cifre', question: 'Scrie în litere:', sentence: '12 = ?', translation: 'doisprezece', accept: ['zwölf', 'zwoelf'], correct: 'zwölf', explanation: '12 = zwölf (cuvânt special, NU zweizehn).' },
    { type: 'luckentext', category: '🔢 Cifre', question: 'Scrie în litere:', sentence: '21 = ?', translation: 'douăzeci și unu', accept: ['einundzwanzig'], correct: 'einundzwanzig', explanation: 'Regula inversării: 1 + und + 20 = einundzwanzig.' },
    { type: 'luckentext', category: '🔢 Cifre', question: 'Scrie în litere:', sentence: '67 = ?', translation: 'șaizeci și șapte', accept: ['siebenundsechzig'], correct: 'siebenundsechzig', explanation: '67 = sieben + und + sechzig. Atenție: sechzig pierde s-ul!' },
    { type: 'multiple', category: '🔢 Cifre', question: 'Care e capcana de pronunție?', options: ['vierzehn (14)', 'siebzehn (17)', 'achtzehn (18)', 'neunzehn (19)'], correct: 'siebzehn (17)', explanation: 'siebzehn pierde -en: sieb-zehn (NU sieben-zehn).' },

    // 4× Verbul sein
    { type: 'luckentext', category: '📝 Verb sein', question: 'Completează:', sentence: 'Ich ____ Andreea.', translation: 'Eu sunt Andreea.', accept: ['bin'], correct: 'bin', explanation: 'ich + bin = ich bin (eu sunt).' },
    { type: 'luckentext', category: '📝 Verb sein', question: 'Completează:', sentence: 'Du ____ 25 Jahre alt.', translation: 'Tu ai 25 de ani.', accept: ['bist'], correct: 'bist', explanation: 'du + bist = du bist (tu ești).' },
    { type: 'luckentext', category: '📝 Verb sein', question: 'Completează:', sentence: 'Wir ____ in Berlin.', translation: 'Noi suntem în Berlin.', accept: ['sind'], correct: 'sind', explanation: 'wir + sind = wir sind (noi suntem).' },
    { type: 'multiple', category: '📝 Verb sein', question: 'Care e forma CORECTĂ pentru „ihr"?', options: ['ihr seit', 'ihr seid', 'ihr sind', 'ihr ist'], correct: 'ihr seid', explanation: 'ihr seid (voi sunteți) — cu d, NU t! NU se confundă cu „seit" (prepoziție de timp).' },

    // 4× Date personale
    { type: 'luckentext', category: '👤 Date personale', question: 'Câți ani are Mihai?', sentence: 'Mihai ist ____ Jahre alt. (în litere)', translation: 'Mihai are 25 de ani.', accept: ['fünfundzwanzig', 'fuenfundzwanzig'], correct: 'fünfundzwanzig', explanation: 'Mihai e 25 = fünfundzwanzig (5 + und + 20).' },
    { type: 'luckentext', category: '👤 Date personale', question: 'Care e profesia Annettei?', sentence: 'Annette ist ____.', translation: 'Annette e profesoară.', accept: ['lehrerin'], correct: 'Lehrerin', explanation: 'Lehrerin = profesoară (formă feminină de la „Lehrer").' },
    { type: 'multiple', category: '👤 Date personale', question: 'Care propoziție e CORECTĂ?', options: ['Ich bin ein Arzt.', 'Ich bin eine Arzt.', 'Ich bin Arzt.', 'Ich bin der Arzt.'], correct: 'Ich bin Arzt.', explanation: 'Profesia se spune FĂRĂ articol: „Ich bin Arzt." (NU „ein Arzt").' },
    { type: 'multiple', category: '👤 Date personale', question: 'Care e ordinea CORECTĂ în adresă?', options: ['Potsdam 14467, Rosenstraße 14', '14 Rosenstraße, Potsdam 14467', 'Rosenstraße 14, 14467 Potsdam', 'Rosenstraße, Potsdam, 14, 14467'], correct: 'Rosenstraße 14, 14467 Potsdam', explanation: 'Stradă + număr, apoi PLZ (cod) + oraș. PLZ vine ÎNAINTEA orașului.' },

    // 3× Capcane
    { type: 'multiple', category: '⚠️ Capcane', question: 'Cum se scrie 30?', options: ['dreizig', 'dreißig', 'dreizehn', 'dreizehntig'], correct: 'dreißig', explanation: '30 = dreißig (cu ß, NU dreizig!). Acceptăm și „dreissig".' },
    { type: 'multiple', category: '⚠️ Capcane', question: 'Care e forma CORECTĂ pentru „dvs. sunteți" (politicos)?', options: ['Sie seid', 'Sie bist', 'Sie sind', 'Du sind'], correct: 'Sie sind', explanation: 'La forma politicoasă: Sie + sind (cu S mare). Aceeași formă ca „ei sunt", se diferențiază prin context și S majuscul.' },
    { type: 'luckentext', category: '⚠️ Capcane', question: 'Cum se întreabă „Ce profesie aveți (dvs.)?":', sentence: 'Was sind Sie ____ Beruf?', translation: 'Ce profesie aveți?', accept: ['von'], correct: 'von', explanation: 'Construcția fixă: „von Beruf" = de profesie. Was sind Sie von Beruf?' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre numere, verbul „sein", date personale și capcane.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => {
                if (r.value === userAnswers[index].answer) r.checked = true;
            });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k];
        const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none';
    r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
