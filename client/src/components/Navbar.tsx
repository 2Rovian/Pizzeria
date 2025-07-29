import { VscAccount } from "react-icons/vsc";
import { MdAccountCircle } from "react-icons/md";


function Navbar() {
  return (
    <header className="h-[80px] w-full bg-orange-700 px-4">
        <nav className="mx-auto w-full h-full max-w-5xl flex items-center justify-between">
            <span className="text-4xl text-white">Pizzeria</span>

            <div className='text-5xl text-white'>
                <MdAccountCircle />


            </div>
        </nav>
    </header>
  )
}

export default Navbar