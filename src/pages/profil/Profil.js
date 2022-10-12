import { users } from "../../mock/users.js";
import { Link } from "react-router-dom";
import athlete3 from "../../assets/athlete/athlete3.png"

const Profil = () => {
  const { firstName } = users[0];

  return (
    <div data-testid='profil-page' className='profil container flex-center'>
        <div className="banner-profil container flex-center">
            <img src={athlete3} alt={'athletes'} />
        </div>
      <section className='info-user container'>
        <h2 className='greet-user'>
          Bonjour <span className='uppercase no-bg-letter'>{firstName}</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae delectus labore itaque eius ipsa obcaecati
          nemo.
        </p>
      </section>
      <section>
        <p className="uppercase">Actualités:</p>

      </section>
     
    </div>
  );
};
export default Profil;
