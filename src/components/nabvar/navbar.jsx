import { NavLink } from "react-router-dom";


const Navigation = () => {
 
  return (
    <nav className="m-8 rounded-2xl border border-[#1E293B0A]">
      <div class="container p-4 flex items-center justify-between shadow-2xs">
        <div class="flex items-center">
          <span class="bg-gradient-to-r from-[#F97316] to-[#22C55E] text-transparent bg-clip-text font-bold text-2xl">
            <NavLink to="/">Shopedia</NavLink>
          </span>
        </div>
        <div class="flex items-center space-x-6">
          <a href="#" class="text-[#1E293B] hover:text-[#F06908] font-bold">
            <NavLink to="/cart">Products</NavLink>
          </a>
          <a href="#" class="text-[#1E293B] hover:text-[#F06908] font-bold">
            <NavLink to="/signup">Sign up</NavLink>
          </a>
          <div class="relative ml-10">
            <img src="src/assets/shopping-cart.svg" alt="" />
            <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full">
            0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
