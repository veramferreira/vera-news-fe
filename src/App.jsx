import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopicsList from "./components/TopicsList";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
        <Nav />
        <Routes>
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/articles" element={<ArticlesList />} />
        </Routes>
      </header>
    </BrowserRouter>
  );
}

export default App;
