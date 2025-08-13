document.addEventListener('DOMContentLoaded', () => {
  const languageBtn = document.getElementById('language-btn');
  const LANG_STORAGE_KEY = 'preferred_lang';

  // Recupera idioma preferido: localStorage > atributo <html lang> > padrão
  function resolveInitialLang() {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    const fromHtml = document.documentElement.lang;
    const candidate = stored || fromHtml || 'pt-BR';
    return ['en', 'pt-BR'].includes(candidate) ? candidate : 'en';
  }

  // Define o label do botão para o idioma de destino (o que será ativado ao clicar)
  function setButtonLabel(currentLang) {
    if (!languageBtn) return;
    languageBtn.textContent = currentLang === 'en' ? 'Português' : 'English';
  }

  // Traduções completas
  const translations = {
    en: {
      about: 'About me',
      projects: 'Projects',
      skills: 'My skills',
      education: 'Education',
      jobTitle: 'Software Engineer',
      socialMedia: 'Social Media',
      resume: 'Resume',
      seeMore: 'See more',
      aboutTitle: 'About me',
      aboutText:
        'Software developer focused on building robust and scalable solutions. I have a self-taught profile, driven by curiosity, challenges, and a constant desire for technical growth. My previous experience in the publishing industry strengthened my skills in organization, accuracy, and critical thinking — qualities I now apply to the development of well-structured, scalable systems. I seek opportunities to collaborate with technology teams and contribute to building solutions with real-world impact.',
      projectsTitle: 'Projects',
      skillsTitle: 'My Skills',
      skillsText:
        'I turn ideas into reliable software by combining APIs, data engineering and analytics, modern UIs, and cloud-native practices with the stack below.',
      educationTitle: 'Education',
      englishCert: 'International English Test - C1 Advanced English Level',

      itsRafael: "It's Rafael",
      heroSocialAria: 'My social media',

      project1Title: 'GuardianPro',
      project1Desc:
        'GuardianPro is a web-based platform for clinics and healthcare professionals, offering a complete telemedicine solution. The system includes video calls, automatic AI-powered report generation, patient management, medical records, and cloud storage — all with a focus on efficient and secure healthcare.',
      // Atualizado: EcoAlerta reutiliza project2Title/Desc
      project2Title: 'EcoAlerta',
      project2Desc:
        'EcoAlerta is an automated, intelligent newsletter that sends daily, location-based reports about natural disasters (floods, earthquakes, extreme weather). Built with Django and Celery, it collects data from public APIs (OpenWeatherMap, INMET, USGS), generates natural-language summaries with OpenAI, and delivers personalized alerts by email. Admin and task monitoring with Django Admin + Flower.',

      edu1Title: "FIAP - Bachelor's in Software Engineering",
      edu1Period: 'August 2024 - December 2028',
      edu2Title: 'FIAP - Python Course',
      edu3Title: 'FIAP - Oracle Database Course',
      edu4Date: 'January 2025'
    },
    'pt-BR': {
      about: 'Sobre mim',
      projects: 'Projetos',
      skills: 'Habilidades',
      education: 'Formação',
      jobTitle: 'Engenheiro de Software',
      socialMedia: 'Redes Sociais',
      resume: 'Currículo',
      seeMore: 'Ver mais',
      aboutTitle: 'Sobre mim',
      aboutText:
        'Desenvolvedor de software focado na construção de soluções robustas e escaláveis. Tenho um perfil autodidata, movido por curiosidade, desafios e um desejo constante de crescimento técnico. Minha experiência anterior no mercado editorial fortaleceu minhas habilidades de organização, precisão e pensamento crítico — qualidades que hoje aplico no desenvolvimento de sistemas bem estruturados e escaláveis. Busco oportunidades para colaborar com equipes de tecnologia e contribuir para a construção de soluções com impacto real.',
      projectsTitle: 'Projetos',
      skillsTitle: 'Minhas Habilidades',
      skillsText:
        'Transformo ideias em software confiável combinando APIs, engenharia e análise de dados, UIs modernas e práticas cloud-native com a stack abaixo.',
      educationTitle: 'Formação',
      englishCert: 'Teste Internacional de Inglês - Nível C1 Avançado',

      itsRafael: 'Sou o Rafael',
      heroSocialAria: 'Minhas redes sociais',

      project1Title: 'GuardianPro',
      project1Desc:
        'O GuardianPro é uma plataforma web para clínicas e profissionais de saúde, oferecendo uma solução completa de telemedicina. O sistema inclui chamadas de vídeo, geração automática de laudos com IA, gerenciamento de pacientes, prontuários e armazenamento em nuvem — tudo com foco em um atendimento eficiente e seguro.',
      project2Title: 'EcoAlerta',
      project2Desc:
        'Participei do desenvolvimento do EcoAlerta, uma newsletter automatizada e inteligente que envia diariamente relatórios personalizados sobre desastres naturais (enchentes, terremotos, eventos climáticos extremos) com base na localização do usuário. Construído com Django e Celery, coleta dados de APIs públicas (OpenWeatherMap, INMET, USGS), gera resumos em linguagem natural com a OpenAI e entrega alertas personalizados por e-mail. Administração e monitoramento de tarefas via Django Admin e Flower.',

      edu1Title: 'FIAP - Bacharelado em Engenharia de Software',
      edu1Period: 'Agosto de 2024 - Dezembro de 2028',
      edu2Title: 'FIAP - Curso de Python',
      edu3Title: 'FIAP - Curso de Banco de Dados Oracle',
      edu4Date: 'Janeiro de 2025'
    }
  };

  // Mapa para traduzir elementos que não possuem data-translate no HTML
  // Observação: usa seletores específicos do index atual
  const selectorMap = [
    { key: 'itsRafael', selector: '.about-info h1', type: 'text' },
    { key: 'heroSocialAria', selector: '.hero-social', type: 'attr', attr: 'aria-label' },

    { key: 'project1Title', selector: '.projects-grid a.project-card:nth-of-type(1) .project-info h2', type: 'text' },
    { key: 'project1Desc', selector: '.projects-grid a.project-card:nth-of-type(1) .project-info p', type: 'text' },

    { key: 'project2Title', selector: '.projects-grid a.project-card:nth-of-type(2) .project-info h2', type: 'text' },
    { key: 'project2Desc', selector: '.projects-grid a.project-card:nth-of-type(2) .project-info p', type: 'text' }

    // Removido: mapeamento do 3º card (Task Manager)
  ];

  function t(lang, key) {
    const pack = translations[lang] || translations['en'];
    return (pack && pack[key]) || (translations['en'] && translations['en'][key]) || '';
  }

  function translateDataAttributes(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-translate');
      const value = t(lang, key);
      if (value) {
        el.textContent = value;
      }
    });
  }

  function translateSelectorMapped(lang) {
    selectorMap.forEach((item) => {
      try {
        const el = document.querySelector(item.selector);
        if (!el) return;
        const value = t(lang, item.key);
        if (!value) return;

        if (item.type === 'attr' && item.attr) {
          el.setAttribute(item.attr, value);
        } else {
          el.textContent = value;
        }
      } catch {
        // Silencia erros de seletor inválido; evita quebra da página
      }
    });
  }

  function applyTranslations(lang) {
    // Ajusta <html lang="...">
    document.documentElement.lang = lang;

    // Aplica traduções
    translateDataAttributes(lang);
    translateSelectorMapped(lang);

    // Ajusta label do botão
    setButtonLabel(lang);
  }

  // Inicializa idioma
  let currentLang = resolveInitialLang();
  applyTranslations(currentLang);

  // Toggle do idioma
  if (languageBtn) {
    languageBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'pt-BR' : 'en';
      localStorage.setItem(LANG_STORAGE_KEY, currentLang);
      applyTranslations(currentLang);
    });
  } else {
    // console.warn('language-btn não encontrado');
  }
});