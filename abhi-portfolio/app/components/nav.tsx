"use client";
import React from "react";
import styles from "./nav.module.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const NavBar = () => {

    useGSAP(() => {
        gsap.from('#nav', {
            y: -200,
            duration: 1.2,
            ease:"power4.out",
        })
    })

    return (
        <section className={`${styles.addPadding}` }>
            <nav id="nav" className={`${styles.nav} w-full gap-20`}>
                <div id="logo" className="w-2/5">
                    <h1 className={styles.logo}>AR</h1>
                </div>
                <div className="flex justify-around flex-column w-3/4 text-xl">
                    <ul className="flex justify-between gap-10">
                        <li>about</li>
                        <li>expertise</li>
                        <li>projects</li>
                    </ul>
                    <button>Say hello!</button>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
