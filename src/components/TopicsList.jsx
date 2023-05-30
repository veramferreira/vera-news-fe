import { useEffect, useState } from "react";
import { fetchTopics } from "../utils";
import BeatLoader from "react-spinners/BeatLoader";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetchTopics()
      .then(({ topics }) => {
        return topics;
      })
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <BeatLoader
        color={color}
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

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
