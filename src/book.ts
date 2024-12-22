import { Book } from './bookInterface';




export async function fetchBooks(): Promise<Book[]> {

    const URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books'

    try {
        const res = await fetch(URL);
        
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        const books: Book[] = await res.json();
        console.log(books);
        
        return books;
    } catch (error) {
        if (error instanceof Error) {
        console.log(error.message)
    }
        
      return []; // solution to  Function lacks ending return statement and return type does not include 'undefined'.
    }
    
}
