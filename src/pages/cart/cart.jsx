import { useEffect, useReducer } from "react";
import Products from "../product/products";
import { initialsState, reducer } from "./reducer";

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialsState)
    const {items, isError, isLoading} = state
  

    const getProductsFromApi = async () => {
        try {
        
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProductsFromApi();
      }, []);

    return (
        <div className="container mx-auto px-4 flex justify-center">
            <div className="flex gap-3 flex-col">
            <h1 className="text-[#1E293B] font-bold text-xl">Products</h1>
            <Products/>
           
            </div>
        </div>
    )
}

export default Cart;