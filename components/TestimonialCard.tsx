"use client";

import { motion } from "framer-motion";
import styles from "@/styles/TestimonialCard.module.scss";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon

const ExclusiveService = () => {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.backgroundShapes}>
        <motion.div
          className={styles.circleShape}
          initial={{ x: -100, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 50, opacity: 0.6 }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className={styles.squareShape}
          initial={{ x: 50, y: -80, opacity: 0 }}
          animate={{ x: 50, y: -30, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className={styles.triangleShape}
          initial={{ x: -20, y: 100, opacity: 0 }}
          animate={{ x: -20, y: 150, opacity: 0.4 }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
      </div>
      <div className={styles.textContainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Discover <span>Exclusive</span> Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          LandVille Ventures is committed to pioneering excellence across real
          estate, equipment importation, and software development. We are
          dedicated to driving innovation and delivering unparalleled value.
        </motion.p>

          <a href="/services" target="_blank" rel="noopener noreferrer">
          <motion.button
                    className={styles.serviceButton}
                    whileHover={{ scale: 1.08, backgroundColor: "#8f7ae5" }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore Services <FaArrowRight className={styles.arrowIcon} />
                  </motion.button>
          </a>
        
      </div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src="/meeting.jpg"
          alt="Service Illustration"
          className={styles.mainImage}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className={styles.floatingIcon}
          src="/logo 1.png"
          alt="Abstract Icon"
          initial={{ y: -20, rotate: 0 }}
          animate={{ y: 20, rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
            repeatType: "loop",
          }}
        />
      </motion.div>
    </section>
  );
};

export default ExclusiveService;  