'use client';

import { motion } from 'framer-motion';
import {
  Receipt,
  Detective,
  Wallet,
  MonitorPlay,
  Trophy,
  ChartBar,
} from '@phosphor-icons/react';

const features = [
  {
    icon: Receipt,
    color: '#39FF14',
    title: 'Smart Billing Manager',
    description:
      'Automated per-minute billing. Real-time cost calculation. Zero manual errors. GST calculation included.',
  },
  {
    icon: Detective,
    color: '#FFD700',
    title: 'Game Detection & Analytics',
    description:
      'Track which games are played, when, and for how long. 100+ games database with detailed statistics.',
  },
  {
    icon: MonitorPlay,
    color: '#FF4500',
    title: 'Real-Time Monitoring',
    description:
      'Live view of all PCs. Active sessions. Current games being played. Revenue tracking in real-time.',
  },
  {
    icon: Wallet,
    color: '#00BFFF',
    title: 'Digital Wallet System',
    description:
      'UPI integration. Quick top-ups. Transaction history. Low balance alerts for seamless gaming.',
  },
  {
    icon: Trophy,
    color: '#FFD700',
    title: 'Tournament Management',
    description:
      'Organize tournaments. Generate brackets. Live leaderboards. Prize distribution made easy.',
  },
  {
    icon: ChartBar,
    color: '#39FF14',
    title: 'Performance Metrics',
    description:
      'Track kills, headshots, goals. K/D ratio. Accuracy percentage. Player rank progression.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function BentoGrid() {
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
            Powerful Features for <br className="md:hidden" />
            <span className="text-gradient-gold">Every Need</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-text-tertiary">
            From billing to analytics, we&apos;ve got you covered
          </p>
        </motion.div>

        {/* Features Grid - Equal Size Cards (3x2) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-bg-secondary border border-bg-tertiary rounded-2xl p-8 overflow-hidden card-hover"
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${feature.color} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with Unique Animations */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4"
                    style={{
                      backgroundColor: `${feature.color}20`,
                    }}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: `${feature.color}40`,
                      boxShadow: `0 0 20px ${feature.color}60`,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.div
                      animate={
                        // Unique animation for each icon
                        index === 0
                          ? { y: [-2, 2, -2] } // Receipt slides up/down
                          : index === 1
                          ? { rotate: [0, 360], scale: [1, 1.1, 1] } // Detective magnify
                          : index === 2
                          ? { scale: [1, 1.1, 1] } // Monitor pulse
                          : index === 3
                          ? { y: [0, -3, 0] } // Wallet bounce
                          : index === 4
                          ? { rotate: [0, -10, 10, 0] } // Trophy shake
                          : { y: [0, -5, 0] } // ChartBar grow
                      }
                      transition={{
                        duration: index === 1 ? 4 : 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                      whileHover={{
                        rotate: index === 1 ? 0 : 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Icon size={28} weight="bold" color={feature.color} />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-rajdhani font-bold text-2xl text-text-primary mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="body-md">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
