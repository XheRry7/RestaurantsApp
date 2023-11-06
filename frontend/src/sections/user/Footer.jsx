import React from "react";
function Footer() {
  return (
    <>
      {/* bg-gradient-to-bl from-indigo-200 via-black to-emerald-200 */}
      <section className="pb-14  flex justify-center items-center bg-white dark:bg-[#ff6900] bg-gray-900">
        <footer className="mt-20 mx-auto container md:w-full flex justify-center items-center">
          <div className="flex xl:flex-row flex-col lg:gap-x-24 px-6 md:px-0">
            <div className="flex-col flex justify-start items-start lg:w-80">
              <div className="xl:flex-col flex justify-start items-center xl:items-start">
                <div className="flex justify-center mr-6 xl:mr-0 dark:text-white text-4xl text-gray-800">
                  Cuisine Cloud
                </div>
                <div className="flex justify-center flex-col">
                  <div className="xl:mt-8">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-normal">
                      Copyright © 2023 Cuisine Cloud.
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-normal">
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-start items-start flex-row lg:space-x-4 space-x-2">
                <button
                  aria-label="twitter"
                  role="button"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button
                  aria-label="youtube"
                  role="button"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white"
                >
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-8 xl:mt-0 lg:gap-x-14 gap-x-10">
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-0">
                <div className="lg:w-40">
                  <h2 className="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">
                    Company
                  </h2>
                  <div className="mt-6  flex justify-start items-start flex-col space-y-2">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        About us
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Blog
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Contact us
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Pricing
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Testimonials
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-40">
                  <h2 className="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">
                    Support
                  </h2>
                  <div className="mt-6 flex justify-start items-start flex-col space-y-2">
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Help center
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Terms of service
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Legal
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Privacy policy
                      </a>
                    </div>
                    <div>
                      <a
                        href="javascript:void(0)"
                        className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                      >
                        Status
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:block hidden">
                  <h2 className="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">
                    Get Updates and more
                  </h2>
                  <div className="dark:bg-gray-800 bg-white rounded-lg mt-6 flex justify-start items-start flex-col space-y-2">
                    <div className="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                      <div className="relative w-full">
                        <input
                          className="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base"
                          type="text"
                          placeholder="Your email address"
                        />
                        <button
                          aria-label="send email"
                          role="button"
                          className="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm"
                        >
                          <svg
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width={18}
                                  height={18}
                                  fill="white"
                                  transform="translate(12.7279 0.271973) rotate(45)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden sm:mt-0 mt-4">
              <h2 className="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">
                Get Updates and more
              </h2>
              <div className="dark:bg-gray-800 bg-white rounded-lg mt-6  flex justify-start items-start flex-col space-y-2">
                <div className="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                  <div className="relative w-full">
                    <input
                      className="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width={18}
                              height={18}
                              fill="white"
                              transform="translate(12.7279 0.271973) rotate(45)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
