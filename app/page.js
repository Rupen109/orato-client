import Link from "next/link";
import Image from "next/image";
import homeImg from "../public/homeImg.jpg";
import homeImg3 from "../public/homeImg3.jpg";
import homeImg4 from "../public/homeImg4.jpg";
import homeImg5 from "../public/homeImg5.jpg";
import homeImg6 from "../public/homeImg6.jpg";
import homeImg7 from "../public/homeImg7.jpg";
import homeImg8 from "../public/homeImg8.jpg";
import homeImg9 from "../public/homeImg9.jpg";
import homeImg10 from "../public/homeImg10.jpg";

export default function Home() {
  const clients = [
    { id: 1, name: 'Client A', logoSrc: homeImg },
    { id: 2, name: 'Client B', logoSrc: homeImg3 },
    { id: 3, name: 'Client C', logoSrc: homeImg4 },
    { id: 4, name: 'Client D', logoSrc: homeImg5 },
    { id: 5, name: 'Client E', logoSrc: homeImg },
    // Add more clients as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">


      {/* section 1 */}

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 text-center lg:text-start">

              <h2 className="text-sm title-font text-gray-500 tracking-widest md:pt-16 lg:mt-0 mt-7   ">BRAND EXPERTIES</h2>
                <h1 className="text-gray-900 lg:text-6xl text-5xl title-font font-medium mb-4 ">
                <span>Animated Night </span>
                <br />
                <span>
                  With Hill Illustrations
                </span>
              </h1>

              <p className=" mb-4 lg:text-2xl text-lg">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                 
              </p>

              <div className="lg:space-x-8 lg:flex-none flex lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center md:pt-8">
                <input className="w-80 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                <button className="lg:inline-flex text-white bg-[#F4A52E] border-0 py-2 px-6 focus:outline-none hover:bg-orange-400 rounded text-lg">Subscribe now</button> <br/>
              </div>
                <span className="text-xl md:mx-auto flex md:items-center">start the learning now!</span>
            </div>
            <Image height={500} width={500} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover justify-center items-center object-center rounded" src={homeImg3} />
          </div>
        </div>
      </section>


      {/* section 2 */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-5xl text-2xl font-medium title-font text-center text-gray-900 mb-8">Raw Denim Heirloom Man Braid
            <br class="hidden sm:block"/>Selfies Wayfarers 
          </h1>
          {/* <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 px-20">
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">Shooting Stars</h2>
                <p class="leading-relaxed text-lg">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-orange-300 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">The Catalyzer</h2>
                <p class="leading-relaxed text-lg">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-orange-300 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-300 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-2xl title-font font-medium mb-2">Neptune</h2>
                <p class="leading-relaxed text-lg">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                <a class="mt-3 text-orange-300 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div> */}

          <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
              <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                <span class="inline-block h-1 w-10 rounded bg-orange-300 mt-8 mb-2"></span>
                <h2 class="text-orange-400 font-medium title-font tracking-wider text-base">CEO - lps</h2>
              </div>
            </div>
          </section>
        </div>
      </section>


      
      {/* section 3 (1)*/}

      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto">
          <h1 class="sm:text-5xl text-2xl font-medium title-font text-center text-gray-900 mb-4">Selfies Wayfarers Man Braid
            <br class="hidden sm:block" />Raw Denim Heirloom
          </h1>
          <span className="text-xl flex justify-center">lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsomlorem ipsom lorem ipsom lorem24 ipsom</span>
        </div>        
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image width={100} height={100} alt="gallery" className="w-full object-cover h-full object-center block" src={homeImg} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={100} height={100} alt="gallery" className="w-full object-cover h-full object-center block" src={homeImg3} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image width={100} height={100} alt="gallery" className="w-full h-full object-cover object-center block" src={homeImg5} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image width={100} height={100} alt="gallery" className="w-full h-full object-cover object-center block" src={ homeImg } />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={100} height={100} alt="gallery" className="w-full object-cover h-full object-center block" src={ homeImg5 } />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image width={100} height={100} alt="gallery" className="w-full object-cover h-full object-center block" src={homeImg } />
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* section 3(2) */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-4 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div class="flex flex-wrap -m-4 lg:px-32">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300" />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300" />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300"/>
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300" />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300" />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image height={200} width={200} alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/500x300" />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-2xl text-2xl font-semibold title-font  mb-4 text-gray-900">"Orato suite of social media platform integrations is unlike any other!"</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed lg:text-xl text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-lg pt-6">- HOLDEN CAULFIELD</h2>
            <p class="text-gray-500">Senior Product Designer</p>
          </div>
        </div>



        {/* section 4 */}
        
        <section class="text-gray-600 body-font bg-[#F5F5F5]">
        
        
        
        
        
        
          <div class="container px-5  mx-auto">
            <div class="flex flex-col text-center w-full lg:pb-20 lg:pt-14 pb-5 pt-5">
              <h1 class="sm:text-5xl text-2xl font-medium title-font text-gray-900">Features At a Glance</h1>
            </div>


            <div className=" mb-24 overflow-hidden">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-row items-center justify-center mt-5">
                  <Image height={400} width={400} src={homeImg8} alt="KNowYourProgressImage" className="object-contain -mr-32" />
                  <Image height={400} width={400} src={homeImg6} alt="KNowYourProgressImage" className="object-contain" />
                  <Image height={400} width={400} src={homeImg9} alt="KNowYourProgressImage" className="object-contain -ml-36" />
                </div>
              </div>
            </div>




            <div class="flex flex-wrap -m-4 text-center lg:px-12 lg:pb-16">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">creative speaking</h2>
                  <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">english</h2>
                  <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">listening</h2>
                  <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">Fab english</h2>
                  <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
              <div className="flex w-full justify-center items-center">

              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">Fab english</h2>
                    <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-orange-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">Fab english</h2>
                    <p class="leading-relaxed">Schedule, sit back and relax.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>


      </section>
    </main>
  )
}
