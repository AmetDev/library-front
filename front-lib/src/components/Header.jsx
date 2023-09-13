import {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/App.css'
import FormTextExample from './TextInput'
import {useDispatch, useSelector} from "react-redux";
import {setSortingType, setCategories} from '../redux/slices/booksSlice'


const categoriesArr = [
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
	const dispatch = useDispatch()
	const {  categories } = useSelector(
		state => state.book
	)
	const [currentCategories, setCurrentCategories] = useState('')
	const [isClick, setIsClick] = useState(false)

	const onClickCategories = el => {
		console.log('catego', el)
		setCurrentCategories(el)
		setIsClick(true)
		dispatch(setCategories(el))
		console.log('cate555go', categories)

	}

	return (
		<Dropdown>
			<Dropdown.Toggle variant='success' id='dropdown-basic'>
				{isClick ? categories : categories[0]}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{categoriesArr.map(el => {
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
	const dispatch = useDispatch()
	const [isClick, setIsClick] = useState(false)
	const {  sortvalue } = useSelector(
		state => state.book
	)
	const onClickSort = (el) => {
		console.log('sortings', el)
		setIsClick(true)
		dispatch(setSortingType(el))
		console.log('sortings', sortvalue)

	}
	return (
		<Dropdown>
			<Dropdown.Toggle variant='success' id='dropdown-basic'>
				{sortvalue}
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

			<div className='flex space-x-[700px] smm:space-x-[90px] smm:space-x-[100px] md:space-x-[400px]'>
				<Categories />
				<Sorting />
			</div>
		</div>
	)
}

export default Header
