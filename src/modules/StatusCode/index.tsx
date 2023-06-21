import React from "react";
import styles from "./StatusCode.module.css";

export default function StatusCode(props: { statusCode: number }) {
    const { statusCode } = props;

    return (
        <div
            className={
                statusCode < 200 || statusCode > 299
                    ? styles.error + " " + styles.container
                    : styles.success + " " + styles.container
            }
        >
            {statusCode}
        </div>
    );
}
