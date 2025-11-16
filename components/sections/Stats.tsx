'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Buildings, Desktop, TrendUp, MapPin } from '@phosphor-icons/react';

const stats = [
  {
    icon: Buildings,
    color: '#39FF14',
    number: 3000,
    suffix: '+',
    label: 'Target Gaming Cafes',
  },
  {
    icon: Desktop,
    color: '#FFD700',
    number: 50000,
    suffix: '+',
    label: 'Gaming PCs to Power',
  },
  {
    icon: TrendUp,
    color: '#00BFFF',
    prefix: '₹',
    number: 10.8,
    suffix: 'Cr',
    label: 'Annual Market Potential',
  },
  {
    icon: MapPin,
    color: '#FF4500',
    number: 15,
    suffix: '+',
    label: 'Tier 1 & 2 Cities',
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="section-padding bg-bg-darker">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            Built for <span className="text-accent-blue">Scale</span>
          </h2>
          <p className="body-lg text-text-tertiary">
            Powering the future of gaming cafes across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Icon with Animation */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl mb-4"
                  style={{
                    backgroundColor: `${stat.color}20`,
                  }}
                  animate={
                    inView
                      ? index === 0
                        ? { y: [0, -10, 0], scale: [1, 1.1, 1] } // Buildings grow
                        : index === 1
                        ? { rotateY: [0, 360], scale: [1, 1.05, 1] } // Desktop flip
                        : index === 2
                        ? { y: [0, -15, 0], rotate: [0, 10, 0] } // TrendUp arrow up
                        : { scale: [1, 1.2, 1] } // MapPin drop
                      : {}
                  }
                  transition={{
                    duration: 2.5,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 360,
                    boxShadow: `0 0 20px ${stat.color}60`,
                  }}
                >
                  <Icon
                    size={32}
                    weight="bold"
                    style={{ color: stat.color }}
                    className="md:w-10 md:h-10"
                  />
                </motion.div>

                {/* Number */}
                <div
                  className="font-rajdhani font-extrabold text-4xl md:text-5xl mb-2"
                  style={{ color: stat.color }}
                >
                  {inView ? (
                    <>
                      {stat.prefix}
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        decimals={stat.number % 1 !== 0 ? 1 : 0}
                        separator=","
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    '0'
                  )}
                </div>

                {/* Label */}
                <p className="body-sm text-text-tertiary">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
