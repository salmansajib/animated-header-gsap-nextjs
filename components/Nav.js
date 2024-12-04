"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

function Nav() {
  const menuRef = useRef(null);

  useGSAP(() => {
    gsap.from(menuRef.current.children, {
      y: -110,
      scale: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.7,
      ease: "power3",
    });
  });

  return (
    <nav>
      <ul>
        <li ref={menuRef} className="flex items-center gap-[70px]">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`block  ${
                item.manuName === "Contact"
                  ? "border-2 border-gray-50 px-9 py-3 rounded-xl"
                  : "hover:text-gray-300 px-2 py-1"
              }`}
            >
              {item.manuName}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
