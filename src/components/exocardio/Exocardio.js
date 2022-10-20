import UserProgress from "../userProgress/UserProgress";
import { useContext } from "react";
import Context from "../Context";

const Exocardio = () => {

  const user = useContext(Context);
  const training = user[7].week


  return (
    <section className='exocardio container' data-testid='exocardio'>
      {training.map((data, index) => (
        <UserProgress key={`index ${index}`} title={data.name} isCardio data={data.week} />
      ))}
    </section>
  );
};

export default Exocardio;
