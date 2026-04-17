// ═══════════════════════════════════════
// Интерактивность сайта
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderMethodsNarrative();
  renderTeamNarrative();
  renderLencioni();
  renderConflictPairs();
  renderConflictMatrix();
  renderHeatmap();
  renderAgreementSummary();
  renderScatterPlot();
  renderPersonCards();
  renderPairCompare();
  setupNav();
});

// ─── NAV ────────────────────────────────
function setupNav() {
  const links = document.querySelectorAll('.nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, {threshold: 0.3});
  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

// ─── METHODS NARRATIVE ────────────────────
function renderMethodsNarrative() {
  const el = document.getElementById('methods-narrative');
  if (!el) return;
  el.innerHTML = `
    <h3>Интересные факты</h3>
    <div class="grid-2" style="margin-bottom:24px">
      <div class="card" style="padding:16px">
        <h4 style="margin-top:0">🧠 Про MBTI / 16Personalities</h4>
        <ul class="section-list" style="font-size:13px">
          <li><strong>2 млн тестов в месяц</strong> — самый популярный тест личности в мире. Используется в 88% компаний из Fortune 500.</li>
          <li><strong>Не коробка, а спектр.</strong> 16Personalities показывает не «ты экстраверт», а «ты на 76% экстраверт». Разница между 51% и 95% — огромная.</li>
          <li><strong>Тип не меняется</strong> — но проценты плавают. Стресс, рост, новый опыт сдвигают баланс, не переключая полюс.</li>
          <li><strong>E/I — не про общительность,</strong> а про источник энергии. Экстраверт может быть тихим, но заряжается от людей. Интроверт может быть харизматичным, но устаёт от толпы.</li>
          <li><strong>J vs P — главный источник трений в команде.</strong> Организованный (J) хочет план. Гибкий (P) хочет свободу. Оба правы — в разных ситуациях.</li>
        </ul>
      </div>
      <div class="card" style="padding:16px">
        <h4 style="margin-top:0">⚔️ Про тест Томаса-Килманна</h4>
        <ul class="section-list" style="font-size:13px">
          <li><strong>Создан в 1974 году</strong> двумя аспирантами Гарварда. 50 лет — и до сих пор стандарт в корпоративном мире.</li>
          <li><strong>Нет «правильного» стиля.</strong> Все 5 стилей адаптивны. Соперничество спасает в кризисе. Избегание спасает от ненужных битв. Проблема — когда один стиль на автопилоте.</li>
          <li><strong>Самый частый перекос</strong> в русскоязычных командах — высокое Избегание + Приспособление. Кировская команда — исключение: среднее Соперничество = 7.4 (выше нормы).</li>
          <li><strong>Ноль приспособления</strong> (как у Марии) — редкость. Означает: этот человек не уступит ради комфорта. Ни-ког-да. Это не упрямство — это принципиальность.</li>
          <li><strong>Сумма всегда = 30.</strong> 5 стилей, 30 баллов. Если где-то много — где-то мало. Нельзя быть сильным везде. Вопрос: где именно ваш «автопилот»?</li>
        </ul>
      </div>
    </div>

    <h3>Зачем два инструмента вместе?</h3>
    <p style="font-size:14px;line-height:1.7;max-width:740px;margin-bottom:16px">
      MBTI отвечает на вопрос <strong>«кто я?»</strong> — как я думаю, откуда беру энергию, как принимаю решения.
      Это стабильный портрет: Николай-ENTJ будет стратегом-визионером и на совещании, и в отпуске.
    </p>
    <p style="font-size:14px;line-height:1.7;max-width:740px;margin-bottom:16px">
      TKI отвечает на другой вопрос: <strong>«что я делаю, когда становится сложно?»</strong>
      Когда мнения расходятся, когда нужно сказать «нет», когда на кону результат —
      включается конфликтный стиль. И он может сильно отличаться от «повседневного» портрета.
    </p>
    <p style="font-size:14px;line-height:1.7;max-width:740px;margin-bottom:16px">
      <strong>Пример из нашей команды:</strong> Ирина и Ольга — обе ENFJ (Протагонист).
      Одинаковый тип, одинаковая эмпатия, одинаковая забота о людях. Но TKI у них полярный:
      Ирина — Сотрудничество 8, Компромисс 9. Ольга — Соперничество 11, Компромисс 4.
      В обычной жизни похожи. В конфликте — два разных человека. Вот что даёт TKI поверх MBTI.
    </p>
    <p style="font-size:14px;line-height:1.7;max-width:740px">
      Вместе они дают <strong>объёмный портрет</strong>: не просто «кто ты», а «как ты действуешь в ситуациях,
      которые проверяют команду на прочность».
    </p>
  `;
}

// ─── TEAM NARRATIVE ────────────────────
function renderTeamNarrative() {
  const el = document.getElementById('team-narrative');
  if (!el) return;

  el.innerHTML = `
    <div class="team-narrative">
      <div class="team-group">
        <div class="team-group-header">
          <div class="team-group-dot" style="background:#8e44ad"></div>
          <div class="team-group-title">Аналитики (NT) — 3 человека</div>
        </div>
        <div class="team-group-members">Николай (ENTJ-A) · Юра (ENTP-T) · Мария (ENTJ-A)</div>
        <p>
          Почти половина команды — аналитики. Это люди стратегии, логики и быстрых решений.
          Николай и Мария — оба Командиры (ENTJ), что означает двойную силу в планировании и исполнении,
          но и двойной риск давления на остальных. Юра (ENTP, Полемист) добавляет креативность и вызов —
          он тот, кто не даёт команде застрять в «так было всегда». Три аналитика задают высокий темп
          мышления, но могут недооценивать эмоциональную сторону решений.
        </p>
      </div>

      <div class="team-group">
        <div class="team-group-header">
          <div class="team-group-dot" style="background:#27ae60"></div>
          <div class="team-group-title">Дипломаты (NF) — 2 человека</div>
        </div>
        <div class="team-group-members">Ирина (ENFJ-T) · Ольга (ENFJ-A)</div>
        <p>
          Две ENFJ — но какие разные! Ирина (Турбулентная) — мост и медиатор, она чувствует напряжение
          до того, как оно станет конфликтом. Ольга (Ассертивная) — двигатель, её Соперничество 11
          делает её самым напористым человеком в команде. Вместе они отвечают за «человеческое»
          в командных процессах: Ирина — за безопасность, Ольга — за энергию и смысл.
          Без них команда аналитиков рискует стать машиной без сердца.
        </p>
      </div>

      <div class="team-group">
        <div class="team-group-header">
          <div class="team-group-dot" style="background:#3498db"></div>
          <div class="team-group-title">Стражи (SJ) — 1 человек</div>
        </div>
        <div class="team-group-members">Михаил (ESFJ-A)</div>
        <p>
          Единственный Страж в команде визионеров. Михаил — фундамент: организованность 82%,
          экстраверсия 90% (максимум в команде), надёжность и чувство атмосферы.
          Он тот, кто превращает стратегии аналитиков в работающие процессы.
          Но его голос может теряться среди трёх NT и двух напористых NF —
          особенно учитывая его Избегание 7 и Приспособление 7. Команде важно
          осознанно спрашивать Михаила: «Что ты правда думаешь?» — потому что сам он не скажет.
        </p>
      </div>

      <div class="team-group">
        <div class="team-group-header">
          <div class="team-group-dot" style="background:#d97757"></div>
          <div class="team-group-title">Исследователи (SP) — 1 человек</div>
        </div>
        <div class="team-group-members">Юля (ISFP-A)</div>
        <p>
          Юля — единственный исследователь и единственный интроверт в команде из 7 человек.
          Двойная уникальность — и двойной риск. В комнате, где 6 экстравертов генерируют идеи вслух,
          Юля обрабатывает глубоко и молча. Её наблюдательность (69%) ловит детали, которые
          все остальные пропускают. Но если команда не создаёт для неё пространство — эти детали
          останутся невысказанными. При этом её Соперничество 8 — неожиданно высокое:
          Юля не мягкая, она тихая. Когда её ценности задеты, она будет стоять на своём.
        </p>
      </div>

      <div class="team-group" style="border-left:3px solid var(--accent)">
        <div class="team-group-header">
          <div class="team-group-title">6 экстравертов и 1 интроверт</div>
        </div>
        <p>
          Команда заряжена на общение, быстрые обсуждения и коллективную энергию.
          Это сила — решения принимаются быстро, идеи генерируются в потоке.
          Но для Юли (единственный интроверт, ISFP) каждая планёрка — это марафон:
          она тратит энергию там, где остальные её получают.
          Практическое правило: <strong>спрашивайте Юлю первой</strong>,
          давайте ей время на ответ, не перебивайте. Её молчание — это не согласие,
          а глубокая обработка. И часто именно в этой глубине — самые ценные наблюдения.
        </p>
      </div>
    </div>
  `;
}

// ─── LENCIONI ──────────────────────────
function renderLencioni() {
  const el = document.getElementById('lencioni-container');
  if (!el) return;

  let html = `
    <p style="font-size:14px;margin-bottom:16px">
      Общий TPS команды: <strong>${LENCIONI.overall.start}%</strong> (старт) →
      <strong style="color:var(--green)">${LENCIONI.overall.sprint2}%</strong> (2 спринт).
      Рост на <strong>${LENCIONI.overall.sprint2 - LENCIONI.overall.start} п.п.</strong> за два спринта.
    </p>
    <table class="lenc-table">
      <thead>
        <tr>
          <th>Уровень</th>
          <th>Старт</th>
          <th>Спринт 2</th>
          <th>Динамика</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Порядок пирамиды Ленсиони: результат наверху → доверие внизу
  const pyramidOrder = [...LENCIONI.dysfunctions].reverse();
  pyramidOrder.forEach((d, i) => {
    const delta = d.s2 - d.start;
    const deltaClass = delta >= 0 ? 'positive' : 'negative';
    const deltaSign = delta >= 0 ? '+' : '';
    const level = pyramidOrder.length - i;
    html += `
      <tr>
        <td><strong>${d.icon} ${d.name}</strong> <span style="font-size:10px;color:var(--muted)">уровень ${level}</span></td>
        <td class="lenc-start">${d.start}%</td>
        <td class="lenc-s2">${d.s2}%</td>
        <td class="lenc-delta ${deltaClass}">${deltaSign}${delta}</td>
      </tr>
    `;
  });

  html += '</tbody></table>';
  html += '<p style="font-size:12px;color:var(--muted);margin-top:4px">Таблица следует логике пирамиды Ленсиони: результат (вершина) → доверие (фундамент). Каждый уровень опирается на предыдущий.</p>';

  // Insights — тоже в порядке пирамиды
  pyramidOrder.forEach(d => {
    html += `<div class="lenc-insight"><strong>${d.icon} ${d.name}:</strong> ${d.insight}</div>`;
  });

  // Dynamics summary
  html += `
    <div class="agreement-summary" style="margin-top:20px">
      <h4>Динамика и текущее состояние</h4>
      <p>
        Команда прошла путь от <strong>17% до 45%</strong> за два спринта. Самый впечатляющий рост —
        <strong>Требовательность</strong> (с 5% до 40%) и <strong>Результат</strong> (с -2% до 40%).
        Это значит, что команда учится спрашивать друг с друга и ориентироваться на общий результат.
      </p>
      <p style="margin-top:8px">
        <strong>Обязательность</strong> — единственный показатель, который проседал в 1 спринте (с 40% до 30%),
        но потом восстановился до 44%. Просадка — здоровый сигнал: команда стала честнее замечать невыполненные обещания.
      </p>
      <p style="margin-top:8px">
        <strong>Ключевой разрыв:</strong> обратная связь в соглашении (п.2.1.5 и п.2.1.14) vs реальность (-29% TPS).
        Команда договорилась давать ОС, но пока не научилась это делать. Это главная точка роста.
      </p>
    </div>
  `;

  // Top strengths / weaknesses
  html += '<div class="grid-2" style="margin-top:24px">';
  html += '<div><h4 style="color:var(--green)">Сильнейшие стороны (TPS 86%)</h4><ul class="section-list">';
  LENCIONI.topStrengths.forEach(s => {
    html += `<li style="padding:10px 0"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${s.cat}</div><div style="font-size:14px">${s.q}</div></li>`;
  });
  html += '</ul></div>';
  html += '<div><h4 style="color:var(--red)">Болевые точки</h4><ul class="section-list">';
  LENCIONI.topWeaknesses.forEach(s => {
    html += `<li style="padding:10px 0"><div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${s.cat}</div><div style="font-size:14px">${s.q} <strong style="color:var(--red)">(${s.tps}%)</strong></div></li>`;
  });
  html += '</ul></div></div>';

  el.innerHTML = html;
}

// ─── CONFLICT PAIRS ────────────────────
function renderConflictPairs() {
  const el = document.getElementById('conflict-pairs');
  if (!el) return;
  el.innerHTML = CONFLICT_PAIRS.map(cp => `
    <div class="conflict-card">
      <div class="conflict-title">${TEAM.find(p=>p.id===cp.a).short} ↔ ${TEAM.find(p=>p.id===cp.b).short}: ${cp.title}</div>
      <div class="conflict-desc">${cp.desc}</div>
      <div class="conflict-tip">💡 ${cp.tip}</div>
    </div>
  `).join('');
}

// ─── CONFLICT MATRIX 7x7 ─────────────
function renderConflictMatrix() {
  const el = document.getElementById('conflict-matrix-container');
  if (!el) return;

  let html = '<table class="conflict-matrix"><thead><tr><th></th>';
  TEAM.forEach(p => { html += `<th>${p.short}</th>`; });
  html += '</tr></thead><tbody>';

  TEAM.forEach((pA, i) => {
    html += `<tr><td class="cm-name">${pA.short}</td>`;
    TEAM.forEach((pB, j) => {
      if (i === j) {
        html += '<td class="cm-self">—</td>';
      } else {
        const score = conflictScore(pA, pB);
        const lvl = conflictLevel(score);
        const cls = score <= 3 ? 'cm-green' : score <= 6 ? 'cm-yellow' : 'cm-red';
        html += `<td class="${cls}" title="${pA.short} ↔ ${pB.short}: ${lvl.text} (${score})">${score}</td>`;
      }
    });
    html += '</tr>';
  });

  html += '</tbody></table>';

  html += `
    <div style="margin-top:12px;font-size:13px;color:var(--muted)">
      <span style="display:inline-block;width:14px;height:14px;background:#e8f5e9;border:1px solid #ccc;vertical-align:middle;border-radius:3px"></span> 0-3 — низкая &nbsp;
      <span style="display:inline-block;width:14px;height:14px;background:#fff8e1;border:1px solid #ccc;vertical-align:middle;border-radius:3px"></span> 4-6 — средняя &nbsp;
      <span style="display:inline-block;width:14px;height:14px;background:#fde8e8;border:1px solid #ccc;vertical-align:middle;border-radius:3px"></span> 7+ — высокая
    </div>
    <p style="font-size:13px;color:var(--muted);margin-top:12px">
      Алгоритм: оба высокое соперничество (≥8) → +4; один высокое → +2;
      низкое избегание + высокое соперничество → +2; нулевое приспособление → +1;
      оба низкая коллаборация → +1; разный E/I → +1. Максимум 10.
    </p>
  `;

  el.innerHTML = html;
}

// ─── HEATMAP ───────────────────────────
function renderHeatmap() {
  const el = document.getElementById('heatmap-container');
  if (!el) return;
  const names = HEATMAP_ORDER.map(id => TEAM.find(p=>p.id===id).short);
  let html = '<table class="heatmap"><thead><tr><th class="pt-id">Пункт</th><th class="pt-text">Соглашение</th>';
  names.forEach(n => { html += `<th>${n}</th>`; });
  html += '</tr></thead><tbody>';

  const sorted = [...AGREEMENT_POINTS].sort((a,b) => {
    const hA = (HEATMAP[a.id]||[]).filter(v=>v==='H').length;
    const hB = (HEATMAP[b.id]||[]).filter(v=>v==='H').length;
    return hB - hA;
  });

  sorted.forEach(pt => {
    const vals = HEATMAP[pt.id] || [];
    html += `<tr><td class="pt-id">${pt.id}</td><td class="pt-text">${pt.text}</td>`;
    vals.forEach(v => {
      const label = v==='L'?'Л':v==='M'?'С':v==='H'?'Т':'?';
      html += `<td class="${v==='?'?'Q':v}">${label}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

// ─── AGREEMENT SUMMARY ───────────────
function renderAgreementSummary() {
  const el = document.getElementById('agreement-summary');
  if (!el) return;

  // Find pain points
  const painPoints = AGREEMENT_POINTS.filter(pt => (HEATMAP[pt.id]||[]).filter(v=>v==='H').length >= 3);
  const unanimousEasy = AGREEMENT_POINTS.filter(pt => {
    const vals = HEATMAP[pt.id]||[];
    return vals.filter(v=>v==='L').length >= 5;
  });

  let html = '<div class="agreement-summary">';
  html += '<h4>Паттерны командного соглашения</h4>';

  if (painPoints.length) {
    html += '<p style="margin-bottom:8px"><strong style="color:var(--red)">Болевые точки</strong> (≥3 человека оценили как «трудно»):</p><ul class="section-list">';
    painPoints.forEach(pt => {
      const hCount = (HEATMAP[pt.id]||[]).filter(v=>v==='H').length;
      const whoH = HEATMAP_ORDER.map((id,i) => (HEATMAP[pt.id]||[])[i]==='H' ? TEAM.find(p=>p.id===id).short : null).filter(Boolean);
      html += `<li><strong>${pt.id}</strong> ${pt.text} — трудно для ${hCount} чел. (${whoH.join(', ')})</li>`;
    });
    html += '</ul>';
  }

  html += `
    <p style="margin-top:16px">
      <strong>Главный паттерн:</strong> пункты про обратную связь (2.1.5, 2.1.14) и делегирование (2.1.10)
      — самые трудные для команды. Это совпадает с данными Ленсиони: обратная связь -29% TPS,
      требовательность начиналась с 5%. Команда умеет договариваться, но пока не умеет
      требовать выполнения договорённостей.
    </p>
    <p style="margin-top:8px">
      <strong>Позитивный сигнал:</strong> пункт 2.1.17 (посещать встречи вовремя) — лёгок для всех.
      Базовые нормы уважения приняты.
    </p>
  `;
  html += '</div>';
  el.innerHTML = html;
}

// ─── SCATTER PLOT ─────────────────────
function renderScatterPlot() {
  const el = document.getElementById('scatter-container');
  if (!el) return;

  // Объяснение модели
  let explanation = `
    <div class="card" style="padding:16px;margin-bottom:20px">
      <h4 style="margin-top:0">Как считается ось «Эффект» (трёхфакторная модель)</h4>
      <p style="font-size:13px;color:var(--muted);margin-bottom:12px">
        Каждый пункт соглашения оценён по трём механизмам влияния (0–3 балла каждый):
      </p>
      <div class="grid-2" style="gap:12px;font-size:13px">
        <div>
          <strong style="color:var(--orange)">Т — Транзакционные издержки</strong><br>
          Переспрашивания, дублирование, ожидание, обходные пути. Нарушение пункта увеличивает «стоимость» работы вместе.
        </div>
        <div>
          <strong style="color:var(--purple)">Р — Качество решений</strong><br>
          Полнота информации, учёт мнений, снижение групповых ошибок. Нарушение пункта ухудшает решения, которые принимает команда.
        </div>
      </div>
      <div style="margin-top:8px;font-size:13px">
        <strong style="color:var(--green)">И — Качество исполнения</strong><br>
        Ясность обязательств, accountability, обратные петли. Нарушение ведёт к срыву или деградации выполнения.
      </div>
      <p style="font-size:13px;color:var(--muted);margin-top:12px">
        <strong>Эффект = Т + Р + И</strong> (0–9, нормировано в 1–5). Ленсиони — один из факторов оценки, не единственный.
      </p>
    </div>
  `;

  // Подготовка данных с jitter для наложений
  const maxH = 7;
  const points = AGREEMENT_POINTS.map(pt => {
    const hCount = (HEATMAP[pt.id]||[]).filter(v=>v==='H').length;
    const impact = IMPACT_SCORES[pt.id] || 3;
    const tri = TRI_FACTORS[pt.id] || {T:1,R:1,I:1,why:''};
    const isHighRisk = hCount >= 3 && impact >= 4;
    const isMedRisk = hCount >= 2 && impact >= 3;
    return { id: pt.id, text: pt.text, hCount, impact, tri,
      label: pt.id.replace('2.1.',''),
      color: isHighRisk ? '#c0392b' : isMedRisk ? '#e6a817' : '#3498db',
      colorName: isHighRisk ? 'high' : isMedRisk ? 'med' : 'low'
    };
  });

  // Jitter: группируем по (hCount, impact), раздвигаем наложения
  const groups = {};
  points.forEach(p => {
    const key = `${p.hCount}_${p.impact}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  });
  const jittered = [];
  Object.values(groups).forEach(group => {
    const n = group.length;
    group.forEach((p, i) => {
      let jx = 0, jy = 0;
      if (n > 1) {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const radius = n <= 3 ? 1.8 : n <= 5 ? 2.2 : 2.8;
        jx = Math.cos(angle) * radius;
        jy = Math.sin(angle) * radius;
      }
      jittered.push({...p, jx, jy});
    });
  });

  // Размеры графика
  const W = 100; // % ширины
  const H_px = 480;
  const pad = {l:7, r:3, t:6, b:10}; // % от контейнера

  let html = explanation;

  // Контейнер с фоновыми квадрантами
  html += `<div class="scatter-chart">`;

  // Фоновые квадранты (subtle)
  const midX = pad.l + (3.5 / maxH) * (W - pad.l - pad.r);
  const midY = 50; // середина по высоте (эффект 3 из 5)
  html += `<div class="scatter-quadrant q-tl" style="left:${pad.l}%;right:${100-midX}%;top:0;bottom:${100-midY}%"></div>`;
  html += `<div class="scatter-quadrant q-tr" style="left:${midX}%;right:${pad.r}%;top:0;bottom:${100-midY}%"></div>`;
  html += `<div class="scatter-quadrant q-bl" style="left:${pad.l}%;right:${100-midX}%;top:${midY}%;bottom:0"></div>`;
  html += `<div class="scatter-quadrant q-br" style="left:${midX}%;right:${pad.r}%;top:${midY}%;bottom:0"></div>`;

  // Подписи осей (горизонтальные, не вертикальные)
  html += `<div class="scatter-axis-label-y">Эффект (Т+Р+И)</div>`;
  html += `<div class="scatter-axis-label-x">Количество «Трудно» в команде</div>`;

  // Grid lines
  for (let y = 1; y <= 5; y++) {
    const topPct = pad.t + (5 - y) / 5 * (100 - pad.t - pad.b);
    html += `<div class="scatter-gridline h" style="top:${topPct}%"></div>`;
    html += `<div class="scatter-ylabel" style="top:calc(${topPct}% - 8px)">${y}</div>`;
  }
  for (let x = 0; x <= maxH; x++) {
    const leftPct = pad.l + (x / maxH) * (W - pad.l - pad.r);
    html += `<div class="scatter-gridline v" style="left:${leftPct}%"></div>`;
    html += `<div class="scatter-xlabel" style="left:${leftPct}%">${x}</div>`;
  }

  // Квадрантные метки (subtle, внутри квадрантов)
  html += `<div class="scatter-qlabel" style="left:${(pad.l+midX)/2}%;top:8%;color:#27ae60">сильные стороны</div>`;
  html += `<div class="scatter-qlabel" style="left:${(midX+100-pad.r)/2}%;top:8%;color:#c0392b">зона риска</div>`;
  html += `<div class="scatter-qlabel" style="left:${(pad.l+midX)/2}%;top:85%;color:#888">ОК</div>`;
  html += `<div class="scatter-qlabel" style="left:${(midX+100-pad.r)/2}%;top:85%;color:#e6a817">можно отложить</div>`;

  // Точки
  jittered.forEach(p => {
    const baseX = pad.l + (p.hCount / maxH) * (W - pad.l - pad.r);
    const baseY = pad.t + ((5 - p.impact) / 5) * (100 - pad.t - pad.b);
    const x = baseX + p.jx;
    const y = baseY + p.jy;
    const tipPos = (y < 25 ? ' tip-below' : '') + (x < 15 ? ' tip-right' : '');

    html += `<div class="scatter-point ${p.colorName}${tipPos}" style="left:calc(${x}% - 18px);top:calc(${y}% - 18px)">
      <span class="scatter-point-label">${p.label}</span>
      <div class="scatter-tip">
        <div class="scatter-tip-title">${p.id}: ${p.text}</div>
        <div class="scatter-tip-factors">
          <span class="f-t">Т=${p.tri.T}</span>
          <span class="f-r">Р=${p.tri.R}</span>
          <span class="f-i">И=${p.tri.I}</span>
          → Эффект <strong>${p.impact}/5</strong>
        </div>
        <div class="scatter-tip-diff">Трудно у ${p.hCount} из 7 чел.</div>
        <div class="scatter-tip-why">${p.tri.why}</div>
      </div>
    </div>`;
  });

  html += '</div>';

  // ─── САММАРИ ПО КВАДРАНТАМ ───────────
  const quadrants = { topRight:[], topLeft:[], bottomRight:[], bottomLeft:[] };
  jittered.forEach(p => {
    const isTop = p.impact >= 4;
    const isRight = p.hCount >= 3;
    if (isTop && isRight) quadrants.topRight.push(p);
    else if (isTop && !isRight) quadrants.topLeft.push(p);
    else if (!isTop && isRight) quadrants.bottomRight.push(p);
    else quadrants.bottomLeft.push(p);
  });

  const fmt = pts => pts.map(p => `<strong>${p.id}</strong> ${p.text}`).join(' · ');
  const fmtShort = pts => pts.map(p => `<strong>${p.label}</strong>`).join(', ');

  html += `
  <div style="margin-top:28px">
    <h3 style="margin-top:0">Что делать с каждым квадрантом</h3>

    ${quadrants.topRight.length ? `
    <div style="background:#fde8e8;border-radius:10px;padding:16px 20px;margin-bottom:12px;border-left:4px solid #c0392b">
      <h4 style="color:#c0392b;margin-top:0">🔴 Зона риска (${quadrants.topRight.length} пунктов: ${fmtShort(quadrants.topRight)})</h4>
      <p style="font-size:13px;margin-bottom:8px">${fmt(quadrants.topRight)}</p>
      <p style="font-size:13px;line-height:1.6">
        <strong>Это главный приоритет.</strong> Команде трудно соблюдать именно то, что критично для результата.
        Силой воли не решить — нужны <strong>системные механизмы</strong>:
        ритуал ОС на планёрке, выделенное время для конфликтов, чек-лист «кто-что-когда» после каждого решения.
        Сосредоточьте энергию здесь — остальное подтянется.
      </p>
    </div>` : ''}

    ${quadrants.topLeft.length ? `
    <div style="background:#e8f5e9;border-radius:10px;padding:16px 20px;margin-bottom:12px;border-left:4px solid #27ae60">
      <h4 style="color:#27ae60;margin-top:0">🟢 Сильные стороны (${quadrants.topLeft.length} пунктов: ${fmtShort(quadrants.topLeft)})</h4>
      <p style="font-size:13px;margin-bottom:8px">${fmt(quadrants.topLeft)}</p>
      <p style="font-size:13px;line-height:1.6">
        <strong>Это ваш фундамент.</strong> Высокий эффект + команде это даётся. Не ломайте то, что работает.
        Используйте эти пункты как <strong>якорь</strong>: «Мы это уже умеем — значит можем научиться и остальному».
        ${quadrants.topLeft.some(p => p.colorName !== 'low') ?
        '<br><em>Обратите внимание: некоторые точки здесь жёлтые — значит для 2+ человек это уже на грани. Не расслабляйтесь.</em>' : ''}
      </p>
    </div>` : ''}

    ${quadrants.bottomRight.length ? `
    <div style="background:#fff8e1;border-radius:10px;padding:16px 20px;margin-bottom:12px;border-left:4px solid #e6a817">
      <h4 style="color:#e6a817;margin-top:0">🟡 Можно отложить (${quadrants.bottomRight.length} пунктов: ${fmtShort(quadrants.bottomRight)})</h4>
      <p style="font-size:13px;margin-bottom:8px">${fmt(quadrants.bottomRight)}</p>
      <p style="font-size:13px;line-height:1.6">
        Трудно, но эффект на командную работу умеренный. <strong>Не тратьте энергию здесь</strong>, пока красная зона не закрыта.
        Вернитесь к этим пунктам, когда ОС и конфликты станут привычкой.
      </p>
    </div>` : ''}

    ${quadrants.bottomLeft.length ? `
    <div style="background:#f5f5f5;border-radius:10px;padding:16px 20px;margin-bottom:12px;border-left:4px solid #ccc">
      <h4 style="color:#888;margin-top:0">⚪ Не требует внимания (${quadrants.bottomLeft.length} пунктов: ${fmtShort(quadrants.bottomLeft)})</h4>
      <p style="font-size:13px;margin-bottom:8px">${fmt(quadrants.bottomLeft)}</p>
      <p style="font-size:13px">Легко + невысокий эффект. Оставьте как есть.</p>
    </div>` : ''}

    <div class="quote" style="margin-top:16px">
      <strong>Фокус команды:</strong> красная зона — это ${quadrants.topRight.length} пунктов из 18.
      Если за следующий спринт вы сдвинете хотя бы ${Math.ceil(quadrants.topRight.length/2)} из них в жёлтую или зелёную зону — это будет прорыв.
    </div>
  </div>`;

  el.innerHTML = html;
}

// ─── PERSON CARDS ──────────────────────
function renderPersonCards() {
  const container = document.getElementById('person-cards');
  if (!container) return;
  TEAM.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    // Build triggers with descriptions
    let triggersHtml = '';
    if (p.triggersDesc && p.triggersDesc.length) {
      triggersHtml = p.triggers.map((t, i) => `
        <div class="trigger-detail">
          <strong>${t}</strong>
          <p>${p.triggersDesc[i] || ''}</p>
        </div>
      `).join('');
    } else {
      triggersHtml = `<ul class="section-list">${p.triggers.map(s=>`<li>${s}</li>`).join('')}</ul>`;
    }

    // Build traits with descriptions
    let traitsHtml = '';
    if (p.traitsDesc && p.traitsDesc.length) {
      traitsHtml = `<div class="traits-row">${p.traits.map((t, i) => `
        <div class="trait-box">
          <div class="trait-label">${t}</div>
          <div class="trait-desc">${p.traitsDesc[i] || ''}</div>
        </div>
      `).join('')}</div>`;
    } else {
      traitsHtml = `<div class="traits-row">${p.traits.map(t => `
        <div class="trait-box"><div class="trait-label">${t}</div></div>
      `).join('')}</div>`;
    }

    // Support block
    let supportHtml = '';
    if (p.support && p.support.length) {
      supportHtml = `
        <div class="support-block">
          <h4>Как меня поддержать</h4>
          <ul class="section-list">${p.support.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-header" onclick="this.parentElement.classList.toggle('open')">
        <div>
          <div class="card-name">${p.name}</div>
          <div class="card-type">${p.role}</div>
        </div>
        <div class="card-pill" style="background:${p.color}">${p.mbti} · ${p.typeName}</div>
        <span class="card-toggle">›</span>
      </div>
      <div class="card-body">
        ${traitsHtml}
        ${p.big5 ? renderBig5(p) : '<p style="font-size:12px;color:var(--muted);font-style:italic">Big Five не пройден детально</p>'}
        <h4>Стиль в конфликте (Килманн)</h4>
        ${renderTKI(p.tki)}
        <div class="quote">${p.motto}</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--green)">Сильные стороны</h4>
            <ul class="section-list">${p.strengths.map(s=>`<li>${s}</li>`).join('')}</ul>
          </div>
          <div>
            <h4 style="color:var(--orange)">Зоны риска</h4>
            <ul class="section-list">${p.risks.map(s=>`<li>${s}</li>`).join('')}</ul>
          </div>
        </div>
        <h4 style="color:var(--red)">Триггеры — что задевает и почему</h4>
        ${triggersHtml}
        ${supportHtml}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderBig5(p) {
  const dims = [
    {key:'E', left:'Интроверт', right:'Экстраверт', color:'#e67e22'},
    {key:'N', left:'Наблюдат.', right:'Интуитивный', color:'#8e44ad'},
    {key:'T', left:'Эмоцион.', right:'Логичный', color:'#27ae60'},
    {key:'J', left:'Организов.', right:'Гибкий', color:'#e74c3c'},
    {key:'A', left:'Уверенный', right:'Неспокойный', color:'#3498db'},
  ];
  return '<h4>Черты личности</h4>' + dims.map(d => {
    const val = p.big5[d.key];
    const label = p.big5Labels[d.key];
    const isRight = label.toLowerCase().startsWith(d.right.toLowerCase().substring(0,4));
    const boldSide = isRight ? 'right' : 'left';
    return `<div class="bar-row">
      <span class="bar-label">${boldSide==='left'?`<strong>${d.left} ${val}%</strong>`:d.left}</span>
      <div class="bar-bg"><div class="bar-fill" style="width:${val}%;background:${d.color}"></div></div>
      <span class="bar-label">${boldSide==='right'?`<strong>${d.right} ${val}%</strong>`:d.right}</span>
    </div>`;
  }).join('');
}

function renderTKI(tki) {
  const items = [
    {name:'Соперничество', val:tki.compete},
    {name:'Сотрудничество', val:tki.collaborate},
    {name:'Компромисс', val:tki.compromise},
    {name:'Избегание', val:tki.avoid},
    {name:'Приспособление', val:tki.accommodate},
  ];
  return items.map(it => {
    const cls = it.val>=8?'hi':it.val<=3?'lo':'';
    const bg = it.val>=8?'var(--red)':it.val<=3?'var(--blue)':'var(--muted)';
    return `<div class="bar-row">
      <span class="bar-label">${it.name}</span>
      <div class="bar-bg"><div class="bar-fill" style="width:${it.val/12*100}%;background:${bg}"></div></div>
      <span class="bar-val ${cls}">${it.val}</span>
    </div>`;
  }).join('');
}

// ─── PAIR COMPARE ──────────────────────
function renderPairCompare() {
  const selA = document.getElementById('select-a');
  const selB = document.getElementById('select-b');
  const result = document.getElementById('pair-result');
  if (!selA || !selB) return;

  TEAM.forEach(p => {
    selA.innerHTML += `<option value="${p.id}">${p.short} (${p.mbti})</option>`;
    selB.innerHTML += `<option value="${p.id}">${p.short} (${p.mbti})</option>`;
  });
  selB.selectedIndex = 1;

  function update() {
    const aId = selA.value, bId = selB.value;
    if (aId === bId) { result.classList.remove('visible'); return; }
    const pair = ALL_PAIRS.find(p => (p.a===aId && p.b===bId) || (p.a===bId && p.b===aId));
    if (!pair) { result.classList.remove('visible'); return; }

    const pA = TEAM.find(p=>p.id===aId), pB = TEAM.find(p=>p.id===bId);
    const score = conflictScore(pA, pB);
    const lvl = conflictLevel(score);

    result.innerHTML = `
      <div class="pair-header">
        <div class="pair-person">
          <div class="pair-person-dot" style="background:${pA.color}"></div>
          <div>
            <div class="pair-person-name">${pA.short}</div>
            <div class="pair-person-type">${pA.mbti} · ${pA.typeName}</div>
          </div>
        </div>
        <span class="pair-arrow">↔</span>
        <div class="pair-person">
          <div class="pair-person-dot" style="background:${pB.color}"></div>
          <div>
            <div class="pair-person-name">${pB.short}</div>
            <div class="pair-person-type">${pB.mbti} · ${pB.typeName}</div>
          </div>
        </div>
      </div>

      <div class="traffic-light" style="background:${lvl.color}15;border:1px solid ${lvl.color}40">
        <div class="traffic-dot" style="background:${lvl.color}"></div>
        <span style="color:${lvl.color}">${lvl.emoji} ${lvl.text} (${score}/10)</span>
      </div>

      <div class="pair-section">
        <h4 style="color:var(--green)">🤝 Что вас объединяет</h4>
        <ul class="pair-list">${pair.connect.map(c=>`<li class="connect-item">${c}</li>`).join('')}</ul>
      </div>
      <div class="pair-section">
        <h4 style="color:var(--orange)">⚡ Где может возникнуть напряжение</h4>
        <ul class="pair-list">${pair.tension.map(t=>`<li class="tension-item">${t}</li>`).join('')}</ul>
      </div>
      <div class="pair-section">
        <h4 style="color:var(--accent)">📋 Правила работы в паре</h4>
        <ul class="pair-list">${pair.rules.map(r=>`<li class="rule-item">${r}</li>`).join('')}</ul>
      </div>

      <div class="pair-section" style="background:#f5f0f0;padding:16px;border-radius:var(--radius);margin-top:8px">
        <h4 style="color:var(--red);margin-top:0">🛡️ Как избежать деструктивного конфликта</h4>
        <ul class="pair-list">${pair.avoidConflict.map(r=>`<li class="avoid-item">${r}</li>`).join('')}</ul>
      </div>

      <div class="pair-section" style="background:#f5f5f0;padding:16px;border-radius:var(--radius);margin-top:8px">
        <h4 style="color:var(--orange);margin-top:0">⚡ Как создать продуктивный конфликт</h4>
        <ul class="pair-list">${pair.productiveConflict.map(r=>`<li class="productive-item">${r}</li>`).join('')}</ul>
      </div>

      <div class="pair-section" style="background:#f0f5f0;padding:16px;border-radius:var(--radius);margin-top:8px">
        <h4 style="color:var(--green);margin-top:0">🚀 Как получить максимум из взаимодействия</h4>
        <ul class="pair-list">${pair.maxValue.map(r=>`<li class="maxval-item">${r}</li>`).join('')}</ul>
      </div>
    `;
    result.classList.add('visible');
  }

  selA.addEventListener('change', update);
  selB.addEventListener('change', update);

  const params = new URLSearchParams(window.location.search);
  if (params.get('me')) { selA.value = params.get('me'); }
  if (params.get('with')) { selB.value = params.get('with'); }
  update();
}
