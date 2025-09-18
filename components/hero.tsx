export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="orbital-bg">
        <div className="orbit orbit-1">
          <div className="orbit-dot"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="orbit-dot"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="orbit-dot"></div>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="greeting-circle">
            <span>Hello!</span>
          </div>
          <h1 className="hero-title">
            I'm <span className="highlight-circle">Menna Hassan</span>
          </h1>
          <p className="hero-subtitle">Backend Developer</p>
          <p className="hero-description">
            Building scalable, high-performance web applications using .NET Technology. Passionate about creating
            efficient backend solutions and learning new technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-circle btn-primary">
              <span>View Work</span>
              <div className="btn-ripple"></div>
            </a>
            <a href="#contact" className="btn-circle btn-secondary">
              <span>Let's Talk</span>
              <div className="btn-ripple"></div>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-orbit">
            <div className="profile-circle">
              <img src="/images/menna-logo.png" alt="Menna Hassan" />
              <div className="profile-ring"></div>
              <div className="profile-glow"></div>
            </div>
            <div className="floating-icons">
              <div className="icon-circle icon-1">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="icon-circle icon-2">
                <i className="fab fa-js"></i>
              </div>
              <div className="icon-circle icon-3">
                <i className="fab fa-css3"></i>
              </div>
              <div className="icon-circle icon-4">
                <i className="fab fa-html5"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
