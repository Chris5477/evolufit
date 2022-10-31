import avatar from "../../assets/icons/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import timer from "../../assets/icons/timer.svg";
import { FunctionComponent, useContext, useState } from "react";
import Timer from "../timer/Timer";
import logout from "../../assets/icons/logout.svg";
import Context from "../Context";
import "react-toastify/dist/ReactToastify.css";
import { disconnect, TopBarProps } from "./variables";

const TopBar: FunctionComponent<TopBarProps> = ({ setCtx }) => {
  const user = useContext(Context)?.user;
  const navigate = useNavigate();
  let myPhoto = user != undefined ? user?.profilPicture : avatar;

  const [modal, setModal] = useState(false);

  return localStorage.getItem("data") ? (
    <header data-testid='topbar' className='top-bar logged container flex-center white-bg'>
      <div className='container-avatar'>
        <Link to='/evolufit/settings'>
          <img src={myPhoto} alt='avatar' width={24} height={24} />
        </Link>
      </div>
      <Link to='/evolufit'>
        <h1>Evolu'fit</h1>
      </Link>
      <div className='timer'>
        <img onClick={() => disconnect(navigate, setCtx, "Déconnexion en cours !")} src={logout} alt='disconnect' />
        <img className='timer-picture' onClick={() => setModal(true)} src={timer} alt='timer' />
      </div>
      {modal && <Timer setModal={setModal} />}
    </header>
  ) : (
    <header data-testid='topbar' className='top-bar container white-bg'>
      <Link to='/evolufit/'>
        <h1>Evolu'fit</h1>
      </Link>
      <Link className='link-button uppercase' to={"/evolufit/login"}>
        Connexion
      </Link>
      <Link className='link-button uppercase' to={"/evolufit/signin"}>
        S'inscrire
      </Link>
    </header>
  );
};

export default TopBar;
