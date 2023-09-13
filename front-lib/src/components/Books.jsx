
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, setClearBooks, setCounter, setIndex, setSortType, setClickedElement} from '../redux/slices/booksSlice'
import { Link } from "react-router-dom"
const Books = () => {
	const [localBooks, setLocalBooks] = useState([])
	const dispatch = useDispatch()
	const { books, counter, isLoading, searchValue, index, categories, sortvalue } = useSelector(
		state => state.book
	)

	useEffect(() => {
		const func = async () => {
			await dispatch(fetchBooks({counter, searchValue, index, categories, sortvalue }))
		}
		func()
	}, [counter, searchValue, index ])


	const onClickMore = (event) => {
		event.preventDefault()
		dispatch(setIndex())
		dispatch(setCounter())
		dispatch(fetchBooks({counter, searchValue, index, categories, sortvalue }))
	}
	const currentClickedElement = (el1) => {
		dispatch(setClickedElement(el1))

	}
	const BooksRender = () => {
		return (
			<>{books.map((el) => el.items.map((el1) =>
				<div key={el1.id} className='w-[250px] h-[370px] flex justify-content-center flex-col p-5 m-3 bg-gray-400 text-center'>
				<Link to={`book/${el1.id}`} onClick={() => currentClickedElement(el1)}  className=''>
					{!el1.volumeInfo.imageLinks? `sorry, we are don't find img :(`:<img className='w-[100px] h-[150px] ' src={el1.volumeInfo.imageLinks.thumbnail} alt={el1.volumeInfo.title}/>}
					{!el1.volumeInfo.categories?<h3 className='text-decoration-underline m-2 text-white'>`sorry, we are don't find categories :(`</h3>:<h3 className='text-decoration-underline m-2 text-white'>{el1.volumeInfo.categories}</h3>}
					{!el1.volumeInfo.authors?<h3 className=' m-2 text-cyan-950'>`sorry, we are don't find author :(`</h3>:<h3 className=' m-2 text-cyan-950'>{el1.volumeInfo.authors}</h3>}
					<h1>{el1.volumeInfo.title}</h1>
				</Link>
				</div>)
			)}</>
		)
	}
	 return (
		 <div className='grid grid-cols-3 m-5 smm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
			 {
				 isLoading ? <div>loading...</div> : <BooksRender/>
			 }
			 <button
				 onClick={(event) => onClickMore(event)}
				 className='bg-green-500 w-20 h-10 '
				 type='button'
			 >
				 <h1>load more...</h1>
			 </button>
		 </div>



	 )
}

export default Books
