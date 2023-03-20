const eror = document.getElementById('mistake');
const myText = document.getElementById('text');

class BookCollection {
  constructor() {
    this.BOOKS = 'AWSOME BOOKS';
    this.bookstore = JSON.parse(localStorage.getItem(this.BOOKS)) || [];
    this.myTites = document.getElementById('inputone');
    this.myAuth = document.getElementById('inputtwo');
    this.myAdd = document.getElementById('butn');
    this.myList = document.getElementById('list-of-books');
  }

  saveBooks() {
    localStorage.setItem(this.BOOKS, JSON.stringify(this.bookstore ));
  }

  addBook() {
    const title = this.myTites.value.trim();
    const author = this.myAuth .value.trim();

    if (title && author) {
      const book = { title, author };
      this.bookstore .push(book);
      this.saveBooks();
      this.renderBooks();
      this.myTites.value = '';
      this.myAuth.value = '';
      eror.textContent = '';
    } else {
        eror.textContent = 'Please enter both title and author';
    }
  }

  removeBook(title) {
    this.bookstore  = this.bookstore .filter((book) => book.title !== title);
    this.saveBooks();
    this.renderBooks();
  }

  renderBooks() {
    this.myList.innerHTML = '';

    if (this.bookstore .length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'No books in collection';
      this.myList.appendChild(emptyMessage);
    } else {
      this.bookstore .forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author}  <br/>`;
        li.classList = 'list-items';
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList = 'remove-bttn';
        removeBtn.addEventListener('click', () => this.removeBook(book.title));
        li.appendChild(removeBtn);
        this.myList.appendChild(li);
        this.myList.style.border = '2px solid #000';
        myText.style.display = 'block';
        const hr = document.createElement('hr');
        li.appendChild(hr);
        const myListItems = document.querySelectorAll('.list-items');
        const myLength = this.myList.childElementCount;
        for (let i = 0; i < myLength; i += 2) {
          myListItems[i].style.backgroundColor = '#dddddd';
        }
      });
    }
  }

  init() {
    this.myAdd.addEventListener('click', () => this.addBook());
    this.renderBooks();
  }
}

const bookCollection = new BookCollection();
bookCollection.init();
