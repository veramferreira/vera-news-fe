import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetchCommentsByArticleId(article_id)
      .then((res) => {
        return res.comments;
      })
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>waiting for the comments to magically appear</h3>
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
    <section className="comments">
      <h2 className="comments--title">Comments:</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comments--card" key={comment.comment_id}>
              <h4 className="comments--author">{comment.author} says:</h4>
              <p className="comments--body">{comment.body}</p>
              <div className="comments--stats">
                <p className="comments--date">
                  Posted on: {comment.created_at}
                </p>
                <p className="comments--votes">Votes: {comment.votes}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
