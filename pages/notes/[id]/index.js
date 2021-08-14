import { useEffect, useState } from "react";
import { connectToDatabase } from "../../../util/mongodb";
import BookNotes from "../../../components/bookNotes/BookNotes";

export default function notes({ books, extension }) {
  const [selectedBook, setSelectedBook] = useState(false);

  useEffect(() => {
    if (extension) {
      setSelectedBook(books.find((b) => b.extension === extension));
    }
  }, [extension, books, setSelectedBook]);

  return (
    <BookNotes
      books={books}
      selectedBook={selectedBook}
      setSelectedBook={setSelectedBook}
    />
  );
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();
  const data = await db.collection("books").find({}).toArray();
  const paths = data.map((bookData) => ({
    params: { id: bookData.extension },
  }));

  return {
    paths,
    fallback: true,
  };
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
    props: { books: properties, extension: context.params.id },
  };
};
