"use client";

import { Fragment, useState } from "react";
import {
  PieChartFilled,
  ContactsFilled,
  PhoneFilled,
  LockFilled,
  PlusSquareFilled,
  DashboardFilled,
  PlayCircleFilled,
  BarsOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: PieChartFilled,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: ContactsFilled,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: LockFilled,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: PlusSquareFilled,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: DashboardFilled,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleFilled },
  { name: "Contact sales", href: "#", icon: PhoneFilled },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <PieChartFilled />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <ContactsFilled />,
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <PhoneFilled />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header className="p-5 z-[999]">
      <nav
        className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-lg xl:max-w-screen-xl mx-auto flex"
        aria-label="Global"
      >
        <div className="w-1/5 flex items-center">
          <a href="/" className="text-center p-2.5">
            <span className="sr-only">Bring Your Pet</span>
            <img
              fetchPriority="high"
              height={168}
              width={504}
              className="inline-block align-middle"
              src="/Qinpet-Logo-Black.png"
              alt=""
            />
          </a>
        </div>
        {/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <BarsOutlined className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}
        <div className="hidden lg:flex w-4/5 p-[10px] flex-wrap lg:justify-end">
          <ul className="flex flex-wrap self-center">
            {/* <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Trang chủ
              </a>
            </li> */}
            <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Cho mèo
              </a>
            </li>
            <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Cho chó
              </a>
            </li>
            <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Dịch vụ
              </a>
            </li>
            <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Tin tức
              </a>
            </li>
            <li>
              <a className="text-[#1c164b] uppercase flex-grow py-[13px] px-[20px] font-barlow text-lg font-bold">
                Giới thiệu
              </a>
            </li>
          </ul>
          <div className="hidden lg:block self-center">
            <a
              href="#"
              className="inline-block bg-[#1c164b] text-[#ffffff] font-barlow uppercase font-bold text-center py-[20px] px-[40px] rounded-[100px] text-sm font-semibold leading-6"
            >
              Đăng nhập <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
