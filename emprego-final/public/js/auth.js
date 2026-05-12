// ── AUTH STATE ──
let users       = {};   // { email: { name, password, cv, applied[] } }
let currentUser = null; // currently logged in email

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('loginPassword').value;
  const err   = document.getElementById('loginError');

  if (!users[email] || users[email].password !== pass) {
    err.textContent = 'Email ou palavra-passe incorretos.';
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  currentUser = email;
  closeModal('loginModal');
  updateHeaderUI();
  filterJobs();
  showToast('Bem-vindo de volta, ' + users[email].name.split(' ')[0] + '!');
}

function doSignup() {
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('signupPassword').value;
  const err   = document.getElementById('signupError');

  if (!name)                { err.textContent = 'Por favor, insira o seu nome.';                  err.style.display = 'block'; return; }
  if (!email.includes('@')) { err.textContent = 'Por favor, insira um email válido.';              err.style.display = 'block'; return; }
  if (pass.length < 6)      { err.textContent = 'A palavra-passe deve ter pelo menos 6 caracteres.'; err.style.display = 'block'; return; }
  if (users[email])         { err.textContent = 'Já existe uma conta com este email.';                 err.style.display = 'block'; return; }

  err.style.display = 'none';
  users[email] = { name, password: pass, cv: null, applied: [] };
  currentUser  = email;
  closeModal('signupModal');
  updateHeaderUI();
  filterJobs();
  showToast('Bem-vindo, ' + name.split(' ')[0] + '!');
}

function handleLogout() {
  currentUser = null;
  showView('jobs');
  updateHeaderUI();
  filterJobs();
  showToast('Sessão terminada.');
}

function updateHeaderUI() {
  const hr = document.getElementById('headerRight');
  if (currentUser) {
    const initials = users[currentUser].name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    hr.innerHTML = '<div class="avatar-btn" onclick="showView(\'profile\')" title="O meu perfil" aria-label="O meu perfil">' + initials + '</div>';
  } else {
    hr.innerHTML =
      '<button class="btn-auth" onclick="openModal(\'loginModal\')">Entrar</button>' +
      '<button class="btn-auth primary" onclick="openModal(\'signupModal\')">Criar conta</button>';
  }
}
