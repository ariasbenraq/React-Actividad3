import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { getList } from "../services/PostListServices";

// import Header from './Header';

function ItemList() {

  const [searchTerm, setSearchTerm] = useState([]);


  useEffect(() => {
    getList().then((data) => {
      setSearchTerm(data);
    });
  }, []);

  return (
    <>
     
      <div>
        {
          searchTerm
            .map((searchTerm) => {
              return (
                <div className="list-group list-group-flush" key={searchTerm.id} >
                  <ul>
                    <li>{searchTerm.autor}</li>
                  </ul>
                </div>
              )
            })
        }
      </div>
      <div className='text-center mt-3'>
        <button type="button" className="btn btn-warning" >
        <Link to="/PostArchive" className='link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover nav-link'>Home</Link>
        </button>
        </div>
    </>
  );
}

export default ItemList;