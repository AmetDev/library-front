import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from "react";


const CartBook = () => {
    const { clickedElement } = useSelector(state => state.book )
    console.log(clickedElement)
    const {id} = useParams();
    return (
        <div className='flex justify-content-center p-5 '>
           <div className='bg-gray-500 p-5 ml-3'> {!clickedElement.volumeInfo.imageLinks? `sorry, we are don't find img :(`:<img className='w-[200px] h-[250px] ' src={clickedElement.volumeInfo.imageLinks.thumbnail} alt={clickedElement.volumeInfo.title}/>}</div>
           <div>
               {!clickedElement.volumeInfo.categories?<h3 className='text-decoration-underline m-2 text-white'>`sorry, we are don't find categories :(`</h3>:<h3 className='text-decoration-underline m-2 text-white'>{clickedElement.volumeInfo.categories}</h3>}
               {!clickedElement.volumeInfo.publisher?<h3 className='text-decoration-underline m-2 text-white'>sorry, we are don't find publisher</h3>:<h3 className='text-decoration-underline m-2 text-gray-800'>{clickedElement.volumeInfo.publisher}</h3>}
               {!clickedElement.volumeInfo.authors?<h3 className=' m-2 text-cyan-950'>`sorry, we are don't find author :(`</h3>:<h3 className=' m-2 text-cyan-950'>{clickedElement.volumeInfo.authors}</h3>}
               <h1>{clickedElement.volumeInfo.title}</h1>
           </div>
        </div>
    )
}
export default  CartBook;