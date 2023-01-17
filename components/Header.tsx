import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import NavButton from "./NavButton";

function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header  className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-full h-12 w-12 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
        <div>
          <h1 className="text-lg text-white font-bold">Lottery</h1>
          <p className="text-xs text-emerald-500 truncate">
            User: {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>

      <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-lg'>
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton isActive title='Buy Tickets' />
          <NavButton onClick={disconnect} title='Logout' />
        </div>
      </div>

      <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />

        <span className='md:hidden'>
          <NavButton onClick={disconnect} title='Logout' />
        </span>
      </div>

    </header>
  )
}

export default Header
