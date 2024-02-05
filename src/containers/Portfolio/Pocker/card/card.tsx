import React from "react";


interface Suit {
    name: string,
    simbol: string
}
interface Props {
    rank: string,
    suit: Suit
}

const Card: React.FC<Props> = ({rank, suit}) => {
    return (
        <span className={`card rank-${rank.toLowerCase()} ${suit.name}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suit.simbol}</span>
        </span>
    )
}

export default Card