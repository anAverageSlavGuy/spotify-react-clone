import React from 'react';
//bg-[hsla(0,0%,100%,.1)]
function Card({ title, text, image }) {
    return (
        <div className="group flex-initial shrink-0 w-[40%] lg:w-auto p-0 lg:p-[16px] lg:bg-[#181818] lg:rounded-md overflow-hidden lg:overflow-auto transition-all duration-300 hover:bg-[hsla(0,0%,100%,.2)] hover:cursor-pointer ">
            <div className="flex flex-col items-start h-fit lg:rounded">
                <div className="relative mb-[8px] lg:mb-[16px]">
                    <img src={image} className="w-full lg:rounded" style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 50%)" }} />
                    <button className="invisible absolute flex items-center justify-center w-[48px] h-[48px] right-[8px] bottom-[0px] bg-[#1ed760] rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100 hover:scale-110 hover:cursor-default group-hover:translate-y-[-8px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    </button>
                </div>
                <div className="lg:min-h-[62px] w-full text-center">
                    <p className="text-sm lg:text-base font-bold text-white">{title}</p>
                    <p className="hidden lg:block text-sm text-[#a7a7a7] lg:line-clamp-2 mt-[4px]">{text}</p>
                </div>

            </div>

        </div>
    )
}

export default Card