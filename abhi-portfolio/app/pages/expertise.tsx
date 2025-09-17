import React from "react";
import styles from './main.module.css';

const Expertise = () => {
    return (
        <>
            <section id="Expertise" className={styles.expertise}>
                <h1>My Expertise</h1>
                <div className={styles.expertContain}>
                    <div className={styles.expertDiv1}>
                        <h2>Software Engineering & Algorithms</h2>
                        <h3>
                            Proficient in Java, C++, and Python with strong
                            foundations in data structures, algorithms, and
                            problem-solving.
                        </h3>
                    </div>
                    <div className={styles.expertDiv2}>
                        <h2>System & Full-Stack Development</h2>
                        <h3>
                            Hands-on in building scalable applications with
                            React, Next.js, Node.js, Express, and MongoDB, plus
                            solid grasp of databases, OS, and networking
                            concepts.
                        </h3>
                    </div>
                    <div className={styles.expertDiv3}>
                        <h2>Data Engineering & Cloud Systems</h2>
                        <h3>
                            Pursuing IBM Data Engineering Professional
                            Certificate, experienced with SQL, ETL pipelines,
                            AWS, and designing cloud-native, distributed
                            architectures.
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Expertise;
