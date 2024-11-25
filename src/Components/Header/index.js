import React, { useState, useEffect, CSSProperties } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import ScaleLoader from "react-spinners/ScaleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const Header = () => {
  const [header, setHeader] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
      setLoading(false);
    });
  }, []);
  return (
    <header className="header">
      {!loading && (
        <h1 className="primary--heading">
          {header.name}
          <span className="heading--deco">{header.fam}</span>
        </h1>
      )}
      {loading && <ScaleLoader cssOverride={override} size={50} />}
      <h2 className="secondary--heading">Informatika</h2>
    </header>
  );
};

export default Header;
