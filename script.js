// ========== INDEX PAGE ==========

const chapters = [
  { name: "Age", slug: "age", icon: "👤", color: "#E24B4A", tag: "Algebra" },
  { name: "Average", slug: "average", icon: "📊", color: "#378ADD", tag: "Arithmetic" },
  { name: "Boat & Stream", slug: "boat_stream", icon: "⛵", color: "#1D9E75", tag: "Speed" },
  { name: "Coordinate Geometry", slug: "co-ordinate_geometry", icon: "📐", color: "#BA7517", tag: "Geometry" },
  { name: "Compound Interest", slug: "compound_interest", icon: "📈", color: "#7F77DD", tag: "Finance" },
  { name: "Data Interpretation", slug: "DI", icon: "🔢", color: "#D4537E", tag: "DI" },
  { name: "Discount", slug: "discount", icon: "🏷️", color: "#1D9E75", tag: "Commerce" },
  { name: "Geometry", slug: "geometry", icon: "📏", color: "#E24B4A", tag: "Geometry" },
  { name: "Height & Distance", slug: "height_distance", icon: "🏔️", color: "#378ADD", tag: "Trig" },
  { name: "Mensuration", slug: "mensuration", icon: "📦", color: "#BA7517", tag: "Geometry" },
  { name: "Mixture & Alligation", slug: "mixture_alligation", icon: "⚗️", color: "#7F77DD", tag: "Arithmetic" },
  { name: "Partnership", slug: "partnership", icon: "🤝", color: "#D4537E", tag: "Ratio" },
  { name: "Percentage", slug: "percentage", icon: "％", color: "#E24B4A", tag: "Arithmetic" },
  { name: "Permutation & Combination", slug: "permutation_&_combination", icon: "🎲", color: "#378ADD", tag: "P&C" },
  { name: "Pipe & Cistern", slug: "pipe_cistern", icon: "🚿", color: "#1D9E75", tag: "Work" },
  { name: "Probability", slug: "probability", icon: "🎯", color: "#BA7517", tag: "P&C" },
  { name: "Profit & Loss", slug: "profit_loss", icon: "💰", color: "#7F77DD", tag: "Commerce" },
  { name: "Proportion", slug: "proportion", icon: "⚖️", color: "#D4537E", tag: "Ratio" },
  { name: "Race & Circular Motion", slug: "race_circular_motion", icon: "🏃", color: "#E24B4A", tag: "Speed" },
  { name: "Ratio", slug: "ratio", icon: "🔵", color: "#378ADD", tag: "Ratio" },
  { name: "Simple Interest", slug: "simple_interest", icon: "🏦", color: "#1D9E75", tag: "Finance" },
  { name: "Statistics", slug: "statistics", icon: "📉", color: "#BA7517", tag: "Stats" },
  { name: "Time & Discount", slug: "time_discount", icon: "⏳", color: "#7F77DD", tag: "Finance" },
  { name: "Time & Work", slug: "time_work", icon: "🔧", color: "#D4537E", tag: "Work" },
  { name: "Train", slug: "train", icon: "🚂", color: "#E24B4A", tag: "Speed" }
];

function renderCards(list) {
  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.innerHTML = list.map(c => `
    <a href="chapter.html?chapter=${encodeURIComponent(c.slug)}" 
       class="card" 
       style="--card-color: ${c.color}"
       role="listitem">
      <div class="icon" aria-hidden="true">${c.icon}</div>
      <div class="name">${escapeHtml(c.name)}</div>
      <div class="badge" style="background: ${c.color}22; color: ${c.color}">
        ${escapeHtml(c.tag)}
      </div>
    </a>
  `).join('');
}

function filterCards(query) {
  if (!query) {
    renderCards(chapters);
    return;
  }

  const q = query.toLowerCase().trim();
  const filtered = chapters.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.tag.toLowerCase().includes(q)
  );

  renderCards(filtered);
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize on index page
if (document.getElementById("grid")) {
  renderCards(chapters);
}

// ========== CHAPTER PAGE ==========

