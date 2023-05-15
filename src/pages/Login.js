import Kaci from "../assets/images/kacilight.png";
import Logo from "../assets/images/Logo.svg";
import ProfileIcon from "../assets/images/icons8-male-user-24.png";
import LockIcon from "../assets/images/icons8-lock-50.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signIn } from "../store/slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && !user) {
      dispatch(signIn({ email, password }));
    }

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center md:justify-around items-center bg-[url('/src/assets/images/lglight.png')] dark:bg-[url('/src/assets/images/lgdark.png')] bg-no-repeat bg-cover bg-center bg-origin-border">
      <div className="flex items-end">
        <img className="w-24 md:w-40 lg:w-48" src={Logo} alt="Kaci" />
        <div>
          <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl opacity-90">
            Kaci
          </h1>
          <h1 className="text-xs md:text-lg lg:text-xl font-semibold pl-2 opacity-90">
            Administrator
          </h1>
        </div>
      </div>
      <section className="poppins min-w-[28%]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-4 sm:p-6">
              <div className="">
                <img className="mx-auto my-2 w-24" src={Kaci} alt="Kaci" />
                <h1 className="text-center text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                  Welcome Back &#128075;
                </h1>
                <h2 className="text-center text-sm font-medium text-gray-300">
                  Login your account to continue
                </h2>
              </div>
              <form
                className="space-y-3 md:space-y-3"
                action="#"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label htmlFor="email" className="text-xs sr-only">
                    Email
                  </label>
                  <div className="flex items-center relative">
                    <img
                      className="w-5 opacity-50 ml-3 absolute pointer-events-none"
                      src={ProfileIcon}
                      alt="Profile Icon"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="text-xs block w-full pl-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-[#e53e45] focus:border-[#e53e45] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email"
                      required=""
                      tabIndex={0}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <div className="flex items-center relative">
                    <img
                      className="h-5 opacity-70 ml-3 absolute pointer-events-none"
                      src={LockIcon}
                      alt="Profile Icon"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="text-xs block w-full pl-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-[#e53e45] focus:border-[#e53e45] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-3.5 h-3.5 border-2 border-gray-50 rounded-lg bg-gray-50 focus:ring-3 focus:ring-[#e53e45] dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#e53e45] dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-2.5 text-xs">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-400 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* <a
                    href="."
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#e53e45] hover:bg-[#e53e49] focus:ring-2 focus:outline-none focus:ring-red-200 font-medium rounded-xl text-sm px-5 py-3 text-center dark:bg-[#e53e45] dark:hover:bg-[#e53e45] dark:focus:ring-[#e53e45]"
                >
                  Log in
                </button>
                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="."
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
