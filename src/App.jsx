import { Route, Routes } from "react-router-dom";
import Navigation from "./components/nabvar/navbar";
import Cart from "./pages/cart/cart";
import SignUp from "./pages/signUp/signUp";
import LogIn from "./pages/logIn/logIn";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Cart />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LogIn/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
