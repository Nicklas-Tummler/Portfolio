import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import imageMe from "../Pictures/IMG_3200.jpg"

const About = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const headerRef = useRef(null)

    useEffect(() => {
        const image = imageRef.current;
        const text = textRef.current;
        const headerText = headerRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(image, { opacity: 1, scale: 1, duration: 2.0 });
                    gsap.to(text, { opacity: 1, y: 0, duration: 1.0, ease: "elastic.inOut" });
                    gsap.to(headerText, { opacity: 1, y: 0, duration: 0.4, ease: "back.in" });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.9 }); // Adjust the threshold as needed

        observer.observe(image);
        observer.observe(text);
        observer.observe(headerText);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header id="about">
            <main className="main-about">
                <div className="div-about" >
                    <h1> 
                        <div className="div-about-h1" ref={headerRef} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                            Hello and Welcome!
                            <br />
                            I'm <span className="span-video">Nicklas Tümmler.</span>
                        </div>
                    </h1>

                    <div className="about-img-container">
                        <img
                            className="about-img"
                            src={imageMe}
                            ref={imageRef}
                            alt="Your Image"
                            style={{ opacity: 0 }}
                        />
                    </div>

                    <div className="about-me-p" ref={textRef} style={{ opacity: 0, transform: 'translateY(50px)' }}>
                        <p>I'm a front end developer <span className="based-in">based in Denmark/Sweden</span>
                            <br />
                            I am 19 years old and have a passion for front end development
                        </p>
                    </div>

                    <div className="end-of-about"></div>

                </div>
            </main>
        </header>
    );
};

export default About;
