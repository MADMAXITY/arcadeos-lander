'use client';

import { motion } from 'framer-motion';
import { ChartLine, GameController, Gear, Check } from '@phosphor-icons/react';

const features = [
  {
    icon: ChartLine,
    color: '#39FF14', // Neon Green
    title: 'Maximize Revenue',
    description:
      'Automated billing with zero errors. Real-time revenue tracking. Advanced analytics to optimize pricing.',
    benefits: [
      'Zero billing errors',
      '80% less manual work',
      'Data-driven decisions',
    ],
  },
  {
    icon: GameController,
    color: '#FFD700', // Gold
    title: 'Seamless Experience',
    description:
      'Quick login. Digital wallets. Browse and launch games instantly. Track personal stats.',
    benefits: ['One-click login', 'Digital wallet', 'Game catalog'],
  },
  {
    icon: Gear,
    color: '#00BFFF', // Sky Blue
    title: 'Complete Control',
    description:
      'Monitor all PCs in real-time. Manage users and sessions. Generate reports instantly.',
    benefits: ['Live monitoring', 'Remote control', 'Automated reports'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function FeaturesOverview() {
  return (
    <section id="features" className="section-padding bg-bg-darker">
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
            Why Gaming Cafes <br className="md:hidden" />
            <span className="text-accent-green">Choose ArcadeOS</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-text-tertiary">
            Everything you need to run a modern gaming cafe, all in one platform
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-bg-secondary border border-bg-tertiary rounded-2xl p-8 card-hover flex flex-col"
              >
                {/* Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${feature.color} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with Float Animation */}
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{
                      backgroundColor: `${feature.color}20`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, 0],
                      boxShadow: `0 0 20px ${feature.color}60`,
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                      }}
                      transition={{
                        rotate: { duration: 0.6, ease: 'easeInOut' },
                      }}
                    >
                      <Icon size={32} weight="bold" color={feature.color} />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="heading-md mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="body-md mb-6 flex-grow">{feature.description}</p>

                  {/* Benefits List with Staggered Animation */}
                  <motion.ul
                    className="space-y-3 mt-auto"
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
                    {feature.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-2"
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
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: idx * 0.1,
                            type: 'spring',
                            stiffness: 200,
                          }}
                        >
                          <Check
                            size={20}
                            weight="bold"
                            style={{ color: feature.color }}
                            className="flex-shrink-0"
                          />
                        </motion.div>
                        <span className="body-sm">{benefit}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
