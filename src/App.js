import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Filter from './components/Filter';
import PostArchive from './components/PostArchive';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ItemList from './components/Items';

// const auth = false;

function App() {

  // if (!auth) {
  //   return (
  //     <Form className='mt-3'>
  //     <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Label>Usuario</Form.Label>
  //       <Form.Control type="email" placeholder="Enter email" />
  //       <Form.Text className="text-muted">

  //       </Form.Text>
  //     </Form.Group>

  //     <Form.Group className="mb-3" controlId="formBasicPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control type="password" placeholder="Password" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //       <Form.Check type="checkbox" label="Check me out" />
  //     </Form.Group>
  //     <Button variant="primary" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  //   )
  // }

 
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


