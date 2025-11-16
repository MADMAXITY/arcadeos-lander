'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
}

export default function GlitchText({
  text,
  className = '',
  glitchInterval = 3000,
  glitchDuration = 200,
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    }, glitchInterval);

    return () => clearInterval(interval);
  }, [glitchInterval, glitchDuration]);

  return (
    <div className={`relative inline-block ${className}`} data-text={text}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-accent-green"
            initial={{ x: 0 }}
            animate={{ x: [-2, 2, -2, 0] }}
            transition={{ duration: glitchDuration / 1000 }}
            style={{
              clipPath: 'inset(0 0 80% 0)',
              zIndex: 5,
            }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-accent-blue"
            initial={{ x: 0 }}
            animate={{ x: [2, -2, 2, 0] }}
            transition={{ duration: glitchDuration / 1000 }}
            style={{
              clipPath: 'inset(80% 0 0 0)',
              zIndex: 5,
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
