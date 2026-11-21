import { useState } from "react";
import Swal from 'sweetalert2'
const Contact = () => {
  const [status, setStatus] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "74475785-4d93-4424-a79f-945d8e14aa9a");
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Message could not be sent");
        Swal.fire({
        title: "Thank you",
        text: "Your message has been sent.",
        icon: "success",
      });
      form.reset();
      setStatus("");
    } catch {
      setStatus("Your message could not be sent. Please try again.");
      }
  };
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Have a good one in mind?</p>
        <h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2>
        <p>I’m always interested in thoughtful teams, meaningful products, and conversations about what comes next.</p>
        <a className="text-link" href="mailto:kanandave11@outlook.com">kanandave11@outlook.com <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-form-wrap">
        <form onSubmit={onSubmit} className="contact-form">
          <label htmlFor="contact-name">Your name</label>
          <input type="text" name="name" id="contact-name" placeholder="Name" autoComplete="name" required />
          <label htmlFor="contact-email">Email address</label>
          <input type="email" name="email" id="contact-email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="contact-message">A little about your project</label>
          <textarea name="message" id="contact-message" placeholder="Write your message..." rows="4" required />
          <button type="submit" className="button-primary">Send a message <span aria-hidden="true">↗</span></button>
          {status && <p className="form-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
