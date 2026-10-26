import React from 'react';

export default function About() {
  return (
    <div className="main-wrap" id="about">
      <header className="section default-header about-header">
        <div className="container medium">
          <div className="row">
            <div className="flex-col once-in">
              <h1><span>Building complete</span><span>modern web applications</span></h1>
            </div>
          </div>
        </div>
      </header>

      <section className="section no-padding line-globe once-in">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <div className="digital-ball">
                <div className="overlay"></div>
                <div className="globe">
                  <div className="globe-wrap">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle-hor"></div>
                    <div className="circle-hor-middle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-image once-in">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <div className="arrow">
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>arrow-up-right</title>
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1019.000000, -279.000000)" stroke="currentColor" strokeWidth="1.5">
                      <g transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                        <polyline points="2.76923077 0 12 0 12 9.23076923"></polyline>
                        <line x1="12" y1="0" x2="0" y2="12"></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <p>
                I develop end-to-end web applications combining intuitive, responsive frontend interfaces with solid, maintainable backend architectures. With every project, I focus on writing clean, readable code, solving complex architectural challenges, and delivering seamless user experiences.
              </p>
              <p>
                <span style={{ opacity: 0.5, display: 'block', paddingTop: '0.5em' }}>
                  Always learning and building<span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span>
                </span>
              </p>
            </div>
            <div className="flex-col">
              <div className="single-about-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/about-portrait.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-services">
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>I can help you with <span className="animate-dot">.</span><span className="animate-dot">.</span><span className="animate-dot">.</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe"></div>
              <h4>Frontend Development</h4>
              <p>Crafting responsive, performant user interfaces with React, modern JavaScript, and clean HTML/CSS, with a strong focus on intuitive interactions and accessible design.</p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe"></div>
              <h4>Backend &amp; APIs</h4>
              <p>Architecting scalable server-side systems, RESTful API integrations, efficient data handling, and secure authentication to power dynamic digital platforms.</p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe"></div>
              <h4>The full package</h4>
              <p>End-to-end web development from initial architecture to final deployment. Bridging frontend aesthetics and backend reliability into cohesive, production-ready applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-awwwards">
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="single-image">
                <div
                  className="overlay overlay-image"
                  style={{
                    backgroundImage: 'url(/assets/avatar.jpg)',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="overlay"></div>
              </div>
            </div>
            <div className="flex-col">
              <div className="awwwards-badge"></div>
              <h2>Education &amp;<br />Background</h2>
              <p>I am a Full-Stack Developer dedicated to building reliable, scalable web applications, connecting clean user experiences with robust backend engineering.</p>
              <div className="about-credentials">
                <div className="credential-item">
                  <h5>Degree</h5>
                  <h4>[Your Degree / Specialization]</h4>
                  <p>[Your University or Institution] ([Year — Year])</p>
                </div>
                <div className="credential-item">
                  <h5>Experience</h5>
                  <h4>[Your Role / Experience]</h4>
                  <p>[Company or Independent Projects] ([Year — Present])</p>
                </div>
                <div className="credential-item">
                  <h5>Core Competencies</h5>
                  <div className="credential-tags">
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>REST APIs</span>
                    <span>Git &amp; GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
