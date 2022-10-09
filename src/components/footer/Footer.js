import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/insta.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer data-testid='footer' className='container'>
      <h2 className='main-title'>Evolu'fit</h2>
      <div className='container-footer container'>
        <ul>
          <li>Qui sommes-nous </li>
          <li>Nous contacter</li>
          <li>Conditions générales d'utilisation </li>
        </ul>
        <div className='networks'>
          <img src={facebook} alt='facebook' />
          <img src={youtube} alt='youtube' />
          <img src={twitter} alt='twitter' />
          <img src={instagram} alt='instagram' />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
