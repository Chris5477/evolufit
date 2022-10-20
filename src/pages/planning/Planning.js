import { planning } from "../../mock/planning";
import Button from "../../components/button/Button";

const Planning = () => {
  return (
    <section className='planning container' data-testid='planning'>
      <h2 className='uppercase txt-center'>Votre programme</h2>

      <div className='day-week container uppercase'>
        <ul className='container txt-center'>
          {planning.map(({ week }, index) => (
            <div key={index}>
              {week.map(({ day, objectif, program }, index) => (
                <div className='day' key={`index ${index}`}>
                  <h3 className='txt-center'>
                    {day} -- {objectif}
                  </h3>

                  {program.map((exo, index) => (
                    <li key={`index ${index}`}>{exo}</li>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </ul>
        <Button content={"Modifier"} handleClick={() => null} />
      </div>
    </section>
  );
};

export default Planning;
