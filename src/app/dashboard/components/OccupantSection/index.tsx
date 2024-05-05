"use client";

import { SearchOutlined } from "@ant-design/icons";
import styles from "./OccupantSection.module.css";
import SearchInput from "./components/SearchInput";
import OccupantItem from "./components/OccupantItem";

export default function OccupantSection() {
  return (
    <section
      className={styles.container}
    >
      <div className={styles.controlBox}>
        {/* <SearchInput /> */}
        <div></div>
        <div className={styles.controlButton}>
          <div className={styles.controlTitle}>Thêm pet mới</div>
        </div>
      </div>
      <div className={styles.occupantContainer}>
        <OccupantItem
          name="Liliana M."
          service="Tắm gội"
          startDate={new Date("2024-03-01")}
          endDate={new Date()}
          room="Phòng 1"
        />
        <OccupantItem
          name="Liliana M."
          service="Tắm gội"
          startDate={new Date("2024-03-01")}
          endDate={new Date()}
          room="Phòng 1"
        />
        <OccupantItem
          name="Liliana M."
          service="Tắm gội"
          startDate={new Date("2024-03-01")}
          endDate={new Date()}
          room="Phòng 1"
        />
        <OccupantItem
          name="Liliana M."
          service="Tắm gội"
          startDate={new Date("2024-03-01")}
          endDate={new Date()}
          room="Phòng 1"
        />
      </div>
    </section>
  );
}
