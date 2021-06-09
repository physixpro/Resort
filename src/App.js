import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import InfoOne from "./components/InfoOne";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Video />
     <InfoOne />
    </div>
  );
}

export default App;
