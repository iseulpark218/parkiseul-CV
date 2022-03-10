import styles from "../../styles/personal.module.css";
import img_covidMap from "../../public/covidMap.png";
import img_webpub_1_1 from "../../public/webpub_1_1.png";
import img_webpub_1_2 from "../../public/webpub_1_2.png";
import img_marker from "../../public/covid_marker.png";

const Personal = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <a>개인프로젝트 (프론트엔드 위주)</a>
      </div>
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
        <img className={styles.img} src={img_covidMap.src} />
      </div>
      {/* 진행중 */}
      <div className={styles.subTitle}>현 진행상황</div>
      <p className={styles.content}>- Marker 작업 중</p>
      <img
        // className={styles.img}
        style={{ width: "auto", height: "250px", paddingLeft: "30px" }}
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
        <p className={styles.content}>스타벅스 FW21 사이트</p>
        <img className={styles.img} src={img_webpub_1_1.src} />
      </div>
      {/* 진행중 */}
      <div className={styles.subTitle}>현 진행상황</div>
      <p className={styles.content}>
        - 홈 슬라이딩 기능 추가 및 중간 배포 작업중
      </p>
      <img
        style={{ width: "auto", height: "250px", paddingLeft: "30px" }}
        src={img_webpub_1_2.src}
      />
    </div>
  );
};

export default Personal;
