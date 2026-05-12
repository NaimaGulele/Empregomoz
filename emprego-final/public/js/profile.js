// ── CV UPLOAD ──
function handleCVUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('Ficheiro muito grande. Máx 5MB.'); return; }
  users[currentUser].cv = { name: file.name, size: Math.round(file.size / 1024) + 'KB' };
  updateProfileUI();
  showToast('CV carregado com sucesso!');
}

// ── PROFILE UI ──
function updateProfileUI() {
  if (!currentUser) return;
  const u = users[currentUser];
  const initials = u.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  document.getElementById('profileAvatar').textContent = initials;
  document.getElementById('profileName').textContent   = u.name;
  document.getElementById('profileEmail').textContent  = currentUser;

  const cvStatus   = document.getElementById('cvStatus');
  const cvFilename = document.getElementById('cvFilename');
  const cvLabel    = document.getElementById('cvUploadLabel');

  if (u.cv) {
    cvStatus.textContent   = 'CV carregado ✓';
    cvStatus.className     = 'cv-status uploaded';
    cvFilename.textContent = u.cv.name + ' (' + u.cv.size + ')';
    cvFilename.style.display = 'block';
    cvLabel.textContent    = 'Substituir CV';
  } else {
    cvStatus.textContent     = 'Ainda não carregou o CV';
    cvStatus.className       = 'cv-status';
    cvFilename.style.display = 'none';
    cvLabel.textContent      = 'Carregar o seu CV';
  }

  const list = document.getElementById('appliedList');
  if (u.applied.length === 0) {
    list.innerHTML = '<div style="font-size:13px;color:var(--text2);padding-top:8px">Ainda sem candidaturas.</div>';
  } else {
    list.innerHTML = u.applied.map(a =>
      '<div class="applied-item">' +
        '<div class="applied-dot"></div>' +
        '<div>' +
          '<div style="color:var(--text1);font-weight:500">' + a.title + '</div>' +
          '<div style="font-size:12px">' + a.org + ' · CV: ' + a.cv + '</div>' +
        '</div>' +
      '</div>'
    ).join('');
  }
}
