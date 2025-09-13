// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-[9999] w-full bg-slate-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-700 shadow-lg">
      <div className="flex items-center justify-between py-5 mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-white text-3xl font-bold hover:scale-105 transition-transform duration-300">
            Harsha Vundavalli
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white font-semibold transition-colors duration-300 hover:text-blue-400 hover:scale-105">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white font-semibold transition-colors duration-300 hover:text-cyan-400 hover:scale-105">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white font-semibold transition-colors duration-300 hover:text-purple-400 hover:scale-105">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white font-semibold transition-colors duration-300 hover:text-blue-400 hover:scale-105">EDUCATION</div></Link>
          </li>
          
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white font-semibold transition-colors duration-300 hover:text-cyan-400 hover:scale-105">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;