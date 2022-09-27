export default class Cards {
    constructor(cardsWrapper, cards, trigger) {
        this.cardsWrapper = document.querySelector(cardsWrapper);
        this.cards = document.querySelectorAll(cards);
        this.lastCard = this.cards[this.cards.length - 1];
        this.trigger = document.querySelector(trigger);
        this.cardIndex = 0;
    }

    showCard() {

        this.trigger.addEventListener("click", () => {
            if (this.cardIndex == this.cards.length - 2) {
                this.cards[this.cardIndex].style.display = "flex";
                this.lastCard.remove();
            } else {
                this.cards[this.cardIndex].style.display = "flex";
                this.cardIndex += 1;
            }

        });
    }




    init() {
        this.cards.forEach(card => {
            card.style.display = "none";
            card.classList.add("animated", "fadeInDown");
        });
        this.lastCard.style.display = "flex";
        this.showCard();
    }
}