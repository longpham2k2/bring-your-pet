"use client";

import React from "react";
import styles from "./SearchInput.module.css";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchInput(props: { onSearchPress?: () => void }) {
  return (
    <div
      className="Search"
      style={{
        width: 553,
        height: 41.19,
      }}
    >
      <input
        className="SearchHotelOccupants"
        style={{
          color: "#8F8F8F",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "300",
          wordWrap: "break-word",
          border: "none",
        }}
        placeholder="Search hotel occupants"
      />

      <div
        className="EvaSearchOutline"
        style={{
          width: 24,
          height: 24.23,
          paddingTop: 3.03,
          paddingBottom: 3.02,
          paddingLeft: 3,
          paddingRight: 2.99,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <SearchOutlined />
      </div>
      <div
        className="Line5"
        style={{
          width: 552,
          height: 0,
          left: 0,
          top: 41.19,
          position: "absolute",
          border: "2px #81D0DF solid",
        }}
      ></div>
    </div>
  );
}
