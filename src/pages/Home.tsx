import { Icon } from '@iconify/react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { SEO } from '../components/SEO';
import './Home.css';

export const Home = () => {
  return (
    <>
      <SEO />
      <div className="full-page" style={{ paddingTop: 0 }}>
        <h1 className="title text-colour" style={{ overflow: 'hidden' }}>
          William<br />Westwood
        </h1>
        <div className="top-links-cont">
          <span>
            Web design, UI/UX, Full-stack Development, Front-end Development and 3D
            Design.
          </span>
          <div className="client-section">
            <span className="label">Recent Clients</span>
          </div>
          <div className="client-links-cont">
            <div className="client-link">
              <a class='text-colour' href="https://www.somersethouse.org.uk/somerset-house-studios" target="_blank" rel="noopener noreferrer">
                Somerset House Studios
              </a>
              <Icon icon="material-symbols:arrow-outward" width="1rem" className="icon-outward" />
            </div>
            <span>---</span>
            <div className="client-link">
              <a class='text-colour' href="https://www.arts.ac.uk/creative-computing-institute" target="_blank" rel="noopener noreferrer">
                Creative Computing Institute
              </a>
              <Icon icon="material-symbols:arrow-outward" width="1rem" className="icon-outward" />
            </div>
            <span>---</span>
            <div className="client-link">
              <a class='text-colour' href="https://dontdrinkthewater.shop" target="_blank" rel="noopener noreferrer">
                Don't Drink The Water
              </a>
              <Icon icon="material-symbols:arrow-outward" width="1rem" className="icon-outward" />
            </div>
          </div>
        </div>
      </div>
      <div className="projects-cont full-page">
        <h1 className="title text-colour" style={{ overflow: 'hidden' }}>Projects.</h1>
        <Projects />
      </div>
      <div className="contact-cont full-page">
        <h1 className="title text-colour" style={{ overflow: 'hidden' }}>Contact.</h1>
        <Contact />
      </div>
    </>
  );
};

export default Home;
