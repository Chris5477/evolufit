import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Tabs from "./components/tabs/Tabs";
import Topbar from "./components/Topbar/TopBar";
import Cardio from "./pages/cardio/Cardio";
import Error from "./pages/error/Error";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Profil from "./pages/profil/Profil";
import Signin from "./pages/signin/Signin";
import Training from "./pages/training/Training";
import User from "./pages/user/User";
import "./style.css";

const App = () => {

  return (
    <BrowserRouter>
      <div data-testid='app' className='App container'>
      <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/cardio' element={<Cardio />} />
          <Route path='/training' element={<Training />} />
          <Route path='/settings' element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {localStorage.getItem("token") && <Tabs />}
        <Footer /> 
      </div>
    </BrowserRouter>
  );
};

export default App;
