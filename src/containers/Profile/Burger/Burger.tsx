import { useState } from 'react';

import meatImg from "./assets/meat.png";
import cheeseImg from "./assets/cheese.png";
import salatImg from "./assets/salat.png";
import baconImg from "./assets/bacon.png";
import Ingredient from './Ingridient/Ingridient';
import Bread from './Bread/Bread';
import Bacon from './Bacon/Bacon';
import Salad from './Salat/Salad';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Price from './Price/Price';

interface ingredient {
    name: string,
    price: number,
    image: string
}

interface ingredientState {
    name: string,
    count: number
}

const ingredients: ingredient[] = [
    {name: 'Meat', price: 80, image: meatImg},
    {name: 'Cheese', price: 50, image: cheeseImg},
    {name: 'Salad', price: 10, image: salatImg},
    {name: 'Bacon', price: 60, image: baconImg},
];

function Burger() {
    const [ingredientCount, setIngredientCount] = useState<ingredientState[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0},
    ]);

    const plusCount = (index: number) => {
        const ingredientCountCopy = [...ingredientCount];
        ingredientCountCopy[index].count++;
        setIngredientCount([...ingredientCountCopy]);
    };

    const minusCount = (index: number) => {
        if (ingredientCount[index].count !== 0) {
            const ingredientCountCopy = [...ingredientCount];
            ingredientCountCopy[index].count--;
            setIngredientCount([...ingredientCountCopy]);
        }
    };

    const ingredientBlock = (
        <>
            {
                ingredients.map((ingredient, index) => {
                    return (
                        <Ingredient
                            key={index}
                            name={ingredient.name}
                            img={ingredient.image}
                            quantity={ingredientCount[index].count}
                            plus={() => plusCount(index)}
                            minus={() => minusCount(index)}
                        />
                    );
                })
            }
        </>
    );

    const totalPrice = () => {
        const price = ingredientCount.reduce((acc, ing, index) => {
            return acc + (ing.count * ingredients[index].price);
        }, 30);
        return price;
    };

    return (
        <>
            <div className='main'>
                <div className='ingridients'>
                    {ingredientBlock}
                </div>
                <div className='ingridient'>
                    <Bread>
                        <Bacon count={ingredientCount[3].count} />
                        <Salad count={ingredientCount[2].count} />
                        <Cheese count={ingredientCount[1].count} />
                        <Meat
                          count={ingredientCount[0].count} />
                    </Bread>

                    <Price price={totalPrice()}></Price>
                </div>
            </div>
        </>
    );
}

export default Burger;
