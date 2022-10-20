import React from 'react'

function Title({ text, size, more }) {
    return (
        <div className={`${size} font-bold text-white mb-[12px]`}>
            <span className="hover:underline hover:cursor-pointer">{text}</span>
            {more && <span className="text-sm text-[#b3b3b3] float-right hover:underline hover:cursor-pointer">VISUALIZZA TUTTO</span>}
        </div>
    )
}

export default Title