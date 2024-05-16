import React from 'react'

function Explore() {
  return (
    <section className=" w-full h-full lg:px-36 px-[25px] flex flex-col py-10 gap-6">

            <div className="flex flex-col gap-6">
                <h1 className="text-zinc-500 text-lg lg:text-md font-medium">Explore</h1>

                <h1 className="text-3xl text-zinc-800 font-medium ">Portfolios</h1>
            </div>

            <div className=" flex lg:flex-row flex-col lg:gap-0 gap-20 justify-between">

               
                    <div className="lg:w-[39vw] w-full h-full flex flex-col gap-4">
                        <img className="w-full h-full bg-center bg-cover object-cover" src="https://max-themes.net/demos/archme/upload/lycs-lycs-744227-unsplash-700x466.jpg" alt=""/>
                        <h1 className="text-zinc-700 text-xl font-medium">Xiami Office Building</h1>
                        <h1 className="text-zinc-500 lg:-text-[15px] text-[16px]">July 2018</h1>
                    </div>
    
    
                    <div className="lg:w-[39vw] w-full h-full flex flex-col gap-4">
                        <img className="w-full h-full bg-center bg-cover object-cover" src="https://max-themes.net/demos/archme/upload/harprit-bola-239056-unsplash-700x466.jpg" alt=""/>
                        <h1 className="text-zinc-700 text-xl font-medium">Contemporary Modern House</h1>
                        <h1 className="text-zinc-500 lg:-text-[15px] text-[16px]">May 2018</h1>
                    </div>
                
                
            </div>

        </section>
  )
}

export default Explore
