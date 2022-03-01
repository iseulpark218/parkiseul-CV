import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import img from "../public/profile.png";

// 모달시작
import { useState, useCallback } from "react";
import Modal from "./components/Modal";
// import styled from "styled-components";

const Home = () => {
  // 모달시작
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  // 모달끝
  return (
    <div className={styles.container}>
      <Head>
        <title>박이슬 이력서</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          안녕하세요😎
          <br />
          <span style={{ color: "#2d35da" }}>(프론트엔드를 좋아하는)</span>
          <br />
          풀스택 개발자 박이슬입니다.
        </h1>
        {/* 모달시작 */}

        <div className={styles.modal_main}>
          <div className={styles.modal_title}>박이슬 프로필</div>
          {isOpenModal && (
            <Modal onClickToggleModal={onClickToggleModal}>
              <div className={styles.modal_profile_title}>
                <div>
                  {" "}
                  <img
                    style={{ width: "130px" }}
                    src="/profile.png"
                    alt="test"
                    className={styles.modal_profile_img}
                  />
                </div>
                <div className={styles.modal_profile_contents}>
                  <b>
                    안녕하세요. 신입 개발자 박이슬 입니다.
                    <br />
                    조금은 늦게 시작했지만,
                    <br />
                    <u>조금 더 나은 삶을 위한</u>
                    <br />
                    <u>효율적인 코딩을 지향하는</u>
                    <br />
                    <u>자기관리에 부지런한</u>
                    <br />
                    개발자가 되기 위해 노력 중 입니다.
                  </b>
                </div>
              </div>
              <div>
                😊 I’m iseul, coding hobbyist, Full Stack Developer, but prefer
                Frontend.
                <br /> 👀 I’m interested in javascript / typescript / react /
                next.js
                <br /> 🌱 I’m currently learning ReactNative/PostgreSQL
                <br /> 📫 How to reach me out : Shoot a mail at{" "}
                <u>parkiseul0218@gmail.com</u>
                <br /> ✨ Fun fact : I first started programming in 2021..
                <br />
                <br />
                <b>Thanks for watching my portfolio! Have a great day!</b>
              </div>
            </Modal>
          )}
          <div
            className={styles.modal_dialogButton}
            onClick={onClickToggleModal}
          >
            PROFILE OPEN
          </div>
        </div>
        {/* 모달끝 */}
        {/* <p className={styles.description}>
          상용화 서비스를 개발하는 목표를 가지고 있습니다!
        </p> */}
        {/* nav시작 */}
        {/* <div className={styles.nav__div}>
          <nav className={styles.nav}>
            <ul className={styles.nav__ul}>
              <li className={styles.nav__ul__li}>
                <a href="#">HOME</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">ABOUT</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">TECH SKILLS</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">EXPERIENCE</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">CAREER</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">EDUCATION</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* nav끝 */}
        <div className={styles.grid}>
          <a
            // href="http://ec2-3-34-181-87.ap-northeast-2.compute.amazonaws.com/"
            // href="https://drive.google.com/file/d/1BaKKfnGkp40EmGVWHejVPwV9ndNk91DC/view?usp=sharing/"
            href="./team/team"
            className={styles.card}
            style={{ width: "355px", height: "220px" }}
          >
            <h2>Team project &rarr;</h2>
            <p>
              <h5>
                AWS 클라우드 기반
                <br />
                회원과 강사 간의 유기적 연계를 제공하는
                <br />
                피트니스 예약 서비스 시스템
              </h5>
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1nBSR-PtIcW8HJTRWCmTLd-zE_JIGrpMx/view"
            className={styles.card}
            style={{ width: "200px", height: "220px" }}
          >
            <h2>Portfolio &rarr;</h2>
            <p>
              <h5>
                팀 프로젝트 위주의
                <br />
                포트폴리오
              </h5>
            </p>
          </a>
          <a
            href="./personal/personal"
            className={styles.card}
            style={{ width: "355px", height: "220px" }}
          >
            <h2>Personal project &rarr;</h2>
            <p>
              {" "}
              <h5>
                * <u>작업중인 프로젝트</u>
                <br />
                - 프론트 엔드 위주의 개인 프로젝트
                <br />
                {/* 업데이트 중 */}
              </h5>
            </p>
          </a>
        </div>
        {/* 0127추가 */}
        {/* <section className={styles.pr_1}>
          <div className={styles.pr_1__container}></div>
        </section> */}
        {/* 0127추가끝 */}

        <section className={styles.pr_2}>
          {/* pr-1 */}
          <div
            className={styles.pr_2__container}
            // style="transform: translate(-44.9331%, 0%) translate3d(0px, 0px, 0px);"
          >
            <p className={styles.pr_2__title}>
              함께 일할 멋진 개발자를 찾고 계신가요? 😉
            </p>
          </div>

          {/* pr-2 */}
          <div className={styles.pr_2__inner}>
            <div className={styles.feature}>
              {/* pr-2 left */}
              <strong className={styles.feature__title}>
                {/* 이럴 때 제가 딱<br />
                어울릴 것 같아요 */}
                저는 이런 사람이에요 👩🏻‍💼
              </strong>
              {/* pr-2 right */}
              <div className={styles.feature__content}>
                <div
                  className={styles.feature__content_1}
                  // style={{ background: "#F2EEE5" }}
                  style={{
                    background: "#0711E3",
                    color: "white",
                    opacity: "85%",
                  }}
                >
                  ✍🏻 기술역량
                </div>
                <ul className={styles.feature__list}>
                  <li className={styles.feature__list_item}>
                    <strong>
                      <u>Typescript + React + Next.js</u> 💜
                    </strong>
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong>[Frontend]</strong> HTML, CSS, Typescript,
                    Javascript
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong>[Backend]</strong> Java, Spring Boot, RESTful API
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong>[AWS]</strong> AWS클라우드 환경 기반으로 팀프로젝트
                    진행 (EC2, S3, RDS등)
                  </li>
                </ul>
                <div
                  className={styles.feature__content_1}
                  style={{ background: "#FFCFC1", opacity: "85%" }}
                >
                  👑 저는
                </div>
                {/* </div> */}
                <ul className={styles.feature__list}>
                  <li className={styles.feature__list_item}>
                    💪🏻 작은 일이라도 처음부터 끝까지 맡는 책임감이 있는 사람
                  </li>
                  <li className={styles.feature__list_item}>
                    💪🏻 문제를 해결하고 빠르게 앞으로 나아갈 수 있는 해결책을
                    찾는 사람
                  </li>
                  <li className={styles.feature__list_item}>
                    💪🏻 나름의 원칙과 기준이 있지만, 팀원의 의견을 적극 존중·
                    수용할 줄 아는 사람
                  </li>
                </ul>

                <div
                  className={styles.feature__content_1}
                  style={{ background: "#F6B0C8", opacity: "85%" }}
                >
                  ✨ 이럴때 채용을 고려해주세요
                </div>
                <ul className={styles.feature__list}>
                  <li className={styles.feature__list_item}>
                    👀 좋아하는 일을 잘하는 사람이 필요할 때
                  </li>
                  <li className={styles.feature__list_item}>
                    👀 책임감 있고 함께 일할 때 시너지를 주는 팀원이 필요할 때
                  </li>
                  <li className={styles.feature__list_item}>
                    👀 성장하지만 겸손을 잃지 않는 사람이 필요할 때
                  </li>
                </ul>
                <div
                  className={styles.feature__content_1}
                  style={{
                    background: "#F50007",
                    color: "white",
                    opacity: "80%",
                  }}
                >
                  👩🏻‍💻 교육수료 (2021/07-2021/12)
                </div>
                {/* </div> */}
                <ul className={styles.feature__list}>
                  <li className={styles.feature__list_item}>
                    <strong>[분석 및 설계 단계]</strong> 아키텍처, WBS, Test
                    Case, 객체모델 통해 계획수립
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong>[Frontend]</strong> HTML, CSS, typescript,
                    Javascript
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong> [Backend]</strong> Java, Spring Framework, Spring
                    Boot, RESTful API
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong> [API]</strong> REST API 설계 및 구축하여 웹사이트
                    개발 (Swagger 등을 활용한 API 문서화 포함)
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong> [AWS]</strong> AWS클라우드 환경 기반 개발 (EC2, S3,
                    RDS등)
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong>[데이터베이스]</strong> Redis 를 활용하여 캐싱처리,
                    PostgreSQL 등의 관계형 데이터베이스를 사용하여 개발
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong> [MSA]</strong> Redis, RDB, AMQP 서비스(RabbitMQ)의
                    Message Queue 를 이용한 데이터 처리
                  </li>
                  <li className={styles.feature__list_item}>
                    <strong> [GitHub]</strong> GitHub를 이용하여 배포 및 관리,
                    협업 진행
                  </li>
                </ul>

                {/* ---------------------------------------------- */}
              </div>
            </div>
          </div>
        </section>
        {/* footer icon */}
        <div>
          <div className={styles.icon_footer}>
            {/* github */}
            <a href="https://github.com/iseulpark218">
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"
                style={{ borderRadius: "10px" }}
              />
            </a>
            {/* tistory */}
            <a
              href="https://lovely-angela.tistory.com/"
              style={{ margin: "0 0 0 10px" }}
            >
              <img
                alt="Tistory"
                src="https:///img.shields.io/badge/Tistory-181717.svg?&style=for-the-badge&logo=GoogleFit&logoColor=white"
                style={{ borderRadius: "10px" }}
              />
            </a>
          </div>
        </div>
      </main>
      {/* ----------------- footer ----------------- */}
      <footer className={styles.footer}>
        <a
          href="https://drive.google.com/file/d/1nBSR-PtIcW8HJTRWCmTLd-zE_JIGrpMx/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          by ParkISeul😏
        </a>
        <h5>2022/01/19~</h5>
      </footer>
    </div>
  );
};

export default Home;
