import { useState, useEffect } from 'react';
import { getList } from '../services/PostListServices';
import Content from './Post';


function PostArchive({ query }) {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      getList().then((data) => {
        setPost(data);
        setLoading(false);
      })
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <>
      {loading ? (
        <p className="d-flex justify-content-center align-items-center p-5 fs-4 fw-bold">
          Loading...
        </p>
      ) : (
        <>
          {post
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
        </>
      )}
    </>
  );
}


export default PostArchive;