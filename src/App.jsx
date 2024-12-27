import Header from "./header";
import Colors from "./colors";
import ParcelEstimator from "./estimator";
import HeroImg from "./assets/hero-img.png";
import ReactCountryFlag from "react-country-flag";

function App() {
  // useSmoothScroll(); // Enable smooth scrolling

  return (
    <>
      <div
        data-scroll-container
        className="flex-col w-full min-h-screen bg-gradient-to-tr from-purple-600 to-fuchsia-600 estimator-background"
      >
        {/* Sticky Header */}
        <div className="sticky top-5 z-50 w-full justify-center flex">
          <Header />
        </div>
        <div className="flex justify-between items-center ">
          <div className="w-[35rem] mt-[6rem] ml-[10rem] space-y-12">
            <span className="text-[#0a150f] text-3xl bg-[#f7fbf8] p-2 rounded-xl text-nowrap font-black ">
              Transport de colete, mai simplu mai usor
            </span>
            <img
              src={HeroImg}
              className=" object-cover hover:-translate-y-2 transition-all duration-500 ease-in-out animate-floating"
            />
          </div>

          <div
            className="  flex items-center justify-center mt-[8rem] mr-[5rem] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-500
"
          >
            <ParcelEstimator />
          </div>
        </div>
        {/* Scrollable Content */}
        <div className="flex flex-col space-y-8 mt-20 ">
          <div className="w-full bg-[#f7fbf8] flex items-center justify-around p-4 font-medium text-xl">
            <div className="text-[#0a150f] flex items-center gap-[10rem]  rounded-xl p-2">
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="RO" svg /> Romania
              </div>
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="HU" svg />
                Ungaria
              </div>{" "}
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="AT" svg />
                Austria
              </div>
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="DE" svg />
                Germania{" "}
              </div>
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="BE" svg />
                Belgia{" "}
              </div>
              <div className="flex items-center gap-2 hover:shadow-[0px_4px_20px_4px_rgba(18,28,135,0.7)] hover:bg-[#121c87b3] rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="GB" svg />
                Anglia
              </div>
            </div>
          </div>

          <div className="w-[15rem] h-[50vh] bg-red-300 flex items-center justify-center">
            <Colors />
          </div>

          <div className="w-[15rem] h-[50vh] bg-green-300 flex items-center justify-center">
            <Colors />
          </div>

          <div className="w-[15rem] h-[50vh] bg-yellow-300 flex items-center justify-center">
            <Colors />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
