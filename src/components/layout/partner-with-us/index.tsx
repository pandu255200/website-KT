"use client";

import { useState } from "react";
import Image from "next/image";
import Styles from "./style.module.css";

import PartnerImage from "../../../../public/home/partner-with-us/partner.svg";
import WaveImage from "../../../../public/home/partner-with-us/wave.svg";
import GodRays from "../../../../public/home/partner-with-us/god_rays.svg";

export const PartnerWIthUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send data to your API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          country: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className={Styles.partnerSection} id="partner-with-us">
      <Image
        src={GodRays}
        alt="SlideImg"
        className={Styles.bgImage}
        width={10}
        height={10}
      />

      {/* Content Section */}
      <div className={Styles.content}>
        {/* Left Panel */}
        <div className={Styles.leftPanel}>
          <div className={Styles.leftContent}>
            <h1>Contact Us</h1>
            <Image
              src={PartnerImage}
              alt="PartnerImage"
              width={300}
              height={300}
              className={Styles.illustration}
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className={Styles.rightPanel}>
          <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={Styles.input}
                value={formData.firstName}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={Styles.input}
                value={formData.lastName}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className={Styles.input}
                value={formData.country}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={Styles.input}
                value={formData.phone}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={Styles.input}
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className={Styles.formGroup}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                className={Styles.input}
                value={formData.company}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className={Styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                className={Styles.textarea}
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            {/* Status Message */}
            {submitStatus.message && (
              <div className={submitStatus.type === 'success' ? Styles.successMessage : Styles.errorMessage}>
                {submitStatus.message}
              </div>
            )}
            
            <button 
              type="submit" 
              className={Styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {/* design components */}
      <div className={Styles.styleDiv1}></div>
      <div className={Styles.styleDiv2}></div>
      <div className={Styles.circle}></div>
      <Image
        src={WaveImage}
        alt="WaveImage"
        width={600}
        height={250}
        className={Styles.wave}
      />
    </div>
  );
};