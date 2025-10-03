'use client';
import React from "react";
import styles from "./main.module.css";
import NavBar from "../components/nav";
import About from "./about";
import Expertise from "./expertise";
import Education from "./eduWork";
import Contact from "./contact";
import CopyRight from "./copyright";


const Portfolio = () => {
    return (
        <>
            <main className={styles.main}>
                <iframe
                    title="BackGround"
                    className={styles.backGround}
                    src="https://my.spline.design/claritystream-nIOPPIyV1H1J3mOs0MYDJE5K/"
                    // frameborder="0"
                ></iframe>
                <NavBar />
                <About />
                <Expertise />
                <Education />
                <Contact />
                <CopyRight />
            </main>
        </>
    );
};

export default Portfolio;
