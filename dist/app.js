var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBooks } from './book.js';
import { renderBooks, showBookDetails, hideBookDetails } from './ui.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchBooks();
        // Render the books
        renderBooks(books, (book) => showBookDetails(book));
        // Add an event listener to the back button
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', hideBookDetails);
    });
}
// Initialize the application
main();
