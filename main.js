const wronG = document.getElementById('mistake');
const ourText = document.getElementById('text');

class AllOurbooks {
  constructor() {
    this.BOOKS = 'AWSOME BOOKS';
    this.bookstore = JSON.parse(localStorage.getItem(this.BOOKS)) || [];
    this.ourIntro = document.getElementById('inputone');
    this.creaTor = document.getElementById('inputtwo');
    this.ourAddlist = document.getElementById('butn');
    this.ourList = document.getElementById('list-El');
  }

  safeBook() {
    localStorage.setItem(this.BOOKS, JSON.stringify(this.bookstore));
  }

  addourBook() {
    const title = this.ourIntro.value.trim();
    const author = this.creaTor.value.trim();

    if (title && author) {
      const book = { title, author };
      this.bookstore.push(book);
      this.safeBook();
      this.giveBooks();
      this.ourIntro.value = '';
      this.creaTor.value = '';
      wronG.textContent = '';
    } else {
      wronG.textContent = 'Please enter both title and author';
    }
  }

  removeourBook(title) {
    this.bookstore = this.bookstore.filter((book) => book.title !== title);
    this.safeBook();
    this.giveBooks();
  }

  giveBooks() {
    this.ourList.innerHTML = '';

    if (this.bookstore.length === 0) {
      const emptyMessage = document.createElement('li');
      emptyMessage.textContent = 'No books Our collection';
      this.ourList.appendChild(emptyMessage);
    } else {
      this.bookstore.forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author}  <br/>`;
        li.classList = 'list-items';
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList = 'remove-bttn';
        removeBtn.addEventListener('click', () => this.removeourBook(book.title));
        li.appendChild(removeBtn);
        this.ourList.appendChild(li);
        this.ourList.style.border = '3px solid #dddddd';
        ourText.style.display = 'block';
        const hr = document.createElement('hr');
        li.appendChild(hr);
        const ourListItems = document.querySelectorAll('.list-items');
        const myLength = this.ourList.childElementCount;
        for (let i = 0; i < myLength; i += 2) {
          ourListItems[i].style.backgroundColor = '#dddddd';
        }
      });
    }
  }

  init() {
    this.ourAddlist.addEventListener('click', () => this.addourBook());
    this.giveBooks();
  }
}

const bookAllOurbooks = new AllOurbooks();
bookAllOurbooks.init();

const ListShow = document.getElementById('ourList');
const ourBooks = document.getElementById('ourbook-list');
const ourTopText = document.getElementById('text');
const myBookHide = document.getElementById('list-El');
const ourInputcontent = document.getElementById('ourinputtext');
const goBack = document.getElementById('butn');
const contactUsfor = document.getElementById('contactUs');
const ourContacts = document.getElementById('ourcontact');

ourInputcontent.style.display = 'none';
ourContacts.style.display = 'none';

function myBooksAll() {
  ourTopText.style.display = 'block';
  myBookHide.style.display = 'block';
  ourInputcontent.style.display = 'none';
  ourContacts.style.display = 'none';
}

ListShow.addEventListener('click', myBooksAll);

function myBookAdd() {
  ourTopText.style.display = 'none';
  ourInputcontent.style.display = 'block';
  myBookHide.style.display = 'none';
  ourContacts.style.display = 'none';
}

ourBooks.addEventListener('click', myBookAdd);

function myButtonRedirect() {
  ourTopText.style.display = 'block';
  myBookHide.style.display = 'block';
  ourInputcontent.style.display = 'none';
}

goBack.addEventListener('click', myButtonRedirect);

function ourContactst() {
  ourContacts.style.display = 'block';
  ourTopText.style.display = 'none';
  myBookHide.style.display = 'none';
  ourInputcontent.style.display = 'none';
}

contactUsfor.addEventListener('click', ourContactst);