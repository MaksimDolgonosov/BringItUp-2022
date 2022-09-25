import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(page, slides, nextBtn, prevBtn, activeClass, animate, autoplay) {
        super(page, slides, nextBtn, prevBtn, activeClass, animate, autoplay);

    }

    showFirstSlide() {
        this.slides[0].classList.add(this.activeClass);
        if(this.animate) {
            this.slides[0].querySelector(".card__controls-count").style.opacity = "1";
            this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
            this.slides[0].querySelector(".card__title").style.opacity = "1";
        }

    }
    showAnotherSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector(".card__controls-count").style.opacity = "0.5";
                slide.querySelector(".card__controls-arrow").style.opacity = "0";
                slide.querySelector(".card__title").style.opacity = "0.4";
            }
        });
    }

    showNextSlide() {
        this.nextBtn.addEventListener("click", () => {
            this.page.append(this.slides[0]);
            this.showAnotherSlides();
            this.showFirstSlide();
        });
    }

    showPrevSlide() {
        this.prevBtn.addEventListener("click", () => {
            this.page.prepend(this.slides[this.slides.length - 1]);
            this.showAnotherSlides();
            this.showFirstSlide();
        });
    }



    innit() {
        this.page.style.cssText = `
        display: flex;
        justify-content: space-arround;
        align-items: flex-start;
        flex-wrap: wrap;
        overflow: hidden;`;
        this.showAnotherSlides();
        this.showFirstSlide();
        this.showNextSlide();
        this.showPrevSlide();
        if (this.autoplay == true) {
            setInterval(() => this.nextBtn.click(), 5000);
        }
    }

}