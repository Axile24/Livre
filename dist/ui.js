/*const bookColors: string[] = [
    '#f9c74f', // Yellow
    '#f8961e', // Orange
    '#f3722c', // Red
    '#b5179e', // Purple
    '#277da1', // Blue
    '#577590', // Dark Blue
    '#43aa8b', // Green
    '#90be6d', // Light Green
];*/
// Render the grid of books
export function renderBooks(books, onBookClick) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = ''; // Clear the grid
    books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        /*const color = bookColors[index % bookColors.length];*/
        bookCard.style.backgroundColor = book.color;
        bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.year}</p>
    
    `;
        // <p>${book.color}</p>
        // Add a click listener to show details
        bookCard.addEventListener('click', () => onBookClick(book));
        bookGrid.appendChild(bookCard);
    });
}
// Show book details
export function showBookDetails(book) {
    const bookDetails = document.getElementById('bookDetails');
    const bookGrid = document.getElementById('bookGrid');
    /* const color = bookColors[index % bookColors.length];*/
    bookDetails.style.backgroundColor = book.color;
    console.log(book.color);
    document.getElementById('bookTitle').innerText = book.title;
    document.getElementById('bookAuthor').innerText = `By ${book.author}`;
    document.getElementById('bookDescription').innerText = book.plot || 'No description available.';
    document.getElementById('bookAdditionalInfo').innerHTML = `
    <strong>Price:</strong> ${book.price || 'N/A'} SEK<br>
    <strong>Pages:</strong> ${book.pages || 'N/A'}
  `;
    // Show details and hide grid
    bookGrid.style.display = 'none';
    bookDetails.classList.add('active');
}
//****************************** */
const onBookClick = (book) => {
    showBookDetails(book);
};
// Hide book details
export function hideBookDetails() {
    const bookDetails = document.getElementById('bookDetails');
    const bookGrid = document.getElementById('bookGrid');
    // Show grid and hide details
    bookGrid.style.display = 'grid';
    bookDetails.classList.remove('active');
}
