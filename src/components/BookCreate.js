import React, { useContext, useState } from 'react'
import BooksContext from '../context/books'
import useBookContext from '../hooks/use-books-context'

function BookCreate() {
    const [title, setTitle] = useState('')
    // const { createBook } = useContext(BooksContext)
    const { createBook } = useBookContext()

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // onCreate(title)
        createBook(title)
        setTitle('')
    }
    
  return (
    <div className='book-create'>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} />
            <button className='button'>Create!</button>
        </form>
    </div>
  )
}

export default BookCreate