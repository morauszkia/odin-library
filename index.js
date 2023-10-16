const DUMMY_BOOKS = [
  {
    id: 'b1',
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    numPages: 1216,
    read: true,
    favorite: true,
  },
  {
    id: 'b2',
    author: 'J.R.R. Tolkien',
    title: 'The Silmarillion',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585155387i/52699258.jpg',
    numPages: 386,
    read: true,
    favorite: true,
  },
  {
    id: 'b3',
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
    numPages: 366,
    read: true,
    favorite: false,
  },
  {
    id: 'b4',
    author: 'George R.R. Martin',
    title: 'A Game of Thrones',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327110509i/11059675.jpg',
    numPages: 819,
    read: true,
    favorite: false,
  },
  {
    id: 'b5',
    author: 'George R.R. Martin',
    title: 'A Clash of Kings',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1567840212i/10572.jpg',
    numPages: 784,
    read: true,
    favorite: false,
  },
  {
    id: 'b6',
    author: 'George R.R. Martin',
    title: 'A Storm of Swords',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427885895i/6307964.jpg',
    numPages: 1178,
    read: true,
    favorite: false,
  },
  {
    id: 'b7',
    author: 'George R.R. Martin',
    title: 'A Feast for Crows',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661026821i/13497.jpg',
    numPages: 1060,
    read: true,
    favorite: false,
  },
  {
    id: 'b8',
    author: 'George R.R. Martin',
    title: 'A Dance with Dragons',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581625286i/10664113.jpg',
    numPages: 1125,
    read: true,
    favorite: false,
  },
  {
    id: 'b9',
    author: 'Neil Gaiman',
    title: 'Norse Mythology',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516128292i/37903770.jpg',
    numPages: 301,
    read: false,
    favorite: false,
  },
  {
    id: 'b10',
    author: 'Michael Crichton',
    title: 'Eaters of the Dead',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1410685056i/5975933.jpg',
    numPages: 252,
    read: false,
    favorite: false,
  },
  {
    id: 'b11',
    author: 'Rick Riordan',
    title: 'The Sword of Summer',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434701340i/15724396.jpg',
    numPages: 512,
    read: false,
    favorite: false,
  },
  {
    id: 'b12',
    author: 'Genevieve Gornichec',
    title: "The Witch's Heart",
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1593104643i/53438195.jpg',
    numPages: 359,
    read: false,
    favorite: false,
  },
];

// DOM ELEMENTS
const addBookBtn = document.getElementById('add');
const cancelBtn = document.getElementById('cancel');
const cancelBtnSmall = document.getElementById('cancel-sm');
const backdrop = document.querySelector('.modal-overlay');
const formContainer = document.querySelector('.add-book');
const addBookForm = document.querySelector('.add-form');

// FUNCTIONS FOR DOM MANIPULATION
const openAddForm = () => {
  backdrop.classList.remove('hidden');
  formContainer.classList.remove('hidden');
};

const closeAddForm = () => {
  backdrop.classList.add('hidden');
  formContainer.classList.add('hidden');
};

const submitAddForm = (e) => {
  e.preventDefault();

  closeAddForm();
};

// EVENT LISTENERS
addBookBtn.addEventListener('click', openAddForm);
cancelBtn.addEventListener('click', closeAddForm);
cancelBtnSmall.addEventListener('click', closeAddForm);
backdrop.addEventListener('click', closeAddForm);

addBookForm.addEventListener('submit', submitAddForm);

const library =
  DUMMY_BOOKS.map(
    (book) =>
      new Book(
        book.author,
        book.title,
        book.coverUrl,
        book.numPages,
        book.read,
        book.favorite
      )
  ) || [];

function Book(author, title, coverUrl, numPages, read, favorite) {
  this.author = author;
  this.title = title;
  this.coverUrl = coverUrl;
  this.numPages = numPages;
  this.read = read;
  this.favorite = favorite;
}

Book.prototype.createMarkup = function () {
  return `
    <li class="book ${this.favorite ? 'favorite' : ''}">
    ${
      this.coverUrl
        ? `
      <div class="cover-container">
        <img src="${this.coverUrl}" alt="cover of ${this.title}" class="cover-img" />
      </div>
      `
        : ''
    }
      <div class="book-info">
        <h2 class="title">${this.title}</h2>
        <p class="author">by ${this.author}</p>
      </div>
      ${this.read ? '<span>READ</span>' : ''}
    </li>
  `;
};

function Library(books) {
  this.books = books;
  this.htmlElement = document.getElementById('library');
}

Library.prototype.renderBook = function (markup) {
  this.htmlElement.insertAdjacentHTML('beforeend', markup);
};

Library.prototype.renderAllBooks = function () {
  this.htmlElement.innerHTML = '';
  this.books.forEach((book) => {
    this.renderBook(book.createMarkup());
  });
};

Library.prototype.addBookToLibrary = function (book) {
  this.books = [...this.books, book];
  this.renderBook(book.createMarkup());
};

const myLibrary = new Library(library);

myLibrary.renderAllBooks();

// TODO: Add book functionality
// TODO: Delete functionality
// TODO: Toggle read functionality
// TODO: Toggle favorite
// TODO: Filtering
// TODO: Pagination
