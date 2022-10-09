import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </div>
    </BrowserRouter>
  );
};

export default App;
