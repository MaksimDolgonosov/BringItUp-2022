import MainSlider from "./modules/slider/mainslider";
import MiniSliderP1 from "./modules/slider/miniSliderP1";
import VideoPlayer from "./modules/videoPlayer";


window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ page: ".page", btns: ".next" });
    slider.render();
    const miniSliderP1 = new MiniSliderP1({ page: ".showup__content-slider", prevBtn: ".showup__prev", nextBtn: ".showup__next" });
    miniSliderP1.innit();
    const player = new VideoPlayer(".showup .play", ".overlay");
    player.init();


});