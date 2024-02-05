import React from 'react';

interface  Props {
    name: string,
    img: string,
    quantity: number,
    plus: React.MouseEventHandler,
    minus: React.MouseEventHandler
}

const Ingredient: React.FC<Props> = ({name, img, quantity, plus, minus}) => {
   const divStyle: React.CSSProperties = {
       display: "flex",
       justifyContent: 'space-between',
       alignItems: 'center'
   };

   const imgStyle: React.CSSProperties = {
        width: "70px",
       cursor: "pointer"
    };

   const buttonStyle: React.CSSProperties = {
       backgroundColor: 'red',
       padding: '10px',
       borderRadius: '8px',
       cursor: "pointer",
   };

   if (quantity < 1) {
       buttonStyle.backgroundColor = "Grey";
   }

    return (
        <div style={divStyle}>
            <img src={img} alt={name} style={imgStyle} onClick={plus} />
            <span>{name}</span>
            <span>x{quantity}</span>
            <button style={buttonStyle} onClick={minus} disabled={!quantity}>Delete</button>
        </div>
    );
};

export default Ingredient;