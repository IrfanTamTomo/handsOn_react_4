import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
            <div className='Container'>
      <nav className='Navbar'>
        <div className='Logo'>
          <div className='LogoText1'>Fan</div>
          <div className='LogoText2'>Mart</div>
        </div>
        {/* Tombol menu */}
        <div className='MenuButton' onClick={toggleMenu}>
          |||
        </div>
        {/* Tautan menu */}
        <div className={`Links ${showMenu ? 'ShowMenu' : ''}`}>
          <Link to='/'><p>Home</p></Link>
          <Link to='/menu'><p>Menu</p></Link>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
