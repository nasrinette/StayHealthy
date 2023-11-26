import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Consult from "./pages/Consult";
import Guide from "./pages/Guide";
import Checkup from "./pages/Checkup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="services" element={<Services />} />
          <Route path="services/booking" element={<Booking />} />
          <Route path="services/consult" element={<Consult />} />
          <Route path="services/guide" element={<Guide />} />
          <Route path="services/checkup" element={<Checkup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
