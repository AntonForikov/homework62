import Card from "./card";

type Counter = {
    [key: string]: number;
}
class PokerHand {
    private cardArr: Card[];
    constructor(cardArr: Card[]) {
        this.cardArr = cardArr;
    }

    getOutcome() {
        const suitSet = new Set(this.cardArr.map(card => card.suit));
        if (suitSet.size === 1) {
            return "Flush";
        }

        const counter: Counter = {};
        for (let i = 0; i < this.cardArr.length; i++) {
            if (!counter[this.cardArr[i].rank]) {
                counter[this.cardArr[i].rank] = 0;
            }
            counter[this.cardArr[i].rank]++;
        }

        let pairsCounter = 0;
        for (const card in counter) {
            if (counter[card] === 3) {
                return "three of a kind";
            }
            if (counter[card] === 2) {
                pairsCounter++;
            }
        }

        if (pairsCounter === 0) {
            return "No combination found";
        } else if (pairsCounter === 1) {
            return "One pair";
        } else if (pairsCounter === 2) {
            return "Two pairs";
        }
    }
}

export default PokerHand;