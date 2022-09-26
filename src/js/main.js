import MainSlider from "./modules/slider/mainslider";
import MiniSlider from "./modules/slider/miniSlider";
import VideoPlayer from "./modules/videoPlayer";
import Cards from "./modules/cards";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ page: ".page", btns: ".next" });
    slider.render();
    const miniSliderP1 = new MiniSlider({ page: ".showup__content-slider", prevBtn: ".showup__prev", nextBtn: ".showup__next", activeClass: "card-active", animate: true, autoplay: false });
    miniSliderP1.innit();
    const miniSliderP3 = new MiniSlider({ page: ".modules__content-slider", prevBtn: ".modules__info-btns .slick-prev", nextBtn: ".modules__info-btns .slick-next", activeClass: "card-active", animate: true, autoplay: true });
    miniSliderP3.innit();
    const miniSliderP5 = new MiniSlider({ page: ".feed__slider", prevBtn: ".feed__slider .slick-prev", nextBtn: ".feed__slider .slick-next", activeClass: "feed__item-active", animate: false, autoplay: false });
    miniSliderP5.innit();
    const player = new VideoPlayer(".showup .play", ".overlay");
    player.init();
    const cardsOld = new Cards(".officerold",".officerold .officer__card-item", ".officerold .plus");
    cardsOld.init();
    const cardsNew = new Cards(".officernew",".officernew .officer__card-item", ".officernew .plus");
    cardsNew.init();

});