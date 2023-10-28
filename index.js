const DUMMY_BOOKS = [
  {
    id: 'b1',
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    numPages: 1216,
    read: true,
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: true,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
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
    currentlyReading: false,
    favorite: false,
  },
];

// DOM ELEMENTS
// RELATED TO FORM
const addBookBtn = document.getElementById('add');
const cancelBtn = document.getElementById('cancel');
const cancelBtnSmall = document.getElementById('cancel-sm');
const backdrop = document.querySelector('.modal-overlay');
const formContainer = document.querySelector('.add-book');
const addBookForm = document.querySelector('.add-form');

// FORM INPUTS
const textInputEls = addBookForm.querySelectorAll('input[type="text"]');
const checkboxInputEls = addBookForm.querySelectorAll('input[type="checkbox"]');
const authorInputEl = document.getElementById('author');
const titleInputEl = document.getElementById('title');
const coverInputEl = document.getElementById('cover-url');
const pagesInputEl = document.getElementById('pages');
const readInputEl = document.getElementById('read');
const readingInputEl = document.getElementById('reading');
const favoriteInputEl = document.getElementById('favorite');

// FUNCTIONS FOR DOM MANIPULATION
const openAddForm = () => {
  backdrop.classList.remove('hidden');
  formContainer.classList.remove('hidden');
};

const closeAddForm = () => {
  backdrop.classList.add('hidden');
  formContainer.classList.add('hidden');
};

const clearAddForm = () => {
  textInputEls.forEach((inputEl) => (inputEl.value = ''));
  pagesInputEl.value = '';
  checkboxInputEls.forEach((inputEl) => (inputEl.checked = false));
};

const submitAddForm = (e) => {
  e.preventDefault();

  const newBook = new Book(
    authorInputEl.value,
    titleInputEl.value,
    coverInputEl.value,
    pagesInputEl.value,
    readInputEl.checked,
    readingInputEl.checked,
    favorite.checked,
    Date.now().toString()
  );

  myLibrary.addBookToLibrary(newBook);

  clearAddForm();
  closeAddForm();
};

const deleteBook = (event) => {
  const bookEl = event.target.closest('.book');
  const bookId = bookEl.dataset.id;

  myLibrary.removeBookFromLibrary(bookId);

  if (window.confirm('Are you sure you want to delete this book?'))
    bookEl.remove();
};

const handleBadgeClick = (event) => {
  const bookEl = event.target.closest('.book');
  const bookId = bookEl.dataset.id;
  const book = myLibrary.books.find((book) => book.id === bookId);
  const badgeEl = event.target.closest('.status-badge');
  const propertyToToggle = badgeEl.dataset.property;

  book.toggleProperty(propertyToToggle);
  Book.updateBadges(bookEl);
  Book.addBadgeHandlers(bookEl);
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
        book.currentlyReading,
        book.favorite,
        book.id
      )
  ) || [];

function Book(
  author,
  title,
  coverUrl,
  numPages,
  read,
  currentlyReading,
  favorite,
  id
) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.coverUrl = coverUrl || null;
  this.numPages = numPages;
  this.read = read;
  this.currentlyReading = currentlyReading;
  this.favorite = favorite;
}

Book.createBookElement = function (bookInfo) {
  const bookEl = document.createElement('li');
  bookEl.classList.add('book');
  bookEl.dataset.id = bookInfo.id;
  const bookElContent = `
  ${
    bookInfo.coverUrl
      ? `
    <div class="cover-container card-side">
      <img src="${bookInfo.coverUrl}" alt="cover of ${bookInfo.title}" class="cover-img" />
    </div>
    `
      : ''
  }
    <div class="book-info card-side ${bookInfo.coverUrl ? '' : 'showing'}">
      <div class="book-info-main">
        <p class="author">${bookInfo.author}</p>
        <h2 class="title">${bookInfo.title}</h2>
        <p class="pages">${bookInfo.numPages} pages</p>
      </div>
      <div class="status-badges">
      </div>
      <div class="action">
        <button class="delete">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="action-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          DELETE
        </button>
      </div>
    </div>
  `;

  bookEl.innerHTML = bookElContent;
  Book.updateBadges(bookEl, bookInfo);
  Book.addBadgeHandlers(bookEl);
  Book.addDeleteHandler(bookEl);

  return bookEl;
};

Book.prototype.toggleProperty = function (property) {
  this[property] = !this[property];
};

Book.updateBadges = function (bookEl, bookInfo = null) {
  if (!bookInfo) {
    bookInfo = myLibrary.books.find((book) => book.id === bookEl.dataset.id);
  }
  const newBadges = `
    <div class="status-badge badge--read ${
      bookInfo.read ? 'active' : ''
    }" data-property="read">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="status-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p>
        ${bookInfo.read ? 'READ' : 'UNREAD'}
      </p>
    </div>
    <div class="status-badge badge--reading ${
      bookInfo.currentlyReading ? 'active' : ''
    }" data-property="currentlyReading">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="status-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      ${bookInfo.currentlyReading ? '<p>READING NOW</p>' : ''}
    </div>
    <div class="status-badge badge--favorite ${
      bookInfo.favorite ? 'active' : ''
    }" data-property="favorite">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="status-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
      ${bookInfo.favorite ? '<p>FAVORITE</p>' : ''}
    </div>
  `;

  bookEl.querySelector('.status-badges').innerHTML = newBadges;
};

Book.addBadgeHandlers = function (bookEl) {
  bookEl
    .querySelectorAll('.status-badge')
    .forEach((badge) => badge.addEventListener('click', handleBadgeClick));
};

Book.addDeleteHandler = function (bookEl) {
  bookEl.querySelector('button.delete').addEventListener('click', deleteBook);
};

function Library(books) {
  this.books = books;
  this.htmlElement = document.getElementById('library');
}

Library.prototype.renderBook = function (book) {
  const newBookEl = Book.createBookElement(book);
  this.htmlElement.appendChild(newBookEl);
};

Library.prototype.renderAllBooks = function () {
  this.htmlElement.innerHTML = '';
  this.books.forEach((book) => {
    this.renderBook(book);
  });
};

Library.prototype.addBookToLibrary = function (book) {
  this.books = [...this.books, book];
  this.renderBook(book);
};

Library.prototype.removeBookFromLibrary = function (id) {
  this.books = this.books.filter((book) => book.id !== id);
};

const myLibrary = new Library(library);

myLibrary.renderAllBooks();

// TODO: Confirmation modal before delete
// TODO: Book Element as class
// TODO: Filtering
// TODO: Pagination
