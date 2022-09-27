import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(page, btns, slides, nextBtn, prevBtn, slideIndex) {
        super(page, btns, slides, nextBtn, prevBtn, slideIndex);
    }
    showSlide(n) {
        if (n >= this.slides.length) {
            this.slideIndex = 0;
        }
        if (n < 0) {
            this.slideIndex = this.slides.length - 1;
        }

        if (document.querySelector(".hanson")) {
            if (n == 2) {
                setTimeout(() => {
                    document.querySelector(".hanson").classList.add("active");
                }, 3000);
            } else {
                document.querySelector(".hanson").classList.remove("active");
            }
        }



        this.slides.forEach(slide => {
            slide.style.display = "none";
        });
        this.slides[this.slideIndex].style.display = "block";
        this.slides[this.slideIndex].classList.add("animated", "fadeIn");
    }

    plusSlide(n) {
        this.showSlide(this.slideIndex += n);
    }



    render() {
        if (this.page) {
            this.btns.forEach(btn => {
                btn.addEventListener("click", e => {
                    this.plusSlide(1);
                });
            });

            document.querySelectorAll(".prevmodule").forEach(btn => {
                btn.addEventListener("click", e => {
                    this.plusSlide(-1);
                });
            });
            document.querySelectorAll(".nextmodule").forEach(btn => {
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    this.plusSlide(1);
                });
            });

            document.querySelectorAll(".sidecontrol a:not(.next)").forEach(slide => {
                slide.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.slideIndex = 0;
                    this.showSlide(this.slideIndex);

                });
            });
        }
    }
}