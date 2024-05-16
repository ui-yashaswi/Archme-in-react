import React from 'react'

function Form() {
  return (
    <section className=" lg:w-[50vw] w-full h-full lg:px-36 px-[25px] flex flex-col py-10 gap-6">
            <div className="flex flex-col gap-6">
                <h1 className="text-2xl">Would you like to discuss a project?</h1>

                <h1 className="lg:text-[15px] text-[16px]">Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave.</h1>

            </div>

            <div className="flex flex-col gap-4 ">
                <input className="p-4 border-none " placeholder="Name" type="text"/>
                <input className="p-4 border-none " placeholder="Email" type="text"/>
                <textarea className="p-4 w-full h-[25vh] border-none" placeholder="Message" name="" id=""></textarea>
            </div>

            <button className="p-4 text-white text-lg hover:bg-zinc-200 hover:border-2 border-zinc-800 hover:text-zinc-800 font-medium lg:text-sm bg-zinc-800">Send</button>
        </section>
  )
}

export default Form
