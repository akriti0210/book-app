import { useContext } from "react"
import BooksContext from "../context/books"
// custom hook
function useBookContext() {
  return useContext(BooksContext)
}

export default useBookContext