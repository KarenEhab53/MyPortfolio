import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"; // import framer motion
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "Contact Form",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_241xwxh",
        "template_e13s0d2",
        formData,
        "o2DAzd8Q1gI_WqzZB",
      )
      .then((result) => {
        toast.success("Message sent successfully! ✅", { autoClose: 3000 });
        setFormData({
          name: "",
          email: "",
          message: "",
          title: "Contact Form",
        });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          autoClose: 5000,
        });
      });
  };

  // Framer Motion variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="contact" id="contact">
      {/* Header */}
      <motion.div
        className="contact-header"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2 variants={item}>Contact Us</motion.h2>
        <motion.p variants={item}>We would love to hear from you</motion.p>
      </motion.div>

      {/* Form */}
      <motion.form
        className="contact-form"
        onSubmit={sendEmail}
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.label variants={item}>Name</motion.label>
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          variants={item}
        />

        <motion.label variants={item}>Email</motion.label>
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          variants={item}
        />

        <motion.label variants={item}>Message</motion.label>
        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          variants={item}
        />

        <motion.button type="submit" variants={item}>
          Send
        </motion.button>
      </motion.form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
