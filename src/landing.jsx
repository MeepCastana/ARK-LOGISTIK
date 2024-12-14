import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">ARC Logistik</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#services" className="hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/path-to-your-hero-image.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-80 rounded-lg p-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Your Reliable Transport Partner
          </h2>
          <p className="text-lg mb-6">
            Connecting goods to their destinations with precision and care.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Express Delivery",
              "Freight Solutions",
              "Logistics Management",
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h4 className="text-xl font-bold mb-4">{service}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, eos.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-3xl font-bold mb-4">About ARC Logistik</h3>
            <p>
              At ARC Logistik, we pride ourselves on providing seamless
              transport solutions tailored to your needs. With years of
              experience, a modern fleet, and a dedicated team, we ensure the
              safe and timely delivery of your goods.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="/path-to-about-image.jpg"
            alt="About us"
            className="md:w-1/2 rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
              <p>
                Whether you have questions about our services or need a custom
                solution, we’re here to help. Reach out to us anytime.
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 border rounded"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full mb-4 p-3 border rounded"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} ARC Logistik. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
