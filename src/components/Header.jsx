import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <img
        src="../../public/vite.svg"
        alt="v news logo"
        className="header--logo"
      />
      <div className="title">
        <Link to="/"><h1 className="header--title">V News</h1></Link>
        <h2 className="header--subtitle">The juiciest news on the web!</h2>
      </div>
    </section>
  );
}
