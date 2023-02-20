// components
import Footer from '../components/Footer'

import { Heebo } from '@next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

const Layout = ({ children }) => {
	return (
		<>
			<main className={heebo.className}>
				{children}
				<Footer />
			</main>
		</>
	)
}

export default Layout
