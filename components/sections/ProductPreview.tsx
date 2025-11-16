'use client';

import { motion } from 'framer-motion';
import {
  Lightning,
  GameController,
  CurrencyCircleDollar,
  PauseCircle,
  ChartLine,
  Desktop,
  TrendUp,
  Cloud,
} from '@phosphor-icons/react';

const desktopFeatures = [
  { icon: Lightning, text: 'Fast 5-second startup', color: '#39FF14' },
  { icon: GameController, text: 'Game detection', color: '#39FF14' },
  { icon: CurrencyCircleDollar, text: 'Live cost tracking', color: '#39FF14' },
  { icon: PauseCircle, text: 'Pause/resume sessions', color: '#39FF14' },
];

const dashboardFeatures = [
  { icon: ChartLine, text: 'Real-time analytics', color: '#FFD700' },
  { icon: Desktop, text: 'Live PC monitoring', color: '#FFD700' },
  { icon: TrendUp, text: 'Revenue reports', color: '#FFD700' },
  { icon: Cloud, text: 'Cloud-based', color: '#FFD700' },
];

export default function ProductPreview() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-lg mb-4">
            Built for <span className="text-accent-blue">Everyone</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-text-tertiary">
            Powerful tools for gamers and cafe owners alike
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Desktop Client Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-bg-secondary border border-bg-tertiary rounded-2xl p-8 card-hover"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_top_left,#39FF14_0%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col">
              {/* Icon + Badge Container */}
              <div className="flex items-start gap-4 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-accent-green/20">
                  <Desktop size={48} weight="bold" className="text-accent-green" />
                </div>

                {/* Badge with Pulse */}
                <motion.div
                  className="inline-block px-4 py-2 rounded-full bg-bg-primary border border-accent-green/30 self-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="font-inter font-semibold text-xs uppercase tracking-wider text-accent-green">
                    For Gamers
                  </span>
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-rajdhani font-bold text-3xl text-text-primary mb-4">
                Desktop Client
              </h3>

              {/* Description */}
              <p className="body-md mb-6">
                Beautiful, non-intrusive interface. One-click login. Real-time
                session tracking. Game detection. Minimal resource usage.
              </p>

              {/* Features List with Animations */}
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {desktopFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={20} weight="bold" style={{ color: feature.color }} className="flex-shrink-0" />
                      </motion.div>
                      <span className="body-sm">{feature.text}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>

          {/* Admin Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-bg-secondary border border-bg-tertiary rounded-2xl p-8 card-hover"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_top_left,#FFD700_0%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col">
              {/* Icon + Badge Container */}
              <div className="flex items-start gap-4 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-accent-gold/20">
                  <ChartLine size={48} weight="bold" className="text-accent-gold" />
                </div>

                {/* Badge with Pulse */}
                <motion.div
                  className="inline-block px-4 py-2 rounded-full bg-bg-primary border border-accent-gold/30 self-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="font-inter font-semibold text-xs uppercase tracking-wider text-accent-gold">
                    For Owners
                  </span>
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="font-rajdhani font-bold text-3xl text-text-primary mb-4">
                Admin Dashboard
              </h3>

              {/* Description */}
              <p className="body-md mb-6">
                Monitor all PCs in real-time. Manage users, sessions, and
                pricing. Generate reports instantly. Access from anywhere.
              </p>

              {/* Features List with Animations */}
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {dashboardFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon size={20} weight="bold" style={{ color: feature.color }} className="flex-shrink-0" />
                      </motion.div>
                      <span className="body-sm">{feature.text}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
