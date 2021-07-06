import ContentContainer from "../contentContainer/ContentContainer";
import SubscribeForm from "../subscribeForm/SubscribeForm";
import styles from "./HomeContents.module.scss";

const HomeContents = ({ articles, bookNotes }) => {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>
        <i className={styles.hello}>Hello</i>, I'm Joshua.
      </h1>

      <img
        src="https://primer-beta.s3.us-east-2.amazonaws.com/60c906641900d90015976c2c"
        className={styles.homeImage}
        alt="Picture of me running"
      />

      <h3 style={{ textAlign: "center" }}>
        I write code, do math, and run far.
      </h3>
      <hr />
      <h2 className={styles.recentPostsHeader}>Recent Posts</h2>
      <ContentContainer articles={articles} bookNotes={bookNotes} />
      <hr />
      <SubscribeForm />
    </div>
  );
};

export default HomeContents;
