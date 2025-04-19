import React from "react";
import Navbar from "../navigation/Navbar";
// import FeaturedArtisans from './FeaturedArtisans';
import Footer from "../footer/Footer";
import deliveryimage from "../../assets/deliveryimage.jpg";
import DeliveryNavbar from "../navigation/DeliveryNavbar";
import "./DeliveryAgentDashboard.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import deliveryImg from "../../assets/delivery-banner.jpg";
import routeMap from "../../assets/route-map.jpg";
import earnings from "../../assets/earnings.jpg";
import profilePic from "../../assets/profile-settings.jpg";
import confirmPic from "../../assets/confirm-delivery.jpg";

function DeliveryAgentHome() {
  // Optional: Set address if used
  const deliveryAddress = "123 MG Road, Trivandrum";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    deliveryAddress
  )}`;

  return (
    <div>
      {/* <div className="min-h-screen flex flex-col"> */}
      <DeliveryNavbar />
      {/* <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Deliver With</span>
                    <span className="block text-indigo-600">Speed & Trust</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Join our network of delivery professionals and make a
                    difference in people’s lives by ensuring quick, safe, and
                    timely deliveries.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        View Deliveries
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Profile Settings
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className=""
              src={deliveryimage}
              alt="Delivery person"
              style={{ height: "550px", width: "100%" }}
            />
          </div> */}

      {/* Hero Section */}
      <section className="hero-banner">
        <img src={deliveryImg} alt="Delivery Banner" className="banner-img" />
        <div className="banner-text">
          <h1 className="text-4xl font-bold text-white">
            Welcome, Delivery Agent
          </h1>
          <p className="text-gray-100">
            Manage your deliveries, update statuses, and track performance
            seamlessly.
          </p>
          <button className="view-products-btn mt-3 fs-4">Go to Profile</button>
        </div>
      </section>

      {/* Section: Assigned Deliveries */}
      <section className="dashboard-section">
        <Container>
          <h2 className="section-title">Assigned Deliveries</h2>
          <Row className="gy-4">
            {[
              { name: "John Doe", status: "In-Transit" },
              { name: "Priya Sharma", status: "Pending" },
            ].map((d, i) => (
              <Col md={6} key={i}>
                <Card className="delivery-card text-center">
                  {/* <Card.Img src={d.image} className="delivery-img img-fluid" /> */}
                  <Card.Body>
                    <Card.Title className="card-title text-indigo-800">
                      {d.name}
                    </Card.Title>
                    <Card.Text>Status: {d.status}</Card.Text>
                    <Card.Text>
                      <strong>Address:</strong> 123 MG Road, Trivandrum
                    </Card.Text>
                    <Card.Text>
                      <strong>ETA:</strong> 1:30 PM
                    </Card.Text>
                    <Card.Text>
                      <strong>Contact:</strong> +91 98765 43210
                    </Card.Text>
                    <Button variant="outline-dark" size="sm" className="me-2">
                      View Route
                    </Button>
                    <Button variant="outline-success" size="sm">
                      {d.status === "Pending"
                        ? "Start Delivery"
                        : d.status === "In-Transit"
                        ? "Mark Delivered"
                        : "Delivered"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section: Tools & Resources */}
      <section className="dashboard-section">
        <Container>
          <h2 className="section-title">Tools & Resources</h2>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="dashboard-card text-center">
                <Card.Img
                  variant="top"
                  src={routeMap}
                  className="dashboard-img img-fluid"
                />
                <Card.Body>
                  <Card.Title className="card-title text-indigo-800">
                    Route Planner
                  </Card.Title>
                  <Card.Text>
                    Optimized routes for timely deliveries with integrated map
                    view.
                  </Card.Text>
                  <Button variant="outline-dark">View Routes</Button>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" size="sm">
                      View Map
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="dashboard-card text-center">
                <Card.Img
                  variant="top"
                  src={earnings}
                  className="dashboard-img img-fluid"
                />
                <Card.Body>
                  <Card.Title className="card-title text-indigo-800">
                    Earnings Tracker
                  </Card.Title>
                  <Card.Text>
                    Track your earnings weekly and monthly, including bonuses
                    and tips.
                  </Card.Text>
                  <Button variant="outline-dark">View Earnings</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="dashboard-card text-center">
                <Card.Img
                  variant="top"
                  src={profilePic}
                  className="dashboard-img img-fluid"
                />
                <Card.Body>
                  <Card.Title className="card-title text-indigo-800">
                    Profile & Availability
                  </Card.Title>
                  <Card.Text>
                    Set your availability, preferred delivery zones, and contact
                    info.
                  </Card.Text>
                  <Button variant="outline-dark">Edit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section: Confirm Delivery */}
      <section className="dashboard-section">
        <Container>
          <h2 className="section-title">Confirm Delivery</h2>
          <Row className="gy-4 justify-content-center">
            <Col md={6}>
              <Card className="dashboard-card text-center">
                <Card.Img
                  variant="top"
                  src={confirmPic}
                  className="dashboard-img img-fluid"
                />
                <Card.Body>
                  <Card.Text>
                    Upload photo proof or digital signature to confirm
                    successful deliveries.
                  </Card.Text>
                  <Button variant="outline-dark">Confirm Delivery</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <FeaturedArtisans /> */}
      <Footer />
    </div>
  );
}

export default DeliveryAgentHome;
