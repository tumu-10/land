"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/services.scss';
import { motion } from "framer-motion";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  subServices: string[];
  image?: string;
  video?: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Property Sales and Purchases',
    description: 'Assisting clients in buying or selling residential, commercial, and luxury properties.',
    subServices: ['Residential Sales', 'Commercial Sales', 'Luxury Property Sales'],
    image: 'h2.jpg',
  },
  {
    id: 2,
    title: 'Property Management',
    description: 'Managing rental properties for landlords, including tenant screening and maintenance.',
    subServices: ['Rental Management', 'Lease Management', 'Property Maintenance'],
    image: 'c.jpg',
  },
  {
    id: 3,
    title: 'Real Estate Development',
    description: 'Developing residential or commercial real estate from conception through to completion.',
    subServices: ['Project Development', 'Land Development'],
    video: 'get-video.mp4',
  },
  {
    id: 4,
    title: 'Valuation and Appraisal',
    description: 'Providing professional property appraisals to determine current market value.',
    subServices: ['Property Valuation', 'Investment Analysis'],
    image: 'f1.jpg',
  },
  {
    id: 5,
    title: 'Real Estate Consulting',
    description: 'Offering insights into property market trends and helping clients make informed investment decisions.',
    subServices: ['Market Analysis', 'Financial Advisory'],
    image: 'pa.jpg',
  },
  {
    id: 6,
    title: 'Real Estate Financing',
    description: 'Helping clients secure financing and mortgages for property purchases.',
    subServices: ['Mortgage Brokerage', 'Investment Loans'],
    image: 'f.jpg',
  },
  {
    id: 7,
    title: 'Interior Design and Renovation Services',
    description: 'Offering design consultations and services to improve a property\'s interior space.',
    subServices: ['Interior Design', 'Renovation'],
    image: 'h1.jpg',
  },
  {
    id: 8,
    title: 'Real Estate Marketing',
    description: 'Managing property listings and marketing properties through digital channels.',
    subServices: ['Listing and Advertising', 'Virtual Tours'],
    video: 'welcome1.mp4',
  },
  {
    id: 9,
    title: 'Legal and Titling Services',
    description: 'Ensuring that property titles are clear and helping with title insurance.',
    subServices: ['Title Searches and Title Insurance', 'Contract Preparation'],
    image: 't.jpg',
  },
  {
    id: 10,
    title: 'Property Investment and Development Advisory',
    description: 'Advising investors on profitable real estate ventures and portfolio management.',
    subServices: ['Investment Consultancy', 'Development Feasibility Studies'],
    image: 'f2.jpg',
  },

  {
    id: 11,
    title: 'Brokage and Agency',
    description: 'Our Brokerage and Agency services are designed to assist clients in navigating the complexities of real estate transactions.',
    subServices: ['Property Sales Brokerage', 'Leasing and Rentals', 'Property Acquisition Advisory'],
    image: 'c3.jpg',
  },
  {
    id: 12,
    title: 'Surveying and Mapping',
    description: 'Providing professional surveying and mapping services for land and property owners.',
    subServices: ['Sub-dividing', 'Title processing', 'Boundary opening', 'Due Diligence Services'],
    image: 'v1.jpg',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [service]);

  return (
    <div className="service-card" ref={cardRef}>
      {service.image && <img src={service.image} alt={service.title} />}
      {service.video && (
        <video controls loop muted>
          <source src={service.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.subServices.map((subService, index) => (
          <li key={index}>{subService}</li>
        ))}
      </ul>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
       {/* Add floating background elements */}
       <div className="floating-background-elements">
        <div className="floating-house">🏠</div>
        <div className="floating-coin">💰</div>
        <div className="floating-graph">🌍</div>
        <div className="floating-key">🔑</div>
        <div className="floating-document">📄</div>
      </div>

      <header className="services-header">
         <h1>
                    <span className="gradient-stroke">Our Expertise, </span>
                    
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="gradient-text"
                    >
                      Your success.
                    </motion.span>
                  </h1>
           


        <p>Discover a wide range of real estate services tailored to meet your needs.</p>
      </header>

      <section className="services-grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>

      <section className="interactive-map">
        {/* TODO: Implement interactive map here (e.g., Leaflet, Google Maps) */}
        <h2>Our Location</h2>
        <Link className="p" href="https://www.google.com/maps/place/Kyanja+Mall/@0.3957122,32.5951815,15.04z/data=!4m6!3m5!1s0x177db12d98a508d3:0xe23ffa68c188c230!8m2!3d0.3953297!4d32.5933825!16s%2Fg%2F11l1_rvjwq?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D">Explore our properties and services in key locations.</Link>
        <div className="map-container">
          {/* Placeholder for the map */}
          <img src="map.png" alt="Interactive Map" />
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Contact us today to discuss your real estate goals.</p>
       <Link href="/contact">
       <button>Get in Touch</button>
       </Link> 
      </section>

      <div className="react-three-fiber-background">
        {/* Placeholder for React-Three-Fiber component */}
        {/* <ThreeDimensionalBackground />  */}
        <p>Placeholder for 3D background</p>
      </div>
    </div>
    
  );
};

export default ServicesPage;