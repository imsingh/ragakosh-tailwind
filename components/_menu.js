import React, { useEffect, useState } from 'react';

export function MenuItem(props) {
  return (
    <li class="p-5">{props?.label}</li>
  )
}

export function Menu(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    setMenuVisible(props?.visible)
  }, [props?.visible]);

  return (
    <>
      <div class={!menuVisible ? 'invisible' : 'visible z-40 h-screen w-full flex flex-col text-white font-bold fixed z-1 left-0 top-0 bg-black overflow-x-hidden'}>
        <div class="relative flex flex-row-reverse p-10" onClick={props.onClose}>
          <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="flex flex-col h-full -mt-10 justify-center">
          <ul class="relative text-4xl text-center leading-10 capitalize">
            {props.children}
          </ul>
        </div>
      </div>
    </>
  )
}
