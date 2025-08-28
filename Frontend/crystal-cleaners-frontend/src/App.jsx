import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Pricing from "./components/pages/Pricing";
import Blog from "./components/pages/Blog";
import Footer from './components/Footer.jsx';
import ServiceDetail from "./components/pages/ServiceDetail";
import BlogPost from "./components/pages/BlogPost";
import BlogDisplay from "./components/pages/BlogDisplay.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content-wrapper"> {/* Add this wrapper */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          
        </Routes>
      </div> {/* Close the wrapper */}
      <Footer />
    </div>
  );
}

export default App;