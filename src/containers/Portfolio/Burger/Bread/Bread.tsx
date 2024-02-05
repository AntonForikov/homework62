import React from 'react';
import './bread.css';
interface Props {
    children: React.ReactNode
}
const Bread: React.FC<Props> = ({children}) => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
                {children}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Bread;