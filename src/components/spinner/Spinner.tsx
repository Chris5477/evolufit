import { FunctionComponent } from "react";

const Spinner: FunctionComponent = () => (
  <div className='spinner posFixed flex-center'>
    <span className='dot dot-one'>.</span>
    <span className='dot dot-two'>.</span>
    <span className='dot dot-three'>.</span>
  </div>
);

export default Spinner;
