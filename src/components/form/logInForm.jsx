import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { client } from "../../../lib/loginClient";
import { toast } from "react-toastify";

const LogInForm = () => {
  const schema = yup.object({
    identifier: yup.string().email().required(),
    password: yup.string().required().min(8).max(16).uppercase(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitForm = async (user) => {
    console.log(user);

    try {
      const response = await client.post("/auth/local", user);
      const {status}= response
      localStorage.setItem("token", response.data.jwt);
      toast.success("User successfully logged in.", {
        type: "success",
      });
    } catch (error) {
      toast.error(error.message, {
        type: "error",
      });
    }
  };

  return (
    <div className="container mx-auto flex justify-center mb-11">
      <div className="w-[600px] border border-[#1E293B0A] rounded-2xl justify-center flex flex-col px-14">
        <div className="flex items-end justify-center">
          <h1 className="text-black text-5xl font-semibold">Log in</h1>
          <img className="w-[150px]" src="src/assets/Group 2015.png" alt="" />
        </div>
        <div className="mt-4 justify-center flex">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="justify-center flex flex-col"
          >
            <label className="mt-5">Email</label>
            <input
              {...register("identifier")}
              type="email"
              className="grow input input-bordered flex gap-2 bg-[#FFF6F4] w-[400px]"
              placeholder="Email"
            />
            {errors?.identifier ? (
              <span className="text-error">{errors.identifier.message}</span>
            ) : null}

            <label className="mt-5">Password</label>
            <input
              {...register("password")}
              type="password"
              className="grow input input-bordered flex gap-2 bg-[#FFF6F4] w-[400px]"
            />
            {errors?.password ? (
              <span className="text-error">{errors.password.message}</span>
            ) : null}

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
              <NavLink to="signup">Sign up</NavLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
