import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function AddTheaterComponent() {
  const [editing, setediting] = useState(false);

  const [error, seterror] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [defaultvalues, setdefaultvalues] = useState({
    theater_location: 1471001,
    theater_name: "Delhi",
  });

  function onSubmit(formData) {
    console.log(formData);
    //setIsLoading(true); // Start the loader

    const url = `${import.meta.env.VITE_LOCAL_LINK}/signup`;
    try {
      axios
        .post(url, formData)
        .then((response) => {
          console.log(response.data.user);
          dispatch(signin(response.data.user));
          navigate("/verify");
        })
        .catch((error) => {
          console.log(error);
          seterror(error.message);
        })
        .finally(() => {
          //setIsLoading(false); // Stop the loader
        });
    } catch (error) {
      console.log(error.message);
      //setIsLoading(false); // Stop the loader
      return error;
    }
  }
  return (
    <div className="bg-white  rounded-lg mt-10">
      <div className="p-5">
        <div className="pt-5 font-medium ">
          <h1>Add Your Theater Information :</h1>

          {editing ? (
            <div className="pt-5 w-2/4">
              <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="city"
                      required
                      defaultValue={defaultvalues.city_name}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("city_name", {
                        required: "city is required",
                      })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Zip Code
                  </label>
                  <div className="mt-2">
                    <input
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      autoComplete="zipcode"
                      required
                      defaultValue={defaultvalues.zip_code}
                      className="block w-full rounded-md border-0 p-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("zip_code", {
                        required: "zipcode is required",
                      })}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">
                        {errors.zipcode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    {isLoading ? "Saving..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="pt-5">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h1>Your City : </h1>
                  <h1>{defaultvalues.city_name}</h1>
                </div>

                <div className="flex flex-row">
                  <h1>Zip Code : </h1>
                  <h1>{defaultvalues.zip_code}</h1>
                </div>
              </div>

              <div className="pt-5">
                <button
                  type="submit"
                  className="flex w-20 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
                  {isLoading ? "Editing..." : "Edit"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
