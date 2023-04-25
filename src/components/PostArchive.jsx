import { useState, useEffect } from 'react';
import { getList } from '../services/PostListServices';
import Content from './Post';



function PostArchive({post}) {
  const [searchTerm, setSearchTerm] = useState([]);


  useEffect(() => {
    getList().then((data) => {
      setSearchTerm(data);
    });
  }, []);

  return (
    <>
      <div className="templateContainer">
        {
          searchTerm
            .filter((search) => search.post === post)
            .map((search, i) => (
              <Content
                key={i}
                img={search.image}
                nombre={search.autor}
                creado={search.creted}
                texto={search.text}
                tarjeta={search.cardtext}
                comentario={search.coments}
              />
            ))}
      </div>
    </>
  )
}

export default PostArchive;