// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useState} from 'react';
// import data from '../PostList.json'
// import Card from 'react-bootstrap/Card';
// import Toast from 'react-bootstrap/Toast';
// import LikeCount from './LikeCount';
import { User } from '../services/Datos';
import Content from './Post';
// import { getList } from '../services/PostListServices';


function Filter({ post }) {
    const [query, setQuery] = useState([]);

    // useEffect(() => {
    //     getList().then((data) => {
    //       setQuery(data);
    //     });
    //   }, []);
    
    
    return (
        <div>
            <input type="text"
                placeholder='Search...'
                className='search'
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul className='list'>
                {User.filter((user) =>
                    user.autor.toLowerCase().includes(query)
                ).map((user) => (
                    <Content
                key={user.id}
                img={user.image}
                nombre={user.autor}
                creado={user.creted}
                texto={user.text}
                tarjeta={user.cardtext}
                comentario={user.coments}
              />
                    // < li key={user.id} 
                    // className='listItem'>
                    //     {user.autor}
                    // </li>
                ))}
            </ul>
        </div >
    );


    // const [searchTerm, setSearchTerm] = useState("");

    // // useEffect(() => {
    // //     getList().then((data) => {
    // //         setSearchTerm(data);
    // //     });
    // // }, []);

    // return (
    //     <div className="templateContainer">
    //         <div className="searchInput_Container">
    //             <InputGroup size="sm" className="mb-3 px-2">
    //                 <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
    //                 <Form.Control
    //                     aria-label="Small"
    //                     aria-describedby="inputGroup-sizing-sm" id="searchInput" type="text" onChange={(event) => {
    //                         setSearchTerm(event.target.value);
    //                     }}
    //                 />
    //             </InputGroup>
    //         </div>
    //         <div className="template_Container">
    //             {
    //                 data
    //                     .filter((val) => {
    //                         if (searchTerm === "") {
    //                             return val;
    //                         } else if (val.autor.toLowerCase().includes(searchTerm.toLowerCase())) {
    //                             return val;
    //                         } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
    //                             return val;
    //                         }
    //                     })
    //                     .map((val) => {
    //                         return (
    //                             <Card className="d-flex justify-content-center rounded mx-auto d-block" key={val.id} style={{ width: '18rem' }}>
    //                                 <Card.Img className="mt-3 mb-2 px-2" style={{ width: '18rem' }} variant="top" src={val.image} />
    //                                 <Card.Body>
    //                                     <Card.Title>{val.autor}</Card.Title>
    //                                     <Card.Text className='text-start"'>{val.text}
    //                                     </Card.Text>

    //                                     <div className="container ml-auto">
    //                                         <LikeCount />
    //                                     </div>


    //                                     <Toast className="mx-auto" style={{ width: '30rem' }}>
    //                                         <Toast.Header >
    //                                             <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    //                                             <strong className="me-auto">{val.coments}</strong>
    //                                             <small>{val.creted}</small>
    //                                         </Toast.Header>
    //                                         <Toast.Body>{val.cardtext}</Toast.Body>
    //                                     </Toast>
    //                                 </Card.Body>
    //                             </Card>
    //                         )
    //                     })
    //             }
    //         </div>
    //     </div>
    // )
}

export default Filter;