const DUMMY_BOOKS = [
  {
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
    coverUrl: '',
    numPages: 0,
    read: true,
    favorite: true,
  },
  {
    author: 'J.R.R. Tolkien',
    title: 'The Silmarillion',
    coverUrl: '',
    numPages: 0,
    read: true,
    favorite: true,
  },
  {
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    coverUrl: '',
    numPages: 0,
    read: true,
    favorite: false,
  },
  {
    author: 'George R.R. Martin',
    title: 'Game of Thrones',
    coverUrl: '',
    numPages: 0,
    read: true,
    favorite: false,
  },
  {
    author: 'Neil Gaiman',
    title: 'Norse Mythology',
    coverUrl: '',
    numPages: 0,
    read: false,
    favorite: false,
  },
];

const library = [];

function Book(author, title, coverUrl, numPages, read, favorite) {
  this.author = author;
  this.title = title;
  this.coverUrl = coverUrl;
  this.numPages = numPages;
  this.read = read;
  this.favorite = favorite;
}

function addBookToLibrary(book) {
  library.push(book);
}
