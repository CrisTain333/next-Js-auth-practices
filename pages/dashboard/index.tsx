import Navbar from "@/lib/Components/Navbar/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const { data } = useSession();
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex flex-col items-center justify-center">
        <span className="text-4xl font-bold">
          {" "}
          Name : {data?.user?.name}
        </span>
        {/* <Image
        src={data?.user?.image!}
        alt="user_profile"
        height={200}
        width={200}
        className="rounded-full"
      /> */}
      </div>
    </>
  );
};

export default Dashboard;
