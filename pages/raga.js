export default function Raga() {
  return (
    <>
      <header class="shadow fixed w-full z-20 bg-white">
        <nav class="p-4 flex">
          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <div class="text-2xl w-full font-bold text-center tracking-wide">Asa</div>
          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
          </svg>
        </nav>
      </header>

      <div class="absolute w-full flex flex-col mt-16 bg-white z-0">
        <ul class="w-full">
          <li class="p-2 pl-6 shadow flex flex-row-reverse items-center justify-between">
            <div>
              <span class="inline-block text-sm">English</span>
              <svg class="h-6 w-8 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <span class="inline-block text-sm">Language</span>
          </li>
          <li class="p-2 pl-6 shadow flex flex-row-reverse items-center justify-between">
            <div>
              <svg class="h-4 w-8 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
            </div>
            <span class="inline-block text-sm">Share Raga</span>
          </li>
        </ul>


        <ul class="w-full">
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Name</span>
            <span class="block text-md break-words">Asa</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Thaat</span>
            <span class="block text-md break-words">Asavari</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Jaati</span>
            <span class="block text-md break-words">Aurav-Sampooran</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Time</span>
            <span class="block text-md break-words">Aurav-Sampooran</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Vadi</span>
            <span class="block text-md break-words">m</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Samvadi</span>
            <span class="block text-md break-words">n</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Aroh</span>
            <span class="block text-md break-words">S, g m, P n S*</span>
          </li>
          <li class="p-2 pl-6 font-bold flex flex-col">
            <span class="block text-lg">Avroh</span>
            <span class="block text-md break-words">S* n d, P, m g, r S</span>
          </li>
        </ul>
        <span class="ml-6 w-full block text-xs mt-2">Powered by https://ragakosh.com</span>
      </div>
    </>
  )
}
