"use client";

import React from "react";
import styles from "./SidebarItem.module.css";

export default function SidebarItem(props: {
  isActive?: boolean;
  icon?: (props: any) => React.ReactNode;
  title: string;
  href?: string;
}) {
  return (
    <a
      className={styles.itemContainer}
      style={{
        background: props.isActive
          ? "linear-gradient(90deg, #087592 0%, #2393B0 100%)"
          : "#fff",
      }}
      href={props.href}
    >
      {props.icon ? (
        <props.icon
          className={styles.itemIcon}
          style={{
            color: props.isActive ? "#ffffff" : "#1e1e1e",
          }}
        />
      ) : (
        <></>
      )}
      <span
        className={styles.itemTitle}
        style={{
          fontWeight: props.isActive ? "600" : "400",
          color: props.isActive ? "white" : "#1e1e1e",
        }}
      >
        {props.title}
      </span>
    </a>
  );
}
