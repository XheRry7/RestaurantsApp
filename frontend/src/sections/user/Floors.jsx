import "pure-react-carousel/dist/react-carousel.es.css";

import { Link } from "react-router-dom";

import "pure-react-carousel/dist/react-carousel.es.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

export default function Floors({ number, list, len }) {
  return (
    <>
      <div className=" mx-auto">
      

        <div className=" flex items-center justify-center w-full h-full sm:py-8 px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {list.map((i) => (
              <SwiperSlide>
                <Link
                  to={`userProducts/${i["_id"]}`}
                  id={i["_id"]}
                  className="max-w-xs"
                >
                  <div className="bg-gray-100 shadow rounded-tl rounded-tr">
                    <img
                      src="https://img.freepik.com/free-vector/hand-drawn-pattern-background_23-2150905271.jpg?w=740&t=st=1700818619~exp=1700819219~hmac=560d5d4eb2265e84e8519c4b88c36fdef00d1f3cdd88c4c72176f68382986806"
                      alt="bg-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-light-gray-700 shadow  px-5 rounded-b">
                    <p className="w-48 text-gray font-semibold leading-5 pt-4 text-">
                      Burger-In
                    </p>

                    <p className="py-2 text-xs leading-4 dark:text-dark-gray-400 text-gray-500">
                    Burger-In is a food chain that began its journey in 19's and now it has over 500 branches all over the world exapnding the business to new limits.
                    </p>
                    <div className="flex cursor-pointer py-4">
                      <p className="text-xs leading-1 text-indigo-700 pr-1">
                        Read more
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-0.5 icon icon-tabler icon-tabler-arrow-narrow-right"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#4338CA"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <line x1={15} y1={16} x2={19} y2={12} />
                        <line x1={15} y1={8} x2={19} y2={12} />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{" "}
    </>
  );
}
