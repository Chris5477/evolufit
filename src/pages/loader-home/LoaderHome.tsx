import { useEffect, useRef, useState } from "react";
import heart from "../../assets/icons/heart.svg";
import body from "../../assets/icons/body.svg";

const LoaderHome = () => {
  const arr = [heart, body];

  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null!);
  const upIndex = index < 1;

  useEffect(() => {
    setTimeout(() => setIndex(index + 1), 1000);
  }, [upIndex]);

  useEffect(() => {

    setTimeout(() => (ref.current.style.display = "none"), 6000);
  }, []);

  return (
    <div ref={ref} className='loader-home flex-center posFixed' data-testid='loader-home'>
      {index < 2 && (
        <div className='cadre'>
          <img className='scalup' src={arr[index]} alt='logo' />
        </div>
      )}
      <h1 className='color-light'>EVOLU'FIT</h1>
    </div>
  );
};

export default LoaderHome;
