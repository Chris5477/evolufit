import UserProgress from "../userProgress/UserProgress";
import { useContext } from "react";
import Context from "../Context";
import NoData from "../nodata/NoData";
import { TrainingProps } from "./variables";

const Exocardio = () => {
  const user = useContext(Context);
  const training = user[2];

  if (user[2].length > 0) {
    return (
      <section className='exocardio container' data-testid='exocardio'>
        {training.map((data: TrainingProps, index: number) => (
          <UserProgress key={`index ${index}`} title={data.name} isCardio data={data.week} />
        ))}
      </section>
    );
  } else {
    return <NoData />;
  }
};

export default Exocardio;
