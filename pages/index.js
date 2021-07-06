import Head from "next/head";
import HomeContents from "../components/homeContents/HomeContents";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ articles, bookNotes }) {
  return (
    <>
      <Head>
        <title>Joshua Taylor</title>
      </Head>
      <HomeContents articles={articles} bookNotes={bookNotes} />
    </>
  );
}

export async function getStaticProps(context) {
  const { db } = await connectToDatabase();

  const articlesData = await db
    .collection("articles")
    .find({})
    .sort({ date: -1 })
    .limit(3)
    .toArray();
  const articlesProperties = JSON.parse(JSON.stringify(articlesData));

  const bookNotesData = await db
    .collection("books")
    .find({})
    .sort({ dateRead: -1 })
    .limit(3)
    .toArray();
  const bookNotesProperties = JSON.parse(JSON.stringify(bookNotesData));

  return {
    props: { articles: articlesProperties, bookNotes: bookNotesProperties },
  };
}
