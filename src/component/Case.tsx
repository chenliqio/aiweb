import React from "react";

const Case = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[100px] lg:px-[120px] px-[60px]">
      <h1 className="text-4xl font-bold mb-[90px] ">优秀案例</h1>
      <div className="grid lg:grid-cols-4 mb-[110px] gap-10 items-center grid-cols-1 ">
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
      </div>
    </div>
  );
};

export default Case;
