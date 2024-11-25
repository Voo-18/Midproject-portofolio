import Header from "./Components/Header";
import Aside from "./Components/Aside";
import About from "./Components/About";
import Skills from "./Components/Skills";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Aside />
      <main className="main">
        <About />
        <Skills />
      </main>
      <footer className="footer" />
    </div>
  );
};
export default App;
