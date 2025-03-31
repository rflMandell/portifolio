document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('language-btn');
    let currentLang = document.documentElement.lang || 'pt-BR';

    const translations = {
        'en': {
            'about': 'About me',
            'projects': 'Projects',
            'skills': 'My skills',
            'education': 'Education',
            'jobTitle': 'Software Engineer',
            'socialMedia': 'Social Media',
            'resume': 'Resume',
            'seeMore': 'See more',
            'aboutTitle': 'About me',
            'aboutText': 'I have worked in the publishing market, developing organizational skills, attention to detail, and critical analysis. During my transition to the technology field, I deepened my knowledge in software development and system implementation.',
            'projectsTitle': 'Projects',
            'skillsTitle': 'My Skills',
            'skillsText': 'I develop simple, intuitive, and responsive user interfaces that help users complete tasks with less effort and time, using the following technologies:',
            'educationTitle': 'Education',
            'englishCert': 'C1 Advanced English'
        },
        'pt-BR': {
            'about': 'Sobre mim',
            'projects': 'Projetos',
            'skills': 'Habilidades',
            'education': 'Formação',
            'jobTitle': 'Engenheiro de Software',
            'socialMedia': 'Redes Sociais',
            'resume': 'Currículo',
            'seeMore': 'Ver mais',
            'aboutTitle': 'Sobre mim',
            'aboutText': 'Trabalhei no mercado editorial, desenvolvendo habilidades organizacionais, atenção aos detalhes e análise crítica. Durante minha transição para a área de tecnologia, aprofundei meus conhecimentos em desenvolvimento de software e implementação de sistemas.',
            'projectsTitle': 'Projetos',
            'skillsTitle': 'Minhas Habilidades',
            'skillsText': 'Desenvolvo interfaces de usuário simples, intuitivas e responsivas que ajudam os usuários a concluir tarefas com menos esforço e tempo, usando as seguintes tecnologias:',
            'educationTitle': 'Formação',
            'englishCert': 'Inglês Avançado C1'
        }
    };

    languageBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'pt-BR' : 'en';
        document.documentElement.lang = currentLang;
        
        this.textContent = currentLang === 'en' ? 'Português' : 'English';
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    });
});