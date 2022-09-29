export default class Accordion {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);

    }



    init() {
        this.triggers.forEach(trigger => {
            this.block = trigger.closest(".module__info-show").nextElementSibling;
            this.block.classList.add("animated");
            this.block.style.display = "none";
        });

        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                this.block = trigger.closest(".module__info-show").nextElementSibling;
                this.block.classList.add("animated");
                if (this.block.style.display == "none") {
                    this.block.classList.remove("fadeInUp");
                    this.block.classList.add("fadeInDown");
                    this.block.style.display = "block";
                } else {
                    this.block.classList.remove("fadeInDown");
                    this.block.classList.add("fadeInUp");
                    this.block.style.display = "none";
                }
            });
        });
    }
}