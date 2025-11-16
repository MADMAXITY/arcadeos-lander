'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-darker to-bg-primary" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #39FF14 1px, transparent 1px),
                linear-gradient(to bottom, #39FF14 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        {/* Radial Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-green opacity-10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        {/* ArcadeOS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="font-rajdhani font-bold text-6xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="text-gradient-green">Arcade</span>
            <span className="text-text-primary">OS</span>
          </h1>
        </motion.div>

        {/* Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-bg-secondary border border-bg-tertiary"
        >
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-inter font-medium text-sm uppercase tracking-wider text-text-secondary">
            Launching Soon
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="heading-xl mb-6"
        >
          The Future of <br />
          <span className="text-gradient-green">Gaming Cafe</span> Management
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="body-lg max-w-3xl mx-auto mb-12"
        >
          Automate billing. Track every game. Maximize revenue. <br className="hidden md:block" />
          Built specifically for Indian gaming cafes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#waitlist"
            className="btn-primary flex items-center gap-2 group"
          >
            JOIN THE WAITLIST
            <ArrowRight
              size={20}
              weight="bold"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="#features"
            className="btn-secondary flex items-center gap-2"
          >
            EXPLORE FEATURES
            <CaretDown size={20} weight="bold" />
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-green mb-2">
              3,000+
            </div>
            <div className="body-sm">Target Cafes</div>
          </div>

          <div className="text-center border-x border-bg-tertiary">
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-gold mb-2">
              50,000+
            </div>
            <div className="body-sm">Gaming PCs</div>
          </div>

          <div className="text-center">
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-blue mb-2">
              15+
            </div>
            <div className="body-sm">Cities</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-text-tertiary">
          <span className="body-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CaretDown size={24} weight="bold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
