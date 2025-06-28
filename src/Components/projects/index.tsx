import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import reactLogo from "../../icons/reactLogo.svg";
import tsLogo from "../../icons/typescript.svg";
import openInNewTab from "../../shared/primaryButton/openinnewtab/openInNewTab";
import shareLogo from "../../icons/share.svg";
import Modal from "../modal";
import { projectNames, projectsArray } from "../../constants/projects";
import leftIcon from "../../icons/leftIcon.svg";
import rightIcon from "../../icons/rightIcon.svg";
import Button from "../button";

import styles from "./projects.module.scss";
import "swiper/css/navigation";
import "swiper/css";

export default function Projects(): JSX.Element {
  const [show, setShow] = useState(false);
  const [projectModal, setProjectModal] = useState("");
  const [rightButtonOpacity, setRightButtonOpacity] = useState(false);
  const [leftButtonOpacity, setLeftButtonOpacity] = useState(true);
  const [projectNumber, setProjectNumber] = useState(0);

  const changeRightSwipeButtonsColor = () => {
    let newValue = projectNumber;
    if (projectNumber !== projectsArray.length - 1) {
      ++newValue;
      changeSwipeButtonsColor(newValue);
      setProjectNumber(newValue);
    }
  }

  const changeLeftSwipeButtonsColor = () => {
    let newValue = projectNumber;
    if (projectNumber !== 0) {
      --newValue
      changeSwipeButtonsColor(newValue);
      setProjectNumber(newValue);
    }
  }
 
  const changeSwipeButtonsColor = (num: number) => {
    if (num === 0) {
      setLeftButtonOpacity(true);
    } else if (num === projectsArray.length - 1) {
      setRightButtonOpacity(true);
    } else {
      if (rightButtonOpacity) {
        setRightButtonOpacity(false);
      }
      if (leftButtonOpacity) {
        setLeftButtonOpacity(false);
      }
    }
  };

  const viewProject = (e: string) => {
    setShow(true);
    if (e === projectNames.youMeme) {
      setProjectModal(projectNames.youMeme);
    } else if (e === projectNames.ninjaProtocol) {
      setProjectModal(projectNames.ninjaProtocol);
    } else if (e === projectNames.yetiTown) {
      setProjectModal(projectNames.yetiTown);
    } else if (e === projectNames.tigra) {
      setProjectModal(projectNames.tigra);
    } else if (e === projectNames.pebble) {
      setProjectModal(projectNames.pebble);
    }
  };

  return (
    <div className={styles.projects}>
      <div className={show ? `${styles.backgroundOpacity}` : ""}>
        <Modal
          projectModal={projectModal}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
      <div className={styles.projectsSection}>
        <div className={styles.titleSection}>
          <div className={styles.line} />
          <span>
            projects i’ve worked on
          </span>
          <div className={styles.line} />
        </div>
        <div className={styles.container}>
          <div className={styles.swiperSection}>
            <img
              src={leftIcon}
              className={`prev ${styles.iconOpacity} ${leftButtonOpacity ? styles.iconClickedOpacity : ""
                }`}
              alt="socialmedia"
            />
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              spaceBetween={1}
              slidesPerView={1}
              onSlideNextTransitionStart={changeRightSwipeButtonsColor}
              onSlidePrevTransitionStart={changeLeftSwipeButtonsColor}>
              <div className={styles.swiperContainer}>
                {projectsArray.map((el, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.projectContainer}>
                        <div className={styles.projectBox}>
                          <img src={el.projectLogo} width={el.width} height={60} alt="" className={styles.mobileLogo} />
                          <div className={styles.bgImage}>
                            <img src={el.projectBackground} alt="" />
                          </div>
                          <div className={styles.rightSection}>
                            <div className={styles.projectLogo}>
                              <img src={el.projectLogo} alt="" />
                            </div>
                            <div className={styles.projectDescription}>
                              <p className={styles.description}>{el.projectDescription}</p>
                              <div className={styles.tech}>
                                <span className={styles.techStackTextDt}>
                                  Tech Stack:
                                </span>
                                <div className={styles.usedStack}>
                                  <div className={styles.stack}>
                                    <span className={styles.techStackTextMb}>
                                      Tech Stack:
                                    </span>
                                    <img src={reactLogo} alt="" />
                                    <p>React</p>
                                  </div>
                                  <div className={styles.stack}>
                                    <img src={tsLogo} alt="" />
                                    <p>Typescript</p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.btnContainer}>
                                <button 
                                  className={styles.viewProjectBtn}
                                  onClick={() => viewProject(el.projectName)}
                                >
                                  View Project
                                </button>
                                <div className={styles.visit}>
                                  {el.projectUrl && <Button
                                    onClick={() => {
                                      openInNewTab(el.projectUrl);
                                    }}
                                  >
                                    Visit website
                                    <img src={shareLogo} alt="" />
                                  </Button>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            <img
              src={rightIcon}
              className={`next ${styles.icon} ${rightButtonOpacity ? styles.iconClickedOpacity : ""
                }`}
              alt="socialmedia"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
