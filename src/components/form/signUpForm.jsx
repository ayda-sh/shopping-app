import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="container mx-auto flex justify-center mb-11">
      <div className="w-[600px] border border-[#1E293B0A] rounded-2xl justify-center flex flex-col px-14">
        <div className="flex items-end justify-center">
          <h1 className="text-black text-5xl font-semibold">Sign in</h1>
          <img className="w-[150px]" src="src/assets/Group 2015.png" alt="" />
        </div>
        <div className="mt-4 justify-center flex">
          <form action="" className="justify-center flex flex-col">
            <label className="">User Name</label>
            <input
              name="User Name"
              type="text"
              className="grow input input-bordered flex bg-[#FFF6F4] w-[400px]"
              placeholder="User Name"
            />

            <label className="mt-5">Email</label>
            <input
              type="text"
              className="grow input input-bordered flex gap-2 bg-[#FFF6F4] w-[400px]"
              placeholder="Email"
            />

            <label className="mt-5">Password</label>
            <input
              type="password"
              className="grow input input-bordered flex gap-2 bg-[#FFF6F4] w-[400px]"
            />

            <button
              className="bg-[#F47458] rounded-full px-7 py-2 mt-7 text-white w-[150px]"
              type="submit"
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-[#cccccc]">
            Already have an account?
            <span className="text-[#ef7554]">
              <NavLink to="login">Login</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
