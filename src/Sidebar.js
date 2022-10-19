import React from 'react';
import './Sidebar.css';
import Logo from './images/Spotify_Logo_RGB_White.png';

function Sidebar() {
    return (
        <div className="hidden lg:flex flex-col flex-[1] h-full bg-[black]">
            <div className="pl-[24px] pt-[24px] mb-[32px]">
                <img src={Logo} className="h-[38px]" />
            </div>

            <ul className="text-[hsla(0,0%,100%,.7)]">
                <li className="flex items-center gap-x-[16px] px-[24px] font-medium text-sm h-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                    <span className="text-white">Home</span>
                </li>
                <li className="flex items-center gap-x-[16px] px-[24px] font-medium text-sm h-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsla(0,0%,100%,.7)" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span>Cerca</span>
                </li>
                <li className="flex items-center gap-x-[16px] px-[24px] font-medium text-sm h-[40px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="hsla(0,0%,100%,.7)" className="bi bi-music-note-list" viewBox="0 0 16 16">
                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                        <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                        <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <span>La tua libreria</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar