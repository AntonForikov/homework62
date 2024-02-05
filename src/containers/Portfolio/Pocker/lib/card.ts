interface Suit {
    name: string,
    simbol: string
}

class Card {
    rank: string;
    suit: Suit;
    constructor(rank: string, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

export default Card;