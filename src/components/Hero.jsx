import React from 'react'
import minus from '../assets/icon/icon-minus.svg';
import plus from '../assets/icon/icon-plus.svg';
import cart from '../assets/icon/icon-cart-1.svg';
import { Carousel } from './Carousel';



export const Hero = ({count, handleDecrementCount, handleIncrementCount, handleAddToCart }) => {

    const handleButtonSubmit = () => {
        handleAddToCart(); // Call handleAddToCart function passed from parent
      };

  return (
    <div className='hero-container'>
        <div className='hero-image-carousel'>
            <Carousel/>
        </div>
        <div className='hero-content'>
            <p className='hero-text'>SNEAKER COMPANY</p>
            <h1 className='hero-heading'>Fall Limited Edition Sneakers</h1>
            <p className='description'>These low-profile sneakers are your perfect casual wears company. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='tag2'>
            <p className='price'>$125.00 <span className='percent'>50%</span></p> 
            <p className='former-price'>$250.00</p>
            </div>
            <div className='buttons'>
                <button className='btn-count'>
                <div className='tag'>
                    <img className='minus' onClick={handleDecrementCount} src={minus} alt={minus} />
                    <span className='counter'>{count}</span>
                    <img className='plus' onClick={handleIncrementCount} src={plus} alt={plus} />
                    </div>
                </button>
                <button className='btn-cart' onClick={handleButtonSubmit}>
                    <img className='btn-cart-img' src={ cart } alt={ cart } />
                    <span className='btn-desc'>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
  )
}
