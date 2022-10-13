const Article = ({ title, article, urlImg }) => {
  return (
    <article data-testid='slide' className='item'>
      <img src={urlImg} alt='illustration' />
      <aside className="overlay">
        <h3>{title}</h3>
        <p>{article}</p>
      </aside>
    </article>
  );
};

export default Article;
