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
                  src={item.image}
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




// gfdgfgfgfgfdgfdgfdsdggggggggggg


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, deleteFromCart } from '../actions/cartActions';

// export default function CartScreen() {
//   const cartstate = useSelector((state) => state.cartReducers);
//   const cartItems = cartstate.cartItems;
//   var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
//   const dispatch = useDispatch();

  // return (
  //   <div>
  //     <div className='row justify-content-center'>
  //       <div className='col-md-6'>
  //         <h2 style={{ fontSize: '40px' }}>My cart</h2>
  //         {cartItems.map((item) => {
  //           return (
  //             <div className='flex-container'>
  //               <div className='text-start m-1 w-100'>
  //                 <p>
  //                   {item.name} [{item.varient}]
  //                 </p>
  //                 <p>
  //                   Price : {item.quantity} * {item.prices[0][item.varient]} ={' '}
  //                   {item.price}
  //                 </p>
  //                 <p style={{ display: 'inline' }}>Quantiy :</p>
  //                 <i
  //                   className='fa fa-plus'
  //                   aria-hidden='true'
  //                   onClick={() => {
  //                     dispatch(
  //                       addToCart(item, item.quantity + 1, item.varient)
  //                     );
  //                   }}
  //                 ></i>
  //                 <b>{item.quantity}</b>
  //                 <i
  //                   className='fa fa-minus'
  //                   aria-hidden='true'
  //                   onClick={() => {
  //                     dispatch(
  //                       addToCart(item, item.quantity - 1, item.varient)
  //                     );
  //                   }}
  //                 ></i>
  //                 <hr />
  //               </div>
  //               <div className='m-1 w-100'>
  //                 <img
  //                   src={item.image}
  //                   style={{ height: '80px', width: '80px' }}
  //                 />
  //               </div>
  //               <div className='m-1 w-100'>
  //                 <i
  //                   className='fa fa-trash mt-4'
  //                   aria-hidden='true'
  //                   onClick={() => {
  //                     dispatch(deleteFromCart(item));
  //                   }}
  //                 ></i>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //       <div className='col-md-4 text-end'>
  //         <h2 style={{ fontSize: '40px' }}>Subtotal: {subtotal}$</h2>
  //         <button className='btn'>CHECK OUT</button>
  //       </div>
  //     </div>
  //   </div>
  // );
// }


// // import React from 'react'
// // import { useCart, useDispatchCart } from '../components/ContextReducer';
// // import Delete from '@mui/icons-material/Delete';

// // export default function Cart() {
// //   let data = useCart();
// //   let dispatch = useDispatchCart();
// //   if (data.length === 0) {
// //     return (
// //       <div>
// //         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
// //       </div>
// //     )
// //   }
// //   // const handleRemove = (index)=>{
// //   //   console.log(index)
// //   //   dispatch({type:"REMOVE",index:index})
// //   // }

// //   const handleCheckOut = async () => {
// //     let userEmail = localStorage.getItem("userEmail");
// //     // console.log(data,localStorage.getItem("userEmail"),new Date())
// //     let response = await fetch("http://localhost:5000/api/auth/orderData", {
// //       // credentials: 'include',
// //       // Origin:"http://localhost:3000/login",
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({
// //         order_data: data,
// //         email: userEmail,
// //         order_date: new Date().toDateString()
// //       })
// //     });
// //     console.log("JSON RESPONSE:::::", response.status)
// //     if (response.status === 200) {
// //       dispatch({ type: "DROP" })
// //     }
// //   }

// //   let totalPrice = data.reduce((total, food) => total + food.price, 0)
// //   return (
// //     <div>

// //       {console.log(data)}
// //       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
// //         <table className='table table-hover '>
// //           <thead className=' text-success fs-4'>
// //             <tr>
// //               <th scope='col' >#</th>
// //               <th scope='col' >Name</th>
// //               <th scope='col' >Quantity</th>
// //               <th scope='col' >Option</th>
// //               <th scope='col' >Amount</th>
// //               <th scope='col' ></th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.map((food, index) => (
// //               <tr>
// //                 <th scope='row' >{index + 1}</th>
// //                 <td >{food.name}</td>
// //                 <td>{food.qty}</td>
// //                 <td>{food.size}</td>
// //                 <td>{food.price}</td>
// //                 <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         <div><p className='fs-2'>Total Price: {totalPrice}/-</p></div>
// //         <div>
// //           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
// //         </div>
// //       </div>



// //     </div>
// //   )
// // }