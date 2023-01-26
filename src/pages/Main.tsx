import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      //여기에 로고 이미지 넣을 것.
      <div>
        <section>
          <div className="md:w-[32rem]">
            <h2 className=" md:ml-20 text-sm md:text-base">WHAT?</h2>
            <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
              외상청은 "한국외국어대학교 기상청"의 준말로, 서울 캠퍼스와
              <br></br>
              글로벌 캠퍼스의 날씨 정보를 간단하고 명료하게 전달해드립니다.
              <br></br>
              현재기온과 더불어 체감온도, 그리고 오늘의 추천코디를 통해
              <br></br>
              유용한 정보를 제공하고자 합니다.
            </p>

            <h2 className=" md:ml-20 text-sm md:text-base">WHY?</h2>
            <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
              에브리타임에서 캠퍼스의 날씨를 물어보는 글을 자주 보았습니다.
              <br></br>
              지역을 기준으로 날씨 정보를 알려주는 기상청이나 날씨 앱들은
              <br></br>
              실질적인 대학교 캠퍼스 안의 정확한 기온을 알기에는 한계가
              있습니다.
              <br></br>
              또한, 통학생들은 캠퍼스의 날씨를 알기 위해서는 검색을 거쳐야 하는
              번거로움이 있고,
              <br></br>
              실제 온도보다 더 낮거나 높은 경우에는 '겉옷 챙겨올걸',
              <br></br>
              '조금 더 얇게 입고올걸' 하는 후회를 하곤 합니다.
              <br></br>
              이에 저희 외상청은 "현재기온"을 통해 학우분들이 날씨 정보를 쉽게
              얻을 수 있고,
              <br></br>
              "체감온도"를 통해 갑작스런 더위나 추위에 대비할 수 있으며,
              <br></br>
              추천코디로 아침 준비시간을 절약할 수 있는 수단을 만들어보고자
              기획하게 되었습니다.
            </p>

            <h2 className=" md:ml-20 text-sm md:text-base">WHO?</h2>
            <p className="mt-1 mb-6 md:ml-20 text-sm md:text-base">
              프론트엔드: 환경학과 김현아 & 컴퓨터공학부 이교은
              <br></br>
              백엔드: 컴퓨터공학부 노기연 & 전자공학과 전승재
              <br></br>
              기획: 환경학과 김현아 / 디자인: GBT학부 정준서
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Main;