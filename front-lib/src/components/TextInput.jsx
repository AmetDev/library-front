import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import {useEffect, useState} from "react";
import {fetchBooks, setSearchValue} from '../redux/slices/booksSlice'
import {useDispatch, useSelector} from "react-redux";
function FormTextExample() {
	const [inputDate, setInputDate] = useState('');
	const dispatch = useDispatch();
	console.log(inputDate)
	const { books, counter, isLoading, error, searchValue } = useSelector(
		state => state.book
	)
	const getDateInput = () => {
			const func = async () => {
				await dispatch(fetchBooks({counter, searchValue }))
			}
			func()

	}
	const onChangeText = (e) => {
		setInputDate(e.target.value)
		dispatch(setSearchValue(inputDate))
	}
	return (
		<div>
			<InputGroup className='mb-3 w-[500px]'>
				<button onClick={() => getDateInput()}>
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
					placeholder='Search'
					ariaLabel='Search'
					ariaDescribedby='basic-addon1'
				/>
			</InputGroup>
		</div>
	)
}

export default FormTextExample
