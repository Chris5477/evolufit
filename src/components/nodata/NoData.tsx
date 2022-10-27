import { FunctionComponent } from "react";
import Button from "../button/Button";
import { NoDataProps } from "./variables";

const NoData: FunctionComponent<NoDataProps> = ({ title }) => {
  return (
    <div className='no-data' data-testid='no-data'>
      <h2>{title}</h2>
      <p>Aucune donnée à afficher</p>
      <Button onClick={() => null} content='Ajouter' />
    </div>
  );
};

export default NoData;
