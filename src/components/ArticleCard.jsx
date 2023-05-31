import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";
import Comments from "./Comments";

export default function ArticleCard() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetchArticleById(article_id)
      .then((res) => {
        return res.result;
      })
      .then((article) => {
        setArticle(article[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>waiting for this article to magically appear</h3>
        <BeatLoader
          color={color}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </>
    );
  }

  const { title, author, body, created_at, topic, votes, article_img_url } =
    article;

  return (
    <>
      <article className="article">
        <h2 className="article--title">{title}</h2>
        <p className="article--topic">• {topic} •</p>
        <img
          className="article--img"
          src={article_img_url}
          alt={`something related to ${title}`}
        />
        <p className="article--body">{body}</p>
        <p className="article--author">written by: {author}</p>
      </article>
      <Comments article_id={article_id} />
    </>
  );
}
