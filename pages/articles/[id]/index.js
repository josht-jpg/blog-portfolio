import React from "react";
import { connectToDatabase } from "../../../util/mongodb";
import MainSection from "../../../components/mainSection/MainSection";
import Article from "../../../components/articles/article/Article";

const articlePage = ({ article }) => {
  return (
    <MainSection>
      <Article article={article} />
    </MainSection>
  );
};

export default articlePage;

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const data = await db.collection("articles").find({}).toArray();
  const paths = data.map((articleData) => ({
    params: { id: articleData.extension },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("articles")
    .findOne({ extension: context.params.id });
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { article: properties },
  };
}
