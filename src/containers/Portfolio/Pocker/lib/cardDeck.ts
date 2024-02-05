import Card from "./card";

interface Suit {
    name: string,
    simbol: string
}

class CardDeck{
    private deck: Card[];
    private ranks: string[];
    private suits: Suit[];
    constructor() {
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this.suits = [
            {name: "diams", simbol: '♦'},
            {name: "hearts", simbol: '♥'},
            {name: "clubs", simbol: '♣'},
            {name: "spades", simbol: '♠'},
        ];
        this.deck = [];
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                const card = new Card(rank, suit);
                this.deck.push(card);
            }
        }
    }

    getCard(): Card {
        const randomIdx = Math.floor(Math.random() * this.deck.length);
        const randomCard = this.deck[randomIdx];
        this.deck.splice(randomIdx, 1);
        return randomCard;
    }

    getCards(howMany: number): Card[] {
        const cardArr: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cardArr.push(this.getCard());
        }
        return cardArr;
    }
}

export default CardDeck;