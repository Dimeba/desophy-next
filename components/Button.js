// context
import { useCursorContext } from '../hooks/useCursorContext'

const Button = ({ text }) => {
	const { updateCursor, resetCursor } = useCursorContext()

	return (
		<button
			onMouseEnter={() => updateCursor('', './arrow.svg')}
			onMouseLeave={resetCursor}
		>
			{text}
		</button>
	)
}

export default Button
