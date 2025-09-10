"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./load.module.css";

gsap.registerPlugin(useGSAP);

const Load = () => {
    const [loading, setLoading] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Animate each name with different scales and timing
        tl.from(".name-1", {
            scale: 5,
            opacity: 0,
            duration: 0.8,
            filter: "blur(10px)",
            ease: "power4.out",
        })
        .from(
                ".name-2",
                {
                    scale: 5,
                    opacity: 0,
                    duration: 1,
                    filter: "blur(10px)",
                    ease: "power4.out",
                },
                "-=0.7"
            ) // Start slightly before previous ends
            .from(
                ".name-3",
                {
                    filter: "blur(10px)",
                    scale: 5,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.7"
            )
            .from(
                ".name-4",
                {
                    filter: "blur(10px)",
                    scale: 5,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.7"
            );

        const tl1 = gsap.timeline();
        tl1.from("#box1", {
            delay: 2,
            x: -1000,
            duration: 1,
            ease: "power4.out",
        })
            .from(
                "#box2",
                {
                    x: 1000,
                    duration: 1,
                    ease: "power4.out",
                },
                "<"
            )
            .to("#box1", {
                delay: 0.2,
                x: -1000,
                duration: 1.5,
                ease: "power4.out",
            })
            .to(
                "#box2",
                {
                    x: 1000,
                    duration: 1.5,
                    ease: "power4.out",
                },
                "<"
            )
            .from("#gif", {
                y: 1000,
                duration: 1,
            }, "<");

        gsap.from("#image", {
            duration: 1,
            y: 1000,
            opacity: 1,
            ease: "power4.out",
        });
    });

    return (
        <>
            <section className={styles.container}>
                <div id="image" className={styles.loadMain}>
                    <h1 className={`${styles.name} name-1`}>Abhilash Reddy</h1>
                    <h1 className={`${styles.name} name-2`}>Abhilash Reddy</h1>
                    <h1 className={`${styles.name} name-3`}>Abhilash Reddy</h1>
                    <h1 className={`${styles.name} name-4`}>Abhilash Reddy</h1>
                </div>
                <div>
                    <img
                        id="gif"
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd25xaGFsc2E3c2Z4ZGYzcjU4djMwNmFtdjgwZG90b2gwZHh3aHY4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRPy8MKag9U1U88hzY/giphy.gif"
                        alt="hi gif"
                        className={styles.gif}
                    />
                </div>
            </section>
            <div className={styles.screen}>
                <div id="box1" className={styles.box1}></div>
                <div id="box2" className={styles.box2}></div>
            </div>
        </>
    );
};

export default Load;
