"use client";

import React from "react";
import Header from "./components/Header";
import OccupantSection from "./components/OccupantSection";
import Sidebar from "./components/Sidebar";
import styles from "./Dashboard.module.css";

export default function DashboardLayout(props: {
  children?: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <head></head>
      <body>
        <div className={styles.wrapper}>
          <Sidebar />
          <div className={styles.main}>
            <Header />
            {props.children}
          </div>
        </div>
      </body>
    </>
  );
}
