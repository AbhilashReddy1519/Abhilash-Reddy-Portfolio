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
            scale: 10,
            opacity: 0,
            duration: 0.8,
            filter: "blur(10px)",
            ease: "power4.out",
        })
            .from(
                ".name-2",
                {
                    scale: 10,
                    opacity: 0,
                    duration: 0.8,
                    filter: "blur(10px)",
                    ease: "power4.out",
                },
                "-=0.6"
            ) // Start slightly before previous ends
            .from(
                ".name-3",
                {
                    filter: "blur(10px)",
                    scale: 10,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power4.out",
                },
                "-=0.6"
            )
            .from(
                ".name-4",
                {
                    filter: "blur(10px)",
                    scale: 10,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power4.out",
                },
                "-=0.6"
            );
        

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
            </section>
        </>
    );
};

export default Load;
