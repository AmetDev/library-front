import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import {useState} from "react";

function FormTextExample() {
	const [inputDate, setInputDate] = useState('');
	console.log(inputDate)
	return (
		<div>
			<InputGroup className='mb-3 w-[500px]'>
				<button onClick={() => console.log('hello')}>
					<InputGroup.Text id='basic-addon1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							class='w-6 h-6'
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
					onChange={(e) => setInputDate(e.target.value)}
					placeholder='Search'
					ariaLabel='Search'
					ariaDescribedby='basic-addon1'
				/>
			</InputGroup>
		</div>
	)
}

export default FormTextExample
