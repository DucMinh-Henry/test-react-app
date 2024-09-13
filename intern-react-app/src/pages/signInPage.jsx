import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full text-base p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full text-base p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-400">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
