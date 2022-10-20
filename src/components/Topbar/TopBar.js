import avatar from "../../assets/icons/avatar.svg";
import { Link } from "react-router-dom";
import timer from "../../assets/icons/timer.svg";
import { users } from "../../mock/users";
import { useState } from "react";
import Timer from "../timer/Timer";

const TopBar = () => {
  const myPhoto = users[0].profilPicture != null ? users[0].profilPicture : avatar;

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return localStorage.getItem("token") ? (
    <header data-testid='topbar' className='top-bar logged container white-bg'>
      <div className='container-avatar'>
        <Link to='/settings'>
          <img src={myPhoto} alt='avatar' width={24} height={24} />
        </Link>
      </div>
      <Link to='/'>
        <h1>Evolu'fit</h1>
      </Link>
      <div onClick={openModal} className='timer'>
        <img src={timer} alt='timer' />
      </div>
      {modal && <Timer setModal={setModal} />}
    </header>
  ) : (
    <header data-testid='topbar' className='top-bar container white-bg'>
      <Link to='/'>
        <h1>Evolu'fit</h1>
      </Link>
      <Link className='link-button uppercase' to={"/login"}>
        Connexion
      </Link>
      <Link className='link-button uppercase' to={"/signin"}>
        S'inscrire
      </Link>
    </header>
  );
};

export default TopBar;
