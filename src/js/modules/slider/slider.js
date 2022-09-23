export default class Slider {
    constructor({ page = null, btns = null, nextBtn = null, prevBtn = null, activeClass="" } = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 0;
        this.nextBtn = document.querySelector(nextBtn);
        this.prevBtn = document.querySelector(prevBtn);
    }

   
}