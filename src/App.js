import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostArchive from './components/PostArchive';
import ProfilePage from './pages/ProfilePage';
import { Route, Routes, } from 'react-router-dom';
import ItemList from './components/Items';
import Login from './components/Login';
import SearchBar from './components/SearchBar';




function App() {
  const [query, setQuery] = useState('');
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <div>
        {token ? (
          <>
              <Header />
              <SearchBar setQuery={setQuery} />
              <Routes>
                <Route exact path="/ProfilePage" element={<ProfilePage />} />
                <Route path="/PostArchive" element={<PostArchive query={query} />} />
                <Route path="/Items" element={<ItemList />} />
              </Routes>
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </>
  );
}

export default App;


