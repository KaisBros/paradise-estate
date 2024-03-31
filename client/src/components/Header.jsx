import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#343434] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold sm:text-xl text-sm flex flex-wrap">
            <span className="text-[#fffdf6]">Paradise</span>
            <span className="text-[#e9dcbe]">Estate</span>
          </h1>
        </Link>
        <form className="bg-[#f3f3f3] p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none sm:w-64 w-24 h-5"
          />
          <FaSearch className="text-[#343434]" />
        </form>
        <ul className="flex gap-4 text-[#f3f3f3]">
          <Link to="/">
            <li className="sm:inline hidden hover:underline hover:text-[#e9dcbe] cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="sm:inline hidden hover:underline hover:text-[#e9dcbe] cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline hover:text-[#e9dcbe] cursor-pointer">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
