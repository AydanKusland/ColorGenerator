import Form from './Form'
import ColorList from './ColorList'
import { useState } from 'react'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

const defaultColor = '#811fd1'
const shadeStep = 5

const App = () => {
	const [colorList, setColorList] = useState(
		new Values(defaultColor).all(shadeStep).slice(1, 200 / shadeStep)
	)

	const checkColor = color => {
		if (!color.startsWith('#')) {
			toast.error('Color value should start with #!')
			return false
		}
		if (color.length < 4) {
			toast.error('Color should has at least 3 symbols after the # sign!')
			return false
		}
		return true
	}
	const handleSubmit = e => {
		e.preventDefault()
		const color = e.target[1].value
		try {
			if (!checkColor(color)) return
			const newColorList = new Values(color)
				.all(shadeStep)
				.slice(1, 200 / shadeStep)
			setColorList(newColorList)
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<main>
			<Form handleSubmit={handleSubmit} defaultColor={defaultColor} />
			<ColorList colorList={colorList} />
			<ToastContainer position='top-center' />
		</main>
	)
}
export default App
