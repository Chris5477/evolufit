import calendar from "../../assets/icons/calendar.svg";
import Button from "../button/Button";
import Dataline from "../dataline/Dataline";

const UserProgress = ({ title, isCardio, data }) => {
  let graphicExercice = null;
  if (isCardio) {
    graphicExercice = (
      <>
        <Dataline isCardio data={data} />
        <Button onClick={() => null} content='Visualiser' />
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
        <h2 className='uppercase'>7 derniers jours</h2>
        <div className='banner-progres'></div>
      </div>
      {graphicExercice}
    </section>
  );
};

export default UserProgress;
