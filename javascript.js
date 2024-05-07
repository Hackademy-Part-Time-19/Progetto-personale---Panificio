
    document.addEventListener("DOMContentLoaded", function() {
        const cardContainers = document.querySelectorAll(".card-container");

        const sortedCards = Array.from(cardContainers).sort((a, b) => {
            const titleA = a.querySelector("h3").innerText.toUpperCase();
            const titleB = b.querySelector("h3").innerText.toUpperCase();
            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }
            return 0;
        });

        const main = document.querySelector("main");

        sortedCards.forEach(card => {
            main.appendChild(card);
        });
    });

    



