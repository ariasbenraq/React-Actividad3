import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { getList } from "../services/PostListServices";
import Header from './Header';

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
      <div className='text-center mt-3'><Link to="/PostArchive">Home</Link></div>
    </>
  );
}

export default ItemList;