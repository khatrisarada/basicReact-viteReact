import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12); // Password length
  const [includeNumbers, setIncludeNumbers] = useState(true); // Include numbers
  const [includeSymbols, setIncludeSymbols] = useState(true); // Include special characters
  const [password, setPassword] = useState(""); // Generated password
  const [strength, setStrength] = useState("Weak"); // Password strength

  const calculateStrength = (pass) => {
    if (pass.length < 8) return "Weak";
    if (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
      return includeSymbols && /[!@#$%^&*()_+={}\[\]:;"'<>,.?\/]/.test(pass)
        ? "Strong"
        : "Moderate";
    }
    return "Weak";
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumbers) str += "0123456789";
    if (includeSymbols) str += "!@#$%^&*_-+={}[]~`";

    const mandatory = [];
    if (includeNumbers) mandatory.push("0123456789");
    if (includeSymbols) mandatory.push("!@#$%^&*_-+={}[]~`");

    for (let i = 0; i < length; i++) {
      const charPool = i < mandatory.length ? mandatory[i] : str;
      const char = Math.floor(Math.random() * charPool.length);
      pass += charPool.charAt(char);
    }

    setPassword(pass.split("").sort(() => Math.random() - 0.5).join(""));
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    passwordGenerator(); // Generate password on load and settings change
  }, [length, includeNumbers, includeSymbols, passwordGenerator]);

  useEffect(() => {
    setStrength(calculateStrength(password)); // Update strength
  }, [password]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Password Generator</h1>

        {/* Password Display with Input Field */}
        <div className="bg-gray-700 p-5 rounded-lg shadow text-center relative mb-6">
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            className="w-full bg-transparent text-lg font-mono text-center outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-4 top-2 bg-gray-600 text-gray-200 px-3 py-1 rounded-full hover:bg-gray-500 transition"
          >
            Copy
          </button>
        </div>

        {/* Strength Indicator */}
        <div className="mb-4">
          <div
            className={`h-2 rounded-full transition-all ${
              strength === "Strong"
                ? "bg-green-500 w-full"
                : strength === "Moderate"
                ? "bg-yellow-500 w-2/3"
                : "bg-red-500 w-1/3"
            }`}
          ></div>
          <p className="text-sm text-center mt-2">
            Strength:{" "}
            <span
              className={`font-bold ${
                strength === "Strong"
                  ? "text-green-400"
                  : strength === "Moderate"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {strength}
            </span>
          </p>
        </div>

        {/* Length Slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
        </div>

        {/* Toggle Options */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={passwordGenerator}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
