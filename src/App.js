import './App.css';
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import InfoOne from "./components/InfoOne";
import Cards from "./components/Cards";
import About from "./components/About";
import Explore from "./components/Explore";
import Booking from "./components/Booking";
import SocialMedia from './components/SocialMedia';
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Video />
     <InfoOne />
     <Cards />
     <About />
     <Explore />
     <Booking />
     <SocialMedia/>
     <SimpleSlider/>
    </div>
  );
}

export default App;
