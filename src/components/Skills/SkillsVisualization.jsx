import React, { useEffect, useState, useRef } from 'react';
import { SkillsStyles } from './SkillsStyles'; // Import your styled-components styles

const skillsData = [
  // Frontend orbit
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Semantic HTML markup with accessibility in mind", color: "#E44D26", radius: 120, angle: 0, speed: 0.0008, orbit: 0 },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Advanced CSS with animations and responsive design", color: "#1572B6", radius: 120, angle: 1.25, speed: 0.0009, orbit: 0 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Modern ES6+ JavaScript development", color: "#F7DF1E", radius: 120, angle: 2.5, speed: 0.00075, orbit: 0 },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Building dynamic interfaces with React", color: "#61DAFB", radius: 120, angle: 3.75, speed: 0.0007, orbit: 0 },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", description: "Utility-first CSS with Tailwind", color: "#38B2AC", radius: 120, angle: 5, speed: 0.0008, orbit: 0 },
  
  // Backend orbit
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", description: "Server-side programming with PHP", color: "#777BB4", radius: 175, angle: 0.6, speed: 0.0006, orbit: 1 },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", description: "PHP framework for web artisans", color: "#FF2D20", radius: 175, angle: 1.85, speed: 0.00065, orbit: 1 },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "JavaScript runtime for backend development", color: "#339933", radius: 175, angle: 3.1, speed: 0.0007, orbit: 1 },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Web framework for Node.js", color: "#000000", radius: 175, angle: 4.4, speed: 0.00075, orbit: 1 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational database management", color: "#4479A1", radius: 175, angle: 5.6, speed: 0.0006, orbit: 1 },
  
  // Tools orbit
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Version control system", color: "#F05032", radius: 230, angle: 0.3, speed: 0.0005, orbit: 2 },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Collaboration and CI/CD workflows", color: "#181717", radius: 230, angle: 1.9, speed: 0.00055, orbit: 2 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization for applications", color: "#2496ED", radius: 230, angle: 3.5, speed: 0.0005, orbit: 2 },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "UI/UX design and prototyping", color: "#F24E1E", radius: 230, angle: 5.1, speed: 0.00045, orbit: 2 },
];

const orbitColors = ["#61DAFB", "#FF2D20", "#F05032"];

