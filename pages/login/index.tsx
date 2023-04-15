import Link from "next/link";
import React, { useState } from "react";

const Index = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex items-center lg:h-screen lg:w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Sing In
          </span>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full">
            {isLoading ? (
              <>
                <div className="flex items-center justify-center">
                  <div
                    className="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                </div>
              </>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-red-600">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
