import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import close from "../../assets/icons/close.svg";
import Button from "../button/Button";

const Timer = ({ setModal }) => {
  const [duration, setDuration] = useState(30);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart && duration > 0) {
      setTimeout(() => setDuration(duration - 1), 1000);
    } else {
      clearTimeout();
    }
  }, [isStart, duration]);

  const changeDuration = (operator) => {
    operator === "+" ? setDuration(duration + 15) : setDuration(duration - 15);
  };

  const startOrStopTimer = (bool) => {
    setIsStart(bool);
  };

  return createPortal(
    <div className='modal timer container flex-center posFixed' data-testid='timer'>
      <img className='close-modal' onClick={() => setModal(false)} src={close} alt='cross' />
      <h2>{duration}</h2>
      <div className='container-btns container'>
        <Button onClick={() => changeDuration("+")} content={"+"} />
        <Button onClick={() => changeDuration("-")} content={"-"} />
        <Button onClick={() => startOrStopTimer(true)} content={"Start"} />
        {isStart ? (
          <Button onClick={() => startOrStopTimer(false)} content={"Stop"} />
        ) : (
          <Button onClick={() => setDuration(30)} content={"Reset"} />
        )}
      </div>
    </div>,
    document.body
  );
};

export default Timer;
