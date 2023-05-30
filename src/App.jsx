import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import ArticlesList from "./components/ArticlesList";
import Home from "./components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        <Header />
      </header>
        <Nav />
        <Routes>
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
