// components
import Link from 'next/link'

// styles
import styles from './Footer.module.scss'

// context
import { useCursorContext } from '../hooks/useCursorContext'

// SM icons
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { GrLinkedinOption } from 'react-icons/gr'

const SocialMediaIcons = () => {
	const { updateCursor, resetCursor } = useCursorContext()

	return (
		<div className={styles.socialMediaIcons}>
			<Link
				href='https://www.facebook.com/desophy/'
				onMouseEnter={() => updateCursor('Visit Our Facebok', '8rem')}
				onMouseLeave={resetCursor}
			>
				<GrFacebookOption className={styles.icon} size='1.5rem' />
			</Link>
			<Link
				href='https://www.instagram.com/desophynyc/'
				onMouseEnter={() => updateCursor('Visit Our Instagram', '8rem')}
				onMouseLeave={resetCursor}
			>
				<GrInstagram className={styles.icon} size='1.5rem' />
			</Link>
			<Link
				href='https://www.linkedin.com/company/desophy/'
				onMouseEnter={() => updateCursor('Visit Our LinkedIn', '8rem')}
				onMouseLeave={resetCursor}
			>
				<GrLinkedinOption className={styles.icon} size='1.5rem' />
			</Link>
		</div>
	)
}

export default SocialMediaIcons
