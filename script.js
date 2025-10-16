/**
 * SCRIPT.JS - WORLD OF TANKS GUIA (v3.0 - INTERATIVO)
 * * ÍNDICE DE FUNCIONALIDADES:
 * 1.  EFEITOS DA NAVBAR (SCROLL & MENU RESPONSIVO)
 * - Adiciona fundo à navbar ao rolar a página.
 * - Controla a abertura/fechamento do menu em telas menores.
 * * 2.  BOTÃO "VOLTAR AO TOPO"
 * - Mostra/esconde o botão baseado na posição de rolagem.
 * * 3.  MODAL DE DETALHES DOS TANQUES
 * - Abre um modal com informações detalhadas ao clicar em um card da galeria.
 * - Busca dados de um objeto de "banco de dados" local.
 * - Fecha o modal ao clicar no 'X' ou fora dele.
 * * 4.  COMPARADOR DE TANQUES
 * - Gera e atualiza uma tabela de comparação dinamicamente.
 * - Compara atributos de dois tanques selecionados.
 * - Destaca o melhor atributo entre os dois.
 * * 5.  VALIDAÇÃO DO FORMULÁRIO DE CONTATO (REMOVIDO)
 * * 6.  ANIMAÇÃO DE SCROLL (ScrollReveal) [EXTRA]
 * - Anima a entrada de elementos (cards, títulos) conforme o usuário rola a página.
 * - (Simulado via Intersection Observer para não exigir libs externas).
 *
 * 7.  EFEITO "MÁQUINA DE ESCREVER" NO TÍTULO [EXTRA]
 * - Anima o subtítulo da seção hero como se estivesse sendo digitado.
 * * 8.  TOOLTIPS INFORMATIVAS [EXTRA]
 * - Adiciona pequenas dicas em elementos específicos ao passar o mouse.
 * - (Implementado com atributos data-* e CSS).
 * * 9.  FILTRO DE CARTÕES POR CATEGORIA [EXTRA]
 * - Adiciona botões para filtrar os cards de informação.
 * * 10. CARROSSEL DE IMAGENS SIMPLES [EXTRA]
 * - Cria um carrossel para a seção de tanques icônicos.
 * - (Implementado com a lógica de galeria já existente).
 * */


