import { Link } from "react-router-dom";

const Tab = ({ pathname, setPathname, txtAlt, picture, url }) => {
  return (
    <li
      onClick={() => setPathname(`/${txtAlt}`)}
      className={`tab flex-center ${pathname === `/${txtAlt}` && "active-tab"}`}
    >
      <Link className='flex-center' to={url}>
        <img className='logo-nav' src={picture} alt={txtAlt} />
      </Link>
    </li>
  );
};

export default Tab;
