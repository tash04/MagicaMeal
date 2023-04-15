import React, {useState} from 'react'
import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

export default function Cards({ edible }) {
const[quantity, setquantity]= useState(1)
const[varient, setvarient]= useState('small')

const dispatch = useDispatch()
function addtocart(){
  dispatch(addToCart(edible, quantity, varient))
}

  return (
    <div>
      <div>
        <div className="card mt-3 bg-secondary" style={{ width: "16rem", maxHeight: "360px" }} key={edible._id}>
          <img src={edible.image} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body ">
            <div style={{ textAlign: 'center' }}>
            <h5 >{edible.name}</h5>
            
            
           
              <div className='container w-100 p-0' style={{ height: "38px" }}>
               

                  <select className="bg-success text-black rounded outline-white " value={varient} onChange={(e)=>{setvarient(e.target.value)}} style={{border: "white"}}>
                  {edible.varients.map((varient, _id) => {
                    return (
                      <option key={_id} value={varient}>
                        {varient}
                      </option>
                    );
                  })}
                  </select>

                  <select className="bg-success text-black rounded m-2" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>)
                  })}
                </select>

                  <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                
               ₹ {edible.prices[0][varient] * quantity} /-
           
                </div>
              </div>
            
            <button className= "tn btn-dark text-white justify-center btn-outline-dark ms-2 " onClick={addtocart}>Add to Cart</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}