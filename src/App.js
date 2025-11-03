import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aashracomponet from "./compnets/Aashracomponet/Aashracomponet.jsx";
import Header from "./compnets/Header/Header.jsx"; // Assuming this is your header component
import Activities from "./compnets/Activities/Activities.jsx";
import DonationPage from "./compnets/DonationPage/DonationPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Routes>
            <Route path="/" element={<Aashracomponet />} />
            <Route path="/header" element={<Header />} />
            {/* <Route path='/Photoscrolls' element={<Photosrolls />} /> */}
            <Route path="/Activities" element={<Activities />} />
            <Route path="/Donation" element={<DonationPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
