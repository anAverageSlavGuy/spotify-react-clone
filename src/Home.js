import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import './Home.css';

function Home() {

    const [navOpacity, setNavOpacity] = useState(0);

    const recent = [
        { "title": "internet rewind", "image": "https://i.scdn.co/image/ab67706f0000000294bddc1d05920cce685229c5" },
        { "title": "sangue giovane", "image": "https://i.scdn.co/image/ab67706f000000027d979686455c7b3d47362991" },
        { "title": "This Is Green Day", "image": "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4nBpII-default.jpg" },
        { "title": "All Out 80s", "image": "https://i.scdn.co/image/ab67706f00000002e6ed19ecc791fce2ec58d005" },
        { "title": "sangue giovane", "image": "https://i.scdn.co/image/ab67706f000000027d979686455c7b3d47362991" },
        { "title": "This Is Green Day", "image": "https://thisis-images.scdn.co/37i9dQZF1DZ06evO4nBpII-default.jpg" },
    ]

    const hits = [
        { "title": "Top Hits Italia", "text": "La playlist più calda del momento! Cover: Måneskin", "image": "https://i.scdn.co/image/ab67706f00000002098fce11d91302e140095fa1" },
        { "title": "Hit Internazionali", "text": "Le canzoni internazionali del momento! Cover: Rosa Linn", "image": "https://i.scdn.co/image/ab67706f0000000261c75c3f4ce26e709503008e" },
        { "title": "Today's Top Hits", "text": "Rema & Selena Gomez are on top of the Hottest 50!", "image": "https://i.scdn.co/image/ab67706f00000002644f48dbc00307d8a02259dc" },
        { "title": "Indie Italia", "text": "Solo il meglio dell'indie in Italia. Cover: Legno", "image": "https://i.scdn.co/image/ab67706f000000022cc590781a7045abeb706de4" },
        { "title": "Top Hits Italia", "text": "La playlist più calda del momento! Cover: Måneskin", "image": "https://i.scdn.co/image/ab67706f00000002098fce11d91302e140095fa1" },
        { "title": "Hit Internazionali", "text": "Le canzoni internazionali del momento! Cover: Rosa Linn", "image": "https://i.scdn.co/image/ab67706f0000000261c75c3f4ce26e709503008e" },
        { "title": "Today's Top Hits", "text": "Rema & Selena Gomez are on top of the Hottest 50!", "image": "https://i.scdn.co/image/ab67706f00000002644f48dbc00307d8a02259dc" },
        { "title": "Indie Italia", "text": "Solo il meglio dell'indie in Italia. Cover: Legno", "image": "https://i.scdn.co/image/ab67706f000000022cc590781a7045abeb706de4" }
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

    return (
        <div className="flex flex-col flex-[7] h-full w-full overflow-y-auto" onScroll={changeNavbarOpacity}>

            <div className="flex flex-col bg-gradient-to-t from-[#121212] to-emerald-900 w-full">
                <nav className="fixed top-0 h-[64px] w-full bg-emerald-900 py-[16px] px-[32px]" style={{ "--tw-bg-opacity": navOpacity }}>
                    <div className="hidden lg:flex items-center gap-x-[16px] h-full">
                        <div className="rounded-full bg-black p-[5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                        <div className="rounded-full bg-black p-[5px] opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                </nav>
                <main className="h-full px-[16px] lg:px-[32px] py-[24px] mt-[64px]">
                    <div className="text-lg lg:text-3xl font-bold text-white mb-[4px] lg:mb-[16px]">Buon pomeriggio</div>
                    <div className="flex lg:grid lg:grid-cols-3 gap-x-[24px] gap-y-[16px]">
                        {
                            recent.map(item => {
                                return (
                                    <div className="flex items-center flex-col lg:flex-row h-[80px] bg-[hsla(0,0%,100%,.1)] rounded">
                                        <img src={item.image} className="w-full lg:w-[80px] lg:h-full rounded-tl rounded-bl" />
                                        <span className="px-[16px] text-base font-bold text-white">{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </div>

            <div className="flex flex-col bg-[#121212] w-full">

                <section className="h-fit px-[32px] py-[24px]">
                    <div className="text-2xl font-bold text-white mb-[12px]">I più grandi successi</div>
                    <div className="grid grid-cols-8 gap-x-[24px]">
                        {
                            hits.map((item, index) => {
                                return (
                                    <Card key={index} title={item.title} text={item.text} image={item.image} />
                                )
                            })
                        }
                    </div>
                </section>

                <section className="h-fit px-[32px] py-[24px]">
                    <div className="text-2xl font-bold text-white mb-[12px]">Creato per te</div>
                    <div className="grid grid-cols-8 gap-x-[24px]">
                        {
                            hits.map((item, index) => {
                                return (
                                    <Card key={index} title={item.title} text={item.text} image={item.image} />
                                )
                            })
                        }
                    </div>
                </section>

                <section className="h-fit px-[32px] py-[24px]">
                    <div className="text-2xl font-bold text-white mb-[12px]">Ascoltate di recente</div>
                    <div className="grid grid-cols-8 gap-x-[24px]">
                        {
                            hits.map((item, index) => {
                                return (
                                    <Card key={index} title={item.title} text={item.text} image={item.image} />
                                )
                            })
                        }
                    </div>
                </section>

            </div>

        </div>
    )
}

export default Home