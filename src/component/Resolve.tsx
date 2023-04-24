import React, { useState } from "react";

export const Resolve = () => {
  const data = [
    {
      img: "/images/house.png",
      title: "AI+房产",
      desc: [
        "智能化房源推荐：通过AI技术，对用户的带看记录、交流记录、搜索记录、房屋信息等方面进行分析，为用户提供更加贴合需求的房源推荐，提升用户的满意度和交易量",
        "智能化定价预测：通过AI技术对房地产市场的数据、历史走势、政策变化等方面进行分析，可以提供精准的房地产定价预测，帮助房地产企业制定更加科学、合理的战略和决策。",
        "智能化客户服务：通过AI技术实现自动化客服、智能机器人等多种形式的客户服务，为用户提供快捷、高效、个性化的服务体验，提升用户的满意度和信任度。",
        "智能化营销策略：通过AI技术对用户的行为和兴趣进行分析获得精准的用户画像，可以制定更加精准、有效的营销策略，促进房地产市场的增长和发展。",
      ],
    },
    {
      img: "/images/fo.png",
      title: "AI+寺庙",
      desc: [
        "智能化管理：通过人工智能技术，寺庙可以对进出寺庙的人员进行高效的识别和管理，减少人力资源成本。同时，AI技术还可以实现对寺庙的环境、设施等方面的监控，及时发现并解决问题，提升寺庙的整体管理水平。",
        "数字化宣传：通过AI技术，可以将寺庙的文化特色、历史背景等信息进行数字化整理和宣传，为游客提供丰富而有价值的参考。同时也可以为游客提供更真实的体验，增强对寺庙的感知度和吸引力。",
        "智能化服务：通过AI技术可以同时为20w人提供高质量服务，我们通过电子木鱼、赛博求签、AI菩萨解惑等方式实现专人专佛，一对一服务，大幅提高服务效率与内容体验，以结合寺庙品牌优势进一步推动业务增长。",
      ],
    },
    {
      img: "/images/web3.png",
      title: "AI+Web3",
      desc: [
        "AIGC生成NFT：通过AI技术生成图片等内容并将其制作成NFT保存，为您的创意保驾护航，让创意更有价值",
      ],
    },
  ];
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <div
        className=" h-[720px]   bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${data[isActive].img})`,
        }}
      >
        <div className="bg-black/30 h-full"></div>
        <div className="px-[120px] lg:py-[100px] md:py-5 py-5  absolute left-0 top-0 w-full h-full flex flex-col">
          <div className="text-center text-4xl text-white">
            全栈AI能力，提供一站式行业解决方案
          </div>
          <div className="mt-5 lg:mt-[90px] flex-1 flex flex-col lg:flex-row gap-5">
            <div className="min-w-[200px] lg:h-[200px] gap-4 lg:gap-0 lg:flex-col mb-2 bg-black/20 p-[10px] flex flex-row justify-center rounded-xl">
              {["AI+房产", "AI+寺庙", "AI+Web3"].map((item, index) => (
                <div
                  onClick={() => setIsActive(index)}
                  className={`text-center text-2xl text-white cursor-pointer rounded-md py-[14px] 
                  ${index === isActive ? "bg-[#487BF1]" : ""}`}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="min-h-[380px] flex-1 bg-black/50 lg:pt-10 pt-4 px-[30px] rounded-xl">
              <div className="text-white text-2xl font-medium">
                {data[isActive].title}
              </div>
              <div className="text-white mt-4">
                {data[isActive].desc.map((item) => (
                  <div className="lg:mb-5 mb-2 lg:leading-6">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
