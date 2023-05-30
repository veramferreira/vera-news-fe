import { Link} from "react-router-dom";


export default function Nav() {
  return (
    <section className="nav">
      <Link to="/topics"><h2>Topics</h2></Link>
      <Link to='/articles'><h2>Articles</h2></Link>
    </section>
  );
}
