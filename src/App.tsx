import About from "./Components/about";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Projects from "./Components/projects";
import Skills from "./Components/skills";

import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
