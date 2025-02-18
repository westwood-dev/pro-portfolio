import { Icon } from '@iconify/react';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-holder">
      <a
        href="mailto:hello@williamwestwood.com"
        target="_blank"
        className="contact text-colour"
        rel="noopener noreferrer"
      >
        <span className="contact-label">Email</span>
        <span className="contact-text">hello@williamwestwood.com</span>
        <div className="contact-arrow">
          <Icon icon="material-symbols:arrow-outward" />
        </div>
      </a>
      <a
        href="https://github.com/westwood-dev"
        target="_blank"
        className="contact text-colour"
        rel="noopener noreferrer"
      >
        <span className="contact-label">GitHub</span>
        <span className="contact-text">@westwood-dev</span>
        <div className="contact-arrow">
          <Icon icon="material-symbols:arrow-outward" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/will-westwood/"
        target="_blank"
        className="contact text-colour"
        rel="noopener noreferrer"
      >
        <span className="contact-label">Linkedin</span>
        <span className="contact-text">William Westwood</span>
        <div className="contact-arrow">
          <Icon icon="material-symbols:arrow-outward" />
        </div>
      </a>
      <a
        href="/William-Westwood-CV.pdf"
        target="_blank"
        className="contact text-colour"
        rel="noopener noreferrer"
      >
        <span className="contact-label">CV</span>
        <span className="contact-text">Download</span>
        <div className="contact-arrow">
          <Icon icon="material-symbols:arrow-outward" />
        </div>
      </a>
    </div>
  );
};

export default Contact;