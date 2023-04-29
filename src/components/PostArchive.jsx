import { useState, useEffect } from 'react';
import { getList } from '../services/PostListServices';
import Content from './Post';



function PostArchive({query}) {
  const [post, setPost] = useState([]);


  useEffect(() => {
    getList().then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <>
      <div className="templateContainer">
        {
          post
          .filter((post) => {
            return query.toLowerCase() === ''
              ? post
              : post.autor.toLowerCase().includes(query) || post.coments.toLowerCase().includes(query)
          })
            .map((post, i) => (
              <Content
                key={i}
                img={post.image}
                nombre={post.autor}
                creado={post.creted}
                texto={post.text}
                tarjeta={post.cardtext}
                comentario={post.coments}
              />
            ))}
      </div>
    </>
  )
}

export default PostArchive;