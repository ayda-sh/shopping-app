import Products from "../product/products";

const Cart = () => {
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