"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/hero.module.scss";
import { FaArrowDown } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as THREE from "three";

interface TypewriterLoopProps {
    words1: string[];
    words2: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypewriterLoop: React.FC<TypewriterLoopProps> = ({
    words1,
    words2,
    typingSpeed = 120,
    deletingSpeed = 80,
    pauseTime = 1000,
}) => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord1 = words1[wordIndex];
        const currentWord2 = words2[wordIndex];

        let delay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && text1 === currentWord1 && text2 === currentWord2) {
            delay = pauseTime;
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (text1.length < currentWord1.length) {
                    setText1(currentWord1.substring(0, text1.length + 1));
                } else if (text2.length < currentWord2.length) {
                    setText2(currentWord2.substring(0, text2.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (text1.length > 0) {
                    setText1(currentWord1.substring(0, text1.length - 1));
                } else if (text2.length > 0) {
                    setText2(currentWord2.substring(0, text2.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words1.length);
                }
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [
        text1,
        text2,
        isDeleting,
        wordIndex,
        words1,
        words2,
        typingSpeed,
        deletingSpeed,
        pauseTime,
    ]);

    return (
        <>
            <span className={`${styles.titleLine} ${styles.typewriter}`}>{text1}<span className={styles.cursor}>|</span></span>
            <span className={`${styles.gradientText} ${styles.typewriter}`}>{text2}<span className={styles.cursor}>|</span></span>
        </>
    );
};

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mountRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const particlesInit = async (engine: any) => {
        if (typeof engine.checkVersion !== "function") {
            engine.checkVersion = () => { };
        }
        if (typeof engine.addEasing !== "function") {
            engine.addEasing = () => { };
        }
        await loadFull(engine);
    };

    // Three.js interactive scene
    useEffect(() => {
        if (!mountRef.current) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff8c00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        const onMouseMove = (event: MouseEvent) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            cube.position.x = mouseX * 2;
            cube.position.y = mouseY * 2;
        };
        window.addEventListener("mousemove", onMouseMove);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    const words1 = ["Welcome To", "Building the Future", "Shaping Tomorrow", "Crafting the Future"];
    const words2 = ["LandVille Ventures", "Smart Cities", "Urban Innovation", "Sustainable Growth"];

    return (
        <section ref={containerRef} className={styles.heroSection}>
            {/* Background Video */}
            <motion.video autoPlay muted loop className={styles.backgroundVideo} style={{ scale }}>
                <source src="/get-video.mp4" type="video/mp4" />
            </motion.video>

            {/* Particles Overlay */}
            <div className={styles.particlesContainer}>
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 80 },
                            color: { value: ["#FF8C00", "#FF5700"] },
                            opacity: { value: 0.4 },
                            size: { value: 3 },
                            move: { enable: true, speed: 1.5, direction: "none", outModes: "out" },
                            links: { enable: true, color: "#ff8c00", opacity: 0.2, distance: 150 }
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "repulse" },
                                onClick: { enable: true, mode: "push" }
                            }
                        }
                    }}
                />
            </div>

            {/* Three.js Interactive Canvas */}
            <div ref={mountRef} className={styles.threeCanvas}></div>

            {/* Floating Animated Shapes */}
            <div className={styles.floatingShapes}>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}></div>
                <div className={styles.shape3}></div>
            </div>

            {/* Centered Content Container */}
            <div className={styles.contentContainer}>
                <motion.div className={styles.textContent} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
                    <h1 className={styles.mainTitle}>
                        <TypewriterLoop words1={words1} words2={words2} />
                    </h1>
                    <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                        Transforming landscapes through
                        <span className={styles.highlight}> smart technology</span> and
                        <span className={styles.highlight}> sustainable design</span>
                    </motion.p>
                    <motion.div className={styles.ctaWrapper} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }}>
                        <motion.button
                            className={styles.ctaButton}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })}
                        >
                            Explore Developments
                            <FaArrowDown className={styles.ctaIcon} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <motion.div className={styles.scrollLine} animate={{ y: [0, 20], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
            </div>
        </section>
    );
}
