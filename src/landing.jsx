import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white fixed w-full z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold text-blue-800">ARC Logistik</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-semibold">
              <li>
                <a href="#services" className="hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Reliable & Fast Transport Solutions
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Connecting goods to their destinations with precision and care.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100"
            >
              Learn More
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src="/images/hero.jpg"
              alt="Hero"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-24 text-white"
            fill="currentColor"
          >
            <path d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,122.7C1120,128,1280,192,1360,224L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white relative -mt-10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Express Delivery",
                description:
                  "We ensure your goods reach their destination swiftly and safely.",
                icon: "🚚",
              },
              {
                title: "Freight Solutions",
                description:
                  "Customized freight options that cater to a variety of industries.",
                icon: "📦",
              },
              {
                title: "Logistics Management",
                description:
                  "Streamlined supply chain operations for maximum efficiency.",
                icon: "⚙️",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About ARC Logistik
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At ARC Logistik, we pride ourselves on providing seamless
              transport solutions tailored to your needs. With years of
              experience, a modern fleet, and a dedicated team, we ensure the
              safe and timely delivery of your goods.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From small parcels to large consignments, we handle every shipment
              with the utmost care and efficiency, making us your trusted
              logistics partner.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src="/images/about.jpg"
              alt="About us"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Contact Us
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Get in Touch
              </h4>
              <p className="text-gray-700 mb-4">
                Whether you have questions about our services or need a custom
                solution, we’re here to help. Reach out to us anytime and we’ll
                get back to you as soon as possible.
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@arclogistik.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700"
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
