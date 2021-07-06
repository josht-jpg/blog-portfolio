import Head from "next/head";
import { useState } from "react";
import MainSection from "../components/mainSection/MainSection";
import Search from "../components/bookNotes/search/Search";
import BooksContainer from "../components/bookNotes/booksContainer/BooksContainer";
import { connectToDatabase } from "../util/mongodb";
import Header from "../components/bookNotes/header/Header";
import SelectedItem from "../components/selectedItem/SelectedItem";
import { BOOK } from "../constants/selectedItemConstants";

export default function notes({ books }) {
  const [selectedBook, setSelectedBook] = useState(false);

  return (
    <MainSection>
      <Head>
        <title>Book Notes</title>
      </Head>
      {selectedBook && (
        <SelectedItem
          item={selectedBook}
          itemType={BOOK}
          handleUnselect={() => setSelectedBook(false)}
        />
      )}
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Header />
        <Search books={books} setSelectedBook={setSelectedBook} />
        <BooksContainer bookProps={books} />
      </div>
    </MainSection>
  );
}

export const getStaticProps = async (context) => {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("books")
    .find({})
    .sort({ dateRead: -1 })
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { books: properties },
  };
};
