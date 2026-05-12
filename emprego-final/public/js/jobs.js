// ── JOBS STATE ──
let jobs         = [...JOBS];
let activeFilter = 'All';
let savedJobs    = new Set();
let colorIdx     = 0;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderJobs(jobs);
});

// ── FILTERS ──
function renderFilters() {
  document.getElementById('filters').innerHTML = SECTORS.map(s =>
    '<button class="chip' + (s === activeFilter ? ' active' : '') +
    '" onclick="setFilter(\'' + s + '\')">' + s + '</button>'
  ).join('');
}

function setFilter(f) {
  activeFilter = f;
  renderFilters();
  filterJobs();
}

function filterJobs() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const list = jobs.filter(j => {
    const ms = activeFilter === 'All' || j.sector === activeFilter;
    const mq = !q || [j.title, j.org, j.city, j.sector].some(s => s.toLowerCase().includes(q));
    return ms && mq;
  });
  renderJobs(list);
}

// ── RENDER JOBS ──
function renderJobs(list) {
  document.getElementById('statTotal').textContent = list.length;
  document.getElementById('emptyMsg').style.display = list.length ? 'none' : 'block';
  const appliedIds = currentUser ? users[currentUser].applied.map(a => a.id) : [];

  document.getElementById('jobList').innerHTML = list.map(j => {
    const isApplied = appliedIds.includes(j.id);
    const isSaved   = savedJobs.has(j.id);
    return (
      '<div class="job-card">' +
        '<div class="job-top">' +
          '<div class="org-avatar" style="background:' + j.avatarBg + ';color:' + j.avatarColor + '">' + j.avatar + '</div>' +
          '<div class="job-meta">' +
            '<div class="job-title">' + j.title + '</div>' +
            '<div class="job-org">' + j.org + '</div>' +
          '</div>' +
          (j.badge === 'new'    ? '<span class="badge badge-new">Nova</span>'    : '') +
          (j.badge === 'urgent' ? '<span class="badge badge-urgent">Urgente</span>' : '') +
        '</div>' +
        '<div class="job-details">' +
          '<span class="detail-item">' +
            '<svg class="detail-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/></svg>' +
            j.city +
          '</span>' +
          '<span class="detail-item">' +
            '<svg class="detail-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/></svg>' +
            j.date +
          '</span>' +
          '<span class="badge badge-tipo">' + j.tipo + '</span>' +
        '</div>' +
        '<div class="job-salary">' + j.salary + '</div>' +
        '<div class="job-actions">' +
          (isApplied
            ? '<button class="btn-apply applied" disabled>✓ Candidatado</button>'
            : '<button class="btn-apply" onclick="handleApply(' + j.id + ')">Candidatar-se</button>') +
          '<button class="btn-save' + (isSaved ? ' saved' : '') + '" onclick="toggleSave(' + j.id + ', this)">' +
            (isSaved ? 'Guardada ✓' : 'Guardar') +
          '</button>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ── APPLY ──
function handleApply(jobId) {
  if (!currentUser) {
    openModal('loginModal');
    showToast('Por favor, entre para se candidatar');
    return;
  }
  if (!users[currentUser].cv) {
    openModal('cvPromptModal');
    return;
  }
  const u = users[currentUser];
  if (!u.applied.find(a => a.id === jobId)) {
    const job = jobs.find(j => j.id === jobId);
    u.applied.push({ id: jobId, title: job.title, org: job.org, cv: u.cv.name });
  }
  filterJobs();
  showToast('Candidatura enviada com ' + users[currentUser].cv.name + ' anexado!');
}

// ── SAVE/UNSAVE JOBS ──
function toggleSave(jobId, btn) {
  if (savedJobs.has(jobId)) {
    savedJobs.delete(jobId);
    if (btn) btn.innerHTML = 'Guardar';
    if (btn) btn.classList.remove('saved');
    showToast('Vaga removida das guardadas');
  } else {
    savedJobs.add(jobId);
    if (btn) btn.innerHTML = 'Guardada ✓';
    if (btn) btn.classList.add('saved');
    showToast('Vaga guardada!');
  }
  // Re-render to update all save buttons
  filterJobs();
}

// ── RENDER SAVED JOBS ──
function renderSavedJobs() {
  const savedList = document.getElementById('savedList');
  const emptySaved = document.getElementById('emptySaved');
  
  if (savedJobs.size === 0) {
    savedList.innerHTML = '';
    emptySaved.style.display = 'block';
    return;
  }
  
  emptySaved.style.display = 'none';
  const appliedIds = currentUser ? users[currentUser].applied.map(a => a.id) : [];
  
  savedList.innerHTML = Array.from(savedJobs).map(jobId => {
    const j = jobs.find(job => job.id === jobId);
    if (!j) return '';
    const isApplied = appliedIds.includes(j.id);
    return (
      '<div class="job-card">' +
        '<div class="job-top">' +
          '<div class="org-avatar" style="background:' + j.avatarBg + ';color:' + j.avatarColor + '">' + j.avatar + '</div>' +
          '<div class="job-meta">' +
            '<div class="job-title">' + j.title + '</div>' +
            '<div class="job-org">' + j.org + '</div>' +
          '</div>' +
          (j.badge === 'new'    ? '<span class="badge badge-new">Nova</span>'    : '') +
          (j.badge === 'urgent' ? '<span class="badge badge-urgent">Urgente</span>' : '') +
        '</div>' +
        '<div class="job-details">' +
          '<span class="detail-item">' +
            '<svg class="detail-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/></svg>' +
            j.city +
          '</span>' +
          '<span class="detail-item">' +
            '<svg class="detail-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/></svg>' +
            j.date +
          '</span>' +
          '<span class="badge badge-tipo">' + j.tipo + '</span>' +
        '</div>' +
        '<div class="job-salary">' + j.salary + '</div>' +
        '<div class="job-actions">' +
          (isApplied
            ? '<button class="btn-apply applied" disabled>✓ Candidatado</button>'
            : '<button class="btn-apply" onclick="handleApply(' + j.id + ')">Candidatar-se</button>') +
          '<button class="btn-save saved" onclick="toggleSave(' + j.id + ', this)">Guardada ✓</button>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

// ── POST JOB ──
function handlePostJob() {
  if (!currentUser) {
    openModal('loginModal');
    showToast('Por favor, entre para publicar uma vaga');
    return;
  }
  openModal('postJobModal');
}

function doPostJob() {
  const title = document.getElementById('pjTitle').value.trim();
  const org   = document.getElementById('pjOrg').value.trim();
  if (!title || !org) { showToast('Por favor, preencha o título e a empresa.'); return; }

  const c = AVATAR_COLORS[colorIdx % AVATAR_COLORS.length]; colorIdx++;
  jobs.unshift({
    id: Date.now(), title, org,
    city:   document.getElementById('pjCity').value,
    tipo:   document.getElementById('pjTipo').value,
    sector: document.getElementById('pjSector').value,
    salary: document.getElementById('pjSalary').value || 'A negociar',
    date: 'Agora mesmo', badge: 'new',
    avatar: org.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
    avatarBg: c.bg, avatarColor: c.color,
  });
  closeModal('postJobModal');
  filterJobs();
  showToast('Vaga publicada com sucesso!');
  ['pjTitle','pjOrg','pjSalary','pjDesc'].forEach(id => document.getElementById(id).value = '');
}
