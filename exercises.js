// ============================================
// EXERCIȚII - Lecția 2: Zahlen, Alter und Daten
// Claudia Toth · A1.1 · 5 exerciții
// ============================================

function normalizeAnswer(str) {
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

// ============================================
// EXERCIȚIUL 1: Audio drill — auzi numărul, scrie cifra
// ============================================
const ex1Data = [
    { id: 'a', audio: 'audio/letters/zwoelf.wav', word: 'zwölf', correct: '12' },
    { id: 'b', audio: 'audio/letters/sechzehn.wav', word: 'sechzehn', correct: '16' },
    { id: 'c', audio: 'audio/letters/siebzehn.wav', word: 'siebzehn', correct: '17' },
    { id: 'd', audio: 'audio/letters/einundzwanzig.wav', word: 'einundzwanzig', correct: '21' },
    { id: 'e', audio: 'audio/letters/dreissig.wav', word: 'dreißig', correct: '30' },
    { id: 'f', audio: 'audio/letters/siebenundsechzig.wav', word: 'siebenundsechzig', correct: '67' },
    { id: 'g', audio: 'audio/letters/neunundneunzig.wav', word: 'neunundneunzig', correct: '99' },
    { id: 'h', audio: 'audio/letters/hundert.wav', word: 'hundert', correct: '100' }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔊 Ascultă numărul în germană și scrie cifra în format numeric.</strong><br>
            Click pe 🔊 pentru a auzi. Poți reasculta de câte ori vrei.<br>
            <em>Exemplu:</em> auzi <em>„fünf"</em> → scrii <strong>5</strong>.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <button class="ex-audio-btn" onclick="playExAudio('${item.audio}')" title="Ascultă numărul">🔊</button>
                <div class="input-group">
                    <label>Scrie cifra:</label>
                    <input type="text" id="ex1-${item.id}" placeholder="ex: 5" inputmode="numeric">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

let exCurrentAudio = null;
function playExAudio(src) {
    if (exCurrentAudio) { exCurrentAudio.pause(); exCurrentAudio.currentTime = 0; }
    exCurrentAudio = new Audio(src);
    exCurrentAudio.play().catch(err => console.log('Audio nu poate fi redat:', err));
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = (input.value || '').trim();
        if (userAnswer === item.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct} = ${item.word}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct} = ${item.word}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Scrie numărul în litere
// ============================================
const ex2Data = [
    { id: 'a', num: '13', correct: 'dreizehn', accept: ['dreizehn'] },
    { id: 'b', num: '21', correct: 'einundzwanzig', accept: ['einundzwanzig'] },
    { id: 'c', num: '47', correct: 'siebenundvierzig', accept: ['siebenundvierzig'] },
    { id: 'd', num: '99', correct: 'neunundneunzig', accept: ['neunundneunzig'] },
    { id: 'e', num: '100', correct: 'hundert', accept: ['hundert', 'einhundert'] },
    { id: 'f', num: '30', correct: 'dreißig', accept: ['dreißig', 'dreissig'] },
    { id: 'g', num: '16', correct: 'sechzehn', accept: ['sechzehn'] },
    { id: 'h', num: '70', correct: 'siebzig', accept: ['siebzig'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Scrie numărul în litere (germană).</strong><br>
            Atenție la regula <strong>inversării</strong>: 21-99 = cifra mică + und + zecile.<br>
            <em>Exemplu:</em> 25 → <strong>fünfundzwanzig</strong>.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>Cifra <strong style="color:#065f46; font-size:1.2rem;">${item.num}</strong> în litere:</label>
                    <input type="text" id="ex2-${item.id}" placeholder="ex: fünfundzwanzig">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Conjugare „sein"
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Ich ____ Andreea.', translation: 'Eu sunt Andreea.', correct: 'bin', accept: ['bin'] },
    { id: 'b', sentence: 'Du ____ 25 Jahre alt.', translation: 'Tu ai 25 de ani.', correct: 'bist', accept: ['bist'] },
    { id: 'c', sentence: 'Annette ____ Lehrerin.', translation: 'Annette e profesoară.', correct: 'ist', accept: ['ist'] },
    { id: 'd', sentence: 'Wir ____ in Potsdam.', translation: 'Noi suntem în Potsdam.', correct: 'sind', accept: ['sind'] },
    { id: 'e', sentence: 'Ihr ____ Studenten.', translation: 'Voi sunteți studenți.', correct: 'seid', accept: ['seid'] },
    { id: 'f', sentence: 'Sie (ei) ____ aus Marokko.', translation: 'Ei sunt din Maroc.', correct: 'sind', accept: ['sind'] },
    { id: 'g', sentence: '____ Sie Frau Hullmann?', translation: 'Sunteți (dvs.) doamna Hullmann?', correct: 'Sind', accept: ['sind'] },
    { id: 'h', sentence: 'Mihai ____ Koch.', translation: 'Mihai e bucătar.', correct: 'ist', accept: ['ist'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎯 Completează cu forma corectă a verbului „sein".</strong><br>
            Folosește ce ai învățat la teorie. Atenție la <em>ihr seid</em> (cu d, NU t)!
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="forma sein...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Cartea de vizită — match nume → profesie + vârstă
// ============================================
const ex4Data = [
    { id: 'a', name: 'Mihai', age: '25', country: 'Russland', correctBeruf: 'Koch', accept: ['koch'] },
    { id: 'b', name: 'Andreea', age: '21', country: 'Rumänien', correctBeruf: 'Studentin', accept: ['studentin'] },
    { id: 'c', name: 'Annette', age: '28', country: 'Deutschland', correctBeruf: 'Lehrerin', accept: ['lehrerin'] },
    { id: 'd', name: 'Florian', age: '30', country: 'Dänemark', correctBeruf: 'Arzt', accept: ['arzt'] },
    { id: 'e', name: 'Carolina', age: '24', country: 'Mexiko', correctBeruf: 'Fotografin', accept: ['fotografin'] },
    { id: 'f', name: 'Acar', age: '34', country: 'Marokko', correctBeruf: 'Vorarbeiter', accept: ['vorarbeiter'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>👥 Completează profesia fiecărui personaj (în germană, fără articol!).</strong><br>
            Profesii disponibile: <em>Koch · Studentin · Lehrerin · Arzt · Fotografin · Vorarbeiter</em>.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label><strong>${item.name}</strong> ist ${item.age} Jahre alt und kommt aus ${item.country}. Er/Sie ist ____.</label>
                    <input type="text" id="ex4-${item.id}" placeholder="profesia...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correctBeruf}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correctBeruf}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Răspunde la întrebări personale
// ============================================
const ex5Data = [
    { id: 'a', question: 'Wie ____ du? (verbul de salut/identificare)', translation: 'Cum te numești?', correct: 'heißt', accept: ['heißt', 'heisst'] },
    { id: 'b', question: 'Wie alt ____ Andreea? (verb sein)', translation: 'Câți ani are Andreea?', correct: 'ist', accept: ['ist'] },
    { id: 'c', question: 'Andreea ist ____ Jahre alt. (vârsta în litere)', translation: 'Andreea are 21 de ani.', correct: 'einundzwanzig', accept: ['einundzwanzig'] },
    { id: 'd', question: 'Woher ____ Mihai? (verb kommen)', translation: 'De unde vine Mihai?', correct: 'kommt', accept: ['kommt'] },
    { id: 'e', question: 'Mihai kommt aus ____. (țara — în germană)', translation: 'Mihai vine din Rusia.', correct: 'Russland', accept: ['russland'] },
    { id: 'f', question: 'Was ist Annette von ____? (substantivul „profesie")', translation: 'Ce profesie are Annette?', correct: 'Beruf', accept: ['beruf'] },
    { id: 'g', question: 'Annette ist ____. (profesia, fără articol)', translation: 'Annette e profesoară.', correct: 'Lehrerin', accept: ['lehrerin'] },
    { id: 'h', question: 'Wo ____ Florian? (verb wohnen)', translation: 'Unde locuiește Florian?', correct: 'wohnt', accept: ['wohnt'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🗣️ Completează propozițiile cu cuvântul corect.</strong><br>
            Folosește datele despre personaje și conjugările învățate.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="răspunsul...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
