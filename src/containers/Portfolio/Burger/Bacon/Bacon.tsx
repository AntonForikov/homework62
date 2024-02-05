import './bacon.css';
import React from "react";

interface Props {
    count: number
}
const Bacon:React.FC<Props> = ({count}) => {
    const ingredientsDiv = [];

    for (let i = 0; i < count; i++) {
        ingredientsDiv.push(<div></div>);
    }

    const divs = (
        <>
            {
                ingredientsDiv.map(() => {
                    return <div className="Bacon" key={Math.random()}></div>;
                })
            }
        </>
    );
    return <>{divs}</>;
};

export default Bacon;