import { useState } from "react";
import { fetchCommentsByArticleId, postCommentByArticleId } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";

export default function PostComment({ article_id, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [postMessage, setPostMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    postCommentByArticleId(article_id, newComment)
      .then((newCommentFromApi) => {
        setComments((currComments) => {
          return [newCommentFromApi, ...currComments];
        });
        setPostMessage("Boom! Comment successfully added! 🎉");
        setNewComment("");
        setIsLoading(false);

        return fetchCommentsByArticleId(article_id);
      })
      .then((commentsFromApi) => {
        setComments(commentsFromApi.comments);
      })
      .catch((err) => {
        setIsLoading(false);
        setPostMessage("Oooops! Something went wrong. Try again later.");
        console.log(err);
      });
  }

  if (isLoading) {
    return (
      <>
        <h3>Magically posting your comment...</h3>
        <p>(this might take a while...🫣)</p>
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
    <section className="post-comment">
      <h3 className="post-comment--title">Post a comment:</h3>
      <form className="post-comment--form" onSubmit={handleSubmit}>
        <div className="post-comment--input">
          <label className="post-comment--label" htmlFor="post-comment">
            {" "}
            Your message:
          </label>
          <textarea
            className="comment-textarea"
            name="post-comment"
            id="post-comment"
            cols="70"
            rows="10"
            placeholder="What are your thoughts?"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          ></textarea>
        </div>
        <button className="post-comment--button" type="submit">
          Submit!
        </button>
        <p>{postMessage}</p>
      </form>
    </section>
  );
}
