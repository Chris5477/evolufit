import UserProgress from "../userProgress/UserProgress";
import { training } from "../../mock/users";

const Exocardio = () => {
  return (
    <section className='exocardio container' data-testid='exocardio'>
      {training.map((data, index) => (
        <UserProgress key={`index ${index}`} title={data.name} isCardio data={data.week} />
      ))}
    </section>
  );
};

export default Exocardio;
