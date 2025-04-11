import { Button, ButtonGroup, Navbar, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGooglePlay,
  FaApple,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";
import hero6 from "../../assets/hero6.jpg";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";
import video from "../../assets/vid2.mp4";
import "./LandingPage.css";
import NavLanding from "./NavLanding";
import Footer from "../footer/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <NavLanding />

      {/* Hero Carousel */}
      <section className="carousel-section mt-0">
        <Carousel fade interval={3000} className="hero-carousel">
          {[hero1, hero2, hero3, hero4, hero5, hero6].map((img, i) => (
            <Carousel.Item key={i}>
              <img src={img} alt={`Slide ${i}`} className="carousel-img" />
              <Carousel.Caption className="carousel-caption">
                <h1>Empowering Artisans</h1>
                <p>Connecting Customers with Authentic Craftsmanship</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="description-text">
            <strong>At Artisans Connect</strong>, we bridge the gap between
            traditional craftsmanship and modern convenience by bringing local
            art and handmade products straight from talented artisans to your
            fingertips.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Choose ArtisanConnect?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src={feature1}
              alt="Handmade Quality"
              className="feature-img"
            />
            <h3>Handmade Quality</h3>
            <p>Every product is crafted with care by skilled artisans.</p>
          </div>
          <div className="feature-card">
            <img src={feature2} alt="Fair Trade" className="feature-img" />
            <h3>Fair Trade</h3>
            <p>We ensure artisans receive fair pricing for their work.</p>
          </div>
          <div className="feature-card">
            <img
              src={feature3}
              alt="Local & Sustainable"
              className="feature-img"
            />
            <h3>Local & Sustainable</h3>
            <p>Support eco-friendly and locally sourced products.</p>
          </div>
        </div>
      </section>

      <div className="video-section-wrapper py-5">
      <Container>
        <Row className="align-items-center">
          {/* Video Column */}
          <Col md={4} className="video-column">
            <video className="video" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          {/* Description Column */}
          <Col md={8} className="text-column">
            <p>
              We work directly with these talented creators to ensure that every
              item tells a unique story—rooted in authenticity, made with
              integrity, and crafted using high-quality, locally sourced
              materials. When you purchase from us, you're not just buying a
              product; you're investing in the legacy of genuine craftsmanship
              and supporting the livelihoods of artisans across the region.

            </p>
          </Col>
        </Row>
      </Container>
    </div>

      {/* CTA Section 
      <section className="cta-section">
        <h2>Download the App</h2>
        {/* <div className="cta-buttons">
          <Button variant="light" className="cta-btn d-flex align-items-center justify-content-center">
            <FaGooglePlay className="cta-icon" /> Google Play
          </Button>
          <Button variant="light" className="cta-btn d-flex align-items-center justify-content-center">
            <FaApple className="cta-icon" /> App Store
          </Button>
        </div>
      </section>
*/}
      {/* Social Media Section */}
      {/* <section className="social-section">
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
