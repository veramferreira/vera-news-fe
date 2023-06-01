import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";
import Comments from "./Comments";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MoodBadOutlinedIcon from "@mui/icons-material/MoodBadOutlined";

export default function ArticleCard() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const [voted, setVoted] = useState(0);

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

  function handleUpVote() {
    setVoted((currVotes) => {
      const newVote = currVotes + 1;
      setArticle((currArticle) => {
        return { ...currArticle, votes: newVote };
      });
      return newVote;
    });
  }

  function handleDownVote() {
    setVoted((currVotes) => {
      if (currVotes !== 0) {
        const newVote = currVotes - 1;
        setArticle((currArticle) => {
          return { ...currArticle, votes: newVote };
        });
        return newVote;
      } else {
        return currVotes;
      }
    });
  }

  const { title, author, body, created_at, topic, votes, article_img_url } =
    article;

  return (
    <>
      <article className="article">
        <h2 className="article--title">{title}</h2>
        <p className="article--topic">• {topic} •</p>
        <p className="article--author">posted by: {author}</p>
        <img
          className="article--img"
          src={article_img_url}
          alt={`something related to ${title}`}
        />
        <div className="article--body">
          <p>{body}</p>
          <p className="bold">Did you like this article?</p>
          <div className="article--votes">
            <InsertEmoticonOutlinedIcon
              className="vote--emoji upVote"
              onClick={handleUpVote}
            />
            <span className="current-votes bold">{voted}</span>
            <MoodBadOutlinedIcon
              className="vote--emoji downVote"
              onClick={handleDownVote}
            />
          </div>
        </div>
      </article>
      <Comments article_id={article_id} />
    </>
  );
}
