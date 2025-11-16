'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: 'words' | 'characters';
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  mode = 'words',
}: TextRevealProps) {
  const items = mode === 'words' ? text.split(' ') : Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === 'words' ? 0.05 : 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          className={mode === 'words' ? 'inline-block mr-2 md:mr-3' : 'inline-block'}
        >
          {item === ' ' && mode === 'characters' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.div>
  );
}
