import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { TabProps } from "./variables";

const Tab: FunctionComponent<TabProps> = ({ pathname, setPathname, txtAlt, picture, url }) => {
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
