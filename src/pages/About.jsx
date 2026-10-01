
function About() {
  return (
    <section className="about">

      <div className="about-content">

        {/* Left Side */}
        <div className="about-text">

          <p className="about-label">WHO WE ARE</p>

          <h1>We Build Things With React</h1>

          <p>
            Welcome to MyBrand. We create modern and simple
            digital experiences that help people and businesses grow.
          </p>

          <p>
            We believe in learning, creativity and building useful
            things with technology.
          </p>

          <button className="primary-btn">
            Learn More
          </button>

        </div>


        {/* Right Side */}
        <div className="about-image">

          <img
            src="/work.JPG"
            alt="Our work"
          />

        </div>

      </div>

    </section>
  )
}

export default About

