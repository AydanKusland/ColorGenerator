import { toast } from 'react-toastify'
import { rgbToHex } from './utils'

const SingleColor = ({ rgb, weight, type }) => {
	const [r, g, b] = rgb
	const copyToClipboard = e => {
		const color = e.target.lastChild.innerText
		navigator.clipboard.writeText(color)
		toast.success(`${color} copied to clipboard!`)
	}
	return (
		<article
			className={type === 'shade' ? 'color color-light' : 'color false'}
			style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
			onClick={e => copyToClipboard(e)}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{rgbToHex(r, g, b)}</p>
		</article>
	)
}
export default SingleColor
