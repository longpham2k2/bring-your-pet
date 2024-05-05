/* eslint-disable @next/next/no-img-element */
"use client";

import {
  ApartmentOutlined,
  BookOutlined,
  CameraOutlined,
  DashboardOutlined,
  FileTextOutlined,
  HomeOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SidebarItem from "./components/SidebarItem";
import styles from "./Sidebar.module.css";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const currentRoute = usePathname();
  const isCurrentRoute = (pathname: string) => {
    let currentPathname = currentRoute.split("?")[0];
    return currentPathname == pathname;
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/Qinpet-Logo-Black.png" alt="" className={styles.img} />
      </div>
      <SidebarItem
        isActive={isCurrentRoute("/dashboard")}
        icon={(props) => <DashboardOutlined {...props} />}
        title="Tổng quan"
        href="/dashboard"
      />
      {/* <SidebarItem
        isActive={isCurrentRoute("/dashboard/category")}
        icon={(props) => <BookOutlined {...props} />}
        title="Quản lý chủ đề"
        href="/dashboard/category"
      /> */}
      {/* <SidebarItem
        isActive={isCurrentRoute("/dashboard/article")}
        icon={(props) => <FileTextOutlined {...props} />}
        title="Quản lý bài viết"
        href="/dashboard/article"
      /> */}
      <SidebarItem
        isActive={isCurrentRoute("/dashboard/pet")}
        icon={(props) => <SmileOutlined {...props} />}
        title="Quản lý thú cưng"
        href="/dashboard/pet"
      />
      <SidebarItem
        isActive={isCurrentRoute("/dashboard/customer")}
        icon={(props) => <UserOutlined {...props} />}
        title="Quản lý khách hàng"
        href="/dashboard/customer"
      />
      <SidebarItem
        isActive={isCurrentRoute("/dashboard/camera")}
        icon={(props) => <CameraOutlined {...props} />}
        title="Quản lý camera"
        href="/dashboard/camera"
      />
      <SidebarItem
        isActive={isCurrentRoute("/dashboard/room")}
        icon={(props) => <HomeOutlined {...props} />}
        title="Quản lý phòng"
        href="/dashboard/room"
      />
      <SidebarItem
        isActive={isCurrentRoute("/dashboard/service")}
        icon={(props) => <ApartmentOutlined {...props} />}
        title="Quản lý dịch vụ"
        href="/dashboard/service"
      />
    </div>
  );
}
