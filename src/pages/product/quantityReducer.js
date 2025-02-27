export const initialsState = {  
    quantity: 0,  
  };  
  
  export const quantityReducer = (state, action) => {  
    switch (action.type) {  
      case "INCREASE": {  
        return { ...state, quantity: state.quantity + 1 };  
      }  
      case "DECREASE": {  
        return { ...state, quantity: Math.max(0, state.quantity - 1) };  
      }  
      default:  
        return state;  
    }  
  };  