import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../Redux/authslice";
import { useSelector } from "react-redux";

export default function VerifyComponent() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, seterror] = useState("");

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  console.log(email);

  const verificationCode = useSelector((state) => state.user.token);
  console.log(verificationCode);

  function onSubmit(formData) {
    formData.email = email;
    console.log(formData);

    const url = `${import.meta.env.VITE_LOCAL_LINK}/verify`;
    try {
      axios
        .post(url, formData)
        .then((response) => {
          console.log(response);
          //dispatch(signin(response.data.token));

          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          seterror(error.response.data.msg);
        });
    } catch (error) {
      console.log(error.message);
      return error;
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="flex items-center justify-center ">
          <h1 class="font-['Playfair_Display'] text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Film<span class="text-gray-800">Booker</span>
          </h1>
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verify your account
        </h2>
      </div>

      <span className="text-red-500 text-center">{error}</span>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="verification code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Verification Code
            </label>
            <div className="mt-2">
              <input
                id="verification code"
                name="verification code"
                type="number"
                autoComplete="verification code"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("code", {
                  required: "verification code is required",
                })}
              />
              {errors.verificationcode && (
                <p className="text-red-500 text-sm">
                  {errors.verificationcode.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Verify
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have a Password?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Contact Admin Team
          </a>
        </p>
      </div>
    </div>
  );
}