const SkillsVisualization = () => {
  const appRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const lastTimestampRef = useRef(0);

  useEffect(() => {
    const app = appRef.current;
    if (!app) return;

    const createSkillElements = () => {
      skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill-item', `skill-orbit-${skill.orbit + 1}`);
        skillElement.style.borderColor = skill.color;
        skillElement.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        skillElement.dataset.description = skill.description;
        skillElement.dataset.name = skill.name;
        skillElement.dataset.color = skill.color;

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('skill-icon');
        iconContainer.style.backgroundColor = `${skill.color}22`;

        const icon = document.createElement('img');
        icon.src = skill.icon;
        icon.alt = skill.name;

        iconContainer.appendChild(icon);
        skillElement.appendChild(iconContainer);

        const nameElement = document.createElement('span');
        nameElement.classList.add('skill-name');
        nameElement.textContent = skill.name;

        skillElement.appendChild(nameElement);
        app.appendChild(skillElement);

        skillElement.addEventListener('mouseenter', () => handleMouseEnter(skillElement, skill, nameElement));
        skillElement.addEventListener('mouseleave', () => handleMouseLeave(skillElement, nameElement));
      });
    };

    const handleMouseEnter = (skillElement, skill, nameElement) => {
      skillElement.style.transform = 'scale(1.2)';
      skillElement.style.zIndex = '10';
      skillElement.style.boxShadow = `0 8px 30px ${skill.color}66`;
      skillElement.style.backgroundColor = `${skill.color}22`;
      nameElement.style.opacity = '1';

      const tooltip = document.createElement('div');
      tooltip.classList.add('skill-tooltip');

      const tooltipContent = document.createElement('div');
      tooltipContent.classList.add('tooltip-content');

      const tooltipTitle = document.createElement('h4');
      tooltipTitle.textContent = skill.name;
      tooltipTitle.style.color = skill.color;

      const tooltipDesc = document.createElement('p');
      tooltipDesc.textContent = skill.description;

      tooltipContent.appendChild(tooltipTitle);
      tooltipContent.appendChild(tooltipDesc);
      tooltip.appendChild(tooltipContent);
      skillElement.appendChild(tooltip);

      const descTitle = document.querySelector('.skill-description h3');
      const descText = document.querySelector('.skill-description p');

      if (descTitle && descText) {
        descTitle.textContent = skill.name;
        descTitle.style.color = skill.color;
        descText.textContent = skill.description;

        document.querySelector('.skill-description').style.opacity = '1';
        document.querySelector('.skill-description').style.transform = 'translateY(0)';
      }
    };

    const handleMouseLeave = (skillElement, nameElement) => {
      skillElement.style.transform = '';
      skillElement.style.zIndex = '';
      skillElement.style.boxShadow = '';
      skillElement.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      nameElement.style.opacity = '';

      const tooltip = skillElement.querySelector('.skill-tooltip');
      if (tooltip) {
        skillElement.removeChild(tooltip);
      }
    };

    const createOrbits = () => {
      const orbitRadii = [120, 175, 230];
      orbitRadii.forEach((radius, index) => {
        const orbit = document.createElement('div');
        orbit.classList.add('orbit', `orbit-${index + 1}`);
        orbit.style.width = `${radius * 2}px`;
        orbit.style.height = `${radius * 2}px`;
        orbit.style.border = `1.5px dashed ${orbitColors[index]}`;
        document.querySelector('.orbits').appendChild(orbit);
      });
    };

    const updateSkillPosition = (element, skill) => {
      const x = Math.cos(skill.angle) * skill.radius;
      const y = Math.sin(skill.angle) * skill.radius;
      element.style.left = `calc(50% + ${x}px)`;
      element.style.top = `calc(50% + ${y}px)`;
    };

    const animate = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      const deltaTime = timestamp - lastTimestampRef.current;
    
      if (!isPaused) {
        const skillElements = document.querySelectorAll('.skill-item');
        skillElements.forEach((element, index) => {
          const skill = skillsData[index];
          if (skill) {
            skill.angle += skill.speed * deltaTime;
            updateSkillPosition(element, skill);
          }
        });
    
        const orbitsElement = document.querySelector('.orbits');
        if (orbitsElement) {
          orbitsElement.style.transform = `rotate(${timestamp * 0.01 % 360}deg)`;
        }
      }
    
      lastTimestampRef.current = timestamp;
      requestAnimationFrame(animate);
    };
    

    // Update pause button listener
    const pauseButton = document.getElementById('orbit-control');
    pauseButton.addEventListener('click', () => {
      setIsPaused(prev => {
        const newState = !prev;
        pauseButton.textContent = newState ? 'Resume Orbit' : 'Pause Orbit';
        pauseButton.classList.toggle('active', !newState);
        return newState;
      });
    });
    

    createSkillElements();
    createOrbits();
    requestAnimationFrame(animate);

    // Cleanup event listener on unmount
    return () => {
      pauseButton.removeEventListener('click', () => {});
    };
  }, [isPaused]);

  return (
    <>
      <SkillsStyles /> {/* Include the global styles */}
      <div className="skills-container">
        <div className="title-container">
          <h2>My Tech Universe</h2>
          <p className="subtitle">Explore my technical skills galaxy</p>
        </div>

        <div className="orbit-controls">
          <button id="orbit-control" className="orbit-control active">Pause Orbit</button>
          <div className="orbit-legend">
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: orbitColors[0] }}></span>
              <span className="legend-text">Frontend</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: orbitColors[1] }}></span>
              <span className="legend-text">Backend</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: orbitColors[2] }}></span>
              <span className="legend-text">Tools</span>
            </div>
          </div>
        </div>

        <div className="skills-orbit">
          <div className="orbits" ref={appRef}></div>
          <div className="planet">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3315/3315017.png" // Brain image URL
              alt="Core Skill" 
              style={{ filter: 'brightness(10)', width: '100px', height: '100px' }} // Adjust size as needed
            />
            <div className="planet-glow"></div>
          </div>
        </div>

        <div className="skill-description" style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3>Hover over a skill</h3>
          <p>Hover over any skill to see more details about my experience with it.</p>
        </div>
      </div>
    </>
  );
};

export default SkillsVisualization;
