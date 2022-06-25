import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BooksView from '../features/books/BooksView';
import EditBook from '../features/books/EditBook';
import Navbar from '../layouts/Navbar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';


const Index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/show-books' element={<BooksView/>} />
                <Route path='/add-book' element={<AddBook/>} />
                <Route path='/edit-book' element={<EditBook/>} />
                <Route path='*' element={<Error/>} />
        </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Index;