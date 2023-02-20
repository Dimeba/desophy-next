import Link from 'next/link'

//styles
import styles from './footer.module.scss'

// SM icons
import { GrFacebookOption } from 'react-icons/Gr'
import { GrInstagram } from 'react-icons/Gr'
import { GrLinkedinOption } from 'react-icons/Gr'

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
