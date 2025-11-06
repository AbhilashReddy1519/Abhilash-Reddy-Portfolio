'use client';
import React, { useRef } from "react";
import styles from "./main.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Ballpit from "./Ballpit";

gsap.registerPlugin(useGSAP, SplitText);

const About = () => {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.from(aboutSectionRef.current, {
            opacity: 0,
            filter: "blur(10px)",
            duration: 2,
            delay: 0.2,
            y: 200,
            ease: "power4.out",
        });

        const aboutSection = aboutSectionRef.current;
        if (!aboutSection) return;

        // Animate the text with SplitText
        const h1 = aboutSection.querySelector("h1");
        const h3 = aboutSection.querySelector("h3");
        const p = aboutSection.querySelector("p");

        const splitH1 = new SplitText(h1, { type: "words,chars" });
        const splitH3 = new SplitText(h3, { type: "words,chars" });
        const splitP = new SplitText(p, {type: "words,chars"});

        gsap.from(splitH1.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.02,
            duration: 1,
            filter: "blur(10px)",
            ease: "power2.out",
            delay: 0.3, // Delay after the main section starts animating
        });

        gsap.from(splitH3.words, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            filter: "blur(10px)",
            ease: "power2.out",
            delay: 0.3, // Staggered delay for h3
        });

        gsap.from(splitP.words, {
            opacity: 0,
            y: 20,
            stagger: 0.01,
            duration: 1,
            filter: "blur(10px)",
            ease: "power2.out",
            delay: 0.9, // Staggered delay for p
        });
    });

    return (
		<>
			<section className={styles.backGround}>
				<div className={`${styles.ballpit}`}>
					<Ballpit
						count={200}
						gravity={0.01}
						friction={0.9975}
						wallBounce={0.95}
						followCursor={true}
						colors={["#130F8C", "#130F8C", "#CA0607", "#ce68e1"]}
					/>
				</div>
				<section id="About" className={styles.about}>
					<div
						id="aboutDiv"
						ref={aboutSectionRef}
						className={styles.blurbg}>
						<h1>Hello, I’m Abhilash 👋</h1>
						<h3>
							I build products that don’t confuse users—or need a
							rescue call ☎️.
						</h3>
						<p>
							Developer by trade, problem-solver by instinct. I
							focus on creating digital products that feel
							effortless—where the tech fades and the experience
							shines. Lately, I’m learning to obsess less over
							code perfection, and more over human impact. <br />
							Career motto = Fewer buzzwords, more backbone.
						</p>
					</div>
				</section>
			</section>
		</>
	);
};

export default About;
