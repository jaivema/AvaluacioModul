export function getImageUrl(book) {
    return (
      'https://covers.openlibrary.org/b/isbn/' +
      book.isbn[0] +
      '-M.jpg'
    );
  }

  export function getAuthorUrl(book) {
    return (
      'https://covers.openlibrary.org/a/olid/' +
      book.author_key +
      '-S.jpg'
    );
  }
  