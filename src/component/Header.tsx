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
        <div className="mt-[10px] lg:px-[120px] px-[60px] flex justify-between items-center ">
          <div className="w-[160px] h-[80px]">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className=" text-white text-base">合作咨询</div>
        </div>
        <div className="flex justify-center items-center my-[270px]">
          <div className="text-4xl text-white font-bold mr-1">提供全场景</div>
          <div className="w-[175px] h-[70px] -mt-4">
            <img src="/images/AI.png" alt="logo" />
          </div>
          <div className="text-4xl text-white font-bold ml-l">开发解决方案</div>
        </div>
      </div>
    </>
  );
};
export default Header;
