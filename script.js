(function () {
    function Desaparecer() {
        // tempo até começar a desaparecer (em ms)
        setTimeout(() => {
            const screen = document.getElementById("welcome-screen");

            // inicia o fade-out
            screen.style.opacity = "0";

            // depois de 1 segundo (tempo da transição no CSS), remove da tela
            setTimeout(() => {
                screen.style.display = "none";
            }, 1000); // 1000ms = 1s, igual ao transition do CSS

        }, 4000); // tempo que a tela fica visível antes de sumir (4s)
    }

    Desaparecer()
})();
