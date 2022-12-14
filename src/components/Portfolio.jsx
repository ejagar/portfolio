import React from "react";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import app from "../assets/portfolio/app.png";
import amazon from "../assets/portfolio/amazon.png";
import restaurant from "../assets/portfolio/restaurant.png";
import blog2 from "../assets/portfolio/blog2.png";
import first from "../assets/portfolio/first.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Ecommerce,
      href: "https://homemade-dogtreat-ecommerce.vercel.app/",
      href2: "https://github.com/mongoloidist/homemade-dogtreat-ecommerce",
    },
    {
      id: 2,
      src: restaurant,
      href: "https://newdelhi.es/",
      href2: "https://github.com/mongoloidist",
    },
    {
      id: 3,
      src: amazon,
      href: "https://clone-ea403.web.app/",
      href2: "https://firebase.google.com/",
    },
    {
      id: 4,
      src: blog2,
      href: "https://jagar.maweb.eu/",
      href2: "https://github.com/mongoloidist",
    },
    {
      id: 5,
      src: app,
      href: "https://play.google.com/store/apps/details?id=com.avocado.avocado&hl=cs&gl=US",
      href2: "https://github.com/mongoloidist",
    },
    {
      id: 6,
      src: first,
      href: "https://indian-restaurant-olive.vercel.app/",
      href2: "https://github.com/mongoloidist/indian-restaurant",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-blue-500 to-cyan-500 text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={href2} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;