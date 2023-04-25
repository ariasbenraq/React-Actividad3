import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostArchive from './components/PostArchive';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ItemList from './components/Items';



function App() {

return (
  <>
   
    <Router>
      <Header />
      <Routes>
        <Route exact path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/PostArchive" element={<PostArchive />} />
        <Route path="/Items" element={<ItemList />} />
      </Routes>
    </Router>
  </>
);
}

export default App;


