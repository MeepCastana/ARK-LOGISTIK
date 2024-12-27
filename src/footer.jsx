import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-[#1F2937] opaque text-center p-4 rounded-t-xl mt-10">
      <div className="flex-col justify-center items-center space-y-4 ">
        <p>&copy; {currentYear} ARC LOGISTIK. Toate drepturile rezervate.</p>
        <div className="flex justify-center items-center">
          <div className="flex justify-around w-72 items ">
            <a
              href="#home"
              className=" p-2 rounded-lg hover:bg-[#949494] bg-[#1F2937] hover:text-[#1F2937] text-[#d8d8d8] transition-all duration-500 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:bg-[#949494] bg-[#1F2937] hover:text-[#1F2937] text-[#d8d8d8] p-2 rounded-lg transition-all duration-500 ease-in-out"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:bg-[#949494] bg-[#1F2937] hover:text-[#1F2937] text-[#d8d8d8] p-2 rounded-lg transition-all duration-500 ease-in-out"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:bg-[#949494] bg-[#1F2937] hover:text-[#1F2937] text-[#d8d8d8] p-2 rounded-lg transition-all duration-500 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
