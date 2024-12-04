"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Logo() {
  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -110,
      scale: 0,
      duration: 1,
    });
  });

  return (
    <div ref={logoRef}>
      <Link href="/" className="text-2xl font-playfair_display font-bold">
        FrontendFrame
      </Link>
    </div>
  );
}

export default Logo;
