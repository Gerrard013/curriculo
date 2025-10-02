/* VARIÁVEIS DE COR E TEMA */
:root {
    --cor-principal: #00bcd4; /* Turquesa */
    --cor-secundaria: #222; /* Fundo do Header/Footer */
    --fundo-pagina: #f4f4f9; /* Fundo Geral Claro */
    --fundo-secao: #fff; /* Fundo das Seções */
    --texto-padrao: #333;
    --fundo-card-claro: #fafafa;
    --sombra-padrao: 0 4px 10px rgba(0,0,0,0.1);
}

/* DARK MODE */
body.dark-mode {
    --cor-principal: #00bcd4;
    --cor-secundaria: #111;
    --fundo-pagina: #1c1c1c; 
    --fundo-secao: #2c2c2c; 
    --texto-padrao: #f0f0f0;
    --fundo-card-claro: #3a3a3a;
    --sombra-padrao: 0 4px 10px rgba(0,0,0,0.5);
}

/* RESET BÁSICO */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--texto-padrao);
    background-color: var(--fundo-pagina);
    padding-top: 70px;
    transition: background-color 0.5s, color 0.5s; 
    overflow-x: hidden;
}

/* MENU FIXO */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--cor-secundaria);
    color: #fff;
    padding: 15px 20px;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Menu Hamburger - oculto no desktop */
.menu-toggle {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    width: 30px;
    height: 25px;
    position: relative;
    z-index: 1001;
}

.menu-toggle span {
    width: 100%;
    height: 3px;
    background: #fff;
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
    transform-origin: center;
}

/* Menu de navegação para desktop */
header nav {
    display: flex;
}

header nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s, transform 0.3s;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 0.95rem;
}

header nav ul li a:hover {
    color: var(--cor-principal);
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* BOTÃO DE TEMA */
#toggle-theme-btn {
    background: none;
    border: 2px solid #fff;
    color: #fff;
    padding: 8px 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
    margin-left: 15px;
}

#toggle-theme-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--cor-principal);
    color: var(--cor-principal);
    transform: scale(1.1);
}

/* SEÇÕES */
section {
    max-width: 900px;
    margin: 40px auto;
    padding: 25px;
    background: var(--fundo-secao);
    border-radius: 12px;
    box-shadow: var(--sombra-padrao);
    transition: all 0.5s ease-out;
}

section h1, section h2 {
    color: var(--cor-secundaria); 
    margin-bottom: 20px;
    transition: color 0.5s;
}

body.dark-mode section h1, body.dark-mode section h2 {
    color: var(--cor-principal);
}

/* FOTO PERFIL */
.foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    border: 3px solid var(--cor-principal);
    object-fit: cover;
}

/* CARDS DE PROJETO/FORMAÇÃO/EXPERIÊNCIA */
.card, .formacao-item {
    background: var(--fundo-card-claro); 
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s, background 0.5s, box-shadow 0.5s; 
    border-left: 4px solid var(--cor-principal);
}

.card:hover, .formacao-item:hover {
    transform: scale(1.02); 
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.card:hover h3, .formacao-item:hover h3 {
    color: var(--cor-principal);
    text-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
    transition: color 0.3s ease-out, text-shadow 0.3s ease-out;
}

/* LISTA DE HABILIDADES */
#habilidades ul {
    list-style: none;
    padding-left: 0;
}

#habilidades ul li {
    padding: 12px 18px;
    margin-bottom: 12px;
    border-left: 5px solid var(--cor-principal); 
    border-radius: 4px;
    background-color: var(--fundo-card-claro);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.5s; 
}

#habilidades ul li:hover {
    transform: translateX(5px); 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); 
    cursor: pointer;
}

#habilidades ul li strong {
    color: var(--texto-padrao);
    transition: color 0.5s;
}

#habilidades ul li:hover strong {
    color: var(--cor-principal);
    text-shadow: 0 0 5px rgba(0, 188, 212, 0.3);
    transition: color 0.3s ease-out, text-shadow 0.3s ease-out;
}

/* RODAPÉ */
footer {
    text-align: center;
    padding: 25px;
    margin-top: 40px;
    background: var(--cor-secundaria);
    color: #fff;
    transition: background 0.5s;
}

/* LINKS DE CONTATO */
#contato a {
    color: var(--cor-principal);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s, text-shadow 0.3s;
    margin: 0 10px;
}

#contato a:hover {
    text-decoration: underline;
    text-shadow: 0 0 5px rgba(0, 188, 212, 0.5);
}

/* RESPONSIVIDADE - MOBILE */
@media (max-width: 768px) {
    body {
        padding-top: 60px;
    }
    
    header {
        padding: 12px 15px;
    }
    
    /* Mostra o hamburger no mobile */
    .menu-toggle {
        display: flex;
    }
    
    /* Esconde o menu normal e mostra quando ativo */
    header nav ul {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--cor-secundaria);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: right 0.3s ease-in-out;
        box-shadow: -5px 0 15px rgba(0,0,0,0.3);
        padding-top: 80px;
        z-index: 999;
    }
    
    header nav ul.active {
        right: 0;
    }
    
    header nav ul li {
        width: 100%;
        margin: 5px 0;
        text-align: center;
    }
    
    header nav ul li a {
        display: block;
        padding: 15px 20px;
        margin: 0 20px;
        border-radius: 5px;
        font-size: 1.1rem;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    header nav ul li:last-child a {
        border-bottom: none;
    }
    
    /* Botão de tema */
    #toggle-theme-btn {
        z-index: 1001;
    }
    
    /* Overlay quando menu está aberto */
    .menu-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 998;
    }
    
    .menu-overlay.active {
        display: block;
    }
    
    /* Animação do hamburger para X */
    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    
    /* Ajustes nas seções para mobile */
    section {
        margin: 20px 15px;
        padding: 20px;
    }
    
    .foto-perfil {
        width: 130px;
        height: 130px;
    }
    
    .card, .formacao-item {
        padding: 18px;
        margin-top: 15px;
    }
    
    section h1 {
        font-size: 1.8rem;
        text-align: center;
    }
    
    section h2 {
        font-size: 1.5rem;
        text-align: center;
    }
    
    #contato p {
        text-align: center;
        margin: 10px 0;
    }
}

/* Para telas muito pequenas */
@media (max-width: 480px) {
    body {
        padding-top: 55px;
    }
    
    header {
        padding: 10px 12px;
    }
    
    section {
        margin: 15px 10px;
        padding: 18px;
    }
    
    .foto-perfil {
        width: 110px;
        height: 110px;
    }
    
    #toggle-theme-btn {
        padding: 6px 10px;
        font-size: 0.9rem;
    }
    
    header nav ul {
        width: 250px;
    }
}

/* ANIMAÇÕES DE SCROLL */
section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

section.mostrar {
    opacity: 1;
    transform: translateY(0);
}

/* EFEITO DE HOVER PARA O NOME */
#sobre h1 {
    transition: color 0.3s ease-out, transform 0.3s ease-out, text-shadow 0.3s ease-out; 
    cursor: pointer;
    display: inline-block; 
}

#sobre h1:hover {
    color: var(--cor-principal); 
    transform: translateY(-3px) scale(1.02); 
    text-shadow: 0 5px 15px rgba(0, 188, 212, 0.5); 
}

#sobre h1 {
    color: var(--texto-padrao); 
}

body.dark-mode #sobre h1 {
    color: #fff; 
}
