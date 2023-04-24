import React from "react";

const Case = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:pt-[70px] pt-[60px] lg:px-[120px] px-[60px]">
      <h1 className="text-4xl font-bold mb-[60px] ">优秀案例</h1>
      <div className="grid lg:grid-cols-4 mb-[100px] gap-10 items-center grid-cols-1 ">
        <div className="col-span-1">
          <img src="/images/case1.png" alt="" />
        </div>
        <div className="col-span-1">
          <a href="https://chatfo.ai/" target="_blank">
            <img src="/images/case2.png" alt="" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="https://minimetafarm.com/" target="_blank">
            {" "}
            <img src="/images/case3.png" alt="" />
          </a>
        </div>
        <div className="col-span-1">
          <img src="/images/case4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Case;
