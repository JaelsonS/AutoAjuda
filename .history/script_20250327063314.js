document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Ano atual no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Modal de humor
    const moodModal = document.getElementById('mood-modal');
    const moodBtn = document.getElementById('mood-checker');
    const closeModal = document.querySelector('.close-modal');
    const moodOptions = document.querySelectorAll('.mood-btn');
    const moodResponse = document.getElementById('mood-response');

    moodBtn.addEventListener('click', () => {
        moodModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        moodModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === moodModal) {
            moodModal.style.display = 'none';
        }
    });

    // Respostas baseadas no humor
    const moodResponses = {
        happy: "Que ótimo que você está se sentindo feliz! Aproveite esse momento positivo e compartilhe sua alegria com os outros. Aqui está um vídeo para continuar inspirando sua felicidade:",
        sad: "Sinto muito que você esteja se sentindo triste. Lembre-se que sentimentos são temporários e dias melhores virão. Aqui está um vídeo que pode ajudar a levantar seu ânimo:",
        angry: "Entendo que você esteja se sentindo bravo. Respire fundo e tente encontrar um momento de calma. Aqui está um vídeo que pode ajudar a acalmar seus pensamentos:",
        anxious: "Ansiedade pode ser difícil, mas você não está sozinho. Tente focar no momento presente e em sua respiração. Aqui está um vídeo que pode ajudar a acalmar sua mente:",
        tired: "Parece que você precisa de um descanso. Lembre-se de cuidar de si mesmo e respeitar seus limites. Aqui está um vídeo relaxante para você:",
        motivated: "Isso aí! A motivação é um ótimo impulso para alcançar seus objetivos. Aproveite essa energia! Aqui está um vídeo para manter seu ânimo elevado:"
    };

    const moodVideos = {
        happy: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        sad: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7XFLTDQ4JMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        angry: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5s4n9E5sQ1o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        anxious: '<iframe width="560" height="315" src="https://www.youtube.com/embed/z6X5oEIg6Ak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        tired: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1ZYbU82GVz4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        motivated: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RcGyVTAoXEU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    };

    moodOptions.forEach(option => {
        option.addEventListener('click', function() {
            const mood = this.getAttribute('data-mood');
            moodResponse.innerHTML = `
                <p>${moodResponses[mood]}</p>
                <div class="video-container">${moodVideos[mood]}</div>
            `;
        });
    });

    // Frases do aniversário
    const