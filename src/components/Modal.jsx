import React from 'react'
import deleteIcon from '../assets/icon/icon-delete.svg';
import img2 from '../assets/images/image-product-1-thumbnail.jpg'

export const Modal = ({onClose, count, setCartCount, setCount}) => {
    const result = 125.00 * count;
    const handleClickOutside = (event) => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };

    const handleDelete = () => {
      setCartCount(0);
      setCartCount(0);// Close the modal if needed
    };

    
  return (
    <div onClick={handleClickOutside} className='modal drop-shadow-lg justify-center items-start mt-[5rem] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='modal-content relative w-auto my-6 mx-auto max-w-sm bg-[#fff] rounded-md'>
          <div className='flex items-start justify-between p-5 border-[1.5px] border-solid border-blueGray-500 rounded-t'>
          <p className='modal-cart text-2xl font-semibold'>Cart</p>
          </div>
           
          {count >=1 ? (
          <div className='tag4 px-5 my-6'>
            <img className='w-[50px] rounded-md' src={img2} alt="" />
            <div className='tag5 px-5'>
            <p className='fall'>Fall Limited Edition Sneakers</p>
            <p className='contss'>{`$125.00 x ${count}`}<span className='sblach font-bold ml-1'> ${result}.00</span> </p>
            </div>

            <img onClick={handleDelete} className='h-[100%]' src={deleteIcon} alt={deleteIcon} />
            </div>
            ) : (
              <div className='text-center w-1 py-[50px] px-5 w-[25rem] h-[11rem]'>
                  <p className='empty-cart text-[18px]'>Your cart is empty.</p>
              </div>
            )}
            {count >=1 && (
          <div className='bg-orange-500 mx-4 rounded-[10px] mb-5'>
          <button className='checkout text-[#fff] mx-auto h-[3rem]'>Checkout</button>
          </div>
          )}
        </div>
    </div>
  )
}


