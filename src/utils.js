import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://vera-news.onrender.com/api",
});

export function fetchTopics() {
  return mainApi
    .get("/topics")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchArticles() {
  return mainApi
    .get("/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchArticleById(article_id) {
  return mainApi
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function fetchCommentsByArticleId(article_id) {
  return mainApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
