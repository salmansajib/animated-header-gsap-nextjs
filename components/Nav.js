"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navItems = [
  {
    id: 1,
    manuName: "Home",
    href: "/",
  },
  {
    id: 2,
    manuName: "Topics",
    href: "/topics",
  },
  {
    id: 3,
    manuName: "Resources",
    href: "/resources",
  },
  {
    id: 4,
    manuName: "About Me",
    href: "/about-me",
  },
  {
    id: 5,
    manuName: "Contact",
    href: "/contact",
  },
];

// Framer Motion Variants
const listVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -110,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.7 + i * 0.2,
      ease: "easeOut",
    },
  }),
};

function Nav() {
  return (
    <nav>
      <ul className="flex items-center gap-[70px]">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            className="opacity-0 scale-0 -translate-y-[110px]"
            custom={index}
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={item.href}
              className={`block ${
                item.manuName === "Contact"
                  ? "border-2 border-gray-50 px-9 py-3 rounded-xl"
                  : "hover:text-gray-300 px-2 py-1"
              }`}
            >
              {item.manuName}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
