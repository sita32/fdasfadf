import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement

import Home from "./components/pages/Home";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
