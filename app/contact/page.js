async function delay() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
}

export default async function Contact() {

  await delay();

  return (
    <div className="contact-container">

      <div className="contact-left">

        <h1>Contact Us</h1>

        <p>
          We’d love to hear from you.
          Fill out the form and we will
          get back to you soon.
        </p>

        <div className="contact-info">
          <p>📍 Chennai, India</p>

          <p>📞 +91 98765 43210</p>

          <p>✉️ support@furnihome.com</p>
        </div>

      </div>

      <div className="contact-right">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}