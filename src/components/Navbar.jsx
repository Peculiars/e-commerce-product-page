import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import cart from '../assets/icon/icon-cart.svg';
import avartar from '../assets/images/image-avatar.png';
import { Modal } from './Modal';
import { MobileMenu } from './MobileMenu';

export const Navbar = ({ count, setCartCount}) => {
  const [isActive, setIsActive] = useState('Collections');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
    setIsAvatarClicked(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick = (name) => {
    setIsActive(name);     
  };


  const menu = [
    { name: 'Collection', id: 1 },
    { name: 'Men', id: 2 },
    { name: 'Women', id: 3 },
    { name: 'About', id: 4 },
    { name: 'Contact', id: 5 },
  ];

  return (
    <>
      <div className='navbar-container'>
        <div>
            <MobileMenu/>
        </div>
        <div className='logo'>
          <img src={logo} alt={logo} />
        </div>
        <ul className='navbar-items'>
          {menu.map((item) => (
            <li onClick={() => handleMenuClick(item.name)} className={isActive === item.name ? 'active' : ''} key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className='info'>
          <img className='cart' src={cart} alt={cart} onClick={handleAvatarClick}/>
          {count > 0 && <span className='navbar-cart-count'>{count}</span>} 
          <img className='avatar'  src={avartar} alt={avartar}/>
        </div>
      </div>
      <hr />
      {isModalOpen && <Modal count={count} onClose={handleCloseModal} setCartCount={setCartCount} />}
    </>
  );
};
