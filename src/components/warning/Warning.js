const Warning = () => {
  return (
    <p className='warning' data-testid='warning'>
      Attention : <br />
      Afin d'avoir une cohérence sur les courbes, l'unité pour la distance est daM. Pour convertir des daM en km, il
      suffit de diviser par 100
    </p>
  );
};

export default Warning;
