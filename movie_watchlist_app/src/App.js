import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddMoive from './features/addMovie';
import WatchListMovies from './features/watchListMovies';
import WatchedMovies from './features/watchedMovies';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<WatchListMovies />} />
        <Route path='/watched' element={<WatchedMovies />} />
        <Route path='/add' element={<AddMoive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
