import './salad.css'
import React from "react";

interface Props {
    count: number
}
const Salad: React.FC<Props> = ({count}) => {
    const ingredientsDiv = [];

    for (let i = 0; i < count; i++) {
        ingredientsDiv.push(<div></div>);
    }

    const divs = (
        <>
            {
                ingredientsDiv.map(() => {
                    return <div className="Salad" key={Math.random()}></div>;
                })
            }
        </>
    );
    return <>{divs}</>;
};

export default Salad;