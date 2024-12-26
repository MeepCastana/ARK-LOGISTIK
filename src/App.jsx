import Header from "./header";
import Colors from "./colors";
import ParcelEstimator from "./estimator";

function App() {
  // useSmoothScroll(); // Enable smooth scrolling

  return (
    <>
      <div data-scroll-container className="flex-col w-full min-h-screen">
        {/* Sticky Header */}
        <div className="sticky top-5 z-50 w-full justify-center flex">
          <Header />
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col space-y-8 p-10">
          <div className=" bg-purple-300 flex items-center justify-center">
            <ParcelEstimator />
          </div>
          <div className="w-[15rem] h-[50vh] bg-blue-300 flex items-center justify-center">
            <Colors />
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
