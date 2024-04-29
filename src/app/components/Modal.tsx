"use client";

import React from "react";

export default function Modal({
  visible,
  setVisible,
  children,
}: {
  visible?: boolean;
  setVisible?: (visibity: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal"
      id="elementor-popup-modal-3247"
      aria-modal="true"
      role="document"
      tabIndex={0}
      style={{ display: visible ? "flex" : "none", justifyContent: "center" }}
    >
      <div
        className="dialog-widget-content dialog-lightbox-widget-content animated"
        style={{ position: "relative" }}
      >
        <div className="dialog-header dialog-lightbox-header"></div>
        <div className="dialog-message dialog-lightbox-message">{children}</div>
        <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
        <a
          role="button"
          tabIndex={0}
          aria-label="Close"
          onClick={() => {
            if (!!setVisible && typeof setVisible == "function")
              setVisible(false);
          }}
          className="dialog-close-button dialog-lightbox-close-button"
          style={{
            fontSize: 80,
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 56,
            height: 56,
            color: "white",
            backgroundColor: "red",
            borderRadius: 8,
          }}
        >
          &times;
        </a>
      </div>
    </div>
  );
}
