import { useState } from 'react';
import Card from "./card/card";
import cardModel from "./lib/card";
import './cards.css';
import cardDeck from "./lib/cardDeck";
import PokerHand from "./lib/pokerHand";
import Combination from "./combination/combination";


function Pocker() {
    const [cards, setCards] = useState<cardModel[]>(
        []
    );
    const pokerHand= new PokerHand(cards);

    const dealCards = () => {
        const deck: cardDeck = new cardDeck();
        const card = deck.getCards(5);
        setCards(card);
    };

    if (cards.length === 0) {
        return (
            <div>
                <button onClick={dealCards}>Deal cards</button>
            </div>
        );
    } else {
        return (
            <>
                <div className="playingCards faceImages">
                    <Card rank={cards[0].rank} suit={cards[0].suit}/>
                    <Card rank={cards[1].rank} suit={cards[1].suit}/>
                    <Card rank={cards[2].rank} suit={cards[2].suit}/>
                    <Card rank={cards[3].rank} suit={cards[3].suit}/>
                    <Card rank={cards[4].rank} suit={cards[4].suit}/>
                </div>
                <Combination comb={pokerHand.getOutcome()}/>
            </>
        );
    }
}

export default Pocker;
