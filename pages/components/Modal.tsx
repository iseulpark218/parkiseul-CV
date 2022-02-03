import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import styles from "../../styles/Modal.module.css";
import img from "../public/profile.png";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className={styles.modal_ModalContainer}>
      <div className={styles.modal_DialogBox}>{children}</div>
      <div
        className={styles.modal_Backdrop}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </div>
  );
}

export default Modal;
