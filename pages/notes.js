import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";
import BookNotes from "../components/bookNotes/BookNotes";

export default function notes({ books }) {
  const [selectedBook, setSelectedBook] = useState(false);

  return (
    <BookNotes
      books={books}
      selectedBook={selectedBook}
      setSelectedBook={setSelectedBook}
    />
  );
}

export const getStaticProps = async () => {
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
