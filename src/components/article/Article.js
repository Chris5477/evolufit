
export const handleClick = () => null

const Article = ({ title, article, urlImg }) => {
  return (
    <article onClick={handleClick} data-testid='slide' className='item'>
      <img src={urlImg} alt='illustration' />
      <aside className='overlay'>
        <h3 className="color-light">{title}</h3>
        <p className="color-light">{article}</p>
      </aside>
    </article>
  );
};

export default Article;
