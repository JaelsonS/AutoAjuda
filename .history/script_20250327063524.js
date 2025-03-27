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

    // Scroll para links
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

    // Header scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Ano atual
    document.getElementById('year').textContent = new Date().getFullYear();

    // humor
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

    // Respostas
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

    // Frases do dia
    const birthdayQuotes = {
        1: "A vida trará coisas boas se você tiver paciência.",
        2: "Demonstre amor e alegria em todas as oportunidades.",
        3: "Não compense na ira o que lhe falta na razão.",
        4: "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        5: "A maior de todas as torres começa no solo.",
        6: "Acredite em você mesmo e o universo conspirará a seu favor.",
        7: "Seja a mudança que você deseja ver no mundo.",
        8: "O sucesso não é acidental, é resultado de esforço e dedicação.",
        9: "Aprenda com o passado, viva o presente e sonhe com o futuro.",
        10: "Sua criatividade é ilimitada, explore novos horizontes.",
        11: "A jornada de mil quilômetros começa com um único passo.",
        12: "A sorte favorece a mente preparada.",
        13: "Seja corajoso, mesmo quando estiver com medo.",
        14: "A amizade é o maior tesouro da vida.",
        15: "A compaixão é a linguagem universal do coração.",
        16: "Sorria, a felicidade é contagiante.",
        17: "A cada desafio, surge uma oportunidade de crescimento.",
        18: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        19: "A persistência é o caminho do êxito.",
        20: "A compaixão é a linguagem universal do coração.",
        21: "Seja grato pelo que tem, e mais virá até você.",
        22: "Suas escolhas moldam seu destino, escolha sabiamente.",
        23: "Cada novo dia é uma página em branco, escreva uma boa história.",
        24: "O amor é a força mais poderosa do universo.",
        25: "A melhor maneira de prever o futuro é criá-lo.",
        26: "Seja gentil com cada pessoa que você encontrar.",
        27: "A verdadeira beleza está na simplicidade.",
        28: "O conhecimento é poder, compartilhe-o com o mundo.",
        29: "A gratidão transforma o que temos em suficiente.",
        30: "A cada desafio, surge uma oportunidade de crescimento.",
        31: "O sucesso é a soma de pequenos esforços repetidos dia após dia."
    };

    const quoteVideos = [
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/7XFLTDQ4JMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/RcGyVTAoXEU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/6T9mD8qAf5s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    ];

    document.getElementById('get-quote').addEventListener('click', function() {
        const birthdayInput = document.getElementById('birthday').value;
        
        if (!birthdayInput) {
            alert('Por favor, insira sua data de nascimento.');
            return;
        }
        
        const birthdayDate = new Date(birthdayInput);
        const day = birthdayDate.getDate();
        
        if (day < 1 || day > 31) {
            alert('Por favor, insira uma data válida.');
            return;
        }
        
        const quoteText = document.getElementById('daily-quote-text');
        const quoteVideoContainer = document.getElementById('quote-video');
        
        quoteText.textContent = birthdayQuotes[day];
        
        // Seleciona um vídeo aleatório
        const randomVideoIndex = Math.floor(Math.random() * quoteVideos.length);
        quoteVideoContainer.innerHTML = quoteVideos[randomVideoIndex];
    });

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulação de envio
        const mailtoLink = `mailto:jaelsondev345@gmail.com?subject=Mensagem de ${name}&body=${message}%0