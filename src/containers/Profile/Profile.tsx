import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className='text-center'>
      <Link to='find-block-game'>Blocks Game</Link>
      <Outlet/>
    </div>
  );
};

export default Profile;
