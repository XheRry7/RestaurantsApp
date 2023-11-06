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
        <div className="flex flex-wrap justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
          <b>
            <h1 className="text-2xl"> Floor {number}</h1>
          </b>
        </div>

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
                      src="https://mcdonalds.com.pk/wp-content/uploads/2022/08/terms-and-condition.png"
                      alt="bg-img"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-white shadow  px-5 rounded-b">
                    <p className="w-48 text-base font-semibold leading-5 pt-4 text-black">
                      {i["shopName"]}
                    </p>

                    <p className="py-2 text-xs leading-4 dark:text-gray-400 text-gray-500">
                    McDonalds is a food chain that began its journey in 19's and now it has over 500 branches all over the world exapnding the business to new limits.
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
