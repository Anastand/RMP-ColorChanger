import { useState } from "react";
import ButtonCard from "./components/ButtonCard";

export default function App() {
  const [bgColor, setbgColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-100 "
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <ButtonCard bgColor={bgColor} setbgColor={setbgColor} />
          {/* <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white text-black px-3 py-3 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              onClick={() => setbgColor("red")}
            >
              RED
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              onClick={() => setbgColor("blue")}
            >
              BLUE
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              onClick={() => setbgColor("yellow")}
            >
              YELLOW
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
