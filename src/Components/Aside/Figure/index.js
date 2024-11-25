import React, { useState, useEffect, CSSProperties } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const Figure = () => {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const imageRef = ref(db, "image");
    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImage(data);
      setLoading(false);
    });
  }, []);
  return (
    <figure className="image__container">
      {!loading && (
        <img
          className="image"
          src={`data:image/jpg;base64, ${image.link}`}
          alt="Image from Firebase"
        />
      )}
      {loading && <FadeLoader cssOverride={override} size={50} />}
    </figure>
  );
};

export default Figure;
