import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormTextExample() {
    return (
        <div>
            <InputGroup className="mb-3 w-[500px]">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    );
}

export default FormTextExample;
