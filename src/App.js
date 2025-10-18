import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aashracomponet from "./compnets/Aashracomponet/Aashracomponet.jsx";
import Header from "./compnets/Header/Header.jsx"; // Assuming this is your header component
// import Photosrolls from './compnets/photosrolls.jsx';
import MissionVision from "./compnets/MissionVision/MissionVision.jsx";
import PhotoSlideshow from "./compnets/PhotoSlideshow/PhotoSlideshow.jsx";
import Initiatives from "./compnets/Initiatives/Initiatives.jsx";
import Donations from "./compnets/Donations/Donations.jsx";
import Celebrations from "./compnets/Celebrations/Celebrations.jsx";
import Footer from "./compnets/Footer/Footer.jsx";
import Activities from "./compnets/Activities/Activities.jsx";
import Religion from "./compnets/Religion/Religion.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Routes>
            <Route path="/" element={<Aashracomponet />} />
            <Route path="/header" element={<Header />} />
            {/* <Route path='/Photoscrolls' element={<Photosrolls />} /> */}
            <Route path="/MissionVision" element={<MissionVision />} />
            <Route path="/PhotoSlideshow" element={<PhotoSlideshow />} />
            <Route path="/Initiatives" element={<Initiatives />} />
            <Route path="/Donationsvvvvvv" element={<Donations />} />
            <Route path="/Celebrations" element={<Celebrations />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Activities" element={<Activities />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
