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
import Login from './components/Login';



function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <div > 
        {token ? (
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
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </>
  );
}

export default App;


