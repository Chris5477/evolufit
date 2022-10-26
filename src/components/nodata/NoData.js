import Button from "../button/Button";

const NoData = ({title}) => {
  return (
    <div className='no-data' data-testid='no-data'>
      <h2>{title}</h2>
      <p>Aucune donnée à afficher</p>
      <Button onClick={() => null} content='Ajouter' />
    </div>
  );
};

export default NoData;
