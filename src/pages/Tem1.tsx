import React from "react";
import Footer from "../components/Footer";
import HeaderMy1 from "../components/HeaderMy1";


const Tem1 = () => {
  return (
    <div>
      <HeaderMy1 />
      <div>
      <section className="mt-3 mb-3 md:ml-28 mr-28 text-sm md:text-base">

        <div className="grid grid-cols-4 gap-0.5 rounded-lg text-center font-GmarketLight">
            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    01 <br></br>
                    습도
                </p>
            </div>

            <div className="bg-blue-300 text-white h-full rounded-md col-span-2 row-span-2">
                <p>
                    02 <br></br>
                    기온
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    03 <br></br>
                    최저/최고
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    04 <br></br>
                    바람
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    05 <br></br>
                    시정-대기혼탁 or 기압
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    06 <br></br>
                    일출/일몰
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md col-span-2">
                <p>
                    07 <br></br>
                    미세먼지
                </p>
            </div>

            <div className="bg-blue-300 text-white h-44 rounded-md">
                <p>
                    08 <br></br>
                    구름
                </p>
            </div>
        </div>




{/*
        <h2 className="text-4xl font-bold text-center py-8">
            Flexbox
        </h2>


        <div className="flex flex-wrap">
            <div className="bg-red-500 text-white h-26">
                <p>
                    Flex item 1
                </p>
            </div>

            <div className="bg-blue-500 text-white h-26">
                <p>
                    Flex item 2
                </p>
            </div>

            <div className="bg-yellow-500 text-white h-26">
                <p>
                    Flex item 3
                </p>
            </div>
        </div>

  */}
    
            
        
      
      </section>
      </div>
      <Footer />
    </div>
  );
};
export default Tem1;
