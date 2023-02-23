import { useState, useEffect } from 'react'

//styles
import styles from './Cursor.module.scss'

const Cursor = () => {
	const [mousePosition, setMousePosition] = useState({})

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
		<div
			className={styles.cursor}
			style={{ left: mousePosition.x, top: mousePosition.y }}
		></div>
	)
}

export default Cursor
