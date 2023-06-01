import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, patchVotesByArticleId } from "../utils";
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
  const [voteMessage, setVoteMessage] = useState("");

  useEffect(() => {
    fetchArticleById(article_id)
      .then((res) => {
        return res.result;
      })
      .then((article) => {
        setArticle(article[0]);
        setIsLoading(false);
      });
  }, [article_id]);

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
    const newVote = voted + 1;
    patchVotesByArticleId(article_id, 1)
      .then(() => {
        setVoted(newVote);
        setArticle((currArticle) => {
          return { ...currArticle, votes: currArticle.votes + 1 };
        });
        setVoteMessage("Upvoted! Nice!");
      })
      .catch((err) => {
        console.log(err);
        setVoteMessage("Oooops! Something went wrong. Try again later.");
      });
  }

  function handleDownVote() {
    const newVote = voted - 1;
    patchVotesByArticleId(article_id, -1)
      .then(() => {
        setVoted(newVote);
        setArticle((currArticle) => {
          return { ...currArticle, votes: currArticle.votes - 1 };
        });
        setVoteMessage("Downvoted!😢");
      })
      .catch((err) => {
        console.log(err);
        setVoteMessage("Oooops! Something went wrong. Try again later.");
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
              aria-label="upVote"
              className="vote--emoji upVote"
              onClick={handleUpVote}
            />
            <span className="current-votes bold">{article.votes}</span>
            <MoodBadOutlinedIcon
              aria-label="downVote"
              className="vote--emoji downVote"
              onClick={handleDownVote}
            />
            <p>{voteMessage}</p>
          </div>
        </div>
      </article>
      <Comments article_id={article_id} />
    </>
  );
}
