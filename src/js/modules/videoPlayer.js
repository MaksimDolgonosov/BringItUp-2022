export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.closeBtn = this.overlay.querySelector(`.close`);

        this.closeBtn.addEventListener("click", () => {
            // this.player.stopVideo();
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
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this) // не забыть
            }
        });
        this.overlay.style.display = "flex";
    }

    onPlayerStateChange(event) {

        try {
            let blockedBlock = this.activeTriger.closest(".module__video-item").nextElementSibling;
            if (event.data == 0) {
                if (blockedBlock.querySelector(".play__circle").classList.contains("closed")) {
                    blockedBlock.style.opacity = "1";
                    blockedBlock.style.filter = "none";
                    blockedBlock.querySelector(".play__circle").classList.remove("closed");
                    blockedBlock.querySelector(".play__text").classList.remove("attention");
                    blockedBlock.querySelector(".play__circle svg").remove();
                    blockedBlock.querySelector(".play__circle").appendChild(this.activeSvg);
                    blockedBlock.querySelector(".play__text").textContent = "play video";
                }
            }
        } catch (e) { }
    }


    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {

                if (trigger.querySelector(".play__circle").classList.contains("closed")) {

                } else {
                    this.activeTriger = trigger;
                    this.activeSvg = trigger.querySelector("svg").cloneNode(true);
                    let path = trigger.getAttribute("data-url");
                    this.createPlayer(path);
                }

            });
        });


    }
}