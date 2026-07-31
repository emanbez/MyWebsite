//const toggleButton = document.getElementById('theme-toggle');

//toggleButton.addEventListener('click', () => {
//  document.body.classList.toggle('dark-mode');
//});

const toggleSwitch = document.getElementById('theme-toggle');

if (toggleSwitch) {
  toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
}

//const toggleSwitch = document.getElementById('theme-toggle');

//toggleSwitch.addEventListener('change', () => {
//  document.body.classList.toggle('dark-mode');
//});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks! (Note: this form doesn't actually send anything yet.)";
  });
}

const bookForm = document.getElementById('book-form');

if (bookForm) {
  const tableBody = document.querySelector('#book-table tbody');

  function loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    tableBody.innerHTML = '';
    books.forEach(book => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.rating}</td>`;
      tableBody.appendChild(row);
    });
  }

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;

    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push({ title, author, rating });
    localStorage.setItem('books', JSON.stringify(books));

    bookForm.reset();
    loadBooks();
  });

  loadBooks();
}