const chapterMeta = {
  age: { name: "Age Problems", icon: "👤", color: "#E24B4A", tag: "Algebra" },
  average: { name: "Average", icon: "📊", color: "#378ADD", tag: "Arithmetic" },
  boat_stream: { name: "Boat & Stream", icon: "⛵", color: "#1D9E75", tag: "Speed" },
  "co-ordinate_geometry": { name: "Coordinate Geometry", icon: "📐", color: "#BA7517", tag: "Geometry" },
  compound_interest: { name: "Compound Interest", icon: "📈", color: "#7F77DD", tag: "Finance" },
  DI: { name: "Data Interpretation", icon: "🔢", color: "#D4537E", tag: "DI" },
  discount: { name: "Discount", icon: "🏷️", color: "#1D9E75", tag: "Commerce" },
  geometry: { name: "Geometry", icon: "📏", color: "#E24B4A", tag: "Geometry" },
  height_distance: { name: "Height & Distance", icon: "🏔️", color: "#378ADD", tag: "Trig" },
  mensuration: { name: "Mensuration", icon: "📦", color: "#BA7517", tag: "Geometry" },
  mixture_alligation: { name: "Mixture & Alligation", icon: "⚗️", color: "#7F77DD", tag: "Arithmetic" },
  partnership: { name: "Partnership", icon: "🤝", color: "#D4537E", tag: "Ratio" },
  percentage: { name: "Percentage", icon: "％", color: "#E24B4A", tag: "Arithmetic" },
  "permutation_&_combination": { name: "Permutation & Combination", icon: "🎲", color: "#378ADD", tag: "P&C" },
  pipe_cistern: { name: "Pipe & Cistern", icon: "🚿", color: "#1D9E75", tag: "Work" },
  probability: { name: "Probability", icon: "🎯", color: "#BA7517", tag: "P&C" },
  profit_loss: { name: "Profit & Loss", icon: "💰", color: "#7F77DD", tag: "Commerce" },
  proportion: { name: "Proportion", icon: "⚖️", color: "#D4537E", tag: "Ratio" },
  race_circular_motion: { name: "Race & Circular Motion", icon: "🏃", color: "#E24B4A", tag: "Speed" },
  ratio: { name: "Ratio", icon: "🔵", color: "#378ADD", tag: "Ratio" },
  simple_interest: { name: "Simple Interest", icon: "🏦", color: "#1D9E75", tag: "Finance" },
  statistics: { name: "Statistics", icon: "📉", color: "#BA7517", tag: "Stats" },
  time_discount: { name: "Time & Discount", icon: "⏳", color: "#7F77DD", tag: "Finance" },
  time_work: { name: "Time & Work", icon: "🔧", color: "#D4537E", tag: "Work" },
  train: { name: "Train", icon: "🚂", color: "#E24B4A", tag: "Speed" }
};

function answerToIndex(ans) {
  return "ABCD".indexOf(ans.trim().toUpperCase());
}

const params = new URLSearchParams(window.location.search);
const slug = params.get('chapter') || 'percentage';
const meta = chapterMeta[slug] || { name: slug, icon: "📘", color: "#E24B4A", tag: "" };

const PER_PAGE = 10;
let allQ = [];
let currentPage = 1;

// Set chapter metadata
if (document.getElementById('chTitle')) {
  document.documentElement.style.setProperty('--chapter-color', meta.color);
  document.title = `${meta.name} · CGL Practice`;
  document.getElementById('chTitle').textContent = meta.name;
  document.getElementById('chMeta').textContent = `${meta.tag} · SSC CGL / CHSL / MTS`;
  
  const iconEl = document.getElementById('chIcon');
  iconEl.textContent = meta.icon;
  iconEl.style.background = `${meta.color}22`;
  iconEl.style.color = meta.color;
}

async function loadQuestions() {
  try {
    let res = await fetch(`questions/${slug}.json`);
    if (!res.ok) throw new Error('File not found');
    
    allQ = await res.json();
    
    if (!Array.isArray(allQ)) {
      throw new Error('Invalid data format');
    }

    const qLabel = document.getElementById('qLabel');
    if (qLabel) {
      qLabel.textContent = `${allQ.length} Questions`;
    }

    renderPage(1);
    renderPagination();
  } catch (e) {
    const container = document.getElementById('qContainer');
    if (container) {
      container.innerHTML = `
        <div class="q-card">
          <div class="q-text" style="color: var(--t2); text-align: center;">
            <p style="margin-bottom: 8px;">📚 Questions coming soon for this chapter!</p>
            <p style="font-size: 12px;">Check back later for ${meta.name} questions.</p>
          </div>
        </div>`;
    }
    console.error('Error loading questions:', e);
  }
}

function renderPage(page) {
  currentPage = page;
  const start = (page - 1) * PER_PAGE;
  const slice = allQ.slice(start, start + PER_PAGE);
  const container = document.getElementById('qContainer');

  if (!container) return;

  container.innerHTML = slice.map((q, i) => {
    const qNum = start + i + 1;
    const correctIdx = answerToIndex(q.answer);
    const opts = q.options.map((o, oi) => `
      <button 
        class="opt" 
        onclick="checkAns(event, this, ${oi}, ${correctIdx}, ${qNum})"
        type="button">
        ${String.fromCharCode(65 + oi)}. ${escapeHtml(o)}
      </button>
    `).join('');

    return `
      <div class="q-card" id="qcard-${qNum}">
        <div class="q-num">Q${qNum}</div>
        <div class="q-text">${escapeHtml(q.question)}</div>
        <div class="options" id="opts-${qNum}">${opts}</div>
        <button 
          class="show-ans-btn" 
          id="showbtn-${qNum}" 
          onclick="revealAnswer(${correctIdx}, ${qNum})"
          type="button">
          Show Answer
        </button>
        <div class="solution-box" id="sol-${qNum}"></div>
      </div>`;
  }).join('');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updatePaginationActive();
}

