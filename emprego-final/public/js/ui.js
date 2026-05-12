// ── LOADING ──
function showLoading() {
  document.getElementById('loadingOverlay').classList.add('show');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.remove('show');
}

// ── VIEWS ──
function showView(v) {
  showLoading();
  
  document.getElementById('jobsView').style.display    = v === 'jobs'    ? 'block' : 'none';
  document.getElementById('profileView').style.display = v === 'profile' ? 'block' : 'none';
  document.getElementById('savedView').style.display   = v === 'saved'   ? 'block' : 'none';
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { jobs: 'navJobs', saved: 'navSaved', profile: 'navProfile' };
  const navEl = document.getElementById(navMap[v]);
  if (navEl) navEl.classList.add('active');
  
  if (v === 'profile') updateProfileUI();
  if (v === 'saved') renderSavedJobs();
  
  setTimeout(hideLoading, 300);
}

// ── MODALS ──
function openModal(id) {
  document.querySelectorAll('.modal-bg').forEach(m => m.classList.remove('open'));
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function switchModal(from, to) {
  closeModal(from);
  openModal(to);
}

// Close modal when clicking backdrop
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-bg').forEach(bg => {
    bg.addEventListener('click', e => {
      if (e.target === bg) bg.classList.remove('open');
    });
  });
  
  // Hide loading after initial render
  setTimeout(hideLoading, 500);
});

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
