import { getDatabase, ref, onValue, CSSProperties } from "firebase/database";
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const About = () => {
  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });
  }, []);

  return (
    <article className="about__me">
      <h3 className="title">About Me</h3>
      {!loading && <p>{about.title}</p>}
      {loading && <BarLoader cssOverride={override} size={50} />}
    </article>
  );
};

export default About;
