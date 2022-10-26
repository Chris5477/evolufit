import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Context from "./components/Context";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import Tabs from "./components/tabs/Tabs";
import Topbar from "./components/Topbar/TopBar";
import Cardio from "./pages/cardio/Cardio";
import Error from "./pages/error/Error";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Planning from "./pages/planning/Planning";
import Signin from "./pages/signin/Signin";
import Training from "./pages/training/Training";
import User from "./pages/user/User";
import "./style.css";
const Profil = React.lazy(() => import("./pages/profil/Profil"));

const App = () => {
  const [ctx, setCtx] = useState(JSON.parse(localStorage.getItem("data")!));

  return (
    <BrowserRouter>
      <Context.Provider value={ctx}>
        <div data-testid='app' className='App container'>
          <Topbar setCtx={setCtx} />
          <Routes>
            <Route path='/evolufit' element={<Homepage />} />
            <Route path='/evolufit/login' element={<Login setCtx={setCtx} />} />
            <Route path='/evolufit/signin' element={<Signin />} />
            <Route
              path='/evolufit/profil'
              element={
                <React.Suspense fallback={<Spinner />}>
                  <Profil />
                </React.Suspense>
              }
            />
            <Route path='/evolufit/cardio' element={<Cardio />} />
            <Route path='/evolufit/training' element={<Training />} />
            <Route path='/evolufit/settings' element={<User setCtx={setCtx} />} />
            <Route path='/evolufit/planning' element={<Planning />} />
            <Route path='*' element={<Error />} />
          </Routes>
          {localStorage.getItem("data") && <Tabs />}
          <Footer />
          <ToastContainer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
