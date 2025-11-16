'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Rocket, PaperPlaneRight, Check, CircleNotch, Users } from '@phosphor-icons/react';
import confetti from 'canvas-confetti';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const benefits = [
  'Early access to ArcadeOS',
  'Exclusive launch pricing (50% off)',
  'Free installation & training',
  'Priority support for 6 months',
];

export default function ComingSoonCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [validationError, setValidationError] = useState('');

  const [counterRef, counterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    setIsLoading(true);

    try {
      // Call the API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsLoading(false);
      setSubmitted(true);

      // Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#39FF14', '#FFD700', '#00BFFF'],
      });

      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsLoading(false);
      setValidationError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="waitlist" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Animated Spotlight Effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-accent-gold rounded-full blur-[150px]"
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

      <div className="container-custom max-w-4xl relative z-10">
        {/* Badge with Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-bg-primary"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Rocket size={20} weight="bold" />
            <span className="font-inter font-semibold text-sm uppercase tracking-wider">
              Coming Soon
            </span>
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg text-center mb-6"
        >
          Be the First to Transform <br className="hidden md:block" />
          Your Gaming Cafe
        </motion.h2>

        {/* Urgency Counter */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Users size={24} weight="bold" className="text-accent-gold" />
          <span className="font-rajdhani font-bold text-2xl text-accent-gold">
            {counterInView && <CountUp end={523} duration={2.5} />}+
          </span>
          <span className="body-md text-text-secondary">already on the waitlist</span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center mb-12 max-w-2xl mx-auto"
        >
          Get early access, exclusive pricing, and free onboarding.
        </motion.p>

        {/* Email Form with Enhanced Interactions */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <motion.div
              className="flex-grow relative"
              animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValidationError('');
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Enter your email"
                required
                disabled={submitted || isLoading}
                className={`w-full bg-bg-secondary border-2 rounded-lg px-6 py-4 font-inter text-base text-text-primary placeholder:text-text-muted focus:outline-none transition-all duration-300 disabled:opacity-50 ${
                  isFocused
                    ? 'border-accent-green ring-4 ring-accent-green/20'
                    : validationError
                    ? 'border-red-500'
                    : 'border-bg-tertiary'
                }`}
              />

              {/* Validation Icon */}
              <AnimatePresence>
                {email && !validationError && email.includes('@') && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Check size={20} weight="bold" className="text-accent-green" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              type="submit"
              disabled={submitted || isLoading}
              className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed min-w-[180px]"
              whileHover={!submitted && !isLoading ? { scale: 1.05 } : {}}
              whileTap={!submitted && !isLoading ? { scale: 0.95 } : {}}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <CircleNotch size={20} weight="bold" />
                  </motion.div>
                  JOINING...
                </>
              ) : submitted ? (
                <>
                  <Check size={20} weight="bold" />
                  SUBMITTED
                </>
              ) : (
                <>
                  JOIN WAITLIST
                  <PaperPlaneRight size={20} weight="bold" />
                </>
              )}
            </motion.button>
          </div>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center mt-4"
              >
                <motion.p
                  className="text-accent-green font-inter font-semibold text-lg"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  🎉 Welcome to the waitlist! We&apos;ll keep you updated on our launch.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Validation Error */}
          <AnimatePresence>
            {validationError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center mt-4 text-red-500 font-inter font-medium"
              >
                {validationError}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Benefits with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <motion.ul
            className="space-y-4"
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
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3"
              >
                <motion.div
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check size={16} weight="bold" className="text-accent-green" />
                </motion.div>
                <span className="body-md">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 body-sm text-text-muted"
        >
          We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
