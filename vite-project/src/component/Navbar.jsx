import React from 'react'

function Navbar() {
  return (
    <section className=" w-full h-full relative ">

            <nav className="w-full h-28 flex lg:flex-row flex-col lg:gap-20 gap-4 items-center py-3 px-36 top-0 left-0 absolute z-10">

                <h1 className="text-lg border-[3.3px] font-semibold border-zinc-800 px-10 py-1 tracking-[2px]">ARCHME</h1>

             <div className="flex lg:gap-10 gap-5 text-zinc-800 text-md lg:text-sm">
                <h1>Home</h1>
                <h1>Slider</h1>
                <h1>Portfolio</h1>
                <h1>Pages</h1>
                <h1>Gallery</h1>
                <h1>Blog</h1>
             </div>

            </nav>


            <div className="swiper mySwiper ">
               
                <div className="swiper-wrapper h-[80vh]">
                 
                  <div className="swiper-slide">
                    <img src="https://max-themes.net/demos/archme/upload/alexandra-gorn-485551-unsplash.jpg" alt=""/>
                  </div>
    
                  <div className="swiper-slide">
                    <img src="https://max-themes.net/demos/archme/upload/TaziRanch1016_2355_slider.jpg" alt=""/>
                  </div>
    
                  <div className="swiper-slide">
                    <img  src="https://max-themes.net/demos/archme/upload/sandro-katalina-219649-unsplash.jpg" alt=""/>
                  </div>
                  
                </div>
               
                <div className="swiper-pagination"></div>
              
               
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              
                
                <div className="swiper-scrollbar"></div>
            </div>

            
        </section>
  )
}

export default Navbar
