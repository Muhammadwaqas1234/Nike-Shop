import React, { useState } from 'react';
import '../styles/ContactUs.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted successfully!');
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Connect with us on social media or send us your feedback.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="mailto:example@domain.com"><FaEnvelope /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>

          <div className="location-info">
            <h4>Location</h4>
            <p>123 E-Commerce St,<br />ShopCity, SC 12345</p>
          </div>

          <div className="policy-links">
            <h4>Our Policies</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/return-policy">Return & Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-right">
          <h2>Send Us Your Query</h2>
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />

          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Street" required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />

          <label>Feedback</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder="Your message..." required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
