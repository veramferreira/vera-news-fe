import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils";

export default function ArticleCard() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((res) => {
        return res.result[0];
    }).then((article) => {
        setArticle(article)
    })
  }, [])
  
  console.log(article);
  return <h2>This is an article</h2>;
}
