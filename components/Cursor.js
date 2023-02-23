import { useState, useEffect } from 'react'

// styles
import styles from './Cursor.module.scss'

// context
import { useCursorContext } from '../hooks/useCursorContext'

const Cursor = () => {
	const [mousePosition, setMousePosition] = useState({})
	const { cursorText, cursorSize } = useCursorContext()

	const setCursorPosition = e => {
		setMousePosition({
			x: e.clientX,
			y: e.clientY
		})
	}

	useEffect(() => {
		document.addEventListener('mousemove', setCursorPosition)
	}, [])

	return (
		<>
			<div
				className={styles.cursor}
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					width: cursorSize,
					height: cursorSize
				}}
			></div>
			<div
				className={styles.cursorText}
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					width: cursorSize,
					height: cursorSize
				}}
			>
				{cursorText}
			</div>
		</>
	)
}

export default Cursor
