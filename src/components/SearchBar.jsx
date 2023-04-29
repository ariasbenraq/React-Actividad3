import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({ setQuery }) {
    return (
        <div className="searchInput_Container mt-3">
            <InputGroup size="sm" className="mb-3 px-2">
                <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm" id="searchInput" type="text" onChange={event => { setQuery(event.target.value) }}
                />
            </InputGroup>
        </div>
    );
}

export default SearchBar;