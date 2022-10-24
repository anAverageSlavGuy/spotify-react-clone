import React from 'react';

function Player() {

  const nowPlaying = { "title": "Cupid's Chokehold / Breakfast in America", "author": "Gym Class Heroes", "image": "https://i.scdn.co/image/ab67616d00004851f335d8387c3658831112f914" };

  return (
    <div className="hidden lg:flex items-center h-[70px] lg:h-[90px] w-full bg-[#181818] px-[16px] gap-x-[16px]">

      <div className="flex items-center flex-[3]">
        <img src={nowPlaying.image} className="h-[56px] w-[56px]" />
        <div className="mx-[14px] font-bold pr-[6px]">
          <p className="text-sm text-white">{nowPlaying.title}</p>
          <p className="text-xs text-[#b3b3b3]">{nowPlaying.author}</p>
        </div>
        <div className="flex items-center justify-center h-[32px] w-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
        <div className="flex items-center justify-center h-[32px] w-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" class="bi bi-pip" viewBox="0 0 16 16">
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center flex-[4]">
        <div className="flex items-center justify-center gap-x-[16px] mb-[6px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#b3b3b3" class="bi bi-shuffle" viewBox="0 0 16 16" className="hover:fill-white transition">
            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
          </svg>
          <div className="flex items-center justify-center h-[32px] w-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b3b3b3" class="bi bi-skip-start" viewBox="0 0 16 16" className="hover:fill-white transition">
              <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-[32px] w-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-play-circle-fill" viewBox="0 0 16 16" className="transition hover:scale-110">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-[32px] w-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b3b3b3" class="bi bi-skip-end" viewBox="0 0 16 16" className="hover:fill-white transition">
              <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633 10.804 8 5 11.367V4.633z" />
            </svg>
          </div>
          <div className="flex items-center justify-center h-[32px] w-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#b3b3b3" class="bi bi-repeat" viewBox="0 0 16 16" className="hover:fill-white transition">
              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
            </svg>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-[12px] w-full gap-x-[8px]">
          <div className="text-xs text-[#b3b3b3]">1:30</div>
          <div className="group relative h-[4px] w-[80%] bg-[hsla(0,0%,100%,.3)]">
            <div className="absolute h-full w-[30%] bg-[#fff] transition group-hover:bg-[#1db954]"></div>
            <div className="invisible absolute h-[12px] w-[12px] left-[calc(30%-6px)] top-[-5px] bg-[#fff] rounded-full opacity-0 transition group-hover:visible group-hover:opacity-100"></div>
          </div>
          <div className="text-xs text-[#b3b3b3]">4:30</div>
        </div>
      </div>

      <div className="flex items-center justify-end flex-[3]">
        <div className="flex items-center justify-center h-[32px] w-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#b3b3b3" class="bi bi-mic" viewBox="0 0 16 16" className="hover:fill-white transition">
            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
          </svg>
        </div>
        <div className="flex items-center justify-center h-[32px] w-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#b3b3b3" class="bi bi-list-ul" viewBox="0 0 16 16" className="hover:fill-white transition">
            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </div>
        <div className="flex items-center justify-center h-[32px] w-[32px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#b3b3b3" class="bi bi-pc-display" viewBox="0 0 16 16" className="hover:fill-white transition">
            <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
          </svg>
        </div>
        <div className="flex items-center justify-center h-[32px] w-[125px] ml-[8px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#b3b3b3" class="bi bi-volume-up" viewBox="0 0 16 16" className="hover:fill-white transition">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
          </svg>
          <div className="group relative h-[4px] w-[100%] bg-[hsla(0,0%,100%,.3)] ml-[4px]">
            <div className="absolute h-full w-[30%] bg-[#fff] transition group-hover:bg-[#1db954]"></div>
            <div className="invisible absolute h-[12px] w-[12px] left-[calc(30%-6px)] top-[-5px] bg-[#fff] rounded-full opacity-0 transition group-hover:visible group-hover:opacity-100"></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Player