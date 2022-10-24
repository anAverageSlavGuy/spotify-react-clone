import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import Title from './Title.js';
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
        } else if (event.currentTarget.scrollTop > 60 && event.currentTarget.scrollTop <= 150) {
            setNavOpacity(0.5);
        } else if (event.currentTarget.scrollTop > 150) {
            setNavOpacity(1);
        }
    }

    return (
        <div className="flex flex-col flex-[7] h-full w-full overflow-hidden lg:overflow-auto" onScroll={changeNavbarOpacity}>

            <div className="relative flex flex-col bg-gradient-to-t from-[#121212] to-emerald-900 w-full">
                <nav className="absolute top-0 h-[64px] w-full bg-emerald-900 py-[12px] lg:py-[16px] px-[12px] lg:px-[32px] z-10" style={{ "--tw-bg-opacity": navOpacity }}>
                    <div className="hidden lg:flex items-center gap-x-[16px] h-full">
                        <div className="rounded-full bg-black p-[5px] cursor-pointer" title="Torna indietro">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </div>
                        <div className="rounded-full bg-black p-[5px] opacity-50 cursor-not-allowed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <div className="block lg:hidden p-[12px] float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-gear" viewBox="0 0 16 16">
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                        </svg>
                    </div>
                </nav>
                <main className="h-full px-[16px] lg:px-[32px] py-[16px] lg:py-[24px] mt-[64px] overflow-auto">
                    <div className="sticky lg:relative left-0 text-lg lg:text-3xl font-bold text-white mb-[4px] lg:mb-[16px]">Buon pomeriggio</div>
                    <div className="flex lg:grid lg:grid-cols-3 gap-x-[16px] lg:gap-x-[24px] gap-y-[16px]">
                        {
                            recent.map(item => {
                                return (
                                    <div className="group relative flex items-center flex-initial shrink-0 flex-col lg:flex-row lg:h-[80px] w-[40%] lg:w-[auto] bg-[transparent] lg:bg-[hsla(0,0%,100%,.1)] lg:rounded-md overflow-hidden transition-all duration-300 hover:bg-[hsla(0,0%,100%,.2)] hover:cursor-pointer">
                                        <img src={item.image} className="w-full lg:w-[80px] lg:h-full lg:rounded-tl lg:rounded-bl" />
                                        <span className="px-[16px] mt-[8px] lg:mt-[0] text-sm lg:text-base font-bold text-white text-center lg:text-left">{item.title}</span>
                                        <button className="invisible absolute flex items-center justify-center w-[48px] h-[48px] right-[16px] bg-[#1ed760] opacity-0 rounded-full shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:scale-110 hover:cursor-default">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                            </svg>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </div>

            <div className="flex flex-col bg-[#121212] w-full">

                <section className="h-fit px-[16px] py-[16px] lg:px-[32px] lg:py-[24px] overflow-auto">
                    <Title text="I più grandi successi di oggi" size="text-2xl" more={true} />
                    <div className="flex lg:grid lg:grid-cols-8 gap-x-[16px] lg:gap-x-[24px]">
                        {
                            hits.map((item, index) => {
                                return (
                                    <Card key={index} title={item.title} text={item.text} image={item.image} />
                                )
                            })
                        }
                    </div>
                </section>

                <section className="h-fit px-[16px] py-[16px] lg:px-[32px] lg:py-[24px] overflow-auto">
                    <Title text="Creato per te" size="text-2xl" more={true} />
                    <div className="flex lg:grid lg:grid-cols-8 gap-x-[16px] lg:gap-x-[24px]">
                        {
                            hits.map((item, index) => {
                                return (
                                    <Card key={index} title={item.title} text={item.text} image={item.image} />
                                )
                            })
                        }
                    </div>
                </section>

                <section className="h-fit px-[16px] py-[16px] lg:px-[32px] lg:py-[24px] overflow-auto">
                    <Title text="Ascoltate di recente" size="text-2xl" more={true} />
                    <div className="flex lg:grid lg:grid-cols-8 gap-x-[16px] lg:gap-x-[24px]">
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