import React from "react";

interface Props {
    comb: string | undefined
}
const Combination: React.FC<Props> = ({comb}) => {
    return (
        <div>
            <span>Combination: {comb}</span>
        </div>
    )
}

export default Combination;