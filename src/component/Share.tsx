import React from "react";

const Share = () => {
  const data = [
    {
      img: "/images/bg1.png",
      title: "企业解决方案",
      desc: "为企业提供技术、营销、企业运作等全方位支持，助力业务快速增长，共享AI未来",
    },
    {
      img: "/images/bg2.png",
      title: "AI技术交流",
      desc: "聚集了来自世界各地的AI从业者和爱好者，在这里可以进行知识交流和资源分享",
    },
    {
      img: "/images/bg3.png",
      title: "AI公开课",
      desc: "丰富的体系化课程，经验丰富的业界大佬授课，助力开发者从小白到大牛",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold lg:pt-[60px] pt-[40px] lg:mb-[60px] mb-10">
          行业共进：同行交流、共享成长
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 ">
          {data.map((el, i) => {
            return (
              <div className="bg-[#F2F2F2] w-[340px]  rounded p-[10px]" key={i}>
                <div className="mb-[30px]" key={i}>
                  <img src={el.img} alt="" />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xl font-bold mb-2">{el.title}</h1>
                  <p className="text-base mb-2 leading-8">{el.desc}</p>
                  <p className="text-base mb-8">
                    {" "}
                    <a href="#footer">立即咨询&gt;&gt;</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Share;
