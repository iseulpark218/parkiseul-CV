import styles from "../../styles/Home.module.css";

const Personal = () => {
  return (
    <div className={styles.personal}>
      <div className={styles.process__div}>
        <p>✨ 작업중인 프로젝트 ✨</p>
      </div>
      <div className={styles.process}>
        <a

        // href="http://localhost:3002/"
        >
          <p className={styles.process_1}>
            ✔ YouTube Data API를 이용한 Web&App
          </p>
        </a>
        <a href="https://covid-19-vaccin-map.vercel.app/">
          <p className={styles.process_2}>
            ✔ 공공API를 이용한 백신접종 기관 조회 Website{" "}
            {/* deploy시간 오래걸림 */}
            {/*   - YouTube Data API를 이용한 Web&App
                <br />- 공공API를 이용한 백신접종 기관 조회 Website{" "}
              </h5> */}
          </p>
        </a>
      </div>
      {/* <img src="./covidMap.png" className={styles.img}></img> */}
    </div>
  );
};

export default Personal;
