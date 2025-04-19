import React from "react";
import Navbar from "../navigation/Navbar";
import Hero from "./Hero";
import FeaturedArtisans from "./FeaturedArtisans";
import Footer from "../footer/Footer";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./BuyersHomePage.css";
import bannerImg from "../../assets/buyers-banner.jpg";
import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import lakshmi from "../../assets/lakshmi.jpg";
import ravi from "../../assets/ravi.jpg";
import meena from "../../assets/meena.jpg";

function UserHome() {
  return (
    <div>
      <div>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <div className="buyers-homepage">
            {/* Section 1: Hero Banner */}
            <section className="hero-banner">
              <img src={bannerImg} alt="Banner" className="banner-img" />
              <div className="banner-text">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl">
                  <span className="block">Discover Unique</span>
                  <span className="block text-indigo-800">
                    Handcrafted Treasures
                  </span>
                </h1>

                <p>
                  Explore meaningful creations made with care by local artisans.
                </p>
                <Button variant="light" className="shop-btn">
                  Start Shopping
                </Button>
                <Button variant="info" className="shop-btn ms-5">
                  Become a seller
                </Button>
              </div>
            </section>

            {/* Section: Motivational Quote */}
            <section className="quote-section text-center my-4 px-3">
              <h4 className="text-indigo-700 italic">
                “Crafted with heart, delivered with pride — discover the stories
                behind every handmade piece.”
              </h4>
            
            </section>

            {/* Section 2: Shop by Category */}
            <section className="category-section">
              <Container>
                <h2 className="section-title">Shop by Category</h2>
                <Row className="gy-4">
                  {[category1, category2, category3].map((img, i) => (
                    <Col md={4} key={i}>
                      <Card className="category-card">
                        <Card.Img src={img} className="category-img" />
                        <Card.Body>
                          <Card.Title className="category-title">
                            Category {i + 1}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>

            {/* Section 3: Featured Products */}
            <section className="featured-section">
              <Container>
                <h2 className="section-title">Featured Products</h2>
                <Row className="gy-4">
                  {[product1, product2, product3].map((img, i) => (
                    <Col md={4} key={i}>
                      <Card className="product-card">
                        <Card.Img src={img} className="product-img" />
                        <Card.Body>
                          <Card.Title className="product-title">
                            Product {i + 1}
                          </Card.Title>
                          <Card.Text>
                            Beautifully handcrafted. Ethically sourced.
                          </Card.Text>
                          <Button variant="outline-dark" size="sm">
                            View Product
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>

            {/* Section: Meet Our Artisans */}
            <section className="meet-artisans-section">
              <Container>
                <h2 className="section-title text-center mb-5">
                  Meet Our Artisans
                </h2>
                <Row className="gy-4 justify-content-center">
                  {[
                    {
                      name: "Lakshmi Devi",
                      expertise: "Handwoven Sarees",
                      image: lakshmi,
                    },
                    {
                      name: "Ravi Kumar",
                      expertise: "Terracotta Pottery",
                      image: ravi,
                    },
                    {
                      name: "Meena Joshi",
                      expertise: "Eco-Friendly Jewelry",
                      image: meena,
                    },
                  ].map((artisan, index) => (
                    <Col md={4} sm={6} key={index}>
                      <Card className="artisan-card text-center">
                        <Card.Img
                          src={artisan.image}
                          className="artisan-img img-fluid rounded-circle"
                        />
                        <Card.Body>
                          <Card.Title className="artisan-name">
                            {artisan.name}
                          </Card.Title>
                          <Card.Text className="artisan-expertise">
                            {artisan.expertise}
                          </Card.Text>
                          <Button
                            variant="outline-dark"
                            className="view-products-btn"
                          >
                            View Products
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Container>
            </section>

            {/* Section 4: Why Choose Us */}
            <section className="why-section">
              <Container>
                <h2 className="section-title">Why Shop on ArtisanConnect?</h2>
                <Row className="gy-4 text-center">
                  <Col md={4}>
                    <h5>Authentic & Handmade</h5>
                    <p>
                      Every product is crafted with care and passion by skilled
                      artisans.
                    </p>
                  </Col>
                  <Col md={4}>
                    <h5>Direct Support</h5>
                    <p>
                      Your purchases directly support small businesses and
                      creators.
                    </p>
                  </Col>
                  <Col md={4}>
                    <h5>Sustainable Choices</h5>
                    <p>
                      Our platform promotes eco-conscious and locally sourced
                      goods.
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>

          <main className="flex-grow">
            {/* <Hero /> */}
            {/* <FeaturedArtisans /> */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
