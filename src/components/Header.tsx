import React from "react";
import titlelogo from "../../src/static/images/titlelogo.png";
import thermometer from "../../src/static/images/thermometer.png";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-cyan-200 text-gray-500 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={titlelogo}
            alt="title"
          />

          <div className="flex flex-row ml-2 text-2xl text-bold text-rose-600">
            오
            <img className="w-8 h-8" src={thermometer} alt="온도계" />
          </div>

          <div className="text-2xl text-black">상청</div>
        </div>
        <nav className="md:ml-auto flex flex-nowrap items-center text-base justify-center">
          <div className="mr-5 hover:text-gray-700 font-GangwonBold">현재기온</div>
          <div className="mr-5 hover:text-gray-700 font-GangwonBold">체감온도</div>
          <div className="mr-5 hover:text-gray-700 font-GangwonBold">추천코디</div>
        </nav>
      </div>
      <div>
        <p className="ml-20 font-GmarketMedium">
          HANKUK UNIVERSITY OF FOREIGN STUDIES THE METAOBOLOGICAL AGENCY
        </p>
      </div>
    </header>
  );
};

export default Header;
