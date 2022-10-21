import { toast, ToastContainer } from "react-toastify";
import calendar from "../../assets/icons/calendar.svg";
import Button from "../button/Button";
import Dataline from "../dataline/Dataline";

const UserProgress = ({ title, isCardio, data }) => {
  let graphicExercice = null;
  if (isCardio) {
    graphicExercice = (
      <>
        <Dataline isCardio data={data} />
        <Button
          onClick={() => toast.warn("Fonctionnalité bientôt disponible", { autoClose: 2000, theme: "colored" })}
          content='Visualiser'
        />
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
      <ToastContainer />
    </section>
  );
};

export default UserProgress;
