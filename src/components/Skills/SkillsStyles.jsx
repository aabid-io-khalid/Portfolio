import styled, { createGlobalStyle } from "styled-components";

export const SkillsStyles = createGlobalStyle`
  :root {
    --green: #00ffaa;
    --green-glow: rgba(0, 255, 170, 0.5);
    --green-glow-strong: rgba(0, 255, 170, 0.8);
    --orbit-1: #61DAFB;
    --orbit-2: #FF2D20;
    --orbit-3: #F05032;
    --bg-dark: #0a0a0a;
    --bg-light: #1a1a1a;
    --text-primary: rgba(255, 255, 255, 0.9);
    --text-secondary: rgba(255, 255, 255, 0.7);
    --card-bg: rgba(255, 255, 255, 0.05);
    --card-border: rgba(255, 255, 255, 0.1);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 15px var(--green-glow);
    }
    50% {
      box-shadow: 0 0 30px var(--green-glow-strong);
    }
    100% {
      box-shadow: 0 0 15px var(--green-glow);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0%, 100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  .skills-container {
    align-items: center;
    font-family: 'Inter', sans-serif;
    margin-top: 12rem;
    min-height: 100vh;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .title-container {
    text-align: center;
    margin-bottom: 4rem;
  }

  .title-container h2 {
    display: inline-block;
    font-size: 3.5rem;
    color: var(--green);
    text-align: center;
    width: 100%;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    text-shadow: 0 0 15px var(--green-glow);
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .orbit-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .orbit-control {
    background: rgba(0, 255, 170, 0.1);
    border: 1px solid var(--green);
    color: var(--green);
    padding: 0.6rem 1.5rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    letter-spacing: 1px;
  }

  .orbit-control:hover {
    background: rgba(0, 255, 170, 0.2);
    box-shadow: 0 0 15px rgba(0, 255, 170, 0.3);
  }

  .orbit-control.active {
    background: rgba(0, 255, 170, 0.25);
    box-shadow: 0 0 15px rgba(0, 255, 170, 0.4);
  }

  .orbit-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .orbit-legend .legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .orbit-legend .legend-item .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .orbit-legend .legend-item .legend-text {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .skills-orbit {
  position: relative; /* Ensure this is relative */
  width: 500px; /* Adjust as needed */
  height: 500px; /* Adjust as needed */
  display: flex;
  justify-content: center; /* Center the orbits */
  align-items: center; /* Center the orbits */
  margin: 2rem auto; /* Center the container */
}

  .orbits {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
  }

  .planet {
    position: absolute;
    background: linear-gradient(135deg, rgba(0, 255, 170, 0.8), rgba(0, 200, 140, 0.6));
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px var(--green-glow-strong), inset 0 0 15px rgba(255, 255, 255, 0.5);
    animation: pulse 3s infinite ease-in-out;
    z-index: 10;
  }

  .planet img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    animation: float 6s ease-in-out infinite;
  }

  .planet .planet-glow {
    position: absolute;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 170, 0.3) 0%, transparent 70%);
    animation: glow 4s infinite ease-in-out;
  }

  .skill-item {
    position: absolute;
    backdrop-filter: blur(5px);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border: 1.5px solid var(--card-border);
    z-index: 5;
  }

  .skill-item.skill-orbit-1 .skill-icon {
    background-color: rgba(97, 218, 251, 0.1);
  }

  .skill-item.skill-orbit-2 .skill-icon {
    background-color: rgba(255, 45, 32, 0.1);
  }

  .skill-item.skill-orbit-3 .skill-icon {
    background-color: rgba(240, 80, 50, 0.1);
  }

  .skill-item .skill-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .skill-item .skill-icon img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  .skill-item .skill-name {
    font-size: 12px;
    font-weight: 500;
    margin-top: 8px;
    color: var(--text-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    text-align: center;
  }

  .skill-item:hover .skill-name {
    opacity: 1;
  }

  .skill-item:hover .skill-icon img {
    transform: scale(1.2);
  }

  .skill-item .skill-tooltip {
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 1rem;
    min-width: 200px;
    z-index: 100;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .skill-item .skill-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: rgba(10, 10, 10, 0.95) transparent transparent transparent;
  }

  .skill-item .skill-tooltip .tooltip-content h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--green);
  }

  .skill-item .skill-tooltip .tooltip-content p {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .skill-description {
    margin-top: 3rem;
    margein-left: 10rem;
    text-align: center;
    width: 500px !important;
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid var(--card-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .skill-description h3 {
    font-size: 1.5rem;
    color: var(--green);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .skill-description p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .title-container h2 {
      font-size: 2.5rem;
    }
    
    .skills-orbit {
      width: 340px;
      height: 340px;
    }
    
    .planet {
      width: 80px;
      height: 80px;
    }
    
    .planet img {
      width: 40px;
      height: 40px;
    }
    
    .skill-item {
      width: 70px;
      height: 70px;
    }
    
    .skill-item .skill-icon {
      width: 40px;
      height: 40px;
    }
    
    .skill-item .skill-icon img {
      width: 25px;
      height: 25px;
    }
    
    .skill-item .skill-tooltip {
      min-width: 150px;
    }
    
    .skill-item .skill-tooltip .tooltip-content h4 {
      font-size: 0.9rem;
    }
    
    .skill-item .skill-tooltip .tooltip-content p {
      font-size: 0.7rem;
    }
    
    .skill-description {
      padding: 1rem;
    }
    
    .skill-description h3 {
      font-size: 1.3rem;
    }
    
    .skill-description p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .skills-orbit {
      width: 280px;
      height: 280px;
    }
  }
`;