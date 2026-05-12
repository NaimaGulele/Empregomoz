const JOBS = [
  { id:1,  title:"Desenvolvedor Web Full-Stack",       org:"Vodacom Mozambique",       city:"Maputo",    tipo:"Tempo inteiro", sector:"Tecnologia",   salary:"80,000 – 120,000 MZN/mês",  date:"Hoje",      badge:"new",    avatar:"VM", avatarBg:"#E1F5EE", avatarColor:"#085041" },
  { id:2,  title:"Enfermeiro Chefe de Serviço",        org:"Hospital Central de Maputo",  city:"Maputo",    tipo:"Tempo inteiro", sector:"Saúde",       salary:"45,000 – 65,000 MZN/mês",   date:"Hoje",      badge:"urgent", avatar:"HC", avatarBg:"#FAECE7", avatarColor:"#712B13" },
  { id:3,  title:"Gestor de Projeto — Energia Solar", org:"TotalEnergies Mozambique", city:"Inhambane", tipo:"Contrato",  sector:"Construção", salary:"150,000 – 200,000 MZN/mês", date:"Ontem",  badge:null,     avatar:"TE", avatarBg:"#FAEEDA", avatarColor:"#633806" },
  { id:4,  title:"Professor de Matemática Secundário", org:"Universidade Pedagógica",   city:"Beira",     tipo:"Tempo inteiro", sector:"Educação",    salary:"30,000 – 42,000 MZN/mês",   date:"Há 2 dias", badge:"new",    avatar:"UP", avatarBg:"#E6F1FB", avatarColor:"#0C447C" },
  { id:5,  title:"Analista Financeiro Sênior",       org:"Banco BCI",                city:"Maputo",    tipo:"Tempo inteiro", sector:"Finanças",      salary:"90,000 – 130,000 MZN/mês",  date:"Há 3 dias", badge:null,     avatar:"BC", avatarBg:"#EEEDFE", avatarColor:"#3C3489" },
  { id:6,  title:"Coordenador de Programa WASH",     org:"UNICEF Moçambique",        city:"Nampula",   tipo:"Contrato",  sector:"ONG",          salary:"200,000 – 280,000 MZN/mês", date:"Hoje",      badge:"new",    avatar:"UN", avatarBg:"#EAF3DE", avatarColor:"#27500A" },
  { id:7,  title:"Técnico de Redes e Sistemas",   org:"mCel",                     city:"Tete",      tipo:"Tempo inteiro", sector:"Tecnologia",   salary:"55,000 – 75,000 MZN/mês",   date:"Há 4 dias", badge:null,     avatar:"MC", avatarBg:"#E1F5EE", avatarColor:"#085041" },
  { id:8,  title:"Médico Geral",           org:"Clínica Cruz Azul",         city:"Maputo",    tipo:"Tempo inteiro", sector:"Saúde",       salary:"120,000 – 180,000 MZN/mês", date:"Há 5 dias", badge:"urgent", avatar:"CA", avatarBg:"#FAECE7", avatarColor:"#712B13" },
  { id:9,  title:"Engenheiro Civil — Estradas",         org:"ANEP Moçambique",          city:"Quelimane", tipo:"Contrato",  sector:"Construção", salary:"100,000 – 160,000 MZN/mês", date:"Há 1 semana", badge:null,     avatar:"AN", avatarBg:"#F1EFE8", avatarColor:"#444441" },
  { id:10, title:"Especialista em Proteção da Criança",    org:"Save the Children",        city:"Chimoio",   tipo:"Contrato",  sector:"ONG",          salary:"180,000 – 240,000 MZN/mês", date:"Há 1 semana", badge:null,     avatar:"SC", avatarBg:"#FCEBEB", avatarColor:"#791F1F" },
  { id:11, title:"Contabilista",                     org:"Mozal SARL",               city:"Maputo",    tipo:"Tempo inteiro", sector:"Finanças",      salary:"50,000 – 70,000 MZN/mês",   date:"Há 3 dias", badge:null,     avatar:"MZ", avatarBg:"#FAEEDA", avatarColor:"#633806" },
  { id:12, title:"Professor de Inglês do 1º Ciclo", org:"Escola Portuguesa de Maputo", city:"Maputo",    tipo:"Meio período", sector:"Educação",    salary:"20,000 – 30,000 MZN/mês",   date:"Há 2 dias", badge:null,     avatar:"EP", avatarBg:"#E6F1FB", avatarColor:"#0C447C" },
];

const SECTORS = ["Todos","Tecnologia","Saúde","Educação","Finanças","Construção","ONG"];

const AVATAR_COLORS = [
  { bg:"#E1F5EE", color:"#085041" },
  { bg:"#FAECE7", color:"#712B13" },
  { bg:"#FAEEDA", color:"#633806" },
  { bg:"#E6F1FB", color:"#0C447C" },
  { bg:"#EEEDFE", color:"#3C3489" },
  { bg:"#EAF3DE", color:"#27500A" },
];
