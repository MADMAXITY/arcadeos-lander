'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus } from '@phosphor-icons/react';
import TiltCard from '../ui/TiltCard';

const games = [
  {
    name: 'Battlefield 6',
    image: '/images/games/Battlefield6.jpg',
  },
  {
    name: 'Call of Duty: Black Ops 7',
    image: '/images/games/CallOfDutyBlackOps7.jpg',
  },
  {
    name: 'Call of Duty: Warzone',
    image: '/images/games/CallOfDutyWarzone.png',
  },
  {
    name: 'Counter-Strike 2',
    image: '/images/games/CounterStrike2.png',
  },
  {
    name: 'FC 26',
    image: '/images/games/FC26.jpg',
  },
  {
    name: 'Fortnite',
    image: '/images/games/Fortnite.jpg',
  },
  {
    name: 'GTA V',
    image: '/images/games/GTAV.jpg',
  },
  {
    name: 'League of Legends',
    image: '/images/games/LeagueOfLegends.png',
  },
  {
    name: 'Street Fighter 6',
    image: '/images/games/StreetFighter6.jpg',
  },
  {
    name: 'Valorant',
    image: '/images/games/Valorant.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function GameShowcase() {
  return (
    <section className="section-padding bg-bg-darker">
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
            Track Every Game <br className="md:hidden" />
            <span className="text-accent-gold">Your Players Love</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-text-tertiary">
            Automatically detect and monitor the most popular games
          </p>
        </motion.div>

        {/* Games Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {games.map((game, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard
                className="group relative rounded-xl overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-accent-green/50 cursor-pointer"
                tiltAmount={5}
              >
                {/* Game Image - Twitch-style 3:4 portrait aspect ratio */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />

                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3 className="font-rajdhani font-bold text-sm md:text-base lg:text-lg text-text-primary leading-tight">
                        {game.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Plus More Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-bg-secondary border border-bg-tertiary">
            <Plus size={24} weight="bold" className="text-accent-gold" />
            <span className="font-inter font-semibold text-lg text-accent-gold">
              100+ More Games
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
