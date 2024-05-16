import React from 'react'

function News() {
  return (
    <section className=" w-full h-full lg:px-36 px-[25px] flex flex-col py-3 lg:py-20 gap-6">

            <div className="flex  flex-col gap-6">
                <h1 className="text-zinc-500 lg:text-md text-lg font-medium">Recent</h1>

                <h1 className="text-3xl text-zinc-800 font-medium ">News & Ideas</h1>
            </div>

            <div className=" flex lg:flex-row flex-col lg:gap-0 gap-16 justify-between">

                <div className="lg:w-[25vw] w-full h-full flex flex-col gap-4">
                    <img className="w-full h-full bg-center bg-cover object-cover" src="https://max-themes.net/demos/archme/upload/minecraft-wood-and-stone-house-exterior-home-design-houzz-best-architecture-house-excerpt-nice-of-minecraft-wood-and-stone-house-960x550.jpg" alt=""/>
                    <h1 className="text-zinc-700 text-xl font-medium">Inspiring Presence of Design Thanks to Indoor Plants</h1>
                    <h1 className="text-zinc-500 lg:-text-[15px] text-[16px]">August 2, 2018</h1>
                </div>


                <div className="lg:w-[25vw] w-full h-full flex flex-col gap-4">
                    <img className="w-full h-full bg-center bg-cover object-cover" src="https://max-themes.net/demos/archme/upload/architecture-modern-architects-modern-tritmonk-building-photo-gallery-for-futuristic-exterior-design-idea-reading-santa-spanish-exterior-york-top-and-famous-of-mod.jpg" alt=""/>
                    <h1 className="text-zinc-700 text-xl font-medium">Inspiring Presence of Design Thanks to Indoor Plants</h1>
                    <h1 className="text-zinc-500 lg:-text-[15px] text-[16px]">August 2, 2018</h1>
                </div>


                <div className="lg:w-[25vw] w-full h-full flex flex-col gap-4">
                    <img className="w-full h-full bg-center bg-cover object-cover" src="https://max-themes.net/demos/archme/upload/modern-riverside-home-christopher-simmonds-architect-1-backyard-960x550.jpg" alt=""/>
                    <h1 className="text-zinc-700 text-xl font-medium">Inspiring Presence of Design Thanks to Indoor Plants</h1>
                    <h1 className="text-zinc-500 lg:-text-[15px] text-[16px]">August 2, 2018</h1>
                </div>
                
            </div>

        </section>
  )
}

export default News
