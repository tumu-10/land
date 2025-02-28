"use client";
import React from "react";
import styles from "@/styles/combinedCard.module.scss";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const CombinedSection = () => {
  return (
    <section className={styles.combinedSection}>
      {/* Introduction */}
      <motion.div className={styles.intro} initial="hidden" animate="visible" variants={fadeIn}>
        <h4>Our <span>Community</span> Speaks</h4>
        <p>Discover inspiring testimonials from those who are part of our journey.</p>
      </motion.div>

      <div className={styles.contentWrapper}>
        {/* Testimonials */}
        <div className={styles.testimonials}>
          {[
            { name: "Dr. Abul", img: "/doc.jpg", text: "A truly life-changing experience with this amazing community." },
            { name: "Vivo Energies", img: "/e1.jpg", text: "Exceptional support and innovative solutions for businesses." },
            { name: "Third Person", img: "/l.jpg", text: "A platform that connects and empowers individuals seamlessly." },
          ].map((testimonial, index) => (
            <motion.div key={index} className={styles.testimonialCard} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className={styles.imageWrapper}>
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div className={styles.cta} initial="hidden" animate="visible" variants={fadeIn}>
          <div className={styles.ctaContent}>
            <h5>JOIN OUR COMMUNITY</h5>
            <h2>Be Part of <span>the Next Big Movement</span> </h2>
            <p>Get exclusive insights and stay ahead in innovation.</p>
            <a href="/about">
            <motion.button whileHover={{ scale: 1.1 }} className={styles.ctaButton}>
              Learn More
            </motion.button>
            </a>
          </div>
          <div className={styles.ctaBackground} />
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedSection;
