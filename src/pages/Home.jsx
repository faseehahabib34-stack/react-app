
function Home() {
  return (
    <div className="app">

      {/* Hero Section */}
      <section className="home-hero">

        <div className="home-hero-content">

          <div className="home-hero-text">

            <p className="home-label">
              WELCOME TO PixelCraft
            </p>

            <h1>
              We Build Modern
              <span> Digital Experiences</span>
            </h1>

            <p className="home-description">
              We create beautiful, responsive and user-friendly
              websites using modern web technologies.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Get Started
              </button>

              <button className="secondary-btn">
                Learn More
              </button>

            </div>

          </div>


          {/* Hero Image */}
          <div className="home-hero-image">

            <img
              src="/work.JPG"
              alt="Our work"
            />

          </div>

        </div>

      </section>


      {/* Services Preview */}
      <section className="home-services">

        <div className="home-services-header">

          <p className="home-label">
            WHAT WE DO
          </p>

          <h2>
            Our Services
          </h2>

          <p>
            Simple and powerful solutions for your digital needs.
          </p>

        </div>


        <div className="home-service-cards">

          <div className="home-service-card">

            <div className="home-service-number">
              01
            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Modern and responsive websites built
              for businesses and individuals.
            </p>

          </div>


          <div className="home-service-card">

            <div className="home-service-number">
              02
            </div>

            <h3>
              UI Design
            </h3>

            <p>
              Clean and attractive interfaces that
              provide a great user experience.
            </p>

          </div>


          <div className="home-service-card">

            <div className="home-service-number">
              03
            </div>

            <h3>
              React Apps
            </h3>

            <p>
              Fast and interactive applications
              built with modern React.
            </p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="footer">

        <p>
          © 2026 PixelCraft. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default Home

