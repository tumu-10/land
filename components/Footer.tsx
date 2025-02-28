"use client";

import styles from "@/styles/Footer.module.scss";
import { motion } from "framer-motion"; // Correct import
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <h3>Landville Ventures</h3>
        <p>© {new Date().getFullYear()} Landville Ventures. All Rights Reserved.</p>
      </div>
      <div className={styles.linksSection}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.socialSection}>
        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaFacebook size={24} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaInstagram size={24} />
        </motion.a>
        <motion.a
          href="https://tiktok.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaTiktok size={24} />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaTwitter size={24} />
        </motion.a>
        <motion.a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaYoutube size={24} />
        </motion.a>
        <motion.a
          href="https://gmail.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <SiGmail size={24} />
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
