import { createContext, useState } from 'react'
export const CursorContext = createContext()

export const CursorContextProvider = ({ children }) => {
	const [cursorText, setCursorText] = useState('')
	const [cursorImage, setCursorImage] = useState(null)
	const [cursorSize, setCursorSize] = useState('1.4rem')

	const updateCursor = (text, image, size = '6rem') => {
		setCursorText(text)
		setCursorImage(image)
		setCursorSize(size)
	}

	const resetCursor = () => {
		setCursorText('')
		setCursorImage(null)
		setCursorSize('1.4rem')
	}

	return (
		<CursorContext.Provider
			value={{
				cursorText,
				cursorImage,
				cursorSize,
				updateCursor,
				resetCursor
			}}
		>
			{children}
		</CursorContext.Provider>
	)
}
