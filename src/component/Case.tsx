import React from "react";

const Case = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px] px-[120px]">
      <h1 className="text-4xl font-bold mb-[90px] ">优秀案例</h1>
      <div className="grid grid-cols-5 mb-[110px] gap-5 items-center">
        <div className="col-span-1">
          <img src="/images/case1.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/case2.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/case3.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/case4.png" alt="" />
        </div>
        <div className="col-span-1">
          <img src="/images/case5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Case;
