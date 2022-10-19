import React from 'react';
//bg-[hsla(0,0%,100%,.1)]
function Card({ title, text, image }) {
    return (
        <div className="p-[16px] bg-[#181818] rounded-md">
            <div className="flex flex-col items-start h-fit rounded">
                <img src={image} className="w-full rounded mb-[16px]" style={{boxShadow: "0 8px 24px rgb(0 0 0 / 50%)"}} />
                <div className="min-h-[62px]">
                    <p className="text-base font-bold text-white">{title}</p>
                    <p className="text-sm text-[#a7a7a7] truncated-2 mt-[4px]">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card