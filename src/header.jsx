import logo from "./assets/image.jpg";

function Header() {
  return (
    // MAIN HEADER
    <div
      className=" opaque w-[53rem] flex rounded-full justify-between items-center p-2 xs:text-lg xs:font-black sm:font-medium text-[#374151] 
      hover:shadow-[0px_4px_20px_4px_rgba(88,28,135,0.7)]
 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10  items-center">
          <img src={logo} className="rounded-full" />
        </div>
        <div className="flex  items-center space-x-3">
          <div className="hover:bg-[#1F2937] hover:text-[#d8d8d8] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Servicii
          </div>
          <div className="hover:bg-[#1F2937] hover:text-[#d8d8d8] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4 text-nowrap">
            Urmareste Colet
          </div>
          <div className="hover:bg-[#1F2937]  hover:text-[#d8d8d8] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Contact
          </div>
        </div>
      </div>
      <div className="hover:bg-[#949494] bg-[#1F2937] hover:text-[#1F2937] text-[#d8d8d8] ml-8 hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4 text-nowrap">
        Trimite Colet
      </div>
    </div>
  );
}

export default Header;
