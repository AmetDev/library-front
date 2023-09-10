import {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/App.css'
import FormTextExample from './TextInput'
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks, setSortType} from '../redux/slices/booksSlice'

const categories = [
	'all',
	'art',
	'biography',
	'computers',
	'history',
	'medical',
	'poetry',
]
const sortings = ['relevance', 'newest']
const Categories = () => {

	const [currentCategories, setCurrentCategories] = useState('')
	const [isClick, setIsClick] = useState(false)
	const onClickCategories = el => {
		setCurrentCategories(el)
		setIsClick(true)
	}

	return (
		<Dropdown>
			<Dropdown.Toggle variant='success' id='dropdown-basic'>
				{isClick ? currentCategories : categories[0]}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{categories.map(el => {
					return (
						<Dropdown.Item
							href='#/action-1'
							onClick={() => onClickCategories(el)}
							key={el}
						>
							{el}
						</Dropdown.Item>
					)
				})}
			</Dropdown.Menu>
		</Dropdown>
	)
}
const Sorting = () => {
	const { counter, sortType, searchValue, index } = useSelector(
		state => state.book
	)
	const dispatch = useDispatch()
	const [isClick, setIsClick] = useState(false)
	const onClickSort = (el) => {
		dispatch(setSortType(el))
		dispatch(fetchBooks({counter, searchValue, index, el}))


	}
	return (
		<Dropdown>
			<Dropdown.Toggle variant='success' id='dropdown-basic'>
				{sortType}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{sortings.map(el => {
					return (
						<Dropdown.Item
							href='#/action-1'
							onClick={() => onClickSort(el)}
							key={el}
						>
							{el}
						</Dropdown.Item>
					)
				})}
			</Dropdown.Menu>
		</Dropdown>
	)
}
const Header = () => {
	return (
		<div className='flex justify-center items-center flex-col text-center bg-gray-400 '>
			<h1>Search books</h1>
			<FormTextExample />

			<div className='flex space-x-[900px]'>
				<Categories />
				<Sorting />
			</div>
		</div>
	)
}

export default Header
