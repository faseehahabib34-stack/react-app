
function Services() { //react component
  return (
    <section className="services-page">

      <div className="services-header">

        <p className="services-label">WHAT WE DO</p>

        <h1>Our Services</h1>

        <p>
          We create modern and simple digital solutions
          to help businesses grow.
        </p>

      </div>


      <div className="service-cards">

        <div className="service-card">

          <div className="service-icon">01</div>

          <h2>Web Development</h2>

          <p>
            We build modern, responsive and user-friendly
            websites for businesses and individuals.
          </p>

          <button className="service-btn">
            Learn More
          </button>

        </div>


        <div className="service-card">

          <div className="service-icon">02</div>

          <h2>UI Design</h2>

          <p>
            We create clean and attractive interfaces
            that are easy and enjoyable to use.
          </p>

          <button className="service-btn">
            Learn More
          </button>

        </div>


        <div className="service-card">

          <div className="service-icon">03</div>

          <h2>React Development</h2>

          <p>
            We build fast and interactive web applications
            using modern React development.
          </p>

          <button className="service-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}

export default Services

