import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItemStyleMd =
    "p-2 mx-1 cursor-pointer rounded-lg transition-colors hover:bg-[#00df9a] hover:text-black";

  const navItemStyleSm = "p-4 border-b border-gray-600 cursor-pointer";

  return (
    <header className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className={navItemStyleMd}>Home</li>
        <li className={navItemStyleMd}>Company</li>
        <li className={navItemStyleMd}>Resources</li>
        <li className={navItemStyleMd}>About</li>
        <li className={navItemStyleMd}>Contact</li>
      </ul>
      <section onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </section>
      <section
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2c2c2c] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-7 ml-6">
          REACT.
        </h1>
        <ul className="pt-24 uppercase p-4">
          <li className={navItemStyleSm}>Home</li>
          <li className={navItemStyleSm}>Company</li>
          <li className={navItemStyleSm}>Resources</li>
          <li className={navItemStyleSm}>About</li>
          <li className={navItemStyleSm}>Contact</li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;
