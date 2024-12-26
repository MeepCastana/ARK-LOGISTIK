import logo from "./assets/image.jpg";

function Header() {
  return (
    // MAIN HEADER
    <div
      className="bg-[#5fb387]/90 w-[50rem] rounded-full flex justify-between items-center p-2 font-medium text-[#0a150f] 
      hover:shadow-[0px_4px_20px_4px_rgba(88,160,124,0.7)] transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center space-x-8">
        <div className="h-10 w-10 rounded-full flex items-center">
          <img src={logo} className="rounded-full" />
        </div>
        <div className="flex space-x-5 items-center">
          <div className="hover:bg-[#48976e] bg-[#82c3a1] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Servicii
          </div>
          <div className="hover:bg-[#48976e] bg-[#82c3a1] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Urmareste Colet
          </div>
          <div className="hover:bg-[#48976e] bg-[#82c3a1] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
            Contact
          </div>
        </div>
      </div>
      <div className="hover:bg-[#48976e] bg-[#82c3a1] hover:cursor-pointer transition-all duration-300 ease-in-out rounded-full p-2 px-4">
        Despre Noi
      </div>
    </div>
  );
}

export default Header;
