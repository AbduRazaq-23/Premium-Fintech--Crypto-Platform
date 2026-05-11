import Coin3D from "../components/Coin3D";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div
        className="hidden lg:flex items-center justify-center hero-bg
    relative"
      >
        <Coin3D />
      </div>
      <div className="flex items-center justify-center bg-black px-10">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-black">Welcome Back</h1>
          <p className="text-gray-400 mt-4">
            Access your secure investment dashboard.
          </p>
          <div className="space-y-5 mt-10">
            <input
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 p-5
    rounded-2xl"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-full bg-white/5 border border-white/10 p-5
    rounded-2xl"
            />
            <button className="w-full gold-btn py-5 rounded-2xl font-bold">
              Login
            </button>
          </div>
          <p className="text-gray-400 mt-6 text-center">
            No account?
            <Link to="/signup" className="text-yellow-400 ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
