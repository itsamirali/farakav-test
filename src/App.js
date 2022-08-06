import "./App.css";
import Register from "./Component/Register";
import videoSrc from "./Static/master.m3u8"

function App() {
  return (
    <div className="appMainContainer">
        <video autoPlay loop muted width="352" height="198">
            <source src={videoSrc} type="application/x-mpegURL"></source>
        </video>
      <Register />
    </div>
  );
}

export default App;
