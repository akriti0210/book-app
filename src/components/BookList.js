import React, { useContext } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'
import useBookContext from '../hooks/use-books-context'

function BookList() {
  
  // const { books } = useContext(BooksContext)
  const { books } = useBookContext()
  
  
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />
  })
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList