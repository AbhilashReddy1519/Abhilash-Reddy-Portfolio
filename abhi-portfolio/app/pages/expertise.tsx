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
                            <h2>
                                <span>Software</span> Engineering
                            </h2>
                        </div>
                        <div>
                            <h3>
                                <p>
                                    Proficient in Java, C++, and Python with
                                    strong foundations in data structures,
                                    algorithms, and problem-solving.
                                </p>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.expertDiv2}>
                        <div>
                            <Image
                                src={"/icons/react.png"}
                                alt="react image"
                                width={"60"}
                                height="60"
                            />
                            <h2>
                                <span>Full-Stack Dev</span> System Design
                            </h2>
                        </div>
                        <div>
                            <h3>
                                <p>
                                    Hands-on in building scalable applications
                                    with React, Next.js, Node.js, Express, and
                                    MongoDB, plus solid grasp of databases, OS,
                                    and networking concepts.
                                </p>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.expertDiv3}>
                        <div>
                            <Image
                                src={"/icons/data.png"}
                                alt="data image"
                                width={"60"}
                                height="60"
                            />
                            <h2>
                                <span>Data Eng. & </span> Cloud Systems
                            </h2>
                        </div>
                        <div>
                            <h3>
                                <p>
                                    Pursuing IBM Data Engineering coursework.
                                    Building skills in SQL, ETL
                                    workflows, and AWS cloud services while
                                    learning to design scalable data pipelines
                                    and cloud-native architectures.
                                </p>
                            </h3>
                        </div>
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
