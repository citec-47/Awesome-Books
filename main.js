const eror = document.getElementById('mistake');
const myText = document.getElementById('text');

class BookCollection {
  constructor() {
    this.BOOKS = 'AWSOME BOOKS';
    this.bookstore = JSON.parse(localStorage.getItem(this.BOOKS)) || [];
    this.myTites = document.getElementById('inputone');
    this.myAuth = document.getElementById('inputtwo');
    this.ourAdd = document.getElementById('butn');
    this.List = document.getElementById('list-of-books');
  }

  saveBookf() {
    localStorage.setItem(this.BOOKS, JSON.stringify(this.bookstore));
  }

  addBuks() {
    const title = this.myTites.value.trim();
    const author = this.myAuth.value.trim();

    if (title && author) {
      const book = { title, author };
      this.bookstore.push(book);
      this.saveBookf();
      this.deliverBooks();
      this.myTites.value = '';
      this.myAuth.value = '';
      eror.textContent = '';
    } else {
      eror.textContent = 'Please enter both title and author before proceeding';
    }
  }

  remofBooks(title) {
    this.bookstore = this.bookstore.filter((book) => book.title !== title);
    this.saveBookf();
    this.deliverBooks();
  }

  deliverBooks() {
    this.List.innerHTML = '';

    if (this.bookstore.length === 0) {
      const emptyMsge = document.createElement('li');
      emptyMsge.textContent = 'No books in collection';
      this.List.appendChild(emptyMsge);
    } else {
      this.bookstore.forEach((book) => {
        const lit = document.createElement('lit');
        lit.innerHTML = `${book.title} by ${book.author}  <br/>`;
        lit.classList = 'list-items';
        const removeButtn = document.createElement('button');
        removeButtn.textContent = 'Remove';
        removeButtn.classList = 'eliminate-bttn';
        removeButtn.addEventListener('click', () => this.remofBooks(book.title));
        lit.appendChild(removeButtn);
        this.List.appendChild(lit);
        this.List.style.border = '2px solid #000';
        myText.style.display = 'block';
        const hr = document.createElement('hr');
        lit.appendChild(hr);
        const ListItems = document.querySelectorAll('.list-items');
        const myLength = this.List.childElementCount;
        for (let i = 0; i < myLength; i += 2) {
          ListItems[i].style.backgroundColor = '#dddddd';
        }
      });
    }
  }

  init() {
    this.ourAdd.addEventListener('click', () => this.addBuks());
    this.deliverBooks();
  }
}

const bookCollection = new BookCollection();
bookCollection.init();
//comment