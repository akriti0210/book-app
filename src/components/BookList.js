import React from 'react'
import BookShow from './BookShow'

function BookList({onEdit, books, onDelete }) {
  const renderedBooks = books.map(book => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  })
  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList