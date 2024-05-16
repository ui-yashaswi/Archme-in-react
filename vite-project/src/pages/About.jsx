import React from 'react'

function About() {
  return (
    <section className=" w-full h-full lg:px-36 px-[25px] flex lg:flex-row flex-col py-20 gap-16">

            <div className="flex lg:w-[40vw] w-full h-full flex-col  gap-6 ">

                <h1 className="text-zinc-500 lg:text-md text-2xl font-medium">About Us</h1>

                <h1 className="lg:text-3xl text-3xl text-zinc-800 font-medium ">Architecture is the will of an epoch translated into space</h1>

                <h1 className="lg:text-[15px] text-[16.5px] text-zinc-700 font-medium leading-7">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack.</h1>

                <img className="lg:w-[10vw] w-[50vw]" src="	https://max-themes.net/demos/archme/upload/signature.png" alt=""/>
            </div>

            <div className="w-full h-full ">
                <img className="w-full h-full" src="https://max-themes.net/demos/archme/upload/jeff-sheldon-264922-unsplash-1024x683.jpg" alt=""/>
            </div>

        </section>
  )
}

export default About
