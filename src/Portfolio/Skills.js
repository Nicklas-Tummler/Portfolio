import React, { useEffect, useRef } from 'react';
import 'animate.css';
import gsap from 'gsap';

const Skills = () => {
    const skillsRef = useRef(null);
    const extraRef = useRef(null);

    useEffect(() => {
        const skills = skillsRef.current;
        const extraSkills = extraRef.current

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(skills, { opacity: 1, x: 0, duration: 0.8, ease: "power4.easeOut", from: { x: -100 } });
                    gsap.to(extraSkills, { opacity: 1, y: 10, duration: 1.4, ease: "power4.inOut" });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Adjust the threshold as needed

        observer.observe(skills);
        observer.observe(extraSkills);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main id='skills'>
            <div className="skills-container" >
                
                <h1 className="main-skills-h1">𝕊𝕜𝕚𝕝𝕝𝕤</h1>
                <div className="icons">
                    <span> 
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-git-plain colored"></i>
                        <i className="devicon-github-original"></i>
                    </span>
                </div>
                
                <div ref={skillsRef} style={{ opacity: 0, transform: 'translateX(-100px)' }}>

                <ul className="skills">
                    <li>HTML5 <span>Experience: 2.5 Years</span></li>
                    <li>CSS3 <span>Experience: 2.5 Years</span></li>
                    <li>Javascript <span>Experience: 2 Years</span></li>
                    <li>FrameWork: React <span>Experience: 1 Year</span></li>
                    <li>GIT <span>Experience: 5 Months</span></li>
                    <li>Github <span>Experience: 5 Months</span></li>
                </ul>
                </div>
                

                <div className="extra-skills">
                    <h2>𝐸𝓍𝓉𝓇𝒶:</h2>
                    <ul ref={extraRef} style={{ opacity: 0, transform: 'translateY(50px)'}}>
                        <li>Arduino</li>
                        <li>Networking</li>
                        <li>Computers</li>
                        <li>Servers</li>
                        <li>Linux</li>
                        <li>Affiliate marketing</li>
                    </ul>
                </div>
                
            </div>
        </main>
    );
};

export default Skills;
