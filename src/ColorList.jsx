import Color from './SingleColor'

const ColorList = ({ colorList }) => {
	return (
		<section className='colors'>
			{colorList.map((color, index) => {
				return <Color key={index} {...color} />
			})}
		</section>
	)
}
export default ColorList
