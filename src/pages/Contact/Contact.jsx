function Contact() {
  return (
    <section id="contact" className="contact">

      <h1>Contact Me</h1>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Your Email" />

        <textarea
          placeholder="Your Message"
          rows="6"
        ></textarea>

        <button type="submit" className="btn-primary">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;