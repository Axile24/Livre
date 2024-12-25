import { Book } from "./bookInterface";


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
export function renderBooks(books: Book[], onBookClick: (book: Book) => void): void {
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;
    bookGrid.innerHTML = ''; // Clear the grid

    books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        /*const color = bookColors[index % bookColors.length];*/
        bookCard.style.backgroundColor = book.color;
        bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Audience: ${book.audience}</p>
      <p>Year published:   ${book.year}</p>
    `;
        // <p>${book.color}</p>
        // Add a click listener to show details
        bookCard.addEventListener('click', () => onBookClick(book));
        bookGrid.appendChild(bookCard);
    });
}

// Show book details
export function showBookDetails(book: Book): void {
    const bookDetails = document.getElementById('bookDetails') as HTMLElement;
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;

   /* const color = bookColors[index % bookColors.length];*/
    bookDetails.style.backgroundColor = book.color;
    console.log(book.color);
    

    (document.getElementById('bookTitle') as HTMLElement).innerText = book.title;
    (document.getElementById('bookAuthor') as HTMLElement).innerText = `By ${book.author}`;
    (document.getElementById('bookDescription') as HTMLElement).innerText = book.plot || 'No description available.';
    (document.getElementById('bookAdditionalInfo') as HTMLElement).innerHTML = `
    <strong>Publisher:</strong> ${book.publisher|| 'N/A'} SEK<br>
    <strong>Pages:</strong> ${book.pages || 'N/A'}
    <br><br>
    <button>Oh i want to read this</button> 
  `;
    

    // Show details and hide grid
    bookGrid.style.display = 'none';
    bookDetails.classList.add('active');
}

const onBookClick = (book: Book) => {
    showBookDetails(book);
};


// Hide book details
export function hideBookDetails(): void {
    const bookDetails = document.getElementById('bookDetails') as HTMLElement;
    const bookGrid = document.getElementById('bookGrid') as HTMLElement;

    // Show grid and hide details
    bookGrid.style.display = 'grid';
    bookDetails.classList.remove('active');
}

