import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Course from "./pages/courses";
import ForgotPassword from "./pages/forgot-password"; // added ForgotPassword import
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          {/* added route */}
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
