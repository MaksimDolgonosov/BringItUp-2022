export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.closeBtn = this.overlay.querySelector(`.close`);

        this.closeBtn.addEventListener("click", () => {
            this.overlay.style.display = "none";
            document.querySelector("#frame").remove();
            let div = document.createElement("div");
            div.setAttribute("id", "frame");
            document.querySelector(`${overlay} .video`).prepend(div);
        });
    }



    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });
        this.overlay.style.display = "flex";

    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                let path = trigger.getAttribute("data-url");
                this.createPlayer(path);
            });
        });
    }
}