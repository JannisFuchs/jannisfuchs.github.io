import Startpage from "./components/startscreen";
import Navbar from "./components/navbar";
import BlogOverview from "./components/blogoverview";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/blog" element={<Startpage />} />
      <Route path="/blog/blogoverview" element={<BlogOverview />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
