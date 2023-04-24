import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full h-[392px] bg-black flex flex-col items-center "
    >
      <div className="w-[160px] h-[80px] mt-[58px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="flex gap-5 mt-[30px]">
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] bg-gray-400"></div>
          <h1 className="text-base text-white mt-[10px]">AI技术交流群</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] bg-gray-400"></div>
          <h1 className="text-base text-white mt-[10px]">合作咨询</h1>
        </div>
      </div>
      <p className="text-xs text-white mt-[53px]">
        2022-2023 第拾智慧 武ICP备2022000391号
      </p>
    </div>
  );
};

export default Footer;
