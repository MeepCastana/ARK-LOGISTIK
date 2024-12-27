import logo from "./assets/image.jpg";

function Header() {
  return (
    // MAIN HEADER
    <div
      className="bg-[#f7fbf8]/95 opaque w-[53rem] rounded-full flex justify-between items-center p-2 h-[3rem] font-medium text-[#0a150f] 
      hover:shadow-[0px_4px_20px_4px_rgba(88,28,135,0.7)]
 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center space-x-8">
        <div className="h-10 w-10 rounded-full flex items-center">
          <img src={logo} className="rounded-full" />
        </div>
        <div className="flex space-x-5 items-center">
          <div className="hover:bg-[#5669C1] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Servicii
          </div>
          <div className="hover:bg-[#5669C1]  hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Urmareste Colet
          </div>
          <div className="hover:bg-[#5669C1]  hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Contact
          </div>
        </div>
      </div>
      <div className="hover:bg-[#5669C1] bg-[#767e9f] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4 text-nowrap">
        Trimite Colet
      </div>
    </div>
  );
}

export default Header;
