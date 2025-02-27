const LogInForm = () => {
  return (
    <div className="container mx-auto flex justify-center mb-11">
      <div className="w-[600px] border border-[#1E293B0A] rounded-2xl justify-center flex flex-col px-14">
        <div className="flex items-end justify-center">
          <h1 className="text-black text-5xl font-semibold">Log in</h1>
          <img className="w-[150px]" src="src/assets/Group 2015.png" alt="" />
        </div>
        <div className="mt-4 justify-center flex">
          <form className="justify-center flex flex-col">
            <label className="mt-5">Email</label>
            <input
              type="email"
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
            I don’t have an account ?
            <span className="text-[#ef7554]">
              <NavLink to="/signup">Sign up</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
