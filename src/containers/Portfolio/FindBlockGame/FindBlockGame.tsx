import React, {useState} from 'react';

import {block} from "./types";
import Block from './Block/Block';
import Field from './Field/Field';
import Counter from './Counter/Counter';
import Button from './Button/Button';

const startState = () => {
    const arr: block[] = [];
    for (let i = 0; i < 36; i++) {
        arr.push({hasItem: false, clicked: false, id: i});
    }
    const randomIdx = Math.floor(Math.random() * arr.length);
    arr[randomIdx].hasItem = true;
    return arr;
};

function FindBlockGame() {
    const [blockList, setBlockList] = useState(startState());

    const click = (idx: number) => {
        const blockListCopy = [...blockList];
        blockListCopy[idx].clicked = true;
        setBlockList([...blockListCopy]);
    };

    const resetGame = () => {
        const blockListCopy = startState();
        setBlockList([...blockListCopy]);
    };

    const blocks: React.ReactNode = (
        <>
            {
                blockList.map((block) => {
                    return <Block hasItem={block.hasItem} clicked={block.clicked} key={block.id} onClick={() => click(block.id)}/>;
                })
            }
        </>
    );

    return (
        <div className='d-flex flex-column align-items-center'>
            <Field winArr={blockList}>
                {blocks}
            </Field>
            <Counter counterArr={blockList}></Counter>
            <Button onClick={resetGame}></Button>
        </div>
    );
}

export default FindBlockGame;