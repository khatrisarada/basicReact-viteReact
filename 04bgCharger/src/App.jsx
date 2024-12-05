import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // State to store the background color

  return (
    <div
      className="w-full h-full"
      style={{
        backgroundColor: color, // Dynamically set the background color
        width: "100vw", // Ensure full viewport width
        height: "100vh", // Ensure full viewport height
      }}
    >
      {/* Button Container */}
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex gap-3 bg-white px-5 py-3 rounded-3xl shadow-2xl border border-gray-300">
          {/* Red Button */}
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          {/* Green Button */}
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          {/* Blue Button */}
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
