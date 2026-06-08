"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/productsservice/solutions" },
  { name: "Training", href: "/academy" },
  { name: "About", href: "/about" },
  // { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md shadow-lg shadow-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/bpll.png"
                width={200}
                height={100}
                alt="Bpurple logo"
                priority
                className="w-100 h-100 sm:h-50"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <span className="text-white/90 hover:text-white font-medium text-sm xl:text-base transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-amber-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <HiBars3BottomRight className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A] lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 space-y-6 sm:space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl sm:text-3xl font-heading font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-amber-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link href="/contact" onClick={handleLinkClick}>
                  <button className="bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}