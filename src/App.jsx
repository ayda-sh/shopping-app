import { Route, Routes } from "react-router-dom";
import Products from "./pages/product/products";
import Navigation from "./components/nabvar/navbar";
import Cart from "./pages/cart/cart";

function App() {
  return (
    // <div>
    //  <Navigation/>
    // </div>
    <div>
      <Navigation />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
