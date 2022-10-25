import { useEffect, useState } from "react";
import Tab from "../tab/Tab";
import { tabsLink } from "./utils/variables";

const Tabs = () => {
  const [pathname, setPathname] = useState("/profil");

  const backHome = () => setPathname("/evolufit/");
  const listPaths = tabsLink()

  useEffect(() => {
    document.querySelector(".top-bar h1").addEventListener("click", backHome);
  });

  return (
    <nav data-testid='tabs' className='tabs-navigation posFixed'>
      {listPaths.map(({ id, txtAlt, url, picture }) => (
        <Tab key={id} pathname={pathname} setPathname={setPathname} txtAlt={txtAlt} url={url} picture={picture} />
      ))}
    </nav>
  );
};
export default Tabs;
