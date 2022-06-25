import { act } from "react-dom/test-utils"

const { createSlice } = require("@reduxjs/toolkit")

const initialBooks = {
    books: [
        {id:1,title:"Love Bangladesh",author:"Shahidul Islam"},
        {id:2,title:"Love England",author:"Ronal Fisher"}
    ]
}
export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        } ,
        updateBook: (state, action) => {
            const {id,title,author}=action.payload
            state.books.push(action.payload)
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        } ,
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books=state.books.filter(book=>book.id!==id)
        } 
        }
    
})
export const { showBooks,addBook,deleteBook,updateBook } = booksSlice.actions;
export default booksSlice.reducer;