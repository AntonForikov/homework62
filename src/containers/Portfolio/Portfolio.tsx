import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <>
      <div className='d-flex'>
        <div className='d-flex flex-column'>
          <Link to='find-block-game'>Blocks Game</Link>
          <Link to='burger'>Burger</Link>
          <Link to='pocker'>Poker</Link>
        </div>
        <div className='mx-auto'>
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
