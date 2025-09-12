"use client";
import React from "react";
import styles from "./nav.module.css";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
<<<<<<< HEAD
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
=======

>>>>>>> e4271a548bf30c7d5ca3f5489656f015d3c4f95e

const NavBar = () => {

    useGSAP(() => {
<<<<<<< HEAD

        gsap.from("#nav", {
            y: -200,
            duration: 1.2,
            ease: "power4.out",
        });

        ScrollTrigger.create({
            trigger: 'body',
            start: "top top",
            onUpdate: (self) => {
                // self.direction is 1 for down and -1 for up
                if(self.direction === 1) {
                    gsap.to("#nav", {
                        opacity: 0,
                        duration: 0.3,
                        display: 'none'
                    })
                } else {
                    gsap.to("#nav", {
                        opacity: 1,
                        duration: 0.3,
                        display: "",
                    });
                    
                }
            }
=======
        gsap.from('#nav', {
            y: -200,
            duration: 1.2,
            ease:"power4.out",
>>>>>>> e4271a548bf30c7d5ca3f5489656f015d3c4f95e
        })
    })

    return (
<<<<<<< HEAD
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
=======
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
>>>>>>> e4271a548bf30c7d5ca3f5489656f015d3c4f95e
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
