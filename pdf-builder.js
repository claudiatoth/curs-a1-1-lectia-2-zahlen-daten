// ============================================
// PDF BUILDER — Zahlen, Alter und Daten (A1.1 · Lecția 2)
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" — 5 cursanți + Annette (profesoara)</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Studentă · Brandenburg</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · Oranienburg</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#F5F0E8[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Numere, vârstă și date personale</h1>` + t;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;

        // Ex1: audio (în PDF: tabel cuvânt german → cifra)
        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 1 — Ascultă numărul și scrie cifra (online: audio Hedda)</h3>
                <div class="instruction">În aplicația interactivă: 🔊 ascultă numărul, scrii cifra. În PDF: tabel cuvânt german ↔ cifră.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th>Auzi în germană</th><th>Scrii cifra</th></tr></thead><tbody>`;
            ex1Data.forEach(it => {
                html += `<tr><td class="verb">${it.word}</td><td><strong>${it.correct}</strong></td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        // Ex2: număr cifră → litere
        if (typeof ex2Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 2 — Scrie numărul în litere (germană)</h3>
                <div class="instruction">Regula INVERSĂRII (21-99): cifra mică + und + zecile. Ex.: 25 → fünfundzwanzig.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th>Cifra</th><th>În litere (germană)</th></tr></thead><tbody>`;
            ex2Data.forEach(it => {
                html += `<tr><td><strong>${it.num}</strong></td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        // Ex3: conjugare sein
        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 3 — Conjugarea verbului „sein" (a fi) la Präsens</h3>
                <div class="instruction">Atenție la „ihr seid" (cu d, NU t)! Sein e neregulat: bin, bist, ist, sind, seid, sind.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${filled}</div>
                        <div class="ex-explanation">🇷🇴 ${it.translation}</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }

        // Ex4: cartea de vizită cu profesie
        if (typeof ex4Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 4 — Cartea de vizită: completează profesia</h3>
                <div class="instruction">Pentru fiecare personaj, scrie profesia în germană (fără articol!). Profesii feminine se termină în -in.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th>Nume</th><th>Vârstă</th><th>Țară</th><th>Profesie</th></tr></thead><tbody>`;
            ex4Data.forEach(it => {
                html += `<tr><td><strong>${it.name}</strong></td><td>${it.age}</td><td>${it.country}</td><td class="verb">${it.correctBeruf}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        // Ex5: răspuns la întrebări personale
        if (typeof ex5Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 5 — Completează propozițiile cu cuvântul corect</h3>
                <div class="instruction">Folosește datele despre personaje și conjugările învățate.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex5Data.forEach((it, i) => {
                const filled = it.question.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${filled}</div>
                        <div class="ex-explanation">🇷🇴 ${it.translation}</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }

        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — Präsens · Präteritum · Perfekt</h1>
            <div class="andreea-note">
                <div class="andreea-note-content">
                    <div class="speaker">📌 Andreea îți spune:</div>
                    <div>Instrument de CĂUTARE. La A1 înveți complet doar Präsens — Präteritum/Perfekt vin la L11+/L17. Verbele TARI sunt verificate pe PONS.</div>
                </div>
            </div>`;

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let badgeClass = 'weak', badgeLabel = 'REGULAT';
                if (v.typ && v.typ.indexOf('tare') === 0) { badgeClass = 'strong'; badgeLabel = 'TARE (neregulat)'; }
                else if (v.typ && v.typ.indexOf('aux') === 0) { badgeClass = 'aux'; badgeLabel = 'AUXILIAR (neregulat)'; }
                const auxClass = v.aux === 'sein' ? 'sein' : 'haben';

                html += `<div class="verb-card">
                    <div class="vh">
                        <span class="name">${idx + 1}. ${v.inf}</span>
                        <span class="ro">— ${v.ro}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                        <span class="badge ${auxClass}">Perfekt + ${v.aux}</span>
                    </div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>`;

                if (v.praet) {
                    html += `<h5>Präteritum (imperfect)</h5>
                        <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                    v.praet.forEach(row => {
                        html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                    });
                    html += `</tbody></table>`;
                }
                if (v.perf && v.part) {
                    html += `<h5>Perfekt (pe scurt)</h5>
                        <div class="perfekt-box">
                            <div class="de">Auxiliar <strong>${v.aux}</strong> + participiul <strong>${v.part}</strong></div>
                            <div class="de" style="margin-top:3px">Exemplu: er <strong>${v.perf[2][1]}</strong></div>
                            <div class="ro">${v.perf[2][2]}</div>
                        </div>`;
                }
                if (v.note) html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                html += `</div>`;
            });
        }

        return html;
    }
})();
