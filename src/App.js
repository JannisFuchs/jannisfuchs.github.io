import Startpage from "./components/startscreen";
import Navbar from "./components/navbar";
import BlogOverview from "./components/blogoverview";
import Blog from "./components/blog";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Navbar />
    <Routes >
      <Route path="/" element={<Startpage />} />
      <Route path="/week" element={<Blog />} />

      <Route path="/blogoverview" element={<BlogOverview />} />
    </Routes>
   </Router>
  );
}

export default App;
