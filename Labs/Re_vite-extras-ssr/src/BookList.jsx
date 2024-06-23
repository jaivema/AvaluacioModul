const BooksList = ({ books }) => (
    <>
      {books.map((book, index) => (
          <li key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.publish_year}</p>
        </li>
      ))}
    </>
  );
  
  export default BooksList