export const addToCart = (edible, quantity, varient) => (dispatch, getState) => 
{
    var cartItem = {
      name: edible.name,
      _id: edible._id,
      image: edible.image,
      varient: varient,
      quantity: quantity,
      prices: edible.prices,
      price: edible.prices[0][varient] * quantity,
    };
  
    // if (cartItem.quantity > 10) {
    //   alert('You cannot add more than 10 quantity ');
    // } else {
    //   if (cartItem.quantity < 1) {
        // dispatch({ type: 'DELETE_FROM_CART', payload: edible });
      // } else {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    //   }
      
    // }
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  export const deleteFromCart = (edible) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: edible });
  
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};