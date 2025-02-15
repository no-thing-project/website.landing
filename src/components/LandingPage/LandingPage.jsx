import React, { useRef, useCallback, Suspense } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './LandingPage.css';

// Використовуємо React.lazy для завантаження 3D-сцени
const Scene = React.lazy(() => import('../Scene/Scene3D'));

const LandingPage = ({hdrTexture}) => {
  const sceneRef = useRef(null);
  const sceneContainerRef = useRef(null);

  const { scrollY } = useViewportScroll();
  const x = useTransform(
    scrollY,
    [0, 400, 700, 1400, 1800, 2500],
    ['0vw', '0vw', '50vw', '50vw', '-5vw', '-5vw']
  );
  const opacity = useTransform(
    scrollY,
    [0, 390, 700, 800, 1510, 1800, 3000, 3500],
    [1, 1, 1, 1, 1, 1, 1, 0]
  );

  const handleStop = () => {
    sceneRef.current?.stopObjects();
  };

  const handleContinue = () => {
    sceneRef.current?.continueObjects();
  };

  const handlePrev = () => {
    sceneRef.current?.showPreviousState();
  };

  const handleNext = () => {
    sceneRef.current?.showNextState();
  };

  function smoothScrollTo(targetY, duration = 800) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + distance * ease);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  // Мемоізована функція для скролу до секції
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 1000);
    }
  }, []);

  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense fallback={<div>Loading 3D scene...</div>}>
        {/* Контейнер для 3D-сцени */}
        <motion.div
          ref={sceneContainerRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50vw',
            height: '100vh',
            pointerEvents: 'none',
            x: x,
            opacity: opacity,
            zIndex: 5,
          }}
        >
          <Scene ref={sceneRef} hdrTexture={hdrTexture} />
        </motion.div>
      </Suspense>

      <header className="landing-header">
        <motion.a
          className="logo"
          href="#home"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="logo-text">
            no.thing<br />
            <span className="logo-sub">project</span>
          </h1>
        </motion.a>

        <nav className="landing-nav">
          <ul>
            <li>
              <a
                href="#section1"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('section1');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#section2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('section2');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#section3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('section3');
                }}
              >
                Noting
              </a>
            </li>
            <li>
              <a
                href="#section4"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('section4');
                }}
              >
                Our projects
              </a>
            </li>
            <li>
              <a
                href="#section5"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('section5');
                }}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <motion.div
          className="header-buttons"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleContinue}>Continue</button>
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </motion.div>
      </header>

      <section
        id="section1"
        className="page-section"
        data-section-id="1"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          HOME
        </motion.h2>
      </section>

      <section
        id="section2"
        className="page-section"
        data-section-id="2"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          WHO WE ARE
        </motion.h2>
      </section>

      <section
        id="section3"
        className="page-section"
        data-section-id="3"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eaeaea',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          WHAT IS NOTHING FOR YOU?
        </motion.h2>
      </section>

      <section
        id="section4"
        className="page-section"
        data-section-id="4"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          OUR PROJECTS
        </motion.h2>
      </section>

      <section
        id="section5"
        className="page-section"
        data-section-id="5"
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eaeaea',
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          CONTACTS
        </motion.h2>
      </section>

      <footer className="landing-footer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="footer-content"
        >
          <p>&copy; 2025 <span className="brand">no.thing.project</span></p>
          <p className="rights">ALL.RIGHTS.RESERVED</p>
        </motion.div>
      </footer>

    </motion.div>
  );
};

export default LandingPage;
