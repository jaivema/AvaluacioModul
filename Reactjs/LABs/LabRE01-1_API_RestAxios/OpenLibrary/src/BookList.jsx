import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { getImageUrl } from './utils.js';
import { getAuthorUrl } from './utils.js';

const BookList = () =>{
    const [books, setBooks]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        const fetchBooks = async () =>{
            try{
                const response = await axios.get(
                    'https://openlibrary.org/search.json?q=harry%20potter&fields=*,&limit=5'
                )
            const booksData = response.data.docs;
            setBooks(booksData)
            setIsLoading(false)
            }catch (error){
                setIsError(true)
                setIsLoading(false)
            }
        };
        fetchBooks()
    }, [])

    return (
        <>
        <h1>Books</h1>
        {isLoading && !isError && <p>Loading...</p>}
        {!isLoading && isError && <p>Error: Could not fetch books</p>}
        {!isLoading && !isError && (
        <section>
            {books.map((book) => (
            <ul key={book.key}>
                <li><b>Title: </b> {book.title} </li>
                <li><img src={getImageUrl(book)} alt={book.title} /></li>
                <li><b>Year:</b> {book.first_publish_year} </li>
                <li><b>Number of editions: </b> {book.edition_count}</li>
                <li><b>Author: </b>{book.author_name}</li>
                <li><img src={getAuthorUrl(book)} alt={book.author_name} /></li>
                <li><b>ISBN: </b> {book.isbn[0]} </li>
            </ul>
            ))}
        </section>
        )}
        </>
    )
}
export default BookList