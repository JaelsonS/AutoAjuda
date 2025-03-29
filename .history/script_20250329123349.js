document.addEventListener('DOMContentLoaded', function() {  // Aguarda o carregamento completo do DOM para iniciar o script.

    // Menu mobile
    function toggleMenu() {  // Função que alterna a visibilidade do menu mobile.
        const mobileMenu = document.getElementById('mobileMenu');  // Busca o elemento do menu mobile no DOM.
        mobileMenu.classList.toggle('active');  // Adiciona ou remove a classe 'active' para mostrar/ocultar o menu.
    }

    // Configuração do menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-icon button');  // Busca o botão de menu mobile.
    if (mobileMenuButton) {  // Verifica se o botão foi encontrado.
        mobileMenuButton.addEventListener('click', toggleMenu);  // Adiciona um evento de clique para alternar o menu.
    }

    // Frases motivacionais por dia do mês
    const phrases = [  // Array com frases motivacionais para cada dia do mês.
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

    // Vídeos correspondentes às frases (IDs do YouTube)
    const phraseVideos = [  // Array com os IDs dos vídeos do YouTube, correspondendo às frases motivacionais.
        "7XFLTDQ4JMk", // Vídeo para dia 1
        "HAnw168huqA", // Vídeo para dia 2
        "78nsxRxbf4w", // Vídeo para dia 3
        "4q1dgn_C0AU", // Vídeo para dia 4
        "36m1o-tM05g", // Vídeo para dia 5
        "Hu4Yvq-g7_Y", // Vídeo para dia 6
        "WWloIAQpMcQ", // Vídeo para dia 7
        "e4PTvXtz4GM", // Vídeo para dia 8
        "4q1dgn_C0AU", // Vídeo para dia 9
        "lg48Bi9DA54", // Vídeo para dia 10
        "7XFLTDQ4JMk", // Vídeo para dia 11
        "HAnw168huqA", // Vídeo para dia 12
        "78nsxRxbf4w", // Vídeo para dia 13
        "4q1dgn_C0AU", // Vídeo para dia 14
        "Llq-hvuAM7g", // Vídeo para dia 15 
        "8_4rBqh6B1M", // Vídeo para dia 16 
        "32ipTmPO8pA", // Vídeo para dia 17
        "e4PTvXtz4GM", // Vídeo para dia 18
        "32ipTmPO8pA", // Vídeo para dia 19
        "78nsxRxbf4w", // Vídeo para dia 20 
        "7XFLTDQ4JMk", // Vídeo para dia 21
        "HAnw168huqA", // Vídeo para dia 22
        "78nsxRxbf4w", // Vídeo para dia 23
        "4q1dgn_C0AU", // Vídeo para dia 24
        "Llq-hvuAM7g", // Vídeo para dia 25 
        "8_4rBqh6B1M", // Vídeo para dia 26 
        "WWloIAQpMcQ", // Vídeo para dia 27 
        "36m1o-tM05g", // Vídeo para dia 28 
        "lg48Bi9DA54", // Vídeo para dia 29 
        "HAnw168huqA", // Vídeo para dia 30 
        "7XFLTDQ4JMk"  // Vídeo para dia 31
    ];

    // Preencher o dropdown com os dias do mês
    const birthdayDaySelect = document.getElementById('birthday-day');  // Obtém o select de dias do mês.
    if (birthdayDaySelect) {  // Verifica se o select existe no DOM.
        for (let i = 1; i <= 31; i++) {  // Loop de 1 a 31 para preencher o dropdown com os dias do mês.
            const option = document.createElement('option');  // Cria um elemento de opção para cada dia.
            option.value = i;  // Define o valor da opção como o número do dia.
            option.textContent = i;  // Define o texto da opção como o número do dia.
            birthdayDaySelect.appendChild(option);  // Adiciona a opção ao select.
        }
    }

    // Botão para obter a frase
    const getPhraseBtn = document.getElementById('get-phrase-btn');  // Obtém o botão para obter a frase do dia.
    if (getPhraseBtn) {  // Verifica se o botão existe no DOM.
        getPhraseBtn.addEventListener('click', function() {  // Adiciona evento de clique ao botão.
            const selectedDay = parseInt(birthdayDaySelect.value);  // Obtém o valor do dia selecionado no dropdown.
            
            if (isNaN(selectedDay) || selectedDay < 1 || selectedDay > 31) {  // Verifica se o dia é válido.
                alert('Por favor, selecione um dia válido do mês.');  // Alerta caso o dia não seja válido.
                return;  // Interrompe a execução do código.
            }
            const phraseIndex = selectedDay - 1;  // Ajusta o índice do array (porque os índices começam em 0).
            const selectedPhrase = phrases[phraseIndex];  // Obtém a frase do dia baseado no índice.
            const videoId = phraseVideos[phraseIndex];  // Obtém o ID do vídeo correspondente à frase do dia.
            
            // Exibe a frase selecionada
            document.getElementById('selected-phrase').textContent = selectedPhrase;
            
            // Exibe o vídeo correspondente à frase
            const videoContainer = document.getElementById('phrase-video-container');
            videoContainer.innerHTML = `  // Insere o vídeo do YouTube no contêiner.
                <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            
            // Adiciona animação de fade-in ao conteúdo da frase
            const phraseContent = document.getElementById('phrase-content');
            phraseContent.classList.remove('fade-in');  // Remove a animação existente.
            void phraseContent.offsetWidth;  // Força um reflow para reiniciar a animação.
            phraseContent.classList.add('fade-in');  // Adiciona a animação de fade-in.
        });
    }

    // Interação com o humor do usuário
    const moodButtons = document.querySelectorAll('.mood-btn');  // Obtém todos os botões de humor.
    const moodResponse = document.getElementById('moodResponse');  // Obtém o elemento para exibir a resposta ao humor.
    
    if (moodButtons.length && moodResponse) {  // Verifica se os botões e o elemento de resposta existem.
        moodButtons.forEach(button => {  // Para cada botão de humor, adiciona um evento de clique.
            button.addEventListener('click', function() {  // Adiciona evento de clique a cada botão.
                const mood = this.getAttribute('data-mood');  // Obtém o valor do atributo 'data-mood' (humor).
                let response = '';  // Inicializa uma variável para armazenar a resposta.
                
                switch(mood) {  // Avalia o valor do humor e define a resposta.
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
                
                moodResponse.innerHTML = response;  // Atualiza a resposta exibida.
                moodResponse.classList.remove('fade-in');  // Remove a animação de fade-in existente.
                void moodResponse.offsetWidth;  // Força um reflow para reiniciar a animação.
                moodResponse.classList.add('fade-in');  // Adiciona a animação de fade-in à resposta.
            });
        });
    }

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');  // Obtém o formulário de contato.
    if (contactForm) {  // Verifica se o formulário existe no DOM.
        contactForm.addEventListener('submit', function(e) {  // Adiciona um evento de submit ao formulário.
            e.preventDefault();  // Evita o envio padrão do formulário.
            
            // Simula o envio do formulário
            const formData = new FormData(this);  // Obtém os dados do formulário.
            const formValues = Object.fromEntries(formData.entries());  // Converte os dados em um objeto.
            
            console.log('Dados do formulário:', formValues);  // Exibe os dados no console para simulação.
            
            // Mostra uma mensagem de sucesso
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            
            // Resetar o formulário após o envio
            this.reset();  // Reseta os campos do formulário.
        });
    }

    // Suavizar rolagem para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {  // Para cada link interno (com href começando com '#').
        anchor.addEventListener('click', function(e) {  // Adiciona um evento de clique aos links.
            e.preventDefault();  // Evita o comportamento padrão de rolagem do link.
            
            const targetId = this.getAttribute('href');  // Obtém o ID do alvo do link.
            const targetElement = document.querySelector(targetId);  // Busca o elemento correspondente ao ID.
            
            if (targetElement) {  // Se o elemento alvo existir.
                window.scrollTo({  // Rola suavemente até o elemento alvo.
                    top: targetElement.offsetTop - 80,  // Define a posição de rolagem (ajustando para não cobrir com o menu).
                    behavior: 'smooth'  // Rola suavemente.
                });
                
                // Fechar menu mobile se estiver aberto
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu.classList.contains('active')) {  // Verifica se o menu mobile está ativo.
                    toggleMenu();  // Fecha o menu mobile.
                }
            }
        });
    });
});
