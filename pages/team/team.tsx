import styles from "../../styles/team.module.css";

const Team = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <a href="http://ec2-3-34-181-87.ap-northeast-2.compute.amazonaws.com/">
          GAGYM
        </a>
      </div>
      <div className={styles.description}>
        AWS 클라우드 기반, 회원과 강사 간의 유기적 연계를 제공하는 피트니스 예약
        서비스 시스템
      </div>
      <div className={styles.title}>소개</div>
      <p className={styles.content}>
        첫 번째로 진행한 팀 프로젝트로, CRUD와 같은 기본적인 기능과 전반적인
        프론트/백엔드 기능에 대해 배웠으며,
        <br /> 기본 서버로는 Amazon RDS를 사용하여 PostgreSQL 서버를 운용하는
        RDS 인스턴스를 구축하였고, EC2를 통해 수동 배포 하였습니다. <br />
        소스관리는 GitHub를 통해 하였으며, 프론트 엔드는 GitHub
        Collaborating하여 팀원과 함께 소스를 공유하고 배포하였습니다.
      </p>
      <div>
        <div className={styles.title}>Diagram</div>
        <div>
          <img
            className={styles.img}
            src="https://github.com/iseulpark218/git2021-working/blob/master/Diagram.png?raw=true"
          />
        </div>
      </div>
      <div>
        <div className={styles.title}>Architecture</div>
        <div>
          <img
            className={styles.img}
            src="https://github.com/iseulpark218/git2021-working/blob/master/Architecture.png?raw=true"
          />{" "}
        </div>
      </div>
      {/* detail */}
      <div>
        <div className={styles.title}>Detail</div>
        <div>
          <img
            className={styles.img__detail}
            src="https://github.com/iseulpark218/git2021-working/blob/master/detail-1.png?raw=true"
          />{" "}
          <img
            className={styles.img__detail}
            src="https://github.com/iseulpark218/git2021-working/blob/master/detail-2.png?raw=true"
          />
          <img
            className={styles.img__detail}
            src="https://github.com/iseulpark218/git2021-working/blob/master/detail-3.png?raw=true"
          />
          <img
            className={styles.img__detail}
            src="https://github.com/iseulpark218/git2021-working/blob/master/detail-4.png?raw=true"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
