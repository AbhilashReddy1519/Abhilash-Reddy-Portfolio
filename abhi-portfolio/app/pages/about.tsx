import React from "react";
import styles from './main.module.css';

const About = () => {
    return (
        <>
            <section id="About" className={styles.about}>
                <h1>Hello, I’m Abhilash 👋</h1>
                <h3>
                    I build products that don’t confuse users—or need a rescue
                    call ☎️.
                </h3>
                <p>
                    Developer by trade, problem-solver by instinct. I focus on
                    creating digital products that feel effortless—where the
                    tech fades and the experience shines. Lately, I’m learning
                    to obsess less over code perfection, and more over human
                    impact. <br />Career motto = Fewer buzzwords, more backbone.
                </p>
            </section>
        </>
    );
};

export default About;
