import React from "react";

const Case = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px]  lg:px-[120px] px-[60px]">
      <h1 className="text-4xl font-bold lg:mb-[100px] mb-[60px]">优秀案例</h1>
      <div className="grid lg:grid-cols-4 mb-[100px] gap-10 items-center grid-cols-1 ">
        <div className="col-span-1 w-[151px]">
          <img src="/images/case1.png" alt="" />
        </div>
        <div className="col-span-1 w-[151px] ">
          <a href="https://chatfo.ai/" target="_blank">
            <img src="/images/case2.png" alt="" />
          </a>
        </div>
        <div className="col-span-1 w-[151px] ">
          <a href="https://minimetafarm.com/" target="_blank">
            {" "}
            <img src="/images/case3.png" alt="" />
          </a>
        </div>
        <div className="col-span-1 w-[151px]">
          <img src="/images/case4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Case;
