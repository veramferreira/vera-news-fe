import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetchArticles()
      .then(({ articles }) => {
        return articles;
      })
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>waiting for your data to magically appear</h3>
        <BeatLoader
          color={color}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </>
    );
  }

  return (
    <section className="articles-list">
      <h2>Articles</h2>
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
                <img
                  src={article.article_img_url}
                  alt={`something related to ${article.title}`}
                />
                <p>By: {article.author}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
