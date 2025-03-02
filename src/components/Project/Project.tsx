import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aabid-io-khalid/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Human Resources Management</h3>
              <p>Developed a robust employee and company management system using Laravel, enabling companies to manage user profiles, roles, departments, and hierarchy. Integrated secure authentication with Laravel Breeze, role-based permissions with Spatie, and employee profile management. Implemented career tracking, contract management, and dynamic organizational chart visualization. Utilized Laravel Media Library for document storage, with a focus on performance optimization, Eloquent query efficiency, and adherence to Laravel best practices</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Postgres</li>
                <li>Spatie/permissions</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/aabid-io-khalid/Event-Management-Platform" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>     */}
                 </div>
            </header>
            <div className="body">
              <h3>Event-Management-Platform</h3>
              <p> Developed a full-stack event management platform using PHP, PostgreSQL, and AJAX, enabling organizers to create, manage, and promote events with secure booking and payments via Stripe/PayPal. Integrated role-based authentication, QR code generation, and advanced security measures for a seamless and secure user experience </p>
            </div>
            <footer> <ul className="tech-list"> <li>Stripe Gateway</li> <li>Axios</li> <li>Postgres</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/aabid-io-khalid/You-demy" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>Youdemy</h3>
              <p>
              Developed a full-stack e-learning platform using PHP and SQL, enabling teachers to create courses and students to enroll securely. Implemented role-based access control for administrators, teachers, and students, along with a scalable, modular architecture. Designed an admin dashboard for managing users, courses, and platform activity while ensuring security and maintainability.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP (OOP) </li>
                <li>SQL</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/aabid-io-khalid/Dev_Blog" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Devloper Blog</h3>
              <p>Developed a content management system for a collaborative platform like Dev.to using PHP 8 and PDO, allowing developers to share articles, explore relevant content, and collaborate. Implemented secure user registration and login, role-based access control (admin, author, user), and a powerful admin dashboard for managing users, categories, tags, and articles. Designed interactive charts for statistics and incorporated secure features like SQL injection prevention, XSS protection, and CSRF validation.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/aabid-io-khalid/ultimate-fut-team" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Team Builder</h3>
              <p>
              Developed a dynamic web application using PHP, MySQL, and JavaScript, allowing users to create and manage their dream teams through an interactive interface. Implemented features for adding, removing, and organizing players, with real-time position adjustments. Designed a responsive UI with Tailwind CSS and built an admin dashboard for user and player management
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Tailwind</li>
                <li>draggable react</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}