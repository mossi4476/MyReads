import React from "react";
import Bookshelf from "./BookShelf";

const BookShelfManagement = ({ books, shelfChanger }) => {
  const current = books.filter((book) => book.shelf === "currentlyReading");
  const want = books.filter((book) => book.shelf === "wantToRead");
  const none = books.filter((book) => book.shelf === "read");

  return (
    <>
      <Bookshelf
        title={"Currently Reading"}
        books={current}
        shelfChanger={shelfChanger}
      />
      <Bookshelf
        title={"Want To Read"}
        books={want}
        shelfChanger={shelfChanger}
      />
      <Bookshelf title={"Read"} books={none} shelfChanger={shelfChanger} />
    </>
  );
};

export default BookShelfManagement;
