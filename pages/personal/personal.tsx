import styles from "../../styles/Home.module.css";

const Personal = () => {
  return (
    <div className={styles.personal}>
      <div>
        <p style={{ color: "red" }}>작업중입니다.</p>
      </div>
      <div className={styles.process}>
        <a
          className={styles.process_1}

          // href="http://localhost:3002/"
        >
          <p>(작업중) YouTube Data API를 이용한 website</p>
        </a>
        <a
          className={styles.process_2}
          href="https://covid-19-vaccin-map.vercel.app/"
        >
          <p>
            (작업중) 공공API를 이용한 백신접종 기관 조회{" "}
            {/* deploy시간 오래걸림 */}
          </p>
        </a>
      </div>
      {/* <img src="./covidMap.png" className={styles.img}></img> */}
    </div>
  );
};

export default Personal;
