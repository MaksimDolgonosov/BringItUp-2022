export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 0;
    }

    showSlide(n) {
        if (n >= this.slides.length - 1) {
            this.slideIndex = 0;
        }
        if (n < 0) {
            this.slideIndex = this.slides.length - 1;
        }
        this.slides.forEach(slide => {
            slide.style.display = "none";
        });
        this.slides[this.slideIndex].style.display = "block";
    }

    plusSlide(n) {
        this.showSlide(this.slideIndex += n);
    }



    render() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", e => {
                this.plusSlide(1);
            });
        });
    }
}