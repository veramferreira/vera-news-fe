import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import ArticlesList from "./components/ArticlesList";
import Home from "./components/Home";
import ArticleCard from "./components/ArticleCard";

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
          <Route path="/articles/:article_id" element={<ArticleCard />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
