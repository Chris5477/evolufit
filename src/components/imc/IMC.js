import { useState } from "react";
import eye from "../../assets/icons/eye.svg";
import ModalInfo from "../Modal-info/ModalInfo";

const title = "Indice de masse corporelle ?";
const content = `Qu'est ce que l'IMC. L'indice de masse corporelle (IMC) mesure la corpulence. Il se calcule à partir de ton poids et de ta taille. Pour calculer l'IMC, il suffit de diviser ton poids (kg) par ta taille (m) au carré. Un IMC idéal serait compris entre 18.5 à 24.8`;
const other = (
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
  <input className='range' type='range' defaultValue='62' />
</div>
)
const IMC = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  return (
    <section className='info-imc container flex-center' data-testid='info-imc'>
      <h2>
        Mon IMC <img onClick={openModal} src={eye} alt='more' />
      </h2>

      <h3>31.8</h3>
      <p>En fonction de votre taille et de poids</p>

   {other}
      {modal && <ModalInfo title={title} content={content} other={other} setModal={setModal} />}
    </section>
  );
};

export default IMC;
