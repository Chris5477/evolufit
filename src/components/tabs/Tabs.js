import profil from "../../assets/icons/profil.svg";
import cardio from "../../assets/icons/cardio.svg";
import muscu from "../../assets/icons/muscu.svg";
import planning from "../../assets/icons/planning.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const url = window.location.pathname;
  const [pathname, setPathname] = useState(url);

  const backHome = () => setPathname("/evolufit/");

  useEffect(() => {
    document.querySelector(".top-bar h1").addEventListener("click", backHome);
  });

  return (
    <nav data-testid='tabs' className='tabs-navigation posFixed'>
      <li
        onClick={() => setPathname("/profil")}
        className={`tab flex-center ${pathname === "/profil" && "active-tab"}`}
      >
        <Link className='flex-center' to={"/evolufit/profil"}>
          <img className='logo-nav' src={profil} alt='account' />
        </Link>
      </li>
      <li
        onClick={() => setPathname("/cardio")}
        className={`tab flex-center ${pathname === "/cardio" && "active-tab"}`}
      >
        <Link className='flex-center' to={"/evolufit/cardio"}>
          <img className='logo-nav' src={cardio} alt='cardio' />
        </Link>
      </li>
      <li
        onClick={() => setPathname("/training")}
        className={`tab flex-center ${pathname === "/training" && "active-tab"}`}
      >
        <Link className='flex-center' to={"/evolufit/training"}>
          <img className='logo-nav' src={muscu} alt='muscu' />
        </Link>
      </li>
      <li
        onClick={() => setPathname("/planning")}
        className={`tab flex-center ${pathname === "/planning" && "active-tab"}`}
      >
        <Link className='flex-center' to={"/evolufit/planning"}>
          <img className='logo-nav' src={planning} alt='planning' />
        </Link>
      </li>
    </nav>
  );
};

export default Tabs;
