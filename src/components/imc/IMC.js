import eye from "../../assets/icons/eye.svg";

const IMC = () => {
  return (
    <section className='info-imc container flex-center' data-testid='info-imc'>
      <h2>
        Mon IMC <img src={eye} alt='more' />
      </h2>

      <h3>31.8</h3>
      <p>En fonction de votre taille et de poids</p>

      <div className='imc'>
        <div className='part-imc'>
          <p>Insuffisance Pondérale</p>
        </div>
        <div className='part-imc'>
          <p>Corpulence Normale</p>
        </div>
        <div className='part-imc'>
          <p>Surpoids</p>
        </div>
        <div className='part-imc'>
          <p>Obésité</p>
        </div>
        <input className='range' type='range' defaultValue='90' />
      </div>
    </section>
  );
};

export default IMC
