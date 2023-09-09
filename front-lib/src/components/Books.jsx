import React from "react";
import {useSelector} from "react-redux";
const Books = () => {
	const books = useSelector(state => state.books)
	console.log(books)
	console.log(books)
	 return (
		 <div>
			 {books.map((el) => {
				 return (
					 <div className=' text-cyan-500 ' key={el.id} >{el.volumeInfo.title}</div>
				 )
			 })}
		 </div>
	 )
}

export default Books
