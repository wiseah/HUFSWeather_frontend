import React from "react";

const FooterMy = () => {
  return (
    <footer>
      <div className="bg-cyan-200">
        <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-black text-sm">
            Come to HUFS, Meet the World!
          </span>
        </div>
        <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm">
            외대를 만나면 세계가 보인다!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMy;
