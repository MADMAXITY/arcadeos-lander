'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

const productLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Demo', href: '#demo' },
  { name: 'Documentation', href: '#docs' },
  { name: 'Contact', href: '#contact' },
];

const companyLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
  { name: 'Support', href: '#support' },
];

const socialLinks = [
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: InstagramLogo, href: '#', label: 'Instagram' },
  { icon: YoutubeLogo, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-darker border-t border-bg-tertiary">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="ArcadeOS Logo"
                width={200}
                height={40}
                className="w-auto h-10"
              />
            </div>
            <p className="body-md text-text-tertiary max-w-sm mb-6 mx-auto md:mx-0">
              The Future of Gaming Cafe Management
            </p>
            <p className="body-sm text-text-muted max-w-sm mx-auto md:mx-0">
              Built for Indian gaming cafes. Automate billing, track games, and
              maximize revenue with our all-in-one platform.
            </p>
          </div>

          {/* Product Links */}
          <div className="text-center md:text-left">
            <h4 className="font-rajdhani font-bold text-lg text-text-primary mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-sm text-text-tertiary hover:text-accent-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h4 className="font-rajdhani font-bold text-lg text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="body-sm text-text-tertiary hover:text-accent-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bg-tertiary flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="body-sm text-text-muted text-center md:text-left">
            © {new Date().getFullYear()} ArcadeOS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-bg-secondary border border-bg-tertiary flex items-center justify-center text-text-muted hover:text-accent-blue hover:border-accent-blue transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} weight="bold" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
