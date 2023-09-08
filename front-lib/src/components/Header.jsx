import '../styles/App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import FormTextExample from './TextInput';

function BasicExample() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
const Header = () => {
    return (
        <div className="flex justify-center flex-col text-center h-[200px] text-center bg-gray-400 ">
            <h1>Search books</h1>
            <FormTextExample />

            <div className="flex space-x-[900px]">
                <BasicExample />
                <BasicExample />
            </div>
        </div>
    );
};

export default Header;
