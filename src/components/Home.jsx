import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h2>• Welcome to V News •</h2>
      <Link to='/topics'><h4 className="home--link">Go Explore!</h4></Link>
    </section>
  );
}
