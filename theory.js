// ============================================
// TEORIE - Zahlen, Alter und Daten
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 2 din 10
// ============================================

const theoryHTML = `
    <!-- 0: Notice diacritice + intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Astăzi: numerele și datele personale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>De ce sunt numerele atât de importante?</h4>
                <p>În Germania, <strong>orice formular oficial</strong> (Anmeldung, contract de chirie, formular medical, contract de muncă) îți cere 4 informații cu cifre:</p>
                <ul style="margin: 8px 0 4px 18px;">
                    <li><strong>Vârsta</strong> (Alter) — <em>Wie alt sind Sie?</em></li>
                    <li><strong>Telefonul</strong> (Telefonnummer) — <em>Wie ist Ihre Telefonnummer?</em></li>
                    <li><strong>Adresa și codul poștal</strong> (Adresse, PLZ) — <em>Wo wohnen Sie?</em></li>
                    <li><strong>Profesia</strong> (Beruf) — <em>Was sind Sie von Beruf?</em></li>
                </ul>
                <p style="margin-top: 10px;">Astăzi învățăm să răspundem la toate 4. La sfârșit poți completa singur(ă) un formular în germană. 📝</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Heute lernen wir die Zahlen und die wichtigsten Daten. Bist du bereit?
                            <span class="translation">Astăzi învățăm numerele și datele importante. Ești gata?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Ja, ich bin bereit! Aber die Zahlen sind schwer, oder?
                            <span class="translation">Da, sunt gata! Dar numerele sunt grele, nu?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 1: 0-20 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔢 2. Numere de la 0 la 20</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-zahlen-0-20.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Cifrele de bază</h4>
                <table class="grammar-table">
                    <tr><th>Cifră</th><th>În germană</th><th>Cifră</th><th>În germană</th></tr>
                    <tr><td>0</td><td><strong>null</strong></td><td>11</td><td><strong>elf</strong></td></tr>
                    <tr><td>1</td><td><strong>eins</strong></td><td>12</td><td><strong>zwölf</strong> ⚠️</td></tr>
                    <tr><td>2</td><td><strong>zwei</strong></td><td>13</td><td><strong>dreizehn</strong></td></tr>
                    <tr><td>3</td><td><strong>drei</strong></td><td>14</td><td><strong>vierzehn</strong></td></tr>
                    <tr><td>4</td><td><strong>vier</strong></td><td>15</td><td><strong>fünfzehn</strong></td></tr>
                    <tr><td>5</td><td><strong>fünf</strong></td><td>16</td><td><strong>sechzehn</strong> ⚠️</td></tr>
                    <tr><td>6</td><td><strong>sechs</strong></td><td>17</td><td><strong>siebzehn</strong> ⚠️</td></tr>
                    <tr><td>7</td><td><strong>sieben</strong></td><td>18</td><td><strong>achtzehn</strong></td></tr>
                    <tr><td>8</td><td><strong>acht</strong></td><td>19</td><td><strong>neunzehn</strong></td></tr>
                    <tr><td>9</td><td><strong>neun</strong></td><td>20</td><td><strong>zwanzig</strong></td></tr>
                    <tr><td>10</td><td><strong>zehn</strong></td><td></td><td></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-left: 4px solid #f59e0b;">
                <h4>⚠️ 3 capcane de pronunție</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>zwölf (12)</strong> — NU „zwei + zehn"! E un cuvânt special. Pronunție: <em>„țvölf"</em>.</li>
                    <li><strong>sechzehn (16)</strong> — pierde <strong>s</strong>-ul: NU <s>sechs-zehn</s>, ci <strong>sech-zehn</strong> (<em>„seh-țen"</em>).</li>
                    <li><strong>siebzehn (17)</strong> — pierde <strong>-en</strong>: NU <s>sieben-zehn</s>, ci <strong>sieb-zehn</strong>.</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„La examenul de la Goethe-Institut, dacă greșești <em>sechzehn</em> sau <em>siebzehn</em> la auz, pierzi un punct sigur. <strong>Învață-le pe dinafară</strong>. Eu le repet sub duș: <em>sech-zehn, sieb-zehn, sech-zehn...</em> 😄"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: 21-100 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔢 3. Numere de la 21 la 100 — regula inversării</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-zahlen-21-100.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🔄 REGULA DE AUR: cifra mică ÎNTÂI, apoi cea mare</h4>
                <p>Spre deosebire de română (douăzeci<strong>șiunu</strong>), germana zice <strong>„unu<em>și</em>douăzeci"</strong>:</p>
                <p style="font-size: 1.2rem; text-align: center; margin: 12px 0; color: #065f46;"><strong>21 = <span style="color: #dc2626;">ein</span>und<span style="color: #047857;">zwanzig</span></strong> &nbsp; (1 + și + 20)</p>
                <p>Toate numerele 21-99 funcționează la fel:</p>
            </div>

            <div class="theory-box">
                <h4>Zecile (multiplii de 10)</h4>
                <table class="grammar-table">
                    <tr><th>Cifră</th><th>Germană</th><th>Memorează</th></tr>
                    <tr><td>20</td><td><strong>zwanzig</strong></td><td>(NU zwei-zig!)</td></tr>
                    <tr><td>30</td><td><strong>dreißig</strong></td><td>⚠️ cu <strong>ß</strong> și <strong>-ig</strong> (NU dreizig)</td></tr>
                    <tr><td>40</td><td><strong>vierzig</strong></td><td>regulat</td></tr>
                    <tr><td>50</td><td><strong>fünfzig</strong></td><td>regulat</td></tr>
                    <tr><td>60</td><td><strong>sechzig</strong></td><td>⚠️ pierde s (ca sechzehn)</td></tr>
                    <tr><td>70</td><td><strong>siebzig</strong></td><td>⚠️ pierde -en (ca siebzehn)</td></tr>
                    <tr><td>80</td><td><strong>achtzig</strong></td><td>regulat</td></tr>
                    <tr><td>90</td><td><strong>neunzig</strong></td><td>regulat</td></tr>
                    <tr><td>100</td><td><strong>(ein)hundert</strong></td><td>fără und</td></tr>
                </table>
            </div>

            <div class="theory-box">
                <h4>Exemple combinate</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>21</strong> = <strong>einundzwanzig</strong> &nbsp;<em>(1 și 20)</em> &mdash; vârsta Andreei 👧</li>
                    <li><strong>25</strong> = <strong>fünfundzwanzig</strong> &nbsp;<em>(5 și 20)</em> &mdash; vârsta lui Mihai 👨‍🍳</li>
                    <li><strong>34</strong> = <strong>vierunddreißig</strong> &nbsp;<em>(4 și 30)</em> &mdash; vârsta lui Acar 👷</li>
                    <li><strong>67</strong> = <strong>siebenundsechzig</strong> &nbsp;<em>(7 și 60)</em></li>
                    <li><strong>99</strong> = <strong>neunundneunzig</strong> &nbsp;<em>(9 și 90)</em> &mdash; record!</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/mihai.png" alt="Mihai" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Mihai îți spune (cu accent rusesc 😄):</div>
                    <div class="text">„Eu am 25 de ani — <strong>fünfundzwanzig</strong>. La început scriam <em>zwanzigfünf</em> (cum e în română). <strong>NU!</strong> În germană se zice INVERS: <strong>cifra mică</strong> + <strong>und</strong> + <strong>zecile</strong>. Acum o zic în somn."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Verbul sein -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 4. Verbul „sein" (a fi) — conjugare completă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-verb-sein.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>De ce e atât de important „sein"?</h4>
                <p>Pentru a spune <strong>cine ești</strong>, <strong>câți ani ai</strong>, <strong>ce profesie ai</strong> sau <strong>cum te simți</strong>, folosești verbul <strong>sein</strong> (a fi). E cel mai folosit verb din germană.</p>
                <p>⚠️ E <strong>verb neregulat</strong> — formele NU urmează regula obișnuită (ich -e, du -st). Trebuie învățate pe dinafară.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📊 Conjugare „sein"</h4>
                <table class="grammar-table">
                    <tr><th>Pronume</th><th>Formă</th><th>Traducere</th><th>Exemplu (DE + RO)</th></tr>
                    <tr><td><strong>ich</strong></td><td><strong>bin</strong></td><td>eu sunt</td><td>Ich <strong>bin</strong> Andreea.<br><em style="color:#6b7280;">Eu sunt Andreea.</em></td></tr>
                    <tr><td><strong>du</strong></td><td><strong>bist</strong></td><td>tu ești</td><td>Du <strong>bist</strong> 21 Jahre alt.<br><em style="color:#6b7280;">Tu ai 21 de ani.</em></td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td><strong>ist</strong></td><td>el/ea este</td><td>Mihai <strong>ist</strong> Koch.<br><em style="color:#6b7280;">Mihai este bucătar.</em></td></tr>
                    <tr><td><strong>wir</strong></td><td><strong>sind</strong></td><td>noi suntem</td><td>Wir <strong>sind</strong> Studenten.<br><em style="color:#6b7280;">Noi suntem studenți.</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong>seid</strong></td><td>voi sunteți</td><td>Ihr <strong>seid</strong> in Berlin.<br><em style="color:#6b7280;">Voi sunteți în Berlin.</em></td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td><strong>sind</strong></td><td>ei sunt / dvs. sunteți</td><td><strong>Sind</strong> Sie Frau Hullmann?<br><em style="color:#6b7280;">Sunteți (dvs.) doamna Hullmann?</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-left: 4px solid #f59e0b;">
                <h4>⚠️ Capcanele lui „sein"</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>ihr seid</strong> — voi sunteți. NU <s>ihr seit</s> (cu „t"). Litera e <strong>d</strong> (de la „werd<em>en</em>" istoric).</li>
                    <li><strong>sie sind</strong> (ei) = <strong>Sie sind</strong> (dvs.) — aceeași formă! Le deosebești după <strong>contextul</strong> și <strong>S</strong>-ul mare la dvs.</li>
                    <li><strong>er ist</strong> — fără terminație -t! NU <s>er istet</s>.</li>
                </ul>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Wie alt bist du, Carolina?
                            <span class="translation">Câți ani ai, Carolina?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina</div>
                        <div class="dialog-text">Ich bin 24 Jahre alt. Und du?
                            <span class="translation">Am 24 de ani. Și tu?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Ich bin 30. Wir sind beide jung!
                            <span class="translation">Am 30. Suntem amândoi tineri!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Adresa și telefonul -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📞 5. Adresa, codul poștal și telefonul</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-adresse-telefon.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🏠 Adresa în germană</h4>
                <p>Structura standard:</p>
                <p style="text-align: center; font-size: 1.1rem; color: #065f46; margin: 10px 0;">
                    <strong>Straße + Hausnummer</strong> · <strong>PLZ + Stadt</strong>
                </p>
                <p>Exemplu: <strong>Andreea</strong> wohnt in der <strong>Rosenstraße 14, 14467 Potsdam</strong>.</p>
                <ul style="margin-left: 18px;">
                    <li><strong>Straße</strong> (Str.) = strada — cuvântul e mereu la sfârșit: <em>Rosenstraße</em>, <em>Bahnhofstraße</em>.</li>
                    <li><strong>Hausnummer</strong> = numărul (după stradă, nu înainte ca în română).</li>
                    <li><strong>PLZ</strong> = Postleitzahl = codul poștal (5 cifre, ÎNAINTEA orașului).</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>📞 Telefonul — cum se citește</h4>
                <p>În Germania, telefonul se citește în <strong>grupe de câte 2 cifre</strong> (cu numere între 21-99 inversate, normal):</p>
                <p style="text-align: center; font-size: 1.1rem; color: #065f46; margin: 10px 0;">
                    <strong>030 / 25 78 41</strong> = null-drei-null / fünfundzwanzig - achtundsiebzig - einundvierzig
                </p>
                <p>Dacă te încurci, e <strong>perfect acceptabil</strong> să citești cifră cu cifră:</p>
                <p style="text-align: center; color: #047857; margin: 8px 0;">
                    <em>null - drei - null - zwei - fünf - sieben - acht - vier - eins</em>
                </p>
                <p>La examenul Goethe-A1, ambele forme primesc punctaj.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Wie ist deine Telefonnummer, Mihai?
                            <span class="translation">Care e numărul tău de telefon, Mihai?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">0176 / 28 45 91 — null-eins-sieben-sechs, achtundzwanzig, fünfundvierzig, einundneunzig.
                            <span class="translation">0176 / 28 45 91 (citit pe grupe).</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 5: Profesia + sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>👔 6. Profesia + sumar final</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-beruf-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fee2e2; border-left: 4px solid #dc2626;">
                <h4>🚨 REGULĂ CRITICĂ: profesia FĂRĂ articol!</h4>
                <p>În română zicem <em>„sunt <strong>un</strong> profesor"</em>. În germană NU se pune articol înaintea profesiei:</p>
                <p style="text-align: center; font-size: 1.1rem; margin: 10px 0;">
                    ✅ <strong>Ich bin Lehrerin.</strong> &nbsp; (Sunt profesoară.)<br>
                    ❌ <s>Ich bin eine Lehrerin.</s>
                </p>
                <p>Construcția e: <strong>Ich bin</strong> + <strong>profesia</strong> + <strong>(von Beruf)</strong>.</p>
                <p style="margin-top:6px;">Exemple: <em>„Ich bin Lehrerin von Beruf."</em> &nbsp;sau&nbsp; <em>„Ich bin Lehrerin."</em> (varianta scurtă, cea mai folosită).</p>
            </div>

            <div class="theory-box">
                <h4>📋 Profesiile personajelor</h4>
                <table class="grammar-table">
                    <tr><th>Personaj</th><th>Profesia (DE)</th><th>Traducere</th></tr>
                    <tr><td>Mihai (25)</td><td><strong>Koch</strong></td><td>bucătar</td></tr>
                    <tr><td>Andreea (21)</td><td><strong>Studentin</strong></td><td>studentă</td></tr>
                    <tr><td>Annette (28)</td><td><strong>Lehrerin</strong></td><td>profesoară</td></tr>
                    <tr><td>Florian (30)</td><td><strong>Arzt</strong></td><td>doctor</td></tr>
                    <tr><td>Carolina (24)</td><td><strong>Fotografin</strong></td><td>fotografă</td></tr>
                    <tr><td>Acar (34)</td><td><strong>Vorarbeiter</strong></td><td>maistru construcții</td></tr>
                </table>
                <p style="margin-top: 10px;">⚠️ Atenție: la profesii, formele masculin/feminin sunt diferite:</p>
                <ul style="margin-left: 18px;">
                    <li>der Lehr<strong>er</strong> (m) → die Lehr<strong>erin</strong> (f)</li>
                    <li>der Arzt (m) → die <strong>Ärztin</strong> (f) ⚠️ cu Umlaut!</li>
                    <li>der Koch (m) → die <strong>Köchin</strong> (f) ⚠️ cu Umlaut!</li>
                    <li>der Stud<strong>ent</strong> (m) → die Stud<strong>entin</strong> (f)</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Sumarul lecției: ai învățat să spui</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>Câți ani ai</strong>: <em>„Ich bin 25 (Jahre alt)."</em></li>
                    <li><strong>Unde locuiești</strong>: <em>„Ich wohne in der Rosenstraße 14, 14467 Potsdam."</em></li>
                    <li><strong>Care e numărul tău de telefon</strong>: <em>„Meine Nummer ist 0176 / 28 45 91."</em></li>
                    <li><strong>Ce profesie ai</strong>: <em>„Ich bin Lehrerin."</em> (fără articol!)</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum ești gata să completezi un formular Anmeldung. 🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
