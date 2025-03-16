import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/footer"; 
import Header from "./components/layout/Header";
import "./index.css";
import About from "./pages/about"; 
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Course from "./pages/courses";
import ForgotPassword from "./pages/forgot-password"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hide Header on both "/login" and "/forgot-password" routes */}
      {!["/login", "/forgot-password"].includes(location.pathname) && (
        <Header />
      )}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Course />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
