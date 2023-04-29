import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import LikeCount from './LikeCount';


function Content({ creado, nombre, texto, comentario, img, tarjeta, id }) {
    return (

        <Card className="d-flex justify-content-center rounded mx-auto d-block mb-3 mt-4 col-md-4 shadow p-3 mb-5 bg-white roundedshadow p-3 mb-5 bg-white rounded" key={id} >

            <Card.Body>
                
                <Card.Title>{nombre}</Card.Title>
                <Card.Img className="mt-3 mb-2 px-2 col-md-4" variant="top" src={img} />
                <Card.Text className='text-start"'>{texto}
                </Card.Text>
                <div className="container ml-auto">
                    <LikeCount />
                </div>
                <Toast className="mx-auto" style={{ width: '30rem' }}>
                    <Toast.Header >
                        <img src="holder.js/20x20?text=%20" className="rounded me-2 img-responsive" alt="" />
                        <strong className="me-auto">{comentario}</strong>
                        <small>{creado}</small>
                    </Toast.Header>
                    <Toast.Body>{tarjeta}</Toast.Body>
                </Toast>
            </Card.Body>
        </Card>

    );
}

export default Content;