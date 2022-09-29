import MainSlider from "./modules/slider/mainslider";
import MiniSlider from "./modules/slider/miniSlider";
import VideoPlayer from "./modules/videoPlayer";
import Forms from "./modules/form";
import Cards from "./modules/cards";
import Accordion from "./modules/accordion";



window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ page: ".page", btns: ".next" });
    slider.render();
    const moduleSlider = new MainSlider({ page: ".moduleapp", btns: ".next", prevBtn: ".prevmodule", nextBtn: ".nextmodule" });
    moduleSlider.render();

    const miniSliderP1 = new MiniSlider({ page: ".showup__content-slider", prevBtn: ".showup__prev", nextBtn: ".showup__next", activeClass: "card-active", animate: true, autoplay: false });
    miniSliderP1.innit();
    const miniSliderP3 = new MiniSlider({ page: ".modules__content-slider", prevBtn: ".modules__info-btns .slick-prev", nextBtn: ".modules__info-btns .slick-next", activeClass: "card-active", animate: true, autoplay: true });
    miniSliderP3.innit();
    const miniSliderP5 = new MiniSlider({ page: ".feed__slider", prevBtn: ".feed__slider .slick-prev", nextBtn: ".feed__slider .slick-next", activeClass: "feed__item-active", animate: false, autoplay: false });
    miniSliderP5.innit();

    new VideoPlayer(".showup .play", ".overlay").init();
    new VideoPlayer(".schedule .play", ".overlay").init();
    new VideoPlayer(".module .play", ".overlay").init();
    const form = new Forms(".form");
    form.init();
    const secondForm = new Forms(".scheduleForm");
    secondForm.init();

    const cardsOld = new Cards(".officerold", ".officerold .officer__card-item", ".officerold .plus");
    cardsOld.init();
    const cardsNew = new Cards(".officernew", ".officernew .officer__card-item", ".officernew .plus");
    cardsNew.init();
    const form1 = new Forms("form");
    form1.init();
    const form2 = new Forms(".scheduleForm");
    form2.init();

    new Accordion(".module__info-show .plus").init();


});