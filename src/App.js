import Startpage from "./components/startscreen";
import Navbar from "./components/navbar";
import BlogOverview from "./components/blogoverview";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Startpage />} />
      <Route path="/blogoverview" element={<BlogOverview />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
