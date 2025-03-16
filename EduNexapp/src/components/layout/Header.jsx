import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // replaced next/link with react-router-dom's Link
import { cn } from "../../lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-14 w-14 rounded-full transition-transform hover:scale-105" // updated: increased logo size to h-12 and w-12
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors duration-200">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </MobileNavLink>
          <MobileNavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileNavLink>

          <button className="mt-4 px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

export default Header;
