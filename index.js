const library = [];

function Book(author, title, coverUrl, numPages, status) {
  this.author = author;
  this.title = title;
  this.coverUrl = coverUrl;
  this.numPages = numPages;
  this.status = status;
}

function addBookToLibrary(book) {
  library.push(book);
}
