"use client";
import React, { useEffect } from "react";
import styles from "./nav.module.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NavBar = () => {

    useGSAP(() => {
        gsap.from("#nav", 
            {
            y: -200,
            duration: 1.2,
            ease: "power4.out",
            }
        );

        ScrollTrigger.create({
            trigger: "body",
            //// kicks in only after scrolling 1px
            //At page load you’re technically already at "top top", so onUpdate runs immediately and overwrites your intro animation.
            start: "top+=1 top",
            onUpdate: (self) => {
                // self.direction is 1 for down and -1 for up
                if (self.direction === 1) {
                    gsap.to("#nav", {
                        opacity: 0,
                        duration: 0.3,
                        display: "none",
                    });
                } else {
                    gsap.to("#nav", {
                        opacity: 1,
                        duration: 0.3,
                        display: "",
                    });
                }
            },
        });
    });

    return (
        <section className={`${styles.navMenu}`}>
            <nav id="nav" className={`${styles.nav}`}>
                <div id="logo" className="">
                    <h1 className={styles.logo}>AR</h1>
                </div>
                <div
                    className={`${styles.menu} flex justify-around flex-column text-xl`}>
                    <ul className="flex justify-between align-text-bottom">
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Expertice">Expertise</a>
                        </li>
                        <li>
                            <a href="#Projects">Projects</a>
                        </li>
                    </ul>
                    <button className="cursor-pointer">Say hello!</button>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
