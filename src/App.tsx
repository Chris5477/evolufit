import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import "./style.css";

const App = () => {
  return (
    <div data-testid='app' className='App container'>
      <Topbar />  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
