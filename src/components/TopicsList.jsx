import { useEffect, useState } from "react";
import fetchTopics from "../utils";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then(({ topics }) => {
        return topics;
      })
      .then((topics) => {
        setTopics(topics);
      });
  }, []);

  //   console.log(topics);

  return (
    <section className="topics-list">
      <h2>What do you fancy reading today?</h2>
      <ul className="topics">
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
