import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {

    const [navOpacity, setNavOpacity] = useState(0);

    const recent = [
        { "title": "internet rewind", "image": "https://i.scdn.co/image/ab67706f0000000294bddc1d05920cce685229c5" },
        { "title": "sangue giovane", "image": "https://i.scdn.co/image/ab67706f000000027d979686455c7b3d47362991" },
        { "title": "This Is Green Day", "image": "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4nBpII-default.jpg" },
        { "title": "All Out 80s", "image": "https://i.scdn.co/image/ab67706f00000002e6ed19ecc791fce2ec58d005" },
    ]

    const changeNavbarOpacity = (event) => {
        if (event.currentTarget.scrollTop <= 60) {
            setNavOpacity(0);
        } else if (event.currentTarget.scrollTop >= 60 && event.currentTarget.scrollTop <= 150) {
            setNavOpacity(0.5);
        } else {
            setNavOpacity(1);
        }
    }

    /* useEffect(() => {

        const changeNavbarOpacity = () => {
            console.log(window.scrollY);
            if (window.scrollY <= 60) {
                setNavOpacity(0);
            } else if (window.scrollY >= 60 && window.scrollY <= 150) {
                setNavOpacity(0.5);
            } else {
                setNavOpacity(1);
            }
        }

        // adding the event when scroll change background
        window.addEventListener("scroll", changeNavbarOpacity);
        return () => window.removeEventListener("scroll", changeNavbarOpacity);

    }, []) */

    return (
        <div className="flex flex-col flex-[7] h-full w-full overflow-y-auto" onScroll={changeNavbarOpacity}>

            <div className="flex flex-col bg-gradient-to-t from-[#121212] to-emerald-900 w-full">
                <nav className="sticky top-0 h-[64px] w-full bg-emerald-900 py-[16px] px-[32px]" style={{ "--tw-bg-opacity": navOpacity }}>
                    <div className="flex items-center gap-x-[16px] h-full">
                        <div className="rounded-full bg-black p-[6px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                        <div className="rounded-full bg-black p-[6px] opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </nav>
                <main className="h-full px-[32px] py-[24px]">
                    <div className="text-3xl font-bold text-white mb-[16px]">Buon pomeriggio</div>
                    <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                        {
                            recent.map(item => {
                                return (
                                    <div className="flex items-center h-[80px] bg-[hsla(0,0%,100%,.1)] rounded">
                                        <img src={item.image} className="h-full rounded-tl rounded-bl" />
                                        <span className="px-[16px] text-base font-bold text-white">{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </div>

            <div className="flex flex-col bg-[#121212] w-full">

                <main className="h-fit px-[32px] py-[24px]">
                    <div className="text-2xl font-bold text-white mb-[16px]">I più grandi successi</div>
                    <div className="grid grid-cols-8 gap-x-[24px]">
                        {
                            recent.map((item, index) => {
                                return (
                                    <div className="p-[16px]">
                                        <div key={index} className="flex flex-col items-center h-[80px] bg-[hsla(0,0%,100%,.1)] rounded">
                                            <img src={item.image} className="h-full rounded-tl rounded-bl" />
                                            <span className="px-[16px] text-base font-bold text-white">{item.title}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>

                <main className="h-fit px-[32px] py-[24px]">
                    <div className="text-2xl font-bold text-white mb-[16px]">Creato per te</div>
                    <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                        {
                            recent.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center h-[80px] bg-[hsla(0,0%,100%,.1)] rounded">
                                        <img src={item.image} className="h-full rounded-tl rounded-bl" />
                                        <span className="px-[16px] text-base font-bold text-white">{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
                <main className="h-fit px-[32px] py-[24px]">
                    <div className="text-3xl font-bold text-white mb-[16px]">Creato per te</div>
                    <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                        {
                            recent.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center h-[80px] bg-[hsla(0,0%,100%,.1)] rounded">
                                        <img src={item.image} className="h-full rounded-tl rounded-bl" />
                                        <span className="px-[16px] text-base font-bold text-white">{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Home