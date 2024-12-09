document.addEventListener("DOMContentLoaded", () => {
    const buttonStart = document.querySelector(".buttonStart");
    const startText = document.querySelector(".startText");
    const heading = document.querySelector(".includText");
    const image = document.querySelector("img");
    const button = document.querySelector(".changeMode");
    const paragraph = document.querySelector(".morgenPara");
    const navigation = document.getElementById("navigation");
    const prevButton = document.querySelector(".previous");
    const nextButton = document.querySelector(".next");

    if (buttonStart) {
        setTimeout(() => {
            buttonStart.style.transform = "translateX(0)";
        }, 500);
    }

    if (startText) {
        setTimeout(() => {
            startText.style.transform = "translateX(0)";
        }, 1000);
    }


    if (image) {
        image.style.animation = "shake 0.5s ease";
    }

    if (heading) {
        setTimeout(() => {
            heading.style.visibility = "visible";
        }, 1700);
    }


    

                if (button.textContent.includes("liste")) {
                    paragraph.innerHTML = activityList;
                    button.textContent = "Passer en mode normal";
                    paragraph.classList.add("listMode");
                } else {
                    paragraph.innerHTML = originalText;
                    button.textContent = "Passer en mode liste";
                    paragraph.classList.remove("listMode");
                }
            });
        } else {
            console.error("Bouton .changeMode introuvable sur cette page.");
        }
    } else {
        console.log("Ce script ne s'exécute pas sur cette page.");
    }

    setTimeout(() => {
        paragraph.classList.add("visible");
    }, 500); // Applique l'effet de zoom après 500ms
});
