"use client";
import { motion } from "framer-motion";
import styles from "@/styles/ProjectCard.module.scss";
import Image from "next/image";

const RealEstatePartner = () => {
  return (
    <section className={styles.partnerSection}>
      <motion.div
        className={styles.topLogos}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img src="/icons/bridgewater-50947.svg" alt="TechCrunch" />
        <img src="/icons/eddie-g-2.svg" alt="Fast Company" />
        <img src="/icons/cubilock-enterprise-mobility-management.svg" alt="MIT" />
        <img src="/icons/avocode-inc-1.svg" alt="Forbes" />
      </motion.div>

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/house.jpeg" // Replace with your actual image
            alt="Modern Real Estate"
            className={styles.realEstateImage}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          />
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2>
            Your Premier <br />
            <span>Real Estate</span> Partner
          </h2>
          <p>
            Finding the perfect property is more than location; it’s about
            finding a place to call home, grow your business, or an investment
            opportunity.
          </p>
          <motion.button
  className={styles.ctaButton}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() =>
    window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })
  }
>
  Explore Propatiz
</motion.button>

        </motion.div>
      </div>
      <motion.div
        className={styles.floatingShapes}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.floatingShape}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              scale: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random()}s`,
            }}
            variants={{
              initial: { y: 0, rotate: Math.random() * 360 - 180 },
              animate: { y: 100, rotate: Math.random() * 360 },
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6 + Math.random() * 4,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default RealEstatePartner;