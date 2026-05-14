// ============================================
// FLASHCARDS - Lecția 2: Zahlen, Alter und Daten
// Claudia Toth · A1.1 · 32 carduri
// ============================================

const flashcardsData = [
    // === Numere 0-10 (11) ===
    { de: "null", ro: "0 (zero) · folosit la telefon: null-eins-sechs", audio: "audio/letters/null.wav" },
    { de: "eins", ro: "1 (unu) · înaintea unui substantiv devine ein/eine", audio: "audio/letters/eins.wav" },
    { de: "zwei", ro: "2 (doi) · la telefon se zice și ZWO ca să nu se confunde cu DREI", audio: "audio/letters/zwei.wav" },
    { de: "drei", ro: "3 (trei)", audio: "audio/letters/drei.wav" },
    { de: "vier", ro: "4 (patru) · NU se citește FIR, ci FIAR", audio: "audio/letters/vier.wav" },
    { de: "fünf", ro: "5 (cinci) · cu Umlaut: ü = ue", audio: "audio/letters/fuenf.wav" },
    { de: "sechs", ro: "6 (șase) · se citește ZECS", audio: "audio/letters/sechs.wav" },
    { de: "sieben", ro: "7 (șapte) · singurul număr cu 2 silabe sub 10", audio: "audio/letters/sieben.wav" },
    { de: "acht", ro: "8 (opt)", audio: "audio/letters/acht.wav" },
    { de: "neun", ro: "9 (nouă) · NU se confundă cu NEIN (= nu)!", audio: "audio/letters/neun.wav" },
    { de: "zehn", ro: "10 (zece) · se citește ȚEN", audio: "audio/letters/zehn.wav" },

    // === Numere 11-20 — capcanele (4) ===
    { de: "elf", ro: "11 (unsprezece) · NU einzehn!", audio: "audio/letters/elf.wav" },
    { de: "zwölf", ro: "12 (doisprezece) · ⚠️ cuvânt special, NU zweizehn!", audio: "audio/letters/zwoelf.wav" },
    { de: "sechzehn", ro: "16 (șaisprezece) · ⚠️ pierde s: sech-zehn (NU sechs-zehn)", audio: "audio/letters/sechzehn.wav" },
    { de: "siebzehn", ro: "17 (șaptesprezece) · ⚠️ pierde -en: sieb-zehn (NU sieben-zehn)", audio: "audio/letters/siebzehn.wav" },

    // === Zecile (6) ===
    { de: "zwanzig", ro: "20 (douăzeci)", audio: "audio/letters/zwanzig.wav" },
    { de: "dreißig", ro: "30 (treizeci) · ⚠️ cu ß (NU dreizig!)", audio: "audio/letters/dreissig.wav" },
    { de: "vierzig", ro: "40 (patruzeci)", audio: "audio/letters/vierzig.wav" },
    { de: "sechzig", ro: "60 (șaizeci) · ⚠️ pierde s (ca sechzehn)", audio: "audio/letters/sechzig.wav" },
    { de: "siebzig", ro: "70 (șaptezeci) · ⚠️ pierde -en (ca siebzehn)", audio: "audio/letters/siebzig.wav" },
    { de: "hundert", ro: "100 (o sută) · și forma EINHUNDERT", audio: "audio/letters/hundert.wav" },

    // === Numere compuse — regula inversării (3) ===
    { de: "einundzwanzig", ro: "21 (1 ȘI 20) · vârsta Andreei", audio: "audio/letters/einundzwanzig.wav" },
    { de: "fünfundzwanzig", ro: "25 (5 ȘI 20) · vârsta lui Mihai", audio: "audio/letters/fuenfundzwanzig.wav" },
    { de: "vierunddreißig", ro: "34 (4 ȘI 30) · vârsta lui Acar", audio: "audio/letters/vierunddreissig.wav" },

    // === Verbul sein (6) ===
    { de: "ich bin", ro: "eu sunt · Ich bin Andreea, ich bin 21 Jahre alt", audio: "audio/letters/ich-bin.wav" },
    { de: "du bist", ro: "tu ești · Du bist Mihai, du bist Koch", audio: "audio/letters/du-bist.wav" },
    { de: "er/sie ist", ro: "el/ea este · Annette ist Lehrerin", audio: "audio/letters/er-ist.wav" },
    { de: "wir sind", ro: "noi suntem · Wir sind in Brandenburg", audio: "audio/letters/wir-sind.wav" },
    { de: "ihr seid", ro: "voi sunteți · ⚠️ seid (cu d!), NU seit", audio: "audio/letters/ihr-seid.wav" },
    { de: "sie/Sie sind", ro: "ei sunt / dvs. sunteți · Sind Sie Frau Hullmann?", audio: "audio/letters/sie-sind.wav" },

    // === Profesii personaje (2) ===
    { de: "Ich bin Lehrerin.", ro: "Sunt profesoară. · ⚠️ FĂRĂ articol — NU se zice eine Lehrerin", audio: "audio/letters/ich-bin-lehrerin.wav" },
    { de: "Wie alt bist du?", ro: "Câți ani ai? · Ich bin 21 (Jahre alt).", audio: "audio/letters/wie-alt-bist-du.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (11 numere 0-10 · 4 capcane 11-20 · 6 zeci · 3 compuse · 6 forme sein · 2 expresii).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
