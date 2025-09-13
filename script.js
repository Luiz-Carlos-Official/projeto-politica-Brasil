document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // ==== BOTÃO MODO DIA/NOITE ====
    const btnToggleTheme = document.createElement("button");
    btnToggleTheme.innerText = "🌙 Modo Noturno";
    btnToggleTheme.style.position = "fixed";
    btnToggleTheme.style.bottom = "20px";
    btnToggleTheme.style.right = "20px";
    btnToggleTheme.style.padding = "10px 15px";
    btnToggleTheme.style.borderRadius = "50px";
    btnToggleTheme.style.border = "none";
    btnToggleTheme.style.background = "#004aad";
    btnToggleTheme.style.color = "white";
    btnToggleTheme.style.cursor = "pointer";
    btnToggleTheme.style.zIndex = "1000";
    document.body.appendChild(btnToggleTheme);

    let darkMode = false;
    btnToggleTheme.addEventListener("click", () => {
        darkMode = !darkMode;
        if (darkMode) {
            body.style.background = "#121212";
            body.style.color = "#f1f1f1";
            btnToggleTheme.innerText = "☀️ Modo Claro";
        } else {
            body.style.background = "#ffffff";
            body.style.color = "#111";
            btnToggleTheme.innerText = "🌙 Modo Noturno";
        }
    });

    // ==== BOTÃO MODO LEITURA ====
    const btnLeitura = document.createElement("button");
    btnLeitura.innerText = "📖 Modo Leitura";
    btnLeitura.style.position = "fixed";
    btnLeitura.style.bottom = "70px";
    btnLeitura.style.right = "20px";
    btnLeitura.style.padding = "10px 15px";
    btnLeitura.style.borderRadius = "50px";
    btnLeitura.style.border = "none";
    btnLeitura.style.background = "#008000";
    btnLeitura.style.color = "white";
    btnLeitura.style.cursor = "pointer";
    btnLeitura.style.zIndex = "1000";
    document.body.appendChild(btnLeitura);

    let leituraAtiva = false;
    btnLeitura.addEventListener("click", () => {
        leituraAtiva = !leituraAtiva;
        if (leituraAtiva) {
            document.querySelectorAll("p").forEach(p => {
                p.style.fontSize = "1.4rem";
                p.style.lineHeight = "2";
            });
            btnLeitura.innerText = "🔙 Voltar Normal";
        } else {
            document.querySelectorAll("p").forEach(p => {
                p.style.fontSize = "1rem";
                p.style.lineHeight = "1.6";
            });
            btnLeitura.innerText = "📖 Modo Leitura";
        }
    });
});
