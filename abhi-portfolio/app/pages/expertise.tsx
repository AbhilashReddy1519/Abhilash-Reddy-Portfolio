import React from "react";
import styles from './main.module.css';
import Image from "next/image";

const Expertise = () => {
    return (
        <>
            <section id="Expertise" className={styles.expertise}>
                <h1>My Expertise</h1>
                <div className={styles.expertContain}>
                    <div className={styles.expertDiv1}>
                        <div>
                            <Image
                                src={"/icons/pc.png"}
                                alt="pc image"
                                width={"60"}
                                height="60"
                            />
                            <h2>Software Engineering</h2>
                        </div>
                        <h3>
                            Proficient in Java, C++, and Python with strong
                            foundations in data structures, algorithms, and
                            problem-solving.
                        </h3>
                    </div>
                    <div className={styles.expertDiv2}>
                        <div>
                            <Image
                                src={"/icons/react.png"}
                                alt="react image"
                                width={"60"}
                                height="60"
                            />
                            <h2>Full-Stack Dev System Design</h2>
                        </div>
                        <h3>
                            Hands-on in building scalable applications with
                            React, Next.js, Node.js, Express, and MongoDB, plus
                            solid grasp of databases, OS, and networking
                            concepts.
                        </h3>
                    </div>
                    <div className={styles.expertDiv3}>
                        <div>
                            <Image
                                src={"/icons/data.png"}
                                alt="data image"
                                width={"60"}
                                height="60"
                            />
                            <h2>Data Eng. & Cloud Systems</h2>
                        </div>
                        <h3>
                            Pursuing IBM Data Engineering Professional
                            Certificate, experienced with SQL, ETL pipelines,
                            AWS, and designing cloud-native, distributed
                            architectures.
                        </h3>
                    </div>
                    <Image 
                        src={"/expertise.png"}
                        alt="Simple comedy backGround"
                        height={1000}
                        width={1000}
                    />
                </div>
            </section>
        </>
    );
};

export default Expertise;
