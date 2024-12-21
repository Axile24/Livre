import { Book } from './bookInterface';


export async function fetchBooks(): Promise<Book[]> {

    const res = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    const books: Book[] = await res.json();
    console.log (books);
    
    return books;
    
}