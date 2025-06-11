import HeadPicture from './images/head-picture.jpg';
import Resume from './Do_Gyuwon_Resume.pdf';
import WeatherDashboard from './images/weather-dashboard.png';
import WeatherDashboard2 from './images/weather-dashbord2.png';

function App() {
  const skills = {
    frontend: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js'],
    backend: ['Node.js', 'Python', 'Java', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'AWS', 'Figma']
  };

  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'A sleek weather application built with React and Material-UI. Features current weather conditions and 5-day forecast with dynamic updates using OpenWeatherMap API.',
      tech: ['React', 'Material-UI', 'OpenWeather API', 'JavaScript'],
      link: 'https://github.com/Q1justin/weather-dashboard',
      image: WeatherDashboard
    },
    {
      title: 'Baseball Stats',
      description: 'A modern portfolio built with React and SCSS',
      tech: ['React', 'SCSS', 'JavaScript'],
      link: 'https://github.com',
      image: WeatherDashboard2
    }
  ];

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1 className="hero__title">
            <span className="hero__greeting">안녕하세요</span>
            Justin Do
          </h1>
          <p className="hero__subtitle">Frontend Developer & Creative Thinker</p>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section className="about section">
          <div className="container">
            <div className="about__grid">
              <div className="about__image">
                <img src={HeadPicture} alt="Justin Do" />
              </div>
              <div className="about__content">
                <h2 className="section__title">About Me</h2>
                <p>Frontend developer with a passion for creating beautiful, functional interfaces. Based in the United States, originally from South Korea.</p>
                
                <div className="skills">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skills__category">
                      <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                      <ul className="skills__list">
                        {items.map(skill => (
                          <li key={skill} className="skills__item">{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects section">
          <div className="container">
            <h2 className="section__title">Featured Projects</h2>
            <div className="projects__grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-card__image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-card__overlay">
                      <div className="project-card__content">
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__description">{project.description}</p>
                        <div className="project-card__tech">
                          {project.tech.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <a href={project.link} className="project-card__link" target="_blank" rel="noopener noreferrer">
                          View Project →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact section">
          <div className="container">
            <h2 className="section__title">Get In Touch</h2>
            <div className="contact__content">
              <p>I'm always open to new opportunities and interesting projects.</p>
              <a href="mailto:your.email@example.com" className="button">
                Say Hello
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Justin Do. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
