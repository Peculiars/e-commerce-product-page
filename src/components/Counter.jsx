import {useState} from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';

export const Counter = () => {
    const [count, setCount]= useState(0);
    const [cartCount, setCartCount] = useState(0);

    const handleIncrementCount =()=>{
        setCount(count + 1);
    }

    const handleDecrementCount =()=>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
      setCartCount(count);
    };

  return (
    <div className='holder'>
        <Navbar count={cartCount} setCartCount={setCartCount}/>
      <Hero
        count={count}
        handleIncrementCount={handleIncrementCount}
        handleDecrementCount={handleDecrementCount}
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}
