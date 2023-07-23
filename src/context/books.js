import { createContext, useCallback, useState } from 'react'
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])
    
    const fetchBooks = useCallback( async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }, [])

    // const stableFetchBooks = useCallback(fetchBooks, [])

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle
        })

        const updatedBooks = books.map(book => {
        if (book.id === id) {
            return { ...book, ...response.data }
        }
        return book
        })

        setBooks(updatedBooks)
    }

    const deleteBookId = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter(book => {
        return book.id !== id
        })
        setBooks(updatedBooks)
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })

        // console.log(response)
        // console.log('Need to add book with: ', title)
        const updatedBooks = [
        ...books,
        response.data
        // { id: Math.round(Math.random()*9999), title: title }
        ]
        setBooks(updatedBooks)
    }
  
    const valueToShare = {
        books: books,
        deleteBookId: deleteBookId,
        editBookById: editBookById,
        createBook: createBook,
        fetchBooks: fetchBooks

        // or
        // books,
        // deleteBookId,
        // editBookById,
        // createBook
        // fetchBooks
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext