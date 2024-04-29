"use client";

import React from "react";
import isValidString from "../utils/isValidString";

export default function Body({
  prependclassName,
  appendclassName,
  children,
}: {
  prependclassName?: string;
  appendclassName?: string;
  children: React.ReactNode;
}) {
  const classNameToUse = React.useMemo(() => {
    let commonClassname =
      "wp-custom-logo theme-hello-elementor woocommerce-no-js e-lazyload elementor-default elementor-template-full-width elementor-kit-1939";
    if (isValidString(prependclassName))
      commonClassname = prependclassName + " " + commonClassname;
    if (isValidString(appendclassName))
      commonClassname = commonClassname + " " + appendclassName;
    return commonClassname;
  }, [prependclassName, appendclassName]);

  return (
    <body className={classNameToUse} suppressHydrationWarning>
      {children}
    </body>
  );
}
