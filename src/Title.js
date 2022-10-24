import React from 'react'

function Title({ text, size, more }) {
    return (
        <div className={`sticky lg:relative left-[0] text-lg lg:${size} font-bold text-white mb-[4px] lg:mb-[16px]`}>
            <span className="hover:underline hover:cursor-pointer">{text}</span>
            {more && <span className="hidden lg:block text-sm text-[#b3b3b3] float-right hover:underline hover:cursor-pointer">VISUALIZZA TUTTO</span>}
        </div>
    )
}

export default Title