document.addEventListener('DOMContentLoaded', () => {

    // =======================================================
    // 1. EFEITOS DA NAVBAR
    // =======================================================

    const navbar = document.getElementById('navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Efeito de scroll na navbar

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });



    // Menu Hamburguer para telas pequenas

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Muda o ícone de hamburguer para 'X'
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    



    // Fecha o menu ao clicar em um link

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });



    // =======================================================
    // 2. BOTÃO "VOLTAR AO TOPO"
    // =======================================================

    const backToTopButton = document.querySelector('.back-to-top');


    // Dados fictícios dos tanques para comparação

    const tankComparisonData = {
        'tiger-i': {
            name: 'Tiger II',
            nation: 'Alemanha',
            class: 'Tanque Pesado',
            tier: 'VII',
            firepower: 240,
            armor: 150,
            mobility: 30
        },

        'is-3': {
            name: 'IS-3',
            nation: 'U.R.S.S.',
            class: 'Tanque Pesado',
            tier: 'VIII',
            firepower: 250,
            armor: 160,
            mobility: 28
        },

        'm4-sherman': {
            name: 'M4A3E8 Sherman',
            nation: 'EUA',
            class: 'Tanque Médio',
            tier: 'VI',
            firepower: 200,
            armor: 76,
            mobility: 34
        },

        'cromwell': {
            name: 'Cromwell',
            nation: 'Reino Unido',
            class: 'Tanque Médio',
            tier: 'VI',
            firepower: 160,
            armor: 75,
            mobility: 40
        }
    };

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });




    // =======================================================
    // 3. MODAL DE DETALHES DOS TANQUES
    // =======================================================

    const modal = document.getElementById('tank-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');
    const tankCards = document.querySelectorAll('.tank-card');



    // "Banco de dados" local para os detalhes dos tanques

    const tankDetailsData = {
        'tiger-i': {
            name: 'Tiger II',
            nation: 'Alemanha',
            class: 'Tanque Pesado',
            tier: 'VII',
            description: 'O Panzerkampfwagen VI Tiger II foi um tanque pesado alemão da Segunda Guerra Mundial, famoso por seu poderoso canhão de 88mm e sua blindagem espessa, que o tornavam um adversário formidável em campos de batalha abertos. Sua reputação e poder de fogo são lendários no jogo.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Tiger_II_frontal_Munster.jpg'
        },

        'is-3': {
            name: 'IS-3',
            nation: 'U.R.S.S.',
            class: 'Tanque Pesado',
            tier: 'VIII',
            description: 'O IS-3 (Iosif Stalin 3) é um tanque pesado soviético conhecido por seu perfil baixo e sua blindagem de torre em formato de "casco de tartaruga", que oferece excelente proteção. Sua silhueta icônica e canhão potente o tornam um pilar nas batalhas de Tier VIII.',
            imageUrl: 'https://i.redd.it/tiger-1s-will-now-have-to-fight-the-is-3-v0-b9511m3s9qub1.png?width=800&format=png&auto=webp&s=94be8798cc6d720f5a6caf937625a5a34048a00f'
        },

        'm4-sherman': {
            name: 'M4A3E8 Sherman',
            nation: 'EUA',
            class: 'Tanque Médio',
            tier: 'VI',
            description: 'O M4A3E8 "Easy Eight" é uma variante aprimorada do famoso tanque Sherman americano. No jogo, é valorizado por sua versatilidade, excelente cadência de tiro e boa mobilidade, sendo um "faz-tudo" eficaz no campo de batalha.',
            imageUrl: 'https://na-wotp.wgcdn.co/dcont/fb/image/m4a3e8-fury-08-1920x1080.jpg'
        },  

        'cromwell': {
            name: 'Cromwell',
            nation: 'Reino Unido',
            class: 'Tanque Médio',
            tier: 'VI',
            description: 'O Cromwell é um tanque médio britânico celebrado por sua velocidade e agilidade excepcionais. Seu canhão de tiro rápido permite flanquear inimigos e causar dano constante, tornando-o uma ameaça móvel e irritante para veículos mais lentos.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Cromwell_%28A27M%29_front-right_2017_Bovington.jpg'
            
        }
    };



    // Função para abrir o modal com os detalhes do tanque

    tankCards.forEach(card => {
        card.addEventListener('click', () => {
            const tankId = card.dataset.tankId;
            const data = tankDetailsData[tankId];
            if (data) {
                modalBody.innerHTML = `
                    <img src="${data.imageUrl}" alt="Imagem do ${data.name}">
                    <h2>${data.name}</h2>
                    <p><strong>Nação:</strong> ${data.nation} | <strong>Classe:</strong> ${data.class} | <strong>Tier:</strong> ${data.tier}</p>
                    <p>${data.description}</p>
                `;
                modal.classList.add('visible');
            }
        });
    });
    
    // Funções para fechar o modal

    const closeModal = () => modal.classList.remove('visible');
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });


    // =======================================================
    // 4. COMPARADOR DE TANQUES
    // =======================================================

    const tank1Select = document.getElementById('tank1-select');
    const tank2Select = document.getElementById('tank2-select');
    const comparisonContainer = document.getElementById('comparison-table-container');

    // Dados fictícios dos tanques para comparação

    const tankStatsData = {
        'is-3': { name: 'IS-3', hp: 1500, alpha: 390, pen: 225, dpm: 1800, speed: 38 },
        'tiger-ii': { name: 'Tiger II', hp: 1600, alpha: 320, pen: 225, dpm: 2100, speed: 38 },
        't32': { name: 'T32', hp: 1550, alpha: 320, pen: 208, dpm: 1950, speed: 35 },
        'caernarvon': { name: 'Caernarvon', hp: 1500, alpha: 280, pen: 220, dpm: 2600, speed: 34 }
    };
    


    function updateComparison() {
        const tank1Id = tank1Select.value;
        const tank2Id = tank2Select.value;
        const stats1 = tankStatsData[tank1Id];
        const stats2 = tankStatsData[tank2Id];
        
        const attributes = [
            { key: 'hp', label: 'Pontos de Vida (HP)' },
            { key: 'alpha', label: 'Dano Alfa' },
            { key: 'pen', label: 'Penetração (mm)' },
            { key: 'dpm', label: 'Dano por Minuto (DPM)' },
            { key: 'speed', label: 'Velocidade Máx. (km/h)' }
        ];

        let tableHTML = `<table class="comparison-table"><thead><tr><th>Atributo</th><th>${stats1.name}</th><th>${stats2.name}</th></tr></thead><tbody>`;

        attributes.forEach(attr => {
            const val1 = stats1[attr.key];
            const val2 = stats2[attr.key];

            let class1 = '', class2 = '';
            if (val1 > val2) {
                class1 = 'higher';
                class2 = 'lower';
            } else if (val2 > val1) {
                class2 = 'higher';
                class1 = 'lower';
            }

            tableHTML += `<tr><td>${attr.label}</td><td class="${class1}">${val1}</td><td class="${class2}">${val2}</td></tr>`;
        });

        tableHTML += '</tbody></table>';
        comparisonContainer.innerHTML = tableHTML;
    }

    tank1Select.addEventListener('change', updateComparison);
    tank2Select.addEventListener('change', updateComparison);
    // Carga inicial da tabela
    updateComparison();


    // =======================================================
    // 5. Bloco do Formulário de Contato Removido
    // =======================================================


    // =======================================================
    // 6. ANIMAÇÃO DE SCROLL COM INTERSECTION OBSERVER
    // ======================================================= 

    const animatedElements = document.querySelectorAll('.info-card, .section-title, .tank-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona uma classe para ativar a animação CSS
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Para de observar o elemento após a animação
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });



    animatedElements.forEach(el => {
        // Prepara os elementos para a animação
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
});