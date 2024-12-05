"use client";

import Link from "next/link";
import { motion } from "motion/react";

function Logo() {
  // Framer Motion Variants
  const logoVariants = {
    hidden: {
      y: -110,
      scale: 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={logoVariants}>
      <Link href="/" className="text-2xl font-playfair_display font-bold">
        FrontendFrame
      </Link>
    </motion.div>
  );
}

export default Logo;
