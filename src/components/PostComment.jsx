export default function PostComment({ article_id }) {
  return (
    <section className="post-comment">
      <h3 className="post-comment--title">Post a comment:</h3>
      <form className="post-comment--form">
        <div className="post-comment--input">
          <label htmlFor="post-comment"> Your message:</label>
          <textarea
            name="post-comment"
            id="post-comment"
            cols="70"
            rows="10"
            placeholder="What are your thoughts?"
          ></textarea>
        </div>
        <button className="post-comment--button">Submit!</button>
      </form>
    </section>
  );
}
