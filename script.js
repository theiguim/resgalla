document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        let targetProgress = parseInt(bar.getAttribute("data-progress")); // Pega a porcentagem do atributo
        let progress = 0;

        let interval = setInterval(() => {
            if (progress >= targetProgress) {
                clearInterval(interval);
            } else {
                progress++;
                bar.style.width = progress + "%";
                bar.textContent = progress + "%";
            }
        }, 20); // Velocidade de preenchimento
    });
});