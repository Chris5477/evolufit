const Banner = ({picture}) => {
  return (
    <div className='container bannier' data-testid="banner">
      <img src={picture} alt='activity' width='100%' height={200} />
    </div>
  );
};

export default Banner