import React, { useEffect } from "react";
import styles from "./styles.module.css";
import CloseIcon from "../../../assets/icons/Close";
import variantIcon from "./toastIcon";

type ToastT = {
  variant?: "success" | "error" | "warning" | "info";
  active: boolean;
  timer?: number;
  title?: string;
  message?: string;
  close: () => void;
};
const toastTitle = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

const Toast = ({
  active,
  close,
  timer = 3,
  variant = "success",
  message,
  title,
}: ToastT) => {
  useEffect(() => {
    const functionId = setTimeout(() => close(), timer * 1000);
    return () => clearTimeout(functionId);
  }, [active, timer, close]);

  return (
    <div className={styles.notification}>
      <div className={`${styles.toast} ${active ? styles.active : ""}`}>
        <div className={styles.toast_content}>
          <div
            className={`${styles.icons} ${styles.toast_icon} ${styles[variant]}`}
          >
            {variantIcon[variant]}
          </div>

          <div className={styles.message}>
            <span className={`${styles.text} ${styles.text_1}`}>
              {title ? title : toastTitle[variant]}
            </span>
            <span className={`${styles.text} ${styles.text_2}`}>{message}</span>
          </div>
        </div>
        <div className={`${styles.icons} ${styles.close_icon}`} onClick={close}>
          <CloseIcon />
        </div>
        <div
          className={`${styles.progress} ${styles[variant]} ${
            active ? styles.active : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
