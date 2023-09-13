import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import React, {useEffect, useState} from "react";
import {fetchBooks, setSearchValue, setIndex, setClearBooks, setCounter} from '../redux/slices/booksSlice'

import {useDispatch, useSelector} from "react-redux";
function FormTextExample() {
	const [inputDate, setInputDate] = useState('');
	const dispatch = useDispatch();
	const { books, counter, isLoading, error, searchValue, index, sortType, categories } = useSelector(
		state => state.book
	)
	const getDateInput = (e) => {
				e.preventDefault()
				dispatch(setClearBooks())
				dispatch(setIndex())
				dispatch(setSearchValue(inputDate))
				dispatch(setCounter())
				dispatch(fetchBooks({counter, searchValue, index, sortType, categories }))


	}
	const onChangeText = (e) => {
		setInputDate(e.target.value)
	}

	return (
		<div>
			<InputGroup className='mb-3 w-[500px] smm:w-[190px] mt-3 md:w-[250px] lg:w-[350px]'>
				<button onClick={(e) => getDateInput(e)} >
					<InputGroup.Text id='basic-addon1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</InputGroup.Text>
				</button>
				<Form.Control
					onChange={(e) => onChangeText(e)}
					placeholder='Search books'

					ariaLabel='Search'
					ariaDescribedby='basic-addon1'
				/>
			</InputGroup>
		</div>
	)
}

export default FormTextExample
