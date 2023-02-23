import { createContext, useState } from 'react'
export const CursorContext = createContext()

export const CursorContextProvider = ({ children }) => {
	const [cursorText, setCursorText] = useState('')
	const [cursorSize, setCursorSize] = useState('1.4rem')

	const updateCursor = (text, size = '6rem') => {
		setCursorText(text)
		setCursorSize(size)
	}

	const resetCursor = () => {
		setCursorText('')
		setCursorSize('1.4rem')
	}

	return (
		<CursorContext.Provider
			value={{
				cursorText,
				cursorSize,
				updateCursor,
				resetCursor
			}}
		>
			{children}
		</CursorContext.Provider>
	)
}
