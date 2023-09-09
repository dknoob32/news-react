import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AllNews from './components/AllNews';
import Business from './components/Business';
import Politics from './components/Politics';
import World from './components/World';
import India from './components/India';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/india" element={<India />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/world" element={<World />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/privacyPolicy" element={<Privacy />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
