import React from "react";

const Login = () => {
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <svg
        className="absolute inset-0 left-[77%] z-10 w-[23%] h-auto"
        viewBox="0 0 400 618"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M819 41C819 -106.484 210.881 -60.8184 66.5343 -60.8184C-77.8128 -60.8184 454.414 553.099 66.5343 617.503C230.584 562.366 -199.488 188.503 125 258.003C449.488 327.503 84.8411 96.0245 819 41Z"
          fill="url(#paint0_linear_0_25)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_25"
            x1="36.6371"
            y1="493.94"
            x2="36.6371"
            y2="-153.48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.411458" stopColor="#02B94B" stopOpacity="0.84" />
            <stop offset="1" stopColor="#046AB4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="absolute inset-0 top-[23%] z-10 w-[50%] h-auto"
        viewBox="0 0 780 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M709 582C709 741.155 128.904 623.5 -11 623.5C-150.904 623.5 -239.44 516.655 -239.44 357.5C-80.4399 417 -311.44 82.0001 3.06012 7.00012C317.56 -67.9999 -2.56012 522.621 709 582Z"
          fill="url(#paint0_linear_0_24)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_24"
            x1="234.78"
            y1="0.429901"
            x2="234.78"
            y2="699.083"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.411458" stopColor="#02B94B" stopOpacity="0.84" />
            <stop offset="1" stopColor="#046AB4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div className="flex flex-col min-w-[300px] w-[450px] gap-6 text-center shadow-[0_4px_10px_rgba(0,0,0,0.4)] p-8 z-10 rounded-[-20px] lg:bg-transparent">
          <h1 className="text-[#02B94BD6] text-7xl uppercase font-semibold self-start">
            Login
          </h1>
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-3 border-[1px] border-[#0000004F] text-xl rounded-lg text-black placeholder-[#101A1CD6]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-3 border-[1px] border-[#0000004F] text-xl rounded-lg text-black placeholder-[#101A1CD6]"
          />
          <button className=" text-2xl w-[233.27px] h-[62.59px] bg-[#02B94BD6] rounded-lg uppercase text-[#FFFFFFE5] font-semibold flex-grow w-1/2 duration-300 hover:bg-[#02B94B] mt-3">
            Login
          </button>
        </div>

        <div className="flex items-center">
          <hr className="flex-grow border-[1px] border-black/25"></hr>
          <span className="uppercase px-2 font-semibold text-2xl">or</span>
          <hr className="flex-grow border-[1px] border-black/25"></hr>
        </div>
        <div className="flex justify-around w-1/2 mx-auto my-4">
          <a href="#" className="">
            <img src="/image 1.png" alt="google link" />
          </a>
          <a href="#" className="">
            <img src="/image 2.png" alt="facebook link" />
          </a>
        </div>

        <div className="flex font-semibold justify-between text-xl gap-2 text-[#02B94BBF]">
          <a href="#" className="hover:text-[red] duration-300">
            <p>Forgot Password</p>
          </a>
          <a href="#" className="hover:text-[red] duration-300">
            <p>Register</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
