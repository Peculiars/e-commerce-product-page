import React, { useState } from 'react';
import openMenu from '../assets/icon/icon-close.svg';
import closeMenu from '../assets/icon/icon-menu.svg';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menus = [
    { name: 'Collections', id: 1 },
    { name: 'Men', id: 2 },
    { name: 'Women', id: 3 },
    { name: 'About', id: 4 },
    { name: 'Contact', id: 5 },
  ];

  return (
    <div className={`${isMenuOpen ? 'tag3' : ''}`}>
    <div className={`menu-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <img src={openMenu} alt={openMenu} /> : <img src={closeMenu} alt={closeMenu} />}
      </div>
      {isMenuOpen && (
        <div className='mobile-menu'>
          <ul className='unordered'>
            {menus.map((item) => (
              <li className='list' key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};
