import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full  m-auto md:max-w-none md:gap-5">
            {titles.map((val, index) => (
              <div className="grid items-center" key={index}>
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            ))}

            {links.map((list, index) => (
              <ul key={index} className="text-sm sm:text-xs">
                {list.map((link, index) => (
                  <li key={index}>{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm md:text-center">CopuRight <sup className="text-base font-bold">&copy;</sup>All Reserved Rights 2022 <span className="font-semibold">Mahdi Nazari</span></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
