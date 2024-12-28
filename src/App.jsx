import Header from "./header";
import Colors from "./colors";
import ParcelEstimator from "./estimator";
import HeroImg from "./assets/hero-img.png";
import ReactCountryFlag from "react-country-flag";
import Value from "./assets/value.svg";
import Location from "./assets/location.svg";
import Time from "./assets/time.svg";
import Footer from "./footer";

function App() {
  // useSmoothScroll(); // Enable smooth scrolling

  return (
    <>
      <div
        data-scroll-container
        className="flex-col w-full min-h-screen bg-gradient-to-tr from-purple-600 to-fuchsia-600 estimator-background"
      >
        {/* Sticky Header */}
        <div className="sticky top-5 z-50 xs:scale-[0.6] justify-center flex md:scale-100">
          <Header />
        </div>

        <div className="flex justify-around items-center transition-all duration-500 ease-in-out xs:scale-75 sm:scale-100 xs:mr-[5rem] sm:mr-0">
          <div className="w-[35rem] xs:-ml-[5rem] sm:ml-[5rem] xs:mt-0 sm:mt-[5rem] xs:space-y-12 sm:space-y-12 xs:scale-[0.8] sm:scale-100 ">
            {/* Text Section */}
            <span className="text-[#374151] text-3xl bg-[#f7fbf8] p-2 rounded-xl text-nowrap font-black ">
              Transport de colete, mai simplu mai usor
            </span>

            {/* Hero Image */}
            <img
              src={HeroImg}
              alt="Hero Image"
              className="object-cover transition-all  duration-500 ease-in-out animate-floating rounded-xl xs:ml-[0rem] sm:ml-0 "
            />
          </div>

          {/* Parcel Estimator */}
          <div className="hidden md:flex items-center justify-center mt-[5rem] mr-[2rem] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-zinc-500">
            <ParcelEstimator />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col space-y-5 mt-20 ">
          {/* Shipping Destinations */}
          <div className="w-full bg-[#f7fbf8] flex  items-center justify-center p-3 font-medium sm:text-xl xs:text-md">
            <div className="text-[#374151] sm:flex items-center sm:gap-[10rem]  rounded-xl p-2 xs:grid xs:grid-cols-3 xs:gap-4 ">
              <div className="flex items-center w rounded-xl px-3 py-1 transition-all duration-500 ease-in-out gap-2">
                <ReactCountryFlag countryCode="RO" svg /> Romania
              </div>
              <div className="flex items-center gap-2 rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="HU" svg />
                Ungaria
              </div>{" "}
              <div className="flex items-center gap-2 rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="AT" svg />
                Austria
              </div>
              <div className="flex items-center gap-2 rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="DE" svg />
                Germania{" "}
              </div>
              <div className="flex items-center gap-2 rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="BE" svg />
                Belgia{" "}
              </div>
              <div className="flex items-center gap-2 rounded-xl px-3 py-1 transition-all duration-500 ease-in-out">
                <ReactCountryFlag countryCode="GB" svg />
                Anglia
              </div>
            </div>
          </div>

          <div className="xs:block sm:hidden xs:scale-[0.82] sm:scale-100 justify-center flex items-center ">
            <ParcelEstimator />
          </div>

          {/* {Estimator/Cards hr} */}

          {/* <div className="  flex items-center justify-center ">
            <span className="text-[#374151] bg-[#f7fbf8] p-2 rounded-xl text-nowrap font-black xs:text-xl">
              Informatii
            </span>
          </div> */}
          {/* Info Cards */}

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 xs:space-y-10 sm:space-y-0 xs:scale-75 sm:scale-100  ">
            <div className="flex flex-col rounded-2xl w-96  shadow-xl xs:-mt-[10rem] md:-mt-0 justify-center items-center bg-[#1F2937] ">
              <figure className="flex justify-center items-center rounded-2xl w-[12rem] animate-floating">
                <img
                  src={Value}
                  alt="Card Preview"
                  className="rounded-t-2xl "
                />
              </figure>
              <div className="flex flex-col p-9 bg-[#f7fbf8] rounded-b-2xl w-full h-[15rem]">
                <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
                  Pret Standard
                </div>
                <div className=" text-lg  text-center text-[#374151]">
                  Pret standard pe ruta: 9lei/kg
                  <div className="text-gray-600 text-sm mt-2">
                    • Coletele sub 20kg sunt taxate cu 180 Ron
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl w-96  shadow-xl xs:-mt-[10rem] md:-mt-0 justify-center items-center bg-[#1F2937]">
              <figure className="flex justify-center items-center rounded-2xl w-[12rem] animate-floating">
                <img src={Time} alt="Card Preview" className="rounded-t-2xl " />
              </figure>
              <div className="flex flex-col p-9 bg-[#f7fbf8] rounded-b-2xl w-full h-[15rem] ">
                <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
                  Program prestabilit
                </div>
                <div className=" text-lg  text-center text-[#374151]">
                  Plecarile din Romania spre Anglia, sunt aranjate dupa un
                  program fix.
                  <div className="text-gray-600 text-sm mt-2">
                    • Colectarile sunt programate dupa harta de tur si retur
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl w-96  shadow-xl xs:-mt-[10rem] md:-mt-0 justify-center items-center bg-[#1F2937]">
              <figure className="flex justify-center items-center rounded-2xl w-[12rem] animate-floating">
                <img
                  src={Location}
                  alt="Card Preview"
                  className="rounded-t-2xl "
                />
              </figure>
              <div className="flex flex-col p-9 bg-[#f7fbf8] rounded-b-2xl w-full h-[15rem]">
                <div className="text-2xl font-bold  text-center text-[#374151] pb-6">
                  Ruta Fixa
                </div>
                <div className=" text-lg  text-center text-[#374151]">
                  Ruta este aceiasi la fiecare plecare si intoarcere.
                </div>
                <div className="text-gray-600 text-sm mt-2">
                  • Ruta este urmatoarea: Romania, Ungaria, Austria, Germania,
                  Belgia, Anglia
                </div>
              </div>
            </div>
          </div>

          {/* {Estimator/Cards hr} */}

          {/* <div className="  flex items-center justify-center ">
            <span className="text-[#374151] bg-[#f7fbf8] p-2 text-center font-black xs:text-xl w-full">
              Informatii Utile
              <hr class="h-px border-0 bg-[#374151] rounded-full" />
              <span className="text-start flex">
                Coletele sub 20 kg sunt taxate cu 180 lei, iar cele peste 20 kg
                incep de la 9 lei/kg.
              </span>
            </span>
            <span className="text-[#374151] bg-[#f7fbf8] p-2 rounded-xl text-nowrap font-black xs:text-xl">
              Coletele sub 20 kg sunt taxate cu 180 lei, iar cele peste 20 kg
              incep de la 9 lei/kg.
            </span>
          </div> */}

          {/* <div className="w-[15rem] h-[50vh] bg-yellow-300 flex items-center justify-center">
            <Colors />
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
