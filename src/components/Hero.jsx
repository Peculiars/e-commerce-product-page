import React from 'react'
import minus from '../assets/icon/icon-minus.svg';
import plus from '../assets/icon/icon-plus.svg';
import cart from '../assets/icon/icon-cart-1.svg';
import { Carousel } from './Carousel';



export const Hero = ({count, handleDecrementCount, handleIncrementCount, handleAddToCart }) => {

    const handleButtonSubmit = () => {
        handleAddToCart();
      };

  return (
    <div className='hero-container'>
        <div className='hero-image-carousel'>
            <Carousel/>
        </div>
        <div className='hero-content'>
            <p className='hero-heading'>SNEAKER COMPANY</p>
            <h1 className='hero-subheading'>Fall Limited Edition Sneakers</h1>
            <p className='description'>These low-profile sneakers are your perfect casual wears company. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='price-info'>
            <p className='price'>$125.00 <span className='percent'>50%</span></p> 
            <p className='former-price'>$250.00</p>
            </div>
            <div className='buttons'>
                <button className='counter-btn'>
                    <div className='counter-item'>
                        <img className='minus' onClick={handleDecrementCount} src={minus} alt={minus} />
                        <span className='counter'>{count}</span>
                        <img className='plus' onClick={handleIncrementCount} src={plus} alt={plus} />
                    </div>
                </button>
                <button className='cart-btn' onClick={handleButtonSubmit}>
                    <img className='btn-cart-img' src={ cart } alt={ cart } />
                    <span className='btn-text'>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}
