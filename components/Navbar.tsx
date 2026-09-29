"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/productsservice/solutions" },
  {
    name: "Training",
    href: "#",
    children: [
      { name: "Stack - NextGen", href: "/stack-nextgen" },
      { name: "Training Academy", href: "/academy" },
    ],
  },
  { name: "Ideahub", href: "/intelligent-collaboration" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // for mobile

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
    setOpenDropdown(null);
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
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="relative group">
                    <div className="flex items-center gap-1">
                      <Link href={link.href} className="relative group">
                        <span className="text-white/90 hover:text-white font-medium text-sm xl:text-base transition-colors duration-300">
                          {link.name}
                        </span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-amber-400 transition-all duration-300 group-hover:w-full" />
                      </Link>
                      <ChevronDown className="w-4 h-4 text-white/80" />
                    </div>

                    {/* Desktop dropdown */}
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-[#0F0C29]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl min-w-[220px]">
                        <ul className="py-2">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href} className="relative group">
                    <span className="text-white/90 hover:text-white font-medium text-sm xl:text-base transition-colors duration-300">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-amber-400 transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
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
              {navLinks.map((link, index) =>
                link.children ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full max-w-xs"
                  >
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.name ? null : link.name)
                      }
                      className="flex items-center justify-between w-full text-2xl sm:text-3xl font-heading font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-amber-400 transition-all duration-300"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 space-y-2 pl-4"
                        >
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className="block text-base sm:text-lg text-white/80 hover:text-white transition-colors"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
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
                )
              )}

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