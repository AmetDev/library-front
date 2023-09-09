import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, setCounter} from  '../redux/slices/booksSlice'

const Books = () => {
	const dispatch = useDispatch()
	const { books, counter, isLoading, error, searchValue } = useSelector(
		state => state.book
	)
	const arr = books.map((el) => el.items)
	console.log(arr)
	useEffect(() => {
		const func = async () => {
			await dispatch(fetchBooks({ counter, searchValue }))
		}
		func()
	}, [counter])



	 return (
		 <div>
			 {
				 isLoading? <div>loading...</div>: arr.map((el) => el.map(((el) => <div className='m-5 ' key={el.id}>
					 <img src={el.volumeInfo.imageLinks.smallThumbnail} />
					 {el.volumeInfo.title}</div>)))
			 }
			 <button
				 onClick={() => dispatch(setCounter())}
				 className='bg-white w-16 h-8'
				 type='button'
			 >
				 <h1>load more...</h1>
			 </button>
		 </div>



	 )
}

export default Books
