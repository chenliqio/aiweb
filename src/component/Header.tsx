import React from "react";
const Header = () => {
  return (
    <>
      <div
        className="bg-center bg-no-repeat w-full bg-cover h-[758px]"
        style={{
          backgroundImage: "url(/images/banner.png)",
        }}
      >
        <div className=" lg:px-[120px] px-[60px] flex justify-between items-center ">
          <div className="w-[160px] h-[80px]">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className=" text-white text-xl">合作咨询</div>
        </div>
        <div className="flex justify-center items-center my-[270px]">
          <div className="lg:text-4xl text-3xl text-white font-bold mr-1">
            提供全场景
          </div>
          <div className="lg:w-[150px] lg:h-[70px] w-[120px] h-[70px] lg:-mt-1 mt-4">
            <img src="/images/AI.png" alt="logo" />
          </div>
          <div className="lg:text-4xl text-3xl text-white font-bold ml-l">
            开发解决方案
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
