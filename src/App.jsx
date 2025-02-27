import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nabvar/navbar";
import Cart from "./pages/cart/cart";

function App() {
  return (
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
