//Helper Function
function findByID(array, id) {
  return array.find((item) => item.id === id);
}

function findAuthorById(authors, id) {
  return findByID(authors, id);
}

function findBookById(books, id) {
  return findByID(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = books.filter((book) => {
    const lastBorrowed = book.borrows[0];
    return !lastBorrowed.returned;
  }); 
  let returned = books.filter((book) => {
    const lastBorrowed = book.borrows[0];
    return lastBorrowed.returned;
  }); 
  return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = [];
  borrows = book.borrows;
  borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      if (account.id === borrow.id) {
        account.returned = borrow.returned;
        borrowers.push(account);
      }
    })
  })
  while (borrowers.length > 10) {
    borrowers.pop();
  }
  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};