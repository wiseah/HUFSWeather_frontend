import React from "react";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-white text-gray-500 font-nanumLight">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-5 text-2xl text-sky-500">외상청</span>
        </div>
        <nav className="md:ml-auto flex flex-nowrap items-center text-base justify-center">
          <div className="mr-5 hover:text-gray-700">현재기온</div>
          <div className="mr-5 hover:text-gray-700">체감온도</div>
          <div className="mr-5 hover:text-gray-700">추천코디</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
