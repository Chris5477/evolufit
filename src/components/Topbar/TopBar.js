import avatar from "../../assets/icons/avatar.svg";
// import Button from "./Button";
import { Link } from "react-router-dom";
import menu from "../../assets/icons/menu.svg";

const TopBar = () => {
  return localStorage.getItem("token") ? (
    <header data-testid='topbar' className='top-bar logged container white-bg'>
      <div className='container-avatar'>
        <img src={avatar} alt='avatar' />
      </div>
      <Link to='/'>
        <h1>Evolu'fit</h1>
      </Link>
      <div className='menu-btn'>
        <img src={menu} alt='menu burger' />
      </div>
    </header>
  ) : (
    <header data-testid="topbar" className='top-bar container white-bg'>
      <Link to='/'>
        <h1>Evolu'fit</h1>
      </Link>
      <Link className="link-button uppercase" to={"/login"}>
				Connexion
			</Link>
			<Link className="link-button uppercase" to={"/new-account"}>
				S'inscrire
			</Link>
    </header>
  );
};

export default TopBar;
