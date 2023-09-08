import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/App.css'
import FormTextExample from './TextInput'
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
	const [currentSort, setCurrentSort] = useState('')
	const [isClick, setIsClick] = useState(false)
	const onClickSort = el => {
		setCurrentSort(el)
		setIsClick(true)
	}
	return (
		<Dropdown>
			<Dropdown.Toggle variant='success' id='dropdown-basic'>
				{isClick ? currentSort : sortings[0]}
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
