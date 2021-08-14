import Head from "next/head";
import MainSection from "../mainSection/MainSection";
import Search from "../bookNotes/search/Search";
import BooksContainer from "../bookNotes/booksContainer/BooksContainer";
import Header from "../bookNotes/header/Header";
import SelectedItem from "../selectedItem/SelectedItem";
import { BOOK } from "../../constants/selectedItemConstants";

const BookNotes = ({ books, selectedBook, setSelectedBook }) => (
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

export default BookNotes;
