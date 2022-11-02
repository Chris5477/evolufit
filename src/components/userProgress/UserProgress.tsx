import { FunctionComponent, ReactElement, useState } from "react";
import calendar from "../../assets/icons/calendar.svg";
import Button from "../button/Button";
import BigLineChart from "../biglinechart/BigLineChart";
import { UserPrgoresProps } from "./variables";
import FormExo from "../form-exo/FormExo";

const UserProgress: FunctionComponent<UserPrgoresProps> = ({ title, isCardio, data }) => {
  const [modalExo, setModalExo] = useState(false);
  let graphicExercice: null | ReactElement = null;

  if (isCardio) {
    graphicExercice = (
      <>
        <BigLineChart isCardio data={data} />
        <Button onClick={() => setModalExo(true)} content='Ajouter une donnée' />
        {modalExo && <FormExo />}
      </>
    );
  }

  return (
    <section className='container user-progres' data-testid='user-progres'>
      <h2 className='uppercase'>{title}</h2>
      <div className='divider'>
        <div className='calendar-logo flex-center'>
          <img src={calendar} alt='calendar' />
        </div>
        <h2 className='uppercase color-light'>7 derniers jours</h2>
        <div className='banner-progres'></div>
      </div>
      {graphicExercice}
    </section>
  );
};

export default UserProgress;
