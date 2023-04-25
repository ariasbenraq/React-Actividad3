import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import LikeCount from './LikeCount';


function Content({ creado, nombre, texto, comentario, img, tarjeta, id }) {
    return (

        <Card className="d-flex justify-content-center rounded mx-auto d-block mb-3" key={id} style={{ width: '18rem' }}>
            <Card.Img className="mt-3 mb-2 px-2" style={{ width: '18rem' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text className='text-start"'>{texto}
                </Card.Text>
                <div className="container ml-auto">
                    <LikeCount />
                </div>
                <Toast className="mx-auto" style={{ width: '30rem' }}>
                    <Toast.Header >
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
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