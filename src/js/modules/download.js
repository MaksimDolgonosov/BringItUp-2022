export default class Download {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = "assets/img/Bitmap.jpg";
    }

    download(path) {
        const element = document.createElement("a");
        element.setAttribute("href", path);
        element.setAttribute("download", "picture_nice");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                this.download(this.path);
            });
        });
    }
}