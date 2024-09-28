import { HiBars2 } from "react-icons/hi2";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex flex-col py-5 px-9">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-3 items-center cursor-pointer">
          <img
            src={
              "https://cdn.prod.website-files.com/638543cc8a0cfcfa0f6c7552/64ea1e3351f06dcb4b1b71c7_Webflow%20Webclip%403x.png"
            }
            className="h-[50px] w-[50px] hover:-rotate-6"
          />
          <p className="text-2xl font-bold font-serif">Personify</p>
        </div>
        <Button variant={"ghost"} className="border rounded-full p-3">
          <HiBars2 />
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 p-2 gap-8 sm:grid-cols-1 md:grid-cols-2 cursor-pointer pt-8">
        <div className="relative h-auto w-auto">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-xl h-full w-full"
          />
          <div className="absolute bottom-10 lg:bottom-14   w-full grid grid-cols-1 px-8 lg:px-12 lg:pb-3 md:pb-3 md:bottom-4 ">
            <p className="lg:text-5xl md:text-3xl sm:text-xl font-extrabold">
              Lana
            </p>
            <p className="lg:text-2xl md:text-xl  sm:text-sm font-extrabold">
              UI/UX Designer
            </p>
          </div>
          <div
            className="h-full w-full z-50  absolute bottom-0"
            style={{
              boxShadow: "inset 0 -8px 80px 2px rgba(255, 255, 255, 0.6)",
            }}
          />
        </div>
        <div className="relative h-auto w-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww"
            className="rounded-xl h-full w-full"
          />
          <div className="absolute bottom-10 lg:bottom-14   w-full grid grid-cols-1 px-8 lg:px-12 lg:pb-3 md:pb-3 md:bottom-4 ">
            <p className="lg:text-5xl md:text-3xl sm:text-xl font-extrabold">
              Robin
            </p>
            <p className="lg:text-2xl md:text-xl  sm:text-sm font-extrabold">
              UI Developer
            </p>
          </div>
          <div
            className="h-full w-full z-50  absolute bottom-0"
            style={{
              boxShadow: "inset 0 -8px 80px 2px rgba(255, 255, 255, 0.6)",
            }}
          />
        </div>
        <div className="relative h-auto w-auto">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
            className="rounded-xl h-full w-full"
          />
          <div className="absolute bottom-10 lg:bottom-14   w-full grid grid-cols-1 px-8 lg:px-12 lg:pb-3 md:pb-3 md:bottom-4 ">
            <p className="lg:text-5xl md:text-3xl sm:text-xl font-extrabold">
              Sam
            </p>
            <p className="lg:text-2xl md:text-xl  sm:text-sm font-extrabold">
              Architect
            </p>
          </div>
          <div
            className="h-full w-full z-50  absolute bottom-0"
            style={{
              boxShadow: "inset 0 -8px 80px 2px rgba(255, 255, 255, 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
