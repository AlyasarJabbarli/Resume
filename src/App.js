import Header from "./components/header/Header";
import './App.css'
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <Header/>
        <div className="all">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
