import { useContext, useState } from "react";
import eye from "../../assets/icons/eye.svg";
import Context from "../Context";
import ModalInfo from "../Modal-info/ModalInfo";
import { title, content, getVisualIMC } from "./variables";

const IMC = () => {
  const user = useContext(Context).body;
  const weight: number = user.weight.length > 0 ? user.weight.at(-1).weight : 0;
  const size: number = user.size / 100;
  const imc: number = Number((weight / size ** 2).toFixed(2));
  const rangeImc = (imc * 100) / 40;
  const actualIMC = getVisualIMC(rangeImc);

  const [modal, setModal] = useState(false);

  return (
    <section className='info-imc container flex-center' data-testid='info-imc'>
      <h2>
        Mon IMC <img onClick={() => setModal(true)} src={eye} alt='more' />
      </h2>
      <h3>{imc}</h3>
      <p>En fonction de votre taille et de poids</p>
      {actualIMC}
      {modal && <ModalInfo title={title} content={content} other={actualIMC} setModal={setModal} />}
    </section>
  );
};

export default IMC;
