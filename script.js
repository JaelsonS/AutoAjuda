document.addEventListener('DOMContentLoaded', function() { 

    function toggleMenu() {  
        const mobileMenu = document.getElementById('mobileMenu');  
        mobileMenu.classList.toggle('active');  
    }

    
    const mobileMenuButton = document.querySelector('.mobile-menu-icon button');
    if (mobileMenuButton) {  
        mobileMenuButton.addEventListener('click', toggleMenu);  
    }
    const phrases = [  
        "A vida trará coisas boas se você tiver paciência.",
        "Demonstre amor e alegria em todas as oportunidades.",
        "Não compense na ira o que lhe falta na razão.",
        "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        "A maior de todas as torres começa no solo.",
        "Acredite em você mesmo e o universo conspirará a seu favor.",
        "Seja a mudança que você deseja ver no mundo.",
        "O sucesso não é acidental, é resultado de esforço e dedicação.",
        "Aprenda com o passado, viva o presente e sonhe com o futuro.",
        "Sua criatividade é ilimitada, explore novos horizontes.",
        "A jornada de mil quilômetros começa com um único passo.",
        "A sorte favorece a mente preparada.",
        "Seja corajoso, mesmo quando estiver com medo.",
        "A amizade é a maior tesouro da vida.",
        "A compaixão é a linguagem universal do coração.",
        "Sorria, a felicidade é contagiante.",
        "A cada desafio, surge uma oportunidade de crescimento.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "A persistência é o caminho do êxito.",
        "A compaixão é a linguagem universal do coração.",
        "Seja grato pelo que tem, e mais virá até você.",
        "Suas escolhas moldam seu destino, escolha sabiamente.",
        "Cada novo dia é uma página em branco, escreva uma boa história.",
        "O amor é a força mais poderosa do universo.",
        "A melhor maneira de prever o futuro é criá-lo.",
        "Seja gentil com cada pessoa que você encontrar.",
        "A verdadeira beleza está na simplicidade.",
        "O conhecimento é poder, compartilhe-o com o mundo.",
        "A gratidão transforma o que temos em suficiente.",
        "A cada desafio, surge uma oportunidade de crescimento.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
    ];

    
    const phraseVideos = [  
        "7XFLTDQ4JMk", 
        "HAnw168huqA", 
        "78nsxRxbf4w", 
        "4q1dgn_C0AU", 
        "36m1o-tM05g", 
        "Hu4Yvq-g7_Y", 
        "WWloIAQpMcQ", 
        "e4PTvXtz4GM", 
        "4q1dgn_C0AU", 
        "lg48Bi9DA54", 
        "7XFLTDQ4JMk", 
        "HAnw168huqA", 
        "78nsxRxbf4w", 
        "4q1dgn_C0AU", 
        "Llq-hvuAM7g", 
        "8_4rBqh6B1M", 
        "32ipTmPO8pA", 
        "e4PTvXtz4GM", 
        "32ipTmPO8pA",  
        "78nsxRxbf4w", 
        "7XFLTDQ4JMk", 
        "HAnw168huqA", 
        "78nsxRxbf4w", 
        "4q1dgn_C0AU", 
        "Llq-hvuAM7g",  
        "8_4rBqh6B1M", 
        "WWloIAQpMcQ", 
        "36m1o-tM05g", 
        "lg48Bi9DA54", 
        "HAnw168huqA", 
        "7XFLTDQ4JMk"  
    ];
    const birthdayDaySelect = document.getElementById('birthday-day');  
    if (birthdayDaySelect) { 
        for (let i = 1; i <= 31; i++) {  
            const option = document.createElement('option');  
            option.value = i;  
            option.textContent = i; 
            birthdayDaySelect.appendChild(option); 
        }
    }
    const getPhraseBtn = document.getElementById('get-phrase-btn');  
    if (getPhraseBtn) {  
        getPhraseBtn.addEventListener('click', function() {  
            const selectedDay = parseInt(birthdayDaySelect.value);  
            
            if (isNaN(selectedDay) || selectedDay < 1 || selectedDay > 31) {  
                alert('Por favor, selecione um dia válido do mês.');  
                return;
            }
            const phraseIndex = selectedDay - 1;  
            const selectedPhrase = phrases[phraseIndex];  
            const videoId = phraseVideos[phraseIndex];  
            
            document.getElementById('selected-phrase').textContent = selectedPhrase;
            
            
            const videoContainer = document.getElementById('phrase-video-container');
            videoContainer.innerHTML = `  // Insere o vídeo do YouTube no contêiner.
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            
        
            const phraseContent = document.getElementById('phrase-content');
            phraseContent.classList.remove('fade-in');  
            void phraseContent.offsetWidth;  
            phraseContent.classList.add('fade-in');  
        });
    }
    const moodButtons = document.querySelectorAll('.mood-btn');  
    const moodResponse = document.getElementById('moodResponse');  
    
    if (moodButtons.length && moodResponse) {  
        moodButtons.forEach(button => {  
            button.addEventListener('click', function() {  
                const mood = this.getAttribute('data-mood');  
                let response = '';  
                
                switch(mood) {  
                    case 'happy':
                        response = 'Que ótimo que você está feliz hoje! Aproveite esse momento e espalhe essa alegria para as pessoas ao seu redor. A felicidade é contagiante!';
                        break;
                    case 'neutral':
                        response = 'Estar se sentindo normal é completamente okay. Às vezes, é nos momentos de calma que encontramos nossa verdadeira força. Que tal assistir a um dos nossos vídeos motivacionais para dar um up no seu dia?';
                        break;
                    case 'sad':
                        response = 'Sinto muito que você esteja se sentindo assim. Lembre-se que todos os sentimentos são válidos e passageiros. Você é mais forte do que imagina e dias melhores virão. Confira nossa seção de frases motivacionais para encontrar um pouco de inspiração.';
                        break;
                    case 'angry':
                        response = 'A raiva pode ser uma emoção difícil de lidar. Respire fundo, conte até dez e tente encontrar um momento de calma. Você tem todo o direito de sentir o que sente, mas não deixe que isso controle você.';
                        break;
                    case 'motivated':
                        response = 'Isso aí! Com essa motivação você pode conquistar o mundo! Aproveite essa energia para trabalhar em seus objetivos e sonhos. Nada pode parar você agora!';
                        break;
                    default:
                        response = 'Obrigado por compartilhar como você está se sentindo. Esperamos que nosso conteúdo possa ajudar a melhorar ainda mais o seu dia!';
                }
                
                moodResponse.innerHTML = response;  
                moodResponse.classList.remove('fade-in');  
                void moodResponse.offsetWidth;  
                moodResponse.classList.add('fade-in');  
            });
        });
    }
    const contactForm = document.getElementById('contact-form');  
    if (contactForm) {  
        contactForm.addEventListener('submit', function(e) {  
            e.preventDefault();  
            const formData = new FormData(this);  
            const formValues = Object.fromEntries(formData.entries()); 
            
            console.log('Dados do formulário:', formValues);  
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            this.reset();  
        });
    }

    
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
                
                
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu.classList.contains('active')) {  
                    toggleMenu();  
                }
            }
        });
    });
});
