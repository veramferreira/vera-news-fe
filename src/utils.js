import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://vera-news.onrender.com/api",
});

export default function fetchTopics() {
  return mainApi
    .get("/topics")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
