import { useState } from "react"

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
  

  const toggleMenu = () => setIsOpen(!isOpen)
  
    return (
        <nav className="flex drop-shadow-md bg-slate-100 text-zinc-950  w-full justify-between items-center ">
          <a className="ml-4 pt-1 flex items-center">
            <img src="logo.png" alt="Logo da G10 Solution" className="h-20" />
          </a>
          <div className="hidden md:flex md:items-center md:space-x-4">
          <a href="#">Soluções em conectividade</a>
          <a href="#">Cloud</a>
          <a href="#">Videomonitoramento</a>
          <a href="#">Materiais de telecom</a>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2  text-blue-800"
          onClick={toggleMenu}
        >
          <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
        </button>
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 mt-2 bg-slate-100 border border-gray-200 shadow-lg rounded-md w-48`}
        >
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Soluções em conectividade</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Cloud</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Videomonitoramento</a>
          <a href="#" className="block px-4 py-2 text-zinc-950 hover:bg-gray-200">Materiais de telecom</a>
        </div>
      </nav>
    )
}