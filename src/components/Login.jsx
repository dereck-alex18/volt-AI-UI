import { FaRegEnvelope } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="p-10 bg-primaryColor rounded md:3/4 lg:w-1/4">
          <p className="text-white text-center text-6xl mb-10">
            <span className="text-emerald-400">Volt</span>AI
          </p>
          <form
            action=""
            className="flex items-center justify-center flex-col gap-6"
          >
            <div className="flex flex-col gap-3 w-full">
              <label className="text-white text-2xl" htmlFor="username">
                Username
              </label>
              <input
                className="px-3 py-2 text-gray-700 outline-none bg-gray-200 rounded"
                type="text"
                name=""
                id="username"
                placeholder="Username"
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <label className="text-white text-2xl" htmlFor="password">
                Password
              </label>
              <input
                className="px-3 py-2 text-gray-700 outline-none bg-gray-200 rounded"
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
              <a
                href="#"
                className="font-medium text-base text-gray-200 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button className="bg-emerald-400 p-3 w-full hover:bg-emerald-600 transition-colors text-white text-xl rounded">
              Login
            </button>
            <p className="text-white text-base">
              Don't have an account yet?{" "}
              <a href="" className="text-emerald-400 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
