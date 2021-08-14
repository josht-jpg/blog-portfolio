import Head from "next/head";
import ArticlesBody from "../components/articles/articlesBody/ArticlesBody";
import MainSection from "../components/mainSection/MainSection";
import SubscribeForm from "../components/subscribeForm/SubscribeForm";
import { connectToDatabase } from "../util/mongodb";

const articles = ({ articles }) => {
  return (
    <MainSection>
      <Head>
        <title>Articles</title>
      </Head>
      <ArticlesBody articles={articles} />
      <SubscribeForm />
    </MainSection>
  );
};

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("articles")
    .find({})
    .sort({ date: -1 })
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { articles: properties },
  };
}

export default articles;
