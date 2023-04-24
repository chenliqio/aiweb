import React from "react";

const Part2 = () => {
  const data = [
    {
      title: "智能AI语言模型训练",
      desc: "定制专属的大语言模型，探索人工智能的未来",
      img: "/images/img1.png",
    },
    {
      title: "AI绘画平台定制",
      desc: "自带素材训练模型，为您开启AI创作的世界！",
      img: "/images/img2.png",
    },
  ];
  const data2 = [
    {
      tag: "Chat FO正式版发布：求佛求心，应作如是观",
      time: "2023.04.04",
    },
    {
      tag: "MINIMETA STUDIO上线！专属你的mini酱女孩...",
      time: "2023.03.31",
    },
    {
      tag: "MINIMETA STUDIO上线！专属你的mini酱女孩",
      time: "2023.03.31",
    },
  ];

  return (
    <div className="w-full my-[100px] flex justify-center lg:px-[120px] px-[60px]">
      <div className="flex flex-col lg:flex-row flex-wrap gap-5  w-full max-w-[1200px]">
        <div className="flex flex-col flex-1 justify-between">
          {data.map((el, i) => {
            return (
              <div
                className={`h-[170px] w-full bg-[#F5F8FF] pl-5 pt-9 relative ${
                  i % 2 === 0 ? "mb-5" : ""
                }`}
                key={i}
              >
                <div className="absolute top-0 right-0">
                  <img src={el.img} alt="bg" />
                </div>
                <div className="flex flex-col absolute">
                  <h1 className="mb-4 text-xl">{el.title}</h1>
                  <p className="mb-4 text-sm">{el.desc}</p>
                </div>
                <p className="text-sm absolute bottom-7">
                  <a href="#footer">立即咨询&gt;&gt;</a>
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex-1 lg:w-[580px] py-4  bg-[#F5F8FF]">
          {data2.map((el, i) => {
            return (
              <div className="felx flex-col  pt-9 px-[50px]" key={i}>
                <h1 className="text-lg font-bold mb-4">{el.tag}</h1>
                <p className=" text-base text-[#808080] font-normal">
                  {el.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Part2;
