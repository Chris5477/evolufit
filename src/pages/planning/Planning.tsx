import { useContext } from "react";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import Context from "../../components/Context";
import {Program } from "./variables";

const Planning = () => {
  const { week } = useContext(Context).planning;

  return (
    <section className='planning container' data-testid='planning'>
      <h2 className='uppercase txt-center'>Votre programme</h2>

      <div className='day-week container uppercase'>
        <ul className='container txt-center'>
          <div>
            {week.map(({ day, objectif, program } :Program , index : number) => (
              <div className='day' key={`index ${index}`}>
                <h3 className='txt-center color-light'>
                  {day} -- {objectif}
                </h3>

                {program.map((exo, index) => (
                  <li key={`index ${index}`}>{exo}</li>
                ))}
              </div>
            ))}
          </div>
        </ul>
        <Button
          content={"Modifier"}
          onClick={() => toast.warn("Fonctionnalité bientôt disponible", { autoClose: 2000, theme: "colored" })}
        />
      </div>
    </section>
  );
};

export default Planning;
