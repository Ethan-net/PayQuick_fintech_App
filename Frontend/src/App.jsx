import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTPInput from "./pages/OTPInput/OTPInput.jsx";
import Home from "./components/HomePage/Home.js"; // Import the Home component

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
          <Route path="/otp" element={<OTPInput />} />{" "}
          {/* Route for the OTPInput page */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
