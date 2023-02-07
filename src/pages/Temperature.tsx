import React from "react";
import Footer from "../components/Footer";
import HeaderMy1 from "../components/HeaderMy1";


const Temperature = () => {
  return (
    <div>
      <HeaderMy1 />
      <div>
      <section className="flex flex-row">
      <div className="md:w-[50rem]">
            <h2 className="mt-6 md:ml-20 text-sm md:text-base font-GangwonBold">
              WHAT?
            </h2>
            
              <div className="bg-red-400 w-24 shadow p-5 m-4 rounded-lg text-center">
              <h1 className="text-black-500">Works</h1>

              </div>
            
            <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base font-GmarketLight">
              <span className="text-rose-600 font-GmarketMedium">외상청</span>은 "한국
              <span className="text-rose-600 font-GmarketMedium">외</span>국어대학교 기
              <span className="text-rose-600 font-GmarketMedium">상청</span>"의 준말로, 서울
              캠퍼스와
              <br></br>
              글로벌 캠퍼스의 날씨 정보를 간단하고 명료하게 전달해드립니다.
              <br></br>
              현재기온과 더불어 체감온도, 그리고 오늘의 추천코디를 통해
              <br></br>
              유용한 정보를 제공하고자 합니다.
            </p>
      </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};
export default Temperature;
