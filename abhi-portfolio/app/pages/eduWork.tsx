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
                    <div className="">
                        <div>
                            <div id="logo">
                                <Image
                                    src={"/cipherschools.png"}
                                    alt={"cipherschools"}
                                    height={"20"}
                                    width={"20"}
                                />
                            </div>
                            <div>
                                <p>Full Stack Web Developer</p>
                            </div>
                            <div>
                                <p aria-label="timefromtofrom"></p>
                            </div>
                            <div aria-label="description"></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.educationDone}`}></div>
            </section>
        </>
    );
};

export default Education;
