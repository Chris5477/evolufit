import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import Context from "../../components/Context";
import { Program } from "./variables";

const Planning = () => {
  const { week } = useContext(Context).planning;
  const [planning, setPlanning] = useState(week);
  const [exercice, setExercice] = useState("");
  const [visibilityBtn, setVisibilityBtn] = useState(false);

  const modifyDay = () => {
    setVisibilityBtn(true);
  };

  const save = () => {
    toast.warn("Fonctionnalité bientôt disponible", { autoClose: 2000, theme: "colored" });
    setVisibilityBtn(false)
  };

  const addExercice = (index: number) => {
    const tempArr = planning;
    tempArr[index].program.push(prompt("Quelle exercice !"));
    setPlanning([...tempArr]);
  };

  const removeExercice = (index: number, exercice: string) => {
    const tempArr = planning;
    const deleteExo = planning[index].program.filter((exo: string) => exo !== exercice);
    tempArr[index].program = deleteExo;
    setPlanning([...tempArr]);
  };

  return (
    <section className='planning container' data-testid='planning'>
      <h2 className='uppercase txt-center'>Votre programme</h2>

      <div className='day-week container uppercase'>
        <ul className='container txt-center'>
          <div>
            {week.map(({ day, objectif, program }: Program, index: number) => (
              <div className='day' key={`index ${index}`}>
                <h3 className='txt-center color-light'>
                  {day} -- {objectif}
                </h3>

                {program.map((exo, indice) => (
                  <li key={`index ${indice}`}>
                    {exo}
                    {visibilityBtn && <Button content='X' onClick={() => removeExercice(index, exo)} />}
                  </li>
                ))}
                {visibilityBtn ? (
                  <div className="flex-center">
                    <Button content='Ajouter' onClick={() => addExercice(index)} />
                    <Button content="Valider" onClick={save} />
                  </div>
                ) : (
                  <Button content="Modifier" onClick={modifyDay} />
                )}
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Planning;
