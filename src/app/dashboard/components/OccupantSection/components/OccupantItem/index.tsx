/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import styles from "./OccupantItem.module.css";
import { formatDateToDayMonthYear } from "@/app/utils/dateFormatter";

export default function OccupantItem(props: {
  name: string;
  service: string;
  startDate: Date;
  endDate: Date;
  room: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="https://via.placeholder.com/90x90"
          alt=""
        />
      </div>
      <div className={styles.occupantInfo}>
        <div className={styles.occupantName}>{props.name}</div>
        <div className={styles.serviceContainer}>
          <div className={styles.service}>{props.service}</div>
        </div>
        <div className={styles.duration}>{`${formatDateToDayMonthYear(
          props.startDate
        )} - ${formatDateToDayMonthYear(props.endDate)}`}</div>
      </div>
      <div className={styles.additionalBox}>
        <div className={styles.additionalInfo}>{props.room}</div>
        <div className={styles.optionBox}>
          <div
            className={styles.optionContainer}
            style={{
              color: "#ffc107",
            }}
          >
            Sửa
          </div>
          <div
            className={styles.optionContainer}
            style={{
              color: "#4caf50",
            }}
          >
            Trả phòng
          </div>
        </div>
      </div>
    </div>
  );
}
