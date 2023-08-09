function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => {
    const lastName1 = account1.name.last;
    const lastName2 = account2.name.last;
    return lastName1.toLowerCase() > lastName2.toLowerCase() ? 1 : -1;
  })
}

function getTotalNumberOfBorrows(account, books) {
  let allBorrows = [];
  books.forEach((book) => {
    const borrows = book.borrows;
    let filtered = borrows.filter((item) => item.id === account.id)
    allBorrows.push(filtered.length);
  })
  return allBorrows.reduce((total, borrowed) => total + borrowed)
}

function getBooksPossessedByAccount(account, books, authors) {
  let filtered = books.filter((book) => {
    const lastBorrowed = book.borrows[0];
    return !lastBorrowed.returned && account.id === lastBorrowed.id;
  })
  let bookAndAuthor = filtered.map((book) => {
    let author = authors.find((person) => person.id === book.authorId);
    return {...book, author};
  })
  return bookAndAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};