import { useState } from 'react'

const Form = ({ handleSubmit, defaultColor }) => {
	const [color, setColor] = useState(defaultColor)

	return (
		<section className='container'>
			<h4>Color Generator</h4>
			<form className='color-form' onSubmit={e => handleSubmit(e)}>
				<input
					type='color'
					value={color}
					onChange={e => setColor(e.target.value)}
				/>
				<input
					type='text'
					value={color}
					onChange={e => setColor(e.target.value)}
				/>
				<button
					className='btn'
					type='submit'
					style={{ backgroundColor: color }}
				>
					Submit
				</button>
			</form>
		</section>
	)
}
export default Form
