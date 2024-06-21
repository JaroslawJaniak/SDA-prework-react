
import { TEXTS } from "./translations";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import "./App.css";
import "./utils/general.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageVite from "./pages/pageVite/pageVite";
import PageComponent1 from "./pages/page1/pageComponent1";
import PageComponent2 from "./pages/page2/pageComponent2.jsx";
import PageComponent3 from "./pages/page3/pageComponent3.jsx";

function App() {
  return (
    <>
      <Router>
        <Header title={TEXTS.header.title} />
        <Routes>
          <Route path="/" element={<PageVite />}></Route>
          <Route path="/component1" element={<PageComponent1 />}></Route>
          <Route path="/component2" element={<PageComponent2 />}></Route>
          <Route path="/component3" element={<PageComponent3 />}></Route>
        </Routes>
      </Router>
      <Footer
        copyrightInfo={TEXTS.footer.copyrightInfo}
        author={TEXTS.footer.authorInfo}
      />
    </>
  );
}

export default App;
