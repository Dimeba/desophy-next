import Link from 'next/link'

//styles
import styles from './Footer.module.scss'

// SM icons
import { GrFacebookOption } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { GrLinkedinOption } from 'react-icons/gr'

const SocialMediaIcons = () => {
	return (
		<div className={styles.socialMediaIcons}>
			<Link href='https://www.facebook.com/desophy/'>
				<GrFacebookOption className={styles.icon} size='1.5rem' />
			</Link>
			<Link href='https://www.instagram.com/desophynyc/'>
				<GrInstagram className={styles.icon} size='1.5rem' />
			</Link>
			<Link href='https://www.linkedin.com/company/desophy/'>
				<GrLinkedinOption className={styles.icon} size='1.5rem' />
			</Link>
		</div>
	)
}

export default SocialMediaIcons
