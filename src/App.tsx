import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Topbar from "./components/Topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div data-testid='app' className='App container'>
      <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
