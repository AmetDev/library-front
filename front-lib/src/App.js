import Header from './components/Header';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Books from "./components/Books";
function App() {
    {/*const [books, setBooks] = useState([])
    useEffect(() => {
        async function DateBooks() {
            await axios.get('https://www.googleapis.com/books/v1/volumes?q='+'JavaScript'+'&key=AIzaSyCcEuUwqXkj45kBizl-5u8wflVTWDVKAFo'+'&maxResults=20')
                .then(res=>setBooks(res.data.items))
                .catch(err=>console.log(err))
        }
        DateBooks()
    }, []);*/}
    return (
        <div className="App">
            <Header />
            <Books />
        </div>
    );
}

export default App;
