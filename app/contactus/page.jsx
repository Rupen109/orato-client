import Image from 'next/image'
import React from 'react'
import image from "../../public/mobile1.jpg"
import { IoLogoGooglePlaystore } from "react-icons/io5";

const contectUs = () => {
  return (
      <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-16 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
                  <Image height={700} width={700} alt="ecommerce" class="lg:w-1/2 w-full lg:h-full h-64 object-cover object-center rounded" src={image} />
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Orato </h1>
                      <div class="flex mb-4">
                          <span class="flex items-center">
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#F4A52E]" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#F4A52E]" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#F4A52E]" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#F4A52E]" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-[#F4A52E]" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span class="text-gray-600 ml-3">40k Reviews</span>
                          </span>
                          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                              <a class="text-gray-500">
                                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                  </svg>
                              </a>
                              <a class="text-gray-500">
                                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                  </svg>
                              </a>
                              <a class="text-gray-500">
                                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                  </svg>
                              </a>
                          </span>
                      </div>
                      <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                      {/* <h2 class="leading-relaxed lg:text-2xl text-black lg:pt-5">Download Our App Now!</h2> */}
                      <div class="flex mt-6">
                          <span class="title-font font-medium lg:text-3xl text-gray-900">Download Our App Now!</span>
                          <button class="flex ml-auto text-white lg:text-xl justify-center items-center gap-x-2 bg-black border-0 py-2 px-6 focus:outline-none rounded"><IoLogoGooglePlaystore/> Google Play</button>
                          {/* <IoLogoGooglePlaystore className="text-2xl flex ml-auto text-black "/>wrdf */}
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default contectUs