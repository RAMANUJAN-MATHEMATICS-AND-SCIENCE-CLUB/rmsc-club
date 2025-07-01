import React from "react";
import "./Home.css";
import clubImage from "../assets/images/rmsc-banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero-alt"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <h1 className="hero-title-alt">Ramanujan Mathematics & Science Club</h1>
          <p className="hero-sub">COEP Technological University</p>
          <p className="hero-tagline">
            Igniting logic, science and creativity through vibrant learning experiences.
          </p>
          <a href="/events" className="hero-button">Explore Events</a>
        </motion.div>
        <motion.img
          src={clubImage}
          alt="RMSC Club"
          className="hero-img"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.section>

      {/* Vision Section */}
      <motion.section className="vision-section colored-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={1}>What's Next in 2024–25?</motion.h2>
        <motion.p variants={fadeUp} custom={2}>
          RMSC is ready with more puzzles, coding challenges, science exhibitions, and expert lectures — all to make learning thrilling and collaborative!
        </motion.p>
      </motion.section>

      {/* What We Do Section */}
      <motion.section className="activities-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={1}>What We Do</motion.h2>
        <motion.p variants={fadeUp} custom={2}>
          From quiz-based inductions and guest talks to creative competitions like poster-making, we make learning engaging. Whether you're into calculus, code, or climate — there's something for everyone!
        </motion.p>
         {/* Highlights Section */}
      <motion.section className="highlight-section" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h2 variants={fadeUp} custom={1}>Last Year's Highlights (2023–24)</motion.h2>
        <motion.p variants={fadeUp} custom={2}>
          ✨ Over 200 participants joined events like <strong>Delta Sigma Pi</strong>, <strong>Integration Bee</strong>, and <strong>Math Day Writing Contest</strong>. 🔐 Guest lectures on SSL, Linear Dynamics, and eSIM Trust Building. 🧮 Celebrated Pi Day & Ramanujan Week with exciting contests and talks.
        </motion.p>
      </motion.section>
      </motion.section>

      {/* Static Event Image Gallery */}
      <section className="gallery-strip">
        <h2>Event Moments</h2>
        <div className="gallery-row">
          <img src={require("../assets/images/event1.jpeg")} alt="event1" />
          <img src={require("../assets/images/event2.jpeg")} alt="event2" />
          <img src={require("../assets/images/event3.jpg")} alt="event3" />
          <img src={require("../assets/images/event4.jpeg")} alt="event4" />
          <img src={require("../assets/images/event5.png")} alt="event5" />
        </div>
      </section>

      {/* Sliding Event Banners */}
      <section className="event-slider-section">
        <h2>📅 Past Event Banners</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="event-slider"
        >
          <SwiperSlide><img src={require("../assets/images/events/Banner1.png")} alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img src={require("../assets/images/events/Banner2.jpeg")} alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img src={require("../assets/images/events/Banner3.jpg")} alt="Banner 3" /></SwiperSlide>
        </Swiper>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote>
          "An equation means nothing to me unless it expresses a thought of God."
          <span>— Srinivasa Ramanujan</span>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
