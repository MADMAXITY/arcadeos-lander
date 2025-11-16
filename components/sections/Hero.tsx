'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ParticleBackground from '../ui/ParticleBackground';
import MagneticButton from '../ui/MagneticButton';

export default function Hero() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-bg-primary scanlines noise-texture">
      {/* Particle Background */}
      <ParticleBackground color="#39FF14" particleCount={60} opacity={0.4} speed={0.5} />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-darker to-bg-primary" />

        {/* Animated Grid Lines with Perspective */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateX: [0, 2, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              backgroundImage: `
                linear-gradient(to right, #39FF14 1px, transparent 1px),
                linear-gradient(to bottom, #39FF14 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              perspective: '1000px',
            }}
          />
        </motion.div>

        {/* Radial Glow Effect - Pulsing */}
        <motion.div
          className="absolute w-[800px] h-[800px] bg-accent-green rounded-full blur-[120px]"
          style={{
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-8 sm:py-12 md:py-16 text-center">
        {/* ArcadeOS Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 flex justify-center"
        >
          <Image
            src="/logo.png"
            alt="ArcadeOS Logo"
            width={600}
            height={120}
            priority
            className="w-auto h-16 md:h-20 lg:h-24"
          />
        </motion.div>

        {/* Logo/Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-bg-secondary border border-bg-tertiary pulse-glow-green"
        >
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-inter font-medium text-sm uppercase tracking-wider text-text-secondary">
            Launching Soon
          </span>
        </motion.div>

        {/* Main Headline with Enhanced Styling */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="heading-xl mb-4"
        >
          The <span className="text-gradient-green">Future</span> of <br className="hidden md:block" />
          <span className="text-gradient-gold">Gaming Cafe</span> Management
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="body-lg max-w-3xl mx-auto mb-8"
        >
          <span className="text-accent-green font-semibold">Save 15+ hours/week.</span>{' '}
          <span className="text-accent-gold font-semibold">Increase revenue by 30%.</span>
          <br className="hidden md:block" />
          Built specifically for Indian gaming cafes.
        </motion.p>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#waitlist">
            <MagneticButton className="btn-primary flex items-center gap-2 group pulse-glow-green">
              JOIN THE WAITLIST
              <ArrowRight
                size={20}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform"
              />
            </MagneticButton>
          </Link>

          <Link href="#features">
            <MagneticButton className="btn-secondary flex items-center gap-2">
              EXPLORE FEATURES
              <CaretDown size={20} weight="bold" />
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Stats Row with Count-Up Animation */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto"
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-green mb-2">
              {statsInView && <CountUp end={3000} duration={2.5} separator="," suffix="+" />}
            </div>
            <div className="body-sm">Target Cafes</div>
          </motion.div>

          <motion.div
            className="text-center border-x border-bg-tertiary"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-gold mb-2">
              {statsInView && <CountUp end={50000} duration={2.5} separator="," suffix="+" />}
            </div>
            <div className="body-sm">Gaming PCs</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-rajdhani font-bold text-3xl md:text-4xl text-accent-blue mb-2">
              {statsInView && <CountUp end={15} duration={2.5} suffix="+" />}
            </div>
            <div className="body-sm">Cities</div>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-6 sm:mt-8"
        >
          <p className="text-text-tertiary text-sm">
            Trusted by <span className="text-accent-green font-semibold">50+ gaming cafes</span> across India
          </p>
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
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CaretDown size={24} weight="bold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
