
# World of Tanks - Guia Informativo Interativo

> Status: Versão 3.0 - Funcionalidades Interativas Implementadas
> Autor: [Seu Nome/Apelido]
> Data da Última Atualização: 15 de Outubro de 2025

<br>

![Banner do Projeto](https://img.utdstc.com/screen/41c/a75/41ca75fd82490d1f7e91a039a06f23579043e0a241280fc9a5b658d34190c4d8:640)

<br>

## 📋 Índice

* [🚀 Sobre o Projeto](#-sobre-o-projeto)
* [✨ Funcionalidades Principais](#-funcionalidades-principais)
* [📸 Screenshot](#-screenshot)
* [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [⚙️ Detalhamento Técnico das Funcionalidades](#-detalhamento-técnico-das-funcionalidades)
  * [📄 Lógica em `script.js`](#-lógica-em-scriptjs)
  * [🎨 Estilização em `style.css`](#-estilização-em-stylecss)
* [📂 Estrutura do Projeto](#-estrutura-do-projeto)
* [🚀 Como Executar](#-como-executar)
* [🔮 Possíveis Melhorias Futuras](#-possíveis-melhorias-futuras)

<br>

## 🚀 Sobre o Projeto

Este projeto é uma página web estática, porém rica em interatividade, concebida como um guia informativo completo para o jogo online "World of Tanks". O objetivo é centralizar informações cruciais sobre mecânicas, veículos, nações e estratégias de uma forma visualmente atraente, clara e de fácil acesso.

A página foi construída como um "single-page" (página única), onde o usuário pode navegar por todas as seções através de links na barra de navegação com uma rolagem suave. O foco foi criar uma experiência de usuário moderna e fluida, utilizando técnicas avançadas de CSS e JavaScript para adicionar vida e funcionalidade ao conteúdo.

Este guia se destina tanto a jogadores iniciantes, que precisam entender os conceitos básicos, quanto a jogadores intermediários que buscam aprofundar seu conhecimento sobre tanques e mecânicas específicas.

---

## ✨ Funcionalidades Principais

* ✅ **Design Totalmente Responsivo**: A interface se adapta perfeitamente a diferentes tamanhos de tela, desde desktops largos até dispositivos móveis.
* ✅ **Navegação Fixa e Inteligente**: A barra de navegação fica fixa no topo da tela ao rolar a página, mudando de aparência para melhor legibilidade. O menu se transforma em um "hambúrguer" em telas menores.
* ✅ **Seção Hero Impactante**: Uma imagem de cabeçalho em tela cheia com um efeito de sobreposição sutil para dar as boas-vindas ao usuário.
* ✅ **Galeria de Tanques Interativa**: Cards de tanques que, ao serem clicados, abrem um *modal* com informações detalhadas, incluindo imagem, descrição e atributos.
* ✅ **Comparador de Atributos Dinâmico**: Uma ferramenta interativa que permite ao usuário selecionar dois tanques de uma lista e ver uma tabela comparativa de seus status, destacando visualmente qual tem o melhor atributo.
* ✅ **Layout Moderno em Grid**: O conteúdo principal é organizado usando CSS Grid Layout, permitindo uma estrutura flexível e robusta que se reorganiza automaticamente em telas menores.
* ✅ **Animações de Scroll**: Os elementos da página, como os cards de informação, surgem com uma animação suave de "fade in" conforme o usuário rola a página, tornando a experiência de navegação mais agradável.
* ✅ **Botão "Voltar ao Topo"**: Um botão que aparece no canto da tela após uma certa rolagem, permitindo ao usuário retornar ao início da página com um único clique.
* ✅ **Estilização Coerente e Temática**: Utilização de uma paleta de cores escura e fontes que remetem à temática militar do jogo, com variáveis CSS para fácil manutenção.

---

## 📸 Screenshot

![Screenshot do Projeto](imagens/wot_videotrailer-min.jpg)
*(Este é um placeholder, substitua pelo screenshot real da sua página)*

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web front-end:

* **HTML5**: Para a estruturação semântica de todo o conteúdo da página.
* **CSS3**: Para a estilização completa, incluindo:
    * **Flexbox**: Para alinhar itens em componentes como a navbar e o footer
