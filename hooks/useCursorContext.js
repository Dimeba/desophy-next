import { CursorContext } from '@/context/CursorContext'
import { useContext } from 'react'

export const useCursorContext = () => {
	const context = useContext(CursorContext)

	if (!context) {
		throw Error('useCursorContext must be inside CursorContextProvider')
	}

	return context
}
