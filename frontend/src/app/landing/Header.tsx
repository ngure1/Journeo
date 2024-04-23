import Logo from "@/components/Logo";
import React from "react";

const Header = () => {
  return (
    <div className="inline-flex gap-[50rem] items-center justify-center mx-[6.62rem] mt-[3rem] sticky">
      <Logo />
      <ul className="flex items-start gap-[1.625rem] p-[0.75rem]">
        <li className="sub-heading">
          <a href="#home">Home</a>
        </li>
        <li className="sub-heading">
          <a href="#about">About</a>
        </li>
        <li className="sub-heading">
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
