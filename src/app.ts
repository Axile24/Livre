import { fetchBooks } from './book.js';
import { renderBooks, showBookDetails, hideBookDetails } from './ui.js';

async function main(): Promise<void> {
    const books = await fetchBooks();

    // Render the books
    renderBooks(books, (book) => showBookDetails(book));

    // Add an event listener to the back button
    const backButton = document.getElementById('backButton') as HTMLElement;
    backButton.addEventListener('click', hideBookDetails);
}

// Initialize the application
main();
