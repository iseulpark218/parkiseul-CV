import styles from "../../styles/personal.module.css";
import img from "../../public/covidMap.png";
import img_marker from "../../public/covid_marker.png";

const Personal = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <a>개인프로젝트 (프론트엔드 위주)</a>
      </div>
      {/* <div className={styles.description}>
        프론트엔드에 흥미를 더 느껴, 프론트엔드 위주의 개인프로젝트를 준비하여
        아래와 같이 정리 해 보았습니다.{" "}
      </div> */}
      {/* 프로젝트 -1 */}
      <div>
        <div className={styles.title}>
          {/* 임시링크 */}
          <a href="https://covid-19-vaccin-map.vercel.app/">
            Vaccination Map
            {/* - COVID19_VaccinationCenter */}
          </a>
        </div>
        <p className={styles.content}>
          공공API를 이용한 백신접종 기관 조회 Website
        </p>
        <img className={styles.img} src={img.src} />
      </div>
      {/* 진행중 */}
      <div className={styles.subTitle}>현 진행상황</div>
      <p className={styles.content}>- Marker 작업 중</p>

      <img
        // className={styles.img}
        style={{ width: "auto", height: "300px", paddingLeft: "30px" }}
        src={img_marker.src}
      />
      {/* 프로젝트 -2 */}
      <div>
        <div className={styles.title}>
          {" "}
          <a href="./project2/home">SeulTube</a>
        </div>
        <p className={styles.content}>YouTube Data API를 이용한 Web&App</p>
        <img className={styles.img} />
      </div>
      {/* 프로젝트 -3 */}
      <div>
        <div className={styles.title}>
          {" "}
          <a href="./project3/home">Web Publishing</a>
        </div>
        <p className={styles.content}>Web Publishing 사이트</p>
        <img className={styles.img} />
      </div>
    </div>
  );
};

export default Personal;
