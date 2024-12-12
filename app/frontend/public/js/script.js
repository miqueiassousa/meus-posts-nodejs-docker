/**
 * DOMContentLoaded é um evento do JavaScript que é disparado quando o documento HTML inicial foi completamente carregado 
 * e processado, sem esperar que as folhas de estilo (CSS), imagens e subframes sejam totalmente carregados.
 */

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("toggle-theme");
    const themeIcon = document.getElementById("theme-icon");

    // Verifica se o tema escuro está ativado no início e ajusta o ícone
    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    // Adiciona o evento de clique para alternar o tema
    themeToggle.addEventListener("click", function() {
        // Alterna a classe dark-theme no corpo
        document.body.classList.toggle("dark-theme"); // O método toggle retorna: true: Se a classe foi adicionada ao elemento. false: Se a classe foi removida.

        // Alterna o ícone entre a lua e o sol
        if (document.body.classList.contains("dark-theme")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    });
});