function checkAns(event, btn, selected, correct, qNum) {
  event.preventDefault();
  const optsDiv = document.getElementById('opts-' + qNum);
  const allBtns = optsDiv.querySelectorAll('.opt');

  allBtns.forEach(b => b.disabled = true);

  btn.classList.add(selected === correct ? 'correct' : 'wrong');
  if (selected !== correct) {
    allBtns[correct].classList.add('reveal');
  }

  const showBtn = document.getElementById('showbtn-' + qNum);
  if (showBtn) showBtn.style.display = 'none';

  const solBox = document.getElementById('sol-' + qNum);
  const correctText = escapeHtml(allBtns[correct].textContent.slice(3));
  solBox.innerHTML = `<strong>✓ Correct Answer:</strong> ${String.fromCharCode(65 + correct)}. ${correctText}`;
  solBox.classList.add('open');
}

function revealAnswer(correct, qNum) {
  const optsDiv = document.getElementById('opts-' + qNum);
  const allBtns = optsDiv.querySelectorAll('.opt');
  
  allBtns.forEach(b => b.disabled = true);
  allBtns[correct].classList.add('reveal');

  const showBtn = document.getElementById('showbtn-' + qNum);
  if (showBtn) showBtn.style.display = 'none';

  const solBox = document.getElementById('sol-' + qNum);
  const correctText = escapeHtml(allBtns[correct].textContent.slice(3));
  solBox.innerHTML = `<strong>✓ Answer:</strong> ${String.fromCharCode(65 + correct)}. ${correctText}`;
  solBox.classList.add('open');
}

function renderPagination() {
  const total = Math.ceil(allQ.length / PER_PAGE);
  const pg = document.getElementById('pagination');
  
  if (!pg) return;

  pg.innerHTML = Array.from({ length: total }, (_, i) =>
    `<button class="page-btn" onclick="renderPage(${i + 1})" type="button">${i + 1}</button>`
  ).join('');
  
  updatePaginationActive();
}

function updatePaginationActive() {
  document.querySelectorAll('.page-btn').forEach((b, i) => {
    b.classList.toggle('active', i + 1 === currentPage);
  });
}

// Initialize chapter page if elements exist
if (document.getElementById('qContainer')) {
  loadQuestions();
}

// ========== QUIZ PAGE ==========

const quizChapters = ["percentage", "ratio", "profit_loss"];

async function loadQuiz() {
  let allQuestions = [];

  try {
    for (let chapter of quizChapters) {
      const res = await fetch(`questions/${chapter}.json`);
      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data)) {
        allQuestions = allQuestions.concat(data);
      }
    }

    // Shuffle
    allQuestions.sort(() => Math.random() - 0.5);
    const quizQuestions = allQuestions.slice(0, 20);

    const form = document.getElementById("quizForm");
    if (!form) return;

    form.innerHTML = quizQuestions.map((q, i) => `
      <div class="q-card">
        <div class="q-num">Q${i + 1}</div>
        <div class="q-text">${escapeHtml(q.question)}</div>
        <div class="options">
          ${['A', 'B', 'C', 'D'].map(opt => `
            <label>
              <input type="radio" name="q${i}" value="${opt}" required>
              ${opt}. ${escapeHtml(q.options["ABCD".indexOf(opt)])}
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');

    window.quizQuestions = quizQuestions;
  } catch (e) {
    console.error('Error loading quiz:', e);
  }
}

function submitQuiz() {
  if (!window.quizQuestions) return;

  let score = 0;
  window.quizQuestions.forEach((q, i) => {
    const ans = document.querySelector(`input[name="q${i}"]:checked`);
    if (ans && ans.value === q.answer) score++;
  });

  const scoreEl = document.getElementById("score");
  if (scoreEl) {
    const percentage = Math.round((score / window.quizQuestions.length) * 100);
    scoreEl.innerHTML = `
      <div style="font-size: 24px; font-weight: 700; color: var(--accent);">
        ${score}/${window.quizQuestions.length}
      </div>
      <div style="font-size: 14px; color: var(--t2); margin-top: 8px;">
        ${percentage}% Correct
      </div>
    `;
    scoreEl.style.display = 'block';
  }
}

// Initialize quiz page
if (document.getElementById("quizForm")) {
  loadQuiz();
}
