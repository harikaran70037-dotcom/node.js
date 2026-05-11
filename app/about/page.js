async function delay() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
}

export default async function About() {

  await delay();

  return (
    <div className="about-container">

      <section className="about-hero">

        <h1>About FurniHome</h1>

        <p>
          We design modern, comfortable,
          and stylish furniture for your
          dream home.
        </p>

      </section>

      <section className="about-content">

        <div className="about-box">

          <h2>🏠 Our Mission</h2>

          <p>
            To bring premium quality
            furniture at affordable
            prices for every home.
          </p>

        </div>

        <div className="about-box">

          <h2>✨ Our Vision</h2>

          <p>
            To become the most trusted
            furniture brand with modern
            design solutions.
          </p>

        </div>

        <div className="about-box">

          <h2>🪑 What We Offer</h2>

          <p>
            Sofas, chairs, tables,
            beds, and custom furniture
            designs.
          </p>

        </div>

      </section>

    </div>
  );
}