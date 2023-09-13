import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Books from "./components/Books"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import BookItem from "./pages/BookItem"
import {Provider} from "react-redux"
import { store } from './redux/store'
const Router =  () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
        <Routes>

                <Route path="/" element={ <><Header /><Books/></>}/>
                <Route path="book/:id" element={<><Header /><BookItem/></>}/>
                <Route path='*' element={<div className="text-white">Not found!</div>}/>


        </Routes>
        </BrowserRouter>
        </Provider>
    )
}

export default Router;
