import React from 'react';

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    console.log('Contact form submitted:', contactData);
    // You can integrate with a service like Netlify Forms, Formspree, or EmailJS
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="container">
      <section className="page">
        <h1>📬 Contact Me</h1>

        <form onSubmit={handleContactSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;