import React from "react";
import styles from './main.module.css';

const Contact = () => {
    return (
        <>
            <section className={styles.contact}>
                <div className={styles.contactMain}>
                    <a
                        href="https://www.linkedin.com/in/-abhilash-reddy/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Find me on Linkedin
                    </a>
                    <a href="mailto:abhilashreddy6300@gmail.com?subject=Let's talk!&body=Hi Abhilash, Loved your portfolio wants to get in touch." target="_blank" rel="noopener noreferrer">
                        Send Email
                    </a>
                </div>
            </section>
        </>
    );
};

export default Contact;
