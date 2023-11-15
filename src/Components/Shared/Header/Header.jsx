import { Link } from "react-router-dom";
import { FaSignInAlt, FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const links = ["home", "job", "help"];
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        {/* Mobile nav button */}
        <div className="md:hidden mt-3 mr-2">
          <button onClick={() => setMenu(!menu)}>
            <FaBars className="h-5 w-5" />
          </button>
        </div>
        {/* Logo  */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            Career Hub
          </Link>
        </div>
      </div>
      {/* large device menu items */}
      <div className="hidden md:block text-xl text-black">
        {links.map((link, i) => (
          <Link
            className="px-2 hover:text-cyan-600 uppercase"
            key={i}
            to={`/${link}`}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Small device menu */}
      {menu && (
        <div
          className={`md:hidden fixed top-0 ${
            menu ? "left-0" : "-left-[100vw]"
          } h-screen w-11/12 bg-black transition-all`}
        >
          <button
            className="flex ml-auto m-2 p-2 bg-gray-800"
            onClick={() => setMenu(!menu)}
          >
            <LiaTimesSolid className="text-white h-6 w-6 hover:text-[#FF0000]" />
          </button>
          <div className="flex flex-col text-xl text-white">
            {links.map((link, i) => (
              <Link
                className="p-3 border-b border-gray-50 transition-all hover:text-cyan-600 hover:pl-5 uppercase"
                key={i}
                to={`/${link}`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sign in button */}
      <div className="flex items-center">
        <FaSignInAlt className="mr-3" />
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Header;
