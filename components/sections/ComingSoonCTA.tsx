'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Rocket, PaperPlaneRight, Check } from '@phosphor-icons/react';

const benefits = [
  'Early access to ArcadeOS',
  'Exclusive launch pricing (50% off)',
  'Free installation & training',
  'Priority support for 6 months',
];

export default function ComingSoonCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email submission
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="waitlist" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold opacity-10 rounded-full blur-[150px]" />

      <div className="container-custom max-w-4xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-bg-primary">
            <Rocket size={20} weight="bold" />
            <span className="font-inter font-semibold text-sm uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
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

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-lg text-center mb-12 max-w-2xl mx-auto"
        >
          Join 500+ cafe owners on the waitlist. Get early access, exclusive
          pricing, and free onboarding.
        </motion.p>

        {/* Email Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={submitted}
              className="flex-grow bg-bg-secondary border border-bg-tertiary rounded-lg px-6 py-4 font-inter text-base text-text-primary placeholder:text-text-muted focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 focus:outline-none transition-all duration-300 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={submitted}
              className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? (
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
            </button>
          </div>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4 text-accent-green font-inter font-medium"
            >
              ✓ Thanks! We'll be in touch soon.
            </motion.p>
          )}
        </motion.form>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                  <Check size={16} weight="bold" className="text-accent-green" />
                </div>
                <span className="body-md">{benefit}</span>
              </motion.li>
            ))}
          </ul>
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
