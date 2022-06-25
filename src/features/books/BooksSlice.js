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
        showBooks:(state)=>state,
    }
})
export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;