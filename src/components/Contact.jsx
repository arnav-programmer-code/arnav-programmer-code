import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "8c5aa48f-cb5f-48c2-96ff-42d81798d1cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset(); // clear form after success
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me — Let's Build Something Amazing!</h1>
      </div>

      <div className="contact-section">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's Connect!</h1>
          <p>
            Got an exciting idea, project, or collaboration in mind? 🚀 I’d love
            to hear from you! Whether you need a developer for your next big
            thing or just want to chat about tech — my inbox is always open.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img
                src="https://www.freeiconspng.com/thumbs/email-icon/email-icon--endless-icons-20.png"
                alt="Email Icon"
              />
              <p>ultra.viking.pro@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={onSubmit} className="contact-right">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message ✉️</button>

          {/* Result message */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
