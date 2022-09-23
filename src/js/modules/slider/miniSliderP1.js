import Slider from "./slider";

export default class MiniSliderP1 extends Slider {
    constructor(page, slides, nextBtn, prevBtn, activeClass) {
        super(page, slides, nextBtn, prevBtn, activeClass);

    }

    showNextSlide() {
        this.nextBtn.addEventListener("click", () => {
            this.page.append(this.slides[0]);
        });
    }



    innit() {
        this.page.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;`;

        this.showNextSlide();
    }

}