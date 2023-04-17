import React from 'react'
// import { useCart } from '../components/ContextReducer';
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar';
import { addToCart, deleteFromCart } from '../actions/cartActions';
 

export default function Cartscreen(){
  // let data = useCart();
  // if (data.length === 0) {
  //   return (
  //     <div>
  //       <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
  //     </div>
  //   )
  // }

  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();


return (
  <div>
    <Navbar/>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='mt-3 container bg-secondary d-flex justify-content-center align-items-center'>
  <h2 style={{ fontSize: '40px' }}>My cart</h2>
</div>

        {cartItems.map((item) => {
          return (
            <div className='d-flex-inline container mt-3' style={{ fontSize: '25px' }}>
              <div><img
                  src={item.image} alt=""
                  style={{ display:'inline', height: '80px', width: '80px' }}
                />
                </div>
              <div className='text-left m-1'>
                <p>
                  {item.name} [{item.varient}]
                </p>
                <p >
                  Price : {item.quantity} * {item.prices[0][item.varient]} ={' '}
                  {item.price}
                </p>
                <p style={{ display: 'inline' }}>Quantity :  </p>
                
                
                <i
                  className='fa fa-plus'
                  aria-hidden='true'
                  onClick={() => {
                    dispatch(
                      addToCart(item, item.quantity + 1, item.varient)
                    );
                  }}
                ></i>
                <b>{item.quantity}</b>
                <i
                  className='fa fa-minus'
                  aria-hidden='true'
                  onClick={() => {
                    dispatch(
                      addToCart(item, item.quantity - 1, item.varient)
                    );
                  }}
                ></i>
                <div className='m-5'>
                
              </div>
                <hr/>
              </div>

              {/* <div className='m-5'>
                <img
                  src={item.image}
                  style={{ display:'inline-flex', height: '80px', width: '80px' }}
                />
              </div> */}
              
              <div className='m-1 w-100'>
                <i
                  className='fa fa-trash mt-4'
                  aria-hidden='true'
                  onClick={() => {
                    dispatch(deleteFromCart(item));
                  }}
                ></i>
              </div>
              
            </div>
          );
        })}
         <div className='col-md-4 text-end d-inline'>
        <h2 style={{ fontSize: '40px', }}>Subtotal: ₹{subtotal}</h2>
        <button className='btn'>CHECK OUT</button>
      </div> 
      </div>
      {/* <div className='col-md-4 text-end'>
        <h2 style={{ fontSize: '40px' }}>Subtotal: ₹{subtotal}</h2>
        <button className='btn'>CHECK OUT</button>
      </div>  */}
    </div>
  </div>
);
}




