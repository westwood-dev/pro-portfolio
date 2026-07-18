import { Icon } from '@iconify/react';
import { Projects } from '../components/Projects';
import { Experiments } from '../components/Experiments';
import { Contact } from '../components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.fullPage} style={{ paddingTop: 0 }}>
        <h1 className={`title text-colour ${styles.heroTitle}`} data-fade="" data-fade-delay="0" style={{ overflow: 'hidden' }}>
          William
          <br />
          Westwood
        </h1>
        <div
          className={`${styles.topLinksCont} ${styles.heroInfo}`}
          data-fade=""
          data-fade-delay="150"
          style={{
            border: 'solid rgb(var(--text))',
            borderWidth: 'var(--border-width) 0',
            width: '100%',
            padding: 0,
          }}
        >
          <div
            style={{
              border: 'solid rgb(var(--text))',
              borderWidth: '0 0 var(--border-width) 0',
              transition: 'border-color 0.5s',
            }}
          >
            <span className={styles.label}>Creative technologist</span>
          </div>

          <p>
            {/* <span className={styles.label}> */}
            {/*   Creative technologist */}
            {/* </span> */}
            <span>
              I design and build as one practice — native iOS apps, developer tooling, WebGL installations and generative graphics. Most of the attention goes to what you don't see: how an interaction feels, how the system holds underneath.
            </span>
            <span>
              Currently Lead Software Engineer at Ambient Works.
            </span>
          </p>
          {/* <div> */}
          {/*   <div */}
          {/*     style={{ */}
          {/*       border: 'solid rgb(var(--text))', */}
          {/*       borderWidth: 'var(--border-width) 0', */}
          {/*       transition: 'border-color 0.5s', */}
          {/*     }} */}
          {/*   > */}
          {/*     <span className={styles.label}>Recent Clients</span> */}
          {/*   </div> */}
          {/*   <div className={styles.clientLinksCont}> */}
          {/*     <div style={{ display: 'flex', flexDirection: 'row' }}> */}
          {/*       <a href="https://ambientworks.io" target="_blank" rel="noopener noreferrer"> */}
          {/*         Ambient Works */}
          {/*       </a> */}
          {/*       <Icon icon="material-symbols:arrow-outward" style={{ fontSize: '1rem' }} className={styles.iconOutward} aria-hidden="true" /> */}
          {/*     </div> */}
          {/*     <span aria-hidden="true">---</span> */}
          {/*     <div style={{ display: 'flex', flexDirection: 'row' }}> */}
          {/*       <a href="https://www.somersethouse.org.uk/somerset-house-studios" target="_blank" rel="noopener noreferrer"> */}
          {/*         Somerset House Studios */}
          {/*       </a> */}
          {/*       <Icon icon="material-symbols:arrow-outward" style={{ fontSize: '1rem' }} className={styles.iconOutward} aria-hidden="true" /> */}
          {/*     </div> */}
          {/*     <span aria-hidden="true">---</span> */}
          {/*     <div style={{ display: 'flex', flexDirection: 'row' }}> */}
          {/*       <a href="https://www.arts.ac.uk/creative-computing-institute" target="_blank" rel="noopener noreferrer"> */}
          {/*         Creative Computing Institute */}
          {/*       </a> */}
          {/*       <Icon icon="material-symbols:arrow-outward" style={{ fontSize: '1rem' }} className={styles.iconOutward} aria-hidden="true" /> */}
          {/*     </div> */}
          {/*     <span aria-hidden="true">---</span> */}
          {/*     <div style={{ display: 'flex', flexDirection: 'row' }}> */}
          {/*       <a href="https://dontdrinkthewater.shop" target="_blank" rel="noopener noreferrer"> */}
          {/*         Don&#39;t Drink The Water */}
          {/*       </a> */}
          {/*       <Icon icon="material-symbols:arrow-outward" style={{ fontSize: '1rem' }} className={styles.iconOutward} aria-hidden="true" /> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className={`${styles.fullPage} projects-cont`}>
        <h2 className={`title text-colour ${styles.sectionTitle}`} data-fade="" data-fade-delay="0" style={{ overflow: 'hidden' }}>
          Projects.
        </h2>
        <Projects />
      </div>
      <div className={`${styles.fullPage} experiments-cont`}>
        <h2 className={`title text-colour ${styles.sectionTitle}`} data-fade="" data-fade-delay="0" style={{ overflow: 'hidden' }}>
          Experiments.
        </h2>
        <Experiments />
      </div>
      <div className={`${styles.fullPage} contact-cont`}>
        <h2 className={`title text-colour ${styles.sectionTitle}`} data-fade="" data-fade-delay="0" style={{ overflow: 'hidden' }}>
          Contact.
        </h2>
        <Contact />
      </div>
    </>
  );
}
