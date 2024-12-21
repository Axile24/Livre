import { Book } from './bookInterface';




const bookColors: string[] = [
    '#f9c74f', // Yellow
    '#f8961e', // Orange
    '#f3722c', // Red
    '#b5179e', // Purple
    '#277da1', // Blue
    '#577590', // Dark Blue
    '#43aa8b', // Green
    '#90be6d', // Light Green
];



// Render the grid of books
export function renderBooks(books: Book[], onBookClick: (book: Book) => void): void {
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;
    bookGrid.innerHTML = ''; // Clear the grid

    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const color = bookColors[index % bookColors.length];
        bookCard.style.backgroundColor = color;

        bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.year}</p>


    `;

        // Add a click listener to show details
        bookCard.addEventListener('click', () => onBookClick(book));

        bookGrid.appendChild(bookCard);
    });
}

// Show book details
export function showBookDetails(book: Book): void {
    const bookDetails = document.getElementById('bookDetails') as HTMLElement;
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;

    (document.getElementById('bookTitle') as HTMLElement).innerText = book.title;
    (document.getElementById('bookAuthor') as HTMLElement).innerText = `By ${book.author}`;

    (document.getElementById('bookDescription') as HTMLElement).innerText = book.plot || 'No description available.';
    (document.getElementById('bookAdditionalInfo') as HTMLElement).innerHTML = `
    <strong>Price:</strong> ${book.price || 'N/A'} SEK<br>
    <strong>Pages:</strong> ${book.pages || 'N/A'}
  `;
    

    // Show details and hide grid
    bookGrid.style.display = 'none';
    bookDetails.classList.add('active');
}
//****************************** */
function updateBookGridColors(): void {
    const bookCards = document.querySelectorAll('.book-details ');
    bookCards.forEach((card, index) => {
        const color = bookColors[index % bookColors.length];
        (card as HTMLElement).style.backgroundColor = color;
    });
}



// Hide book details
export function hideBookDetails(): void {
    const bookDetails = document.getElementById('bookDetails') as HTMLElement;
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;

    // Show grid and hide details
    bookGrid.style.display = 'grid';
    bookDetails.classList.remove('active');
}
