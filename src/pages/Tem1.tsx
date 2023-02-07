import React from "react";
import Footer from "../components/Footer";
import HeaderMy1 from "../components/HeaderMy1";


const Tem1 = () => {
  return (
    <div>
      <HeaderMy1 />
      <div>
      <section className="mt-3 mb-3 md:ml-28 mr-28 text-sm md:text-base">

        <div className="grid grid-cols-4 gap-0.5">
            <div className="bg-red-500 text-white h-44 ">
                <p>
                    grid 01 
                </p>
            </div>

            <div className="bg-blue-500 text-white h-full col-span-2 row-span-2">
                <p>
                    grid 02 
                </p>
            </div>

            <div className="bg-yellow-500 text-white h-44">
                <p>
                    grid 03
                </p>
            </div>

            <div className="bg-purple-500 text-white h-44">
                <p>
                    grid 04
                </p>
            </div>

            <div className="bg-purple-500 text-white h-44">
                <p>
                    grid 05
                </p>
            </div>

            <div className="bg-purple-500 text-white h-44">
                <p>
                    grid 06
                </p>
            </div>

            <div className="bg-purple-500 text-white h-44 col-span-2">
                <p>
                    grid 07
                </p>
            </div>

            <div className="bg-purple-500 text-white h-44">
                <p>
                    grid 08
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
