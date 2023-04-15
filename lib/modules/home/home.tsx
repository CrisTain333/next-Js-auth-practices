import Layout from "@/lib/Layout/Layout";
import React from "react";

const Home = () => {
  console.log(process.env.MONGO_URI);

  return (
    <div>
      <Layout>
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full mt-6 md:px-0">
            <div className="flex flex-col items-center max-w-2xl md:px-8">
              <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  Welcome Cristain
                </h2>
              </div>
            </div>
            <img
              src="https://kitwind.io/assets/kometa/half-browser.png"
              className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
              alt=""
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
