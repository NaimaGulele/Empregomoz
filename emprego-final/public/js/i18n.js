// Portuguese translations for Emprego Moz
const i18n = {
  // Header
  logoText: "Emprego Moz",
  login: "Entrar",
  signup: "Criar conta",

  // Search & Filters
  searchPlaceholder: "Pesquisar vagas, empresas, cidades…",
  search: "Pesquisar",
  allSectors: "Todos",
  activeListings: "Vagas ativas",
  cities: "Cidades",
  newToday: "Novas hoje",
  featuredJobs: "Vagas em destaque",
  noJobsFound: "Nenhuma vaga encontrada. Tente outro termo de pesquisa.",

  // Job Actions
  applyNow: "Candidatar-se",
  applied: "Candidatado",
  save: "Guardar",
  saved: "Guardada",
  postJob: "Publicar vaga",

  // Saved View
  savedJobs: "Vagas guardadas",
  noSavedJobs: "Nenhuma vaga guardada. Toque em \"Guardar\" em qualquer vaga para a guardar.",

  // Profile
  backToJobs: "← Voltar às vagas",
  yourCV: "O seu CV",
  noCV: "Ainda não carregou o CV",
  uploadCV: "Carregar o seu CV",
  uploadHint: "PDF, DOC ou DOCX · máx 5MB",
  jobsApplied: "Vagas candidatadas",
  logout: "Terminar sessão",

  // Modals
  loginTitle: "Entrar no Emprego Moz",
  emailLabel: "Endereço de email",
  emailPlaceholder: "exemplo@email.com",
  passwordLabel: "Palavra-passe",
  passwordPlaceholder: "A sua palavra-passe",
  cancel: "Cancelar",
  loginBtn: "Entrar",
  noAccount: "Não tem conta?",
  signUp: "Criar conta",

  signupTitle: "Criar a sua conta",
  fullNameLabel: "Nome completo",
  fullNamePlaceholder: "O seu nome completo",
  signupEmailPlaceholder: "exemplo@email.com",
  signupPasswordPlaceholder: "Mínimo 6 caracteres",
  createAccount: "Criar conta",
  alreadyHaveAccount: "Já tem conta?",
  loginLink: "Entrar",

  postJobTitle: "Publicar uma vaga",
  jobTitleLabel: "Título da vaga",
  jobTitlePlaceholder: "Ex: Desenvolvedor Web",
  companyLabel: "Empresa / Organização",
  companyPlaceholder: "Ex: Vodacom Mozambique",
  cityLabel: "Cidade",
  sectorLabel: "Setor",
  contractTypeLabel: "Tipo de contrato",
  salaryLabel: "Salário (MZN/mês)",
  salaryPlaceholder: "Ex: 50,000 – 80,000 MZN/mês",
  descriptionLabel: "Descrição da vaga",
  descriptionPlaceholder: "Descreva as responsabilidades e requisitos…",
  postJobBtn: "Publicar vaga",

  cvPromptTitle: "Carregue o CV primeiro",
  cvPromptText: "Carregue o CV para o seu perfil. Ele será automaticamente anexado a todas as suas candidaturas.",
  notNow: "Agora não",
  goToProfile: "Ir para o meu perfil",

  // Toasts
  toastLoginRequired: "Por favor, entre para se candidatar",
  toastCVRequired: "Carregue o CV no seu perfil primeiro",
  toastApplicationSent: "Candidatura enviada com",
  toastAttached: "anexado!",
  toastJobSaved: "Vaga guardada!",
  toastJobRemoved: "Vaga removida das guardadas",
  toastPostJobSuccess: "Vaga publicada com sucesso!",
  toastLoginSuccess: "Bem-vindo ao Emprego Moz!",
  toastSignupSuccess: "Conta criada com sucesso!",
  toastLogoutSuccess: "Sessão terminada",
  toastCVUploaded: "CV carregado com sucesso!",
  toastError: "Erro. Tente novamente.",

  // Errors
  errorInvalidEmail: "Email inválido",
  errorPasswordTooShort: "Palavra-passe muito curta",
  errorFillAllFields: "Preencha todos os campos",
  errorLoginFailed: "Email ou palavra-passe incorretos",
  errorSignupFailed: "Email já está em uso",
};

// Helper function to get translation
function t(key) {
  return i18n[key] || key;
}