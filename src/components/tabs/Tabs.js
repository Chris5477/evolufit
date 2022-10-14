import profil from "../../assets/icons/profil.svg"
import cardio from "../../assets/icons/cardio.svg"
import muscu from "../../assets/icons/muscu.svg"
import { useState } from "react"
import { Link } from "react-router-dom"


const Tabs = () => {

    const url = window.location.pathname
    const [pathname, setPathname] = useState(url)
   


    return(
        <nav data-testid="tabs" className="tabs-navigation">
        <li  onClick={() => setPathname("/profil")} className={`tab flex-center ${pathname === "/profil" && "active-tab"}`}>
            <Link className="flex-center" to={"/profil"}>
                <img className="logo-nav" src={profil} alt="account" />
            </Link>
        </li>
        <li onClick={() => setPathname("/cardio")} className={`tab flex-center ${pathname === "/cardio" && "active-tab"}`}>
            <Link className="flex-center" to={"/cardio"}>
                <img className="logo-nav" src={cardio} alt="cardio" />
            </Link>
        </li>
        <li onClick={() => setPathname("/training")} className={`tab flex-center ${pathname === "/training" && "active-tab"}`}>
            <Link className="flex-center" to={"/training"}>
                <img className="logo-nav" src={muscu} alt="muscu" />
            </Link>
        </li>
    </nav>
    )
}

export default Tabs