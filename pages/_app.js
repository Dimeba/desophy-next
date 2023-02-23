import '@/styles/globals.scss'

import { CursorContextProvider } from '@/context/CursorContext'

export default function App({ Component, pageProps }) {
	return (
		<>
			<CursorContextProvider>
				<Component {...pageProps} />
			</CursorContextProvider>
		</>
	)
}
