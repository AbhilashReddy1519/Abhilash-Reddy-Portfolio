import React from "react";
import styles from "./main.module.css";
import Image from "next/image";

const Education = () => {
    return (
        <>
            <section className={styles.education}>
                <div className={`${styles.experience}`}>
                    <div className={styles.exp}>
                        <div>
                            <p>{"<For hiring managers>"}</p>
                        </div>
                        <div>
                            <h1>
                                Software Engineer | Full stack & Data
                                Engineering | Focused on System Design &
                                Scalable Architecture Enthusiast
                            </h1>
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1jkyFx8aTUhrCB2l4ABS9E0WFUFj_Tyqw/view?usp=sharing"
                            target="_blank"
                            rel="noopener">
                            Download resume
                            <div>
                                <span>
                                    <Image
                                        src={"/icons/download.png"}
                                        alt="downloadOld"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                                <span>
                                    <Image
                                        src={"/icons/download.png"}
                                        alt="downloadNew"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className={styles.expJustify}>
                        <div>
                            <div id={styles.logo}>
                                <Image
                                    src={"/cipherschools.png"}
                                    alt={"cipherschools"}
                                    height={"20"}
                                    width={"20"}
                                />
                                <p>Cipher Schools</p>
                            </div>
                            <div className={styles.workname}>
                                <p>Full Stack Web Developer</p>
                            </div>
                            <div className="text-m">
                                <p id={styles.time} aria-label="timefromtofrom">
                                    Jun - Jul &#39;25
                                </p>
                            </div>
                            <div aria-label="description">
                                <p>
                                    Built and deployed responsive web features
                                    using MongoDB, Express.js, React, and
                                    Node.js; designed efficient database
                                    schemas, integrated REST APIs, and
                                    implemented authentication. Collaborated in
                                    agile sprints with Git/GitHub, improving
                                    scalability and end-to-end application
                                    performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.educationDone}`}>
                    <div className={styles.info}>
                        <p>
                            And here &apos;s what I<br /> studied →
                        </p>
                    </div>
                    <div className={styles.edu}>
                        <div className={styles.educationPlace}>
                            <h1>Lovely Professional University, Punjab</h1>
                            <p>
                                Bachelor of Technology (B.Tech.) in Computer
                                Science and Engineering
                            </p>
                            <p className="pb-10">2023 - 2027</p>
                        </div>
                        <div className={styles.educationPlace}>
                            <h1>Sri Chaitanya Jr college, Andhra Pradesh</h1>
                            <p>Intermediate Certificate (10+2) – MPC Stream</p>
                            <p className="pb-10">2021 - 2023</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;
