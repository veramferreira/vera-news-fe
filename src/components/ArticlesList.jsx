import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
      .then(({ articles }) => {
        return articles;
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  return (
    <section className="articles-list">
      <h2>Articles</h2>
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <img
                src={article.article_img_url}
                alt={`something related to ${article.title}`}
              />
              <p>By: {article.author}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
