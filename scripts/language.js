document.addEventListener('DOMContentLoaded', () => {
  const languageBtn = document.getElementById('language-btn');
  const LANG_STORAGE_KEY = 'preferred_lang';
  const SUPPORTED_LANGS = ['en', 'pt-BR'];

  function resolveInitialLang() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return SUPPORTED_LANGS.includes(stored) ? stored : 'en';
  }

  function setButtonLabel(currentLang) {
    if (!languageBtn) return;
    languageBtn.textContent = currentLang === 'en' ? 'Português' : 'English';
  }

  const translations = {
    en: {
      /* Nav */
      about: 'About me',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'My skills',
      education: 'Education',

      /* Hero / General */
      jobTitle: 'Software Engineer | Backend Engineer | Java & Spring Boot',
      socialMedia: 'Social Media',
      resume: 'Resume',
      seeMore: 'See more',

      /* About */
      aboutTitle: 'About me',
      itsRafael: "It's Rafael",
      aboutText:
        'Software Engineer with experience building scalable backend systems in healthcare environments using Java, Spring Boot, Python, and Django. Strong background in RESTful APIs, cloud infrastructure (AWS), microservices architecture, and CI/CD automation. Proven track record of improving system scalability, reducing infrastructure costs, and delivering high-quality software in agile environments. C1 Advanced English proficiency.',

      /* Projects */
      projectsTitle: 'Personal Projects',
      project1Role: 'Software Engineer',
      project1Title: 'StudyWithUs',
      project1Period: 'Oct 2026 – Present',
      project1Desc:
        'A social platform where students can check in to classes and study sessions, earn points, and compete in a fun and healthy way within their communities.',
      project1Btn: 'View Repository',
      project2Title: 'EcoAlerta',
      project2Desc:
        'Automated, intelligent newsletter delivering daily location-based natural disaster reports (floods, earthquakes, extreme weather). Built with Django and Celery, it pulls from public APIs (OpenWeatherMap, INMET, USGS), generates natural-language summaries with OpenAI, and delivers personalized email alerts. Monitored via Django Admin and Flower.',

      /* Skills */
      skillsTitle: 'My Skills',
      skillsText:
        'I turn ideas into reliable software by combining backend engineering, cloud infrastructure, and modern development practices with the stack below.',

      /* Experience */
      experienceTitle: 'Experience',
      exp1Role: 'Software Engineer',
      exp1Period: 'Sep 2025 – Present',
      exp1b1: 'Designed and developed a scalable RESTful API platform integrating medical systems and devices across departments.',
      exp1b2: 'Built backend services with Django and Spring Boot deployed on AWS, improving system availability and reducing processing latency.',
      exp1b3: 'Established CI/CD pipelines that automated deployments and reduced production incidents.',
      exp1b4: 'Conducted code reviews and proactively resolved critical production issues, improving overall software reliability.',

      exp2Role: 'Software Engineer',
      exp2Period: 'Aug 2024 – Jul 2025',
      exp2b1: 'Developed a secure telemedicine platform supporting daily video consultations and AI-assisted medical reports.',
      exp2b2: 'Scaled AWS infrastructure to support 3× more concurrent users while reducing infrastructure costs by 30%.',
      exp2b3: 'Delivered 24 consecutive agile sprints with automated CI/CD and maintained 80%+ test coverage.',
      exp2b4: 'Optimized PostgreSQL queries, significantly improving response times.',

      exp3Role: 'Software Engineer',
      exp3Period: 'Feb 2026 – Present',
      exp3b1: 'Built a centralized web portal with Java and Spring Boot for information management, consolidating data previously spread across 2 separate systems.',
      exp3b2: 'Implemented a robust role-based authentication and permissions system, integrating external APIs and ensuring sensitive data security.',
      exp3b3: 'Modeled and optimized a relational database (PostgreSQL) and automated 8 manual internal processes, reducing operational time by 60%.',

      /* Education */
      educationTitle: 'Education',
      edu1Title: 'FIAP – B.S. in Software Engineering',
      edu1Period: 'Aug 2024 – Dec 2028 (Expected)',
      englishCert: 'International English Test – C1 Advanced Level',
      edu2Period: 'January 2025',
    },

    'pt-BR': {
      /* Nav */
      about: 'Sobre mim',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      education: 'Formação',

      /* Hero / General */
      jobTitle: 'Engenheiro de Software | Backend Engineer | Java & Spring Boot',
      socialMedia: 'Redes Sociais',
      resume: 'Currículo',
      seeMore: 'Ver mais',

      /* About */
      aboutTitle: 'Sobre mim',
      itsRafael: 'Sou o Rafael',
      aboutText:
        'Engenheiro de Software com experiência na construção de sistemas backend escaláveis em ambientes de saúde utilizando Java, Spring Boot, Python e Django. Sólido conhecimento em APIs RESTful, infraestrutura em nuvem (AWS), arquitetura de microsserviços e automação CI/CD. Histórico comprovado de melhoria na escalabilidade de sistemas, redução de custos de infraestrutura e entrega de software de alta qualidade em ambientes ágeis. Inglês C1 Avançado.',

      /* Projects */
      projectsTitle: 'Projetos Pessoais',
      project1Role: 'Engenheiro de Software',
      project1Title: 'StudyWithUs',
      project1Period: 'Out 2026 – Presente',
      project1Desc:
        'Uma plataforma social onde estudantes podem fazer check-in em aulas e sessões de estudo, acumular pontos e competir de forma divertida e saudável dentro de suas comunidades.',
      project1Btn: 'Ver Repositório',
      project2Title: 'EcoAlerta',
      project2Desc:
        'Newsletter automatizada e inteligente com relatórios diários e personalizados sobre desastres naturais (enchentes, terremotos, eventos climáticos extremos) com base na localização do usuário. Construído com Django e Celery, coleta dados de APIs públicas (OpenWeatherMap, INMET, USGS), gera resumos em linguagem natural com OpenAI e entrega alertas por e-mail. Monitorado via Django Admin e Flower.',

      /* Skills */
      skillsTitle: 'Minhas Habilidades',
      skillsText:
        'Transformo ideias em software confiável combinando engenharia backend, infraestrutura em nuvem e práticas modernas de desenvolvimento com a stack abaixo.',

      /* Experience */
      experienceTitle: 'Experiência',
      exp1Role: 'Engenheiro de Software',
      exp1Period: 'Set 2025 – Presente',
      exp1b1: 'Projetei e desenvolvi uma plataforma de API RESTful escalável integrando sistemas médicos e dispositivos entre departamentos.',
      exp1b2: 'Construí serviços backend com Django e Spring Boot implantados na AWS, melhorando a disponibilidade do sistema e reduzindo a latência de processamento.',
      exp1b3: 'Estabeleci pipelines de CI/CD que automatizaram implantações e reduziram incidentes em produção.',
      exp1b4: 'Realizei revisões de código e resolvi proativamente problemas críticos em produção, melhorando a confiabilidade geral do software.',

      exp2Role: 'Engenheiro de Software',
      exp2Period: 'Ago 2024 – Jul 2025',
      exp2b1: 'Desenvolvi uma plataforma de telemedicina segura com suporte a videoconsultas diárias e laudos médicos assistidos por IA.',
      exp2b2: 'Escalei a infraestrutura AWS para suportar 3× mais usuários simultâneos, reduzindo os custos de infraestrutura em 30%.',
      exp2b3: 'Entreguei 24 sprints ágeis consecutivos com CI/CD automatizado e mantive cobertura de testes acima de 80%.',
      exp2b4: 'Otimizei queries PostgreSQL, melhorando significativamente os tempos de resposta.',

      exp3Role: 'Engenheiro de Software',
      exp3Period: 'Fev 2026 – Presente',
      exp3b1: 'Desenvolvi um portal web centralizado com Java e Spring Boot para gestão de informações, consolidando dados antes dispersos em 2 sistemas diferentes.',
      exp3b2: 'Implementei um sistema robusto de autenticação e controle de permissões baseado em roles, integrando APIs externas e garantindo segurança de dados sensíveis.',
      exp3b3: 'Modelei e otimizei banco de dados relacional (PostgreSQL) e automatizei 8 processos internos manuais, reduzindo o tempo operacional em 60%.',

      /* Education */
      educationTitle: 'Formação',
      edu1Title: 'FIAP – Bacharelado em Engenharia de Software',
      edu1Period: 'Ago 2024 – Dez 2028 (Previsão)',
      englishCert: 'Teste Internacional de Inglês – Nível C1 Avançado',
      edu2Period: 'Janeiro de 2025',
    },
  };

  /* Selector map for elements without data-translate (avoids querying unknown keys) */
  const selectorMap = [
    { key: 'exp1b1', selector: '#experience .experience-item:nth-child(1) .experience-bullets li:nth-child(1)', type: 'text' },
    { key: 'exp1b2', selector: '#experience .experience-item:nth-child(1) .experience-bullets li:nth-child(2)', type: 'text' },
    { key: 'exp1b3', selector: '#experience .experience-item:nth-child(1) .experience-bullets li:nth-child(3)', type: 'text' },
    { key: 'exp1b4', selector: '#experience .experience-item:nth-child(1) .experience-bullets li:nth-child(4)', type: 'text' },
    { key: 'exp2b1', selector: '#experience .experience-item:nth-child(2) .experience-bullets li:nth-child(1)', type: 'text' },
    { key: 'exp2b2', selector: '#experience .experience-item:nth-child(2) .experience-bullets li:nth-child(2)', type: 'text' },
    { key: 'exp2b3', selector: '#experience .experience-item:nth-child(2) .experience-bullets li:nth-child(3)', type: 'text' },
    { key: 'exp2b4', selector: '#experience .experience-item:nth-child(2) .experience-bullets li:nth-child(4)', type: 'text' },
    { key: 'exp3b1', selector: '#experience .experience-item:nth-child(3) .experience-bullets li:nth-child(1)', type: 'text' },
    { key: 'exp3b2', selector: '#experience .experience-item:nth-child(3) .experience-bullets li:nth-child(2)', type: 'text' },
    { key: 'exp3b3', selector: '#experience .experience-item:nth-child(3) .experience-bullets li:nth-child(3)', type: 'text' },
  ];

  function t(lang, key) {
    return (translations[lang]?.[key]) ?? (translations['en']?.[key]) ?? '';
  }

  function translateDataAttributes(lang) {
    document.querySelectorAll('[data-translate]').forEach((el) => {
      const value = t(lang, el.getAttribute('data-translate'));
      if (value) el.textContent = value;
    });
  }

  function translateSelectorMapped(lang) {
    selectorMap.forEach(({ key, selector, type, attr }) => {
      try {
        const el = document.querySelector(selector);
        if (!el) return;
        const value = t(lang, key);
        if (!value) return;
        type === 'attr' ? el.setAttribute(attr, value) : (el.textContent = value);
      } catch {
        /* Silently ignore invalid selectors */
      }
    });
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    translateDataAttributes(lang);
    translateSelectorMapped(lang);
    setButtonLabel(lang);
  }

  let currentLang = resolveInitialLang();
  applyTranslations(currentLang);

  languageBtn?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt-BR' : 'en';
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    applyTranslations(currentLang);
  });
});