import React from 'react'

function Footer() {
    return (


        <div>
            <section className="w-full h-full lg:px-36 px-[25px] lg:gap-0 gap-10 flex bg-zinc-200 lg:flex-row flex-col py-10 justify-between">

                <div className=" flex flex-col text-sm text-zinc-700 gap-2">
                    <h1>About</h1>
                    <h1>Portfolio</h1>
                    <h1>Blog</h1>
                    <h1>Contacts</h1>
                </div>

                <div className="flex flex-col gap-4">

                    <h1 className="text-zinc-600 font-semibold text-lg">Office Address</h1>

                    <div className="text-zinc-500 text-sm flex flex-col gap-2">
                        <h1>123 East 26th Street,</h1>
                        <h1>Fifth Floor,</h1>
                        <h1>New York, NY 10011</h1>
                        <h1>hello@architecture.com</h1>
                        <h1>(212) 563-7765</h1>
                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    <h1 className="text-zinc-600 font-semibold text-lg">Opening Hours</h1>

                    <div className="text-zinc-500 text-sm flex flex-col gap-2">
                        <h1>Monday — Closed</h1>
                        <h1>Tuesday — Friday 10am – 4pm</h1>
                        <h1>Saturday — Closed</h1>
                        <h1>Sunday — Closed</h1>
                    </div>

                </div>


                <div className="flex flex-col gap-4">

                    <h1 className="text-zinc-600 font-semibold text-lg">Social</h1>

                    <div className="text-zinc-500 text-sm flex flex-col gap-2">
                        <h1>Facebook</h1>
                        <h1>Instagram</h1>
                        <h1>Houzz</h1>
                        <h1>Pinterest</h1>
                        <h1>LinkedIn</h1>
                    </div>

                </div>


                <div className="flex flex-col gap-4 w-full lg:w-[15vw]">

                    <h1 className="text-zinc-600 font-semibold text-lg">Philosophy</h1>

                    <div className="text-zinc-700 text-lg">
                        <h1 className="font-serif">“Building your own home is about desire, fantasy. But it’s achievable anyone can do it.”</h1>

                    </div>

                </div>

            </section>

            <section className="w-full h-full lg:px-36 px-[25px] flex lg:flex-row flex-col bg-zinc-200 lg:gap-0 gap-2 py-8 items-center justify-between border-t border-zinc-300">
                <h1 className="text-xs text-zinc-500 ">© Copyright Architecturer - Template by Max-Themes</h1>

                <div className="text-xs flex text-zinc-500 lg:gap-3">
                    <h1>Home </h1>
                    <h1>Slider</h1>
                    <h1>Portfolio</h1>
                    <h1>Pages </h1>
                    <h1>Gallery</h1>
                    <h1>Blog</h1>
                </div>
            </section>


        </div>


    )
}

export default Footer
