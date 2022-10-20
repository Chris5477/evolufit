import avatar from "../../assets/icons/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import timer from "../../assets/icons/timer.svg";
import { useContext, useState } from "react";
import Timer from "../timer/Timer";
import logout from "../../assets/icons/logout.svg";
import Context from "../Context";
import Button from "../button/Button";

const TopBar = () => {
  const user = useContext(Context);
  const navigate = useNavigate();

  let myPhoto = avatar;

  if (user === undefined) {
    const { profilPicture } = user[0];
    myPhoto = profilPicture;
  }

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const disconnect = () => {
    localStorage.clear();
    navigate("/");
  };

  return localStorage.getItem("token") ? (
    <header data-testid='topbar' className='top-bar logged container flex-center white-bg'>
      <div className='container-avatar'>
        <Link to='/settings'>
          <img src={myPhoto} alt='avatar' width={24} height={24} />
        </Link>
      </div>
      <Link to='/'>
        <h1>Evolu'fit</h1>
      </Link>
      <div className='timer'>
      <img onClick={disconnect} src={logout} alt='disconnect' />
        <img onClick={openModal} src={timer} alt='timer' />
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
