import React from "react";
import styles from './main.module.css';

const CopyRight = () => {
    return (
        <>
            <section className={styles.copy}>
                <div className={styles.copyright}>
                    <p>
                        {" "}
                        &copy; Abhilash Reddy &nbsp;&nbsp;{" "}
                        {new Date().getFullYear()}
                    </p>
                </div>
            </section>
        </>
    );
};

export default CopyRight;
