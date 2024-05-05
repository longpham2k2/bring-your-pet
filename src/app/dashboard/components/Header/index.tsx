/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.userAccount}>
          <img
            className="Rectangle5"
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
            }}
            src="https://via.placeholder.com/56x56"
            alt=""
          />
          <div className={styles.userInfo}>
            <div>
              <div className={styles.userName}>Administrator</div>
              <div>
                <span className={styles.userId}>ID: </span>
                <span className={styles.userId}>1234567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
