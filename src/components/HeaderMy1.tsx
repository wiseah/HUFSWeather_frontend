import titlelogo from "../../src/static/images/titlelogo.png";
import the from "../../src/static/images/the.png";

const HeaderMy1 = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-cyan-200 font-GangwonBold">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div>
          <img className="w-20 h-20" src={titlelogo} alt="title" />
        </div>
        <div>
          <div className="flex flex-row ml-5 mt-3 text-5xl">
            <div className="mt-2 text-rose-600">오</div>
            <img className="w-6 h-15 mt-[2px] " src={the} alt="온도계" />
            <div className="mt-2 text-black">상청</div>
          </div>
          <p className="ml-5 text-xs font-GmarketLight">
            HANKUK UNIVERSITY OF FOREIGN STUDIES THE METAOBOLOGICAL AGENCY
          </p>
        </div>
        <nav className="md:ml-auto flex flex-nowrap items-center text-base justify-center text-blue-900">
          <div className="mr-10 hover:text-blue-300 font-GangwonBold">
            현재기온
          </div>
          <div className="mr-10 hover:text-blue-300 font-GangwonBold">
            체감온도
          </div>
          <div className="mr-10 hover:text-blue-300 font-GangwonBold">
            추천코디
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMy1;
