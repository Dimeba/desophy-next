import { useState, useEffect } from 'react'
import Image from 'next/image'

// styles
import styles from './Cursor.module.scss'

// context
import { useCursorContext } from '../hooks/useCursorContext'

const Cursor = () => {
	const [mousePosition, setMousePosition] = useState({})
	const { cursorText, cursorImage, cursorSize } = useCursorContext()

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
				{cursorText && cursorText}
				{cursorImage && (
					<Image src={cursorImage} width='40' height='40' alt='Arrow Image' />
				)}
			</div>
		</>
	)
}

export default Cursor
