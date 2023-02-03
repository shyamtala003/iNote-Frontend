import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsUserLoggedIn }) => {
  let host = "https://inote-backend-whkx.onrender.com";
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  //   function:0 for login
  let loginUser = async (credentials, setIsUserLoggedIn) => {
    let response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    let json = await response.json();

    if (json.err) {
      alert(json.err);
    }

    if (json.authToken) {
      localStorage.setItem("token", json.authToken);
      setIsUserLoggedIn(true);
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // onform submit handler
  const onFormSubmit = async (e) => {
    e.preventDefault();
    loginUser(credentials, setIsUserLoggedIn);
  };
  return (
    <>
      <form
        className="mt-28 mx-[5%] md:mt-24 md:mx-[20%] "
        onSubmit={onFormSubmit}
      >
        <h1 className="text-3xl text-white text-center font-semibold mb-4">
          Login
        </h1>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••••••"
            onChange={onChange}
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
