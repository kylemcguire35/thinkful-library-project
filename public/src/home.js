function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let filtered = books.filter((book) => {
    const lastBorrowed = book.borrows[0];
    return !lastBorrowed.returned;
  });
  return filtered.length;
}

//Helper Function
function sortAndShort(array) {
  array.sort((item1, item2) => item2.count - item1.count);
  while (array.length > 5) {
    array.pop();
  }
}

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach((book) => {
    const name = book.genre;
    if (genres.some((item) => item.name === name)) {
      let genre = genres.find((item) => item.name === name);
      let index = genres.indexOf(genre);
      genres[index].count++;
    } else {
      genres.push({ name, count: 1 });
    }
  });
  sortAndShort(genres);
  return genres;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
    const name = book.title;
    const count = book.borrows.length;
    popularBooks.push({ name, count });
  });
  sortAndShort(popularBooks);
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => {
    const id = author.id;
    const name = `${author.name.first} ${author.name.last}`;
    let count = 0;
    books.forEach((book) => {
      if (book.authorId === id) count += book.borrows.length;
    });
    popularAuthors.push({ name, count });
  });
  sortAndShort(popularAuthors);
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};