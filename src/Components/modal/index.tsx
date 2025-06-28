import React, { useEffect, useRef, useState } from "react";
import modalClose from "../../icons/close.svg";
import SwiperComponent from "../swiper";
import {
  youMemeModal,
  ninjaProtocolModal,
  ModalContentTypes,
  yetiTownModal,
  tigraModal,
  pebbleModal,
} from "../../constants/projects";

import styles from "./modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  projectModal: string;
}

const Modal = ({ show, onClose, projectModal }: ModalProps): JSX.Element => {
  const modalRef = useRef<any>(null);
  const outsideRef = useRef<any>(null);
  const [modalContent, setModalContent] = useState<ModalContentTypes>([]);
  const handleModalVisibility = (show: ModalProps) => {
    if (show) {
      modalRef.current?.classList?.add(`${styles.visible}`);
    } else {
      modalRef.current?.classList?.remove(`${styles.visible}`);
    }
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any): void {
        if (ref.current && !ref.current.contains(event.target) && show) {
          onClose();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [show]);
  };
  useOutsideAlerter(outsideRef);

  useEffect(() => {
    if (projectModal === youMemeModal.name) {
      setModalContent(youMemeModal);
    } else if (projectModal === ninjaProtocolModal.name) {
      setModalContent(ninjaProtocolModal);
    } else if (projectModal === yetiTownModal.name) {
      setModalContent(yetiTownModal);
    } else if (projectModal === tigraModal.name) {
      setModalContent(tigraModal);
    } else if (projectModal === pebbleModal.name) {
      setModalContent(pebbleModal);
    }
  }, [projectModal, show]);

  useEffect(() => {
    handleModalVisibility(show);
  }, [show]);

  return (
    <React.Fragment>
      <div ref={modalRef} className={styles.modal__wrap}>
        <div ref={outsideRef} className={styles.modal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalContentContainer}>
              <div>
                {modalContent?.modalDescription?.map((value, index) => {
                  return (
                    <div key={index} className={styles.modalSec}>
                      <div>
                        <img
                          src={value.icon}
                          alt=""
                          className={styles.modalimage}
                        />
                      </div>
                      <div className={styles.desc}>{value.desc}</div>
                    </div>
                  );
                })}
              </div>
              <img
                onClick={onClose}
                src={modalClose}
                className={styles.closeImage}
                alt="X"
              />
              <img
                onClick={onClose}
                src={modalClose}
                className={styles.closeimageformobile}
                alt="X"
              />
            </div>
            <div className={styles.modalSliderContainer}>
              <div className={styles.modalSlider}>
                <SwiperComponent data={modalContent?.images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
