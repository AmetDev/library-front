
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, setClearBooks, setCounter, setIndex, setSortType} from '../redux/slices/booksSlice'

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

	const BooksRender = () => {
		return (
			<>{books.map((el) => el.items.map((el1) => <div key={el1.id} className='m-[100px] w-12 h-[200px]'>
				{!el1.volumeInfo.imageLinks? `sorry, we are don't find img :(`:<img src={el1.volumeInfo.imageLinks.thumbnail} alt={el1.volumeInfo.title}/>}
				<h1>{el1.volumeInfo.title}</h1>
			</div>) )}</>
		)
	}
	 return (
		 <div className='grid grid-cols-3 m-5 '>
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
