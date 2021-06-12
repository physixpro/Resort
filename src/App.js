import './App.css';
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import InfoOne from "./components/InfoOne";
import Cards from "./components/Cards";
import About from "./components/About";
import Explore from "./components/Explore";
import Booking from "./components/Booking";

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
    </div>
  );
}

export default App;
