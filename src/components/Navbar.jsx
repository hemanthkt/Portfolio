import React from "react";
import logo from "../../src/assets/hemanthlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="w-48 mt-5 h-12 flex flex-shrink-0 items-center">
        <img src={logo}></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaInstagram></FaInstagram>
        <FaSquareXTwitter></FaSquareXTwitter>
      </div>
    </nav>
  );
}

export default Navbar;
