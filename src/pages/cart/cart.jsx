import { useEffect, useReducer, useState } from "react";
import Products from "../product/products";
import { initialsState, reducer } from "./reducer";
import { actionType } from "../../../actions";
import { client } from "../../../lib/axios";
import { EmptyProduct } from "../../components/empty/emptyProduct";

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialsState);
  const { items, isError, isLoading } = state;
  const [isCartEmpty, setIsCartEmpty] = useState(false); 

  const getProductsFromApi = async () => {
    try {
      dispatch({ type: actionType.SET_LOADING, payload: true });
      const response = await client.get("/products");
      const products = response.data.data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }));
      dispatch({ type: actionType.SET_ITEM, payload: products });
      dispatch({ type: actionType.SET_ORIGINAL_ITEM, payload: products });
    } catch (error) {
      console.log(error);
      dispatch({ type: actionType.SET_ERROR, payload: true });
    } finally {
      dispatch({ type: actionType.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  if (isLoading) {
    return <p className="flex justify-center text-2xl">Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  const clearCart = () => {
    dispatch({ type: actionType.CLEAR_CART });
    setIsCartEmpty(true);
  };

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="flex gap-3 flex-col">
        <h1 className="text-[#1E293B] font-bold text-xl">Products</h1>
        {items.map((item) => {
          return <Products key={item.id} {...item} />;
        })}

        {!isCartEmpty && (
          <>
            <hr />
            <div>
              <div>
                <h4>Total</h4>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </>
        )}

        <div className="my-8 flex justify-center">
          {items.length > 0 ? (
            <button onClick={clearCart}>Clear Cart</button>
          ) : (
            <EmptyProduct />
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
