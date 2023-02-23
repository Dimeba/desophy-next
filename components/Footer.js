// components
import Link from 'next/link'
import SocialMediaIcons from './SocialMediaIcons'
import Button from './Button'

// styles
import styles from './Footer.module.scss'

const Footer = () => {
	// Copyright yaar
	const year = new Date().getFullYear()

	return (
		<footer id='footer' className='purpleBackground'>
			<div className={`container ${styles.footerContainer}`}>
				<div>
					<h2>Do you find yourself being busy instead of productive?</h2>
					<h3>Focus on calls and closing deals, and delegate the rest.</h3>
				</div>
				<div className={styles.footerMiddle}>
					<div className={styles.siteMap}>
						<div>
							<h4>Who We Are</h4>
							<Link href='#'>Why Us</Link>
							<Link href='#'>How It Works</Link>
						</div>
						<div>
							<h4>Our Services</h4>
							<Link href='#'>Analytics & Market Research</Link>
							<Link href='#'>Branding & Marketings</Link>
						</div>
					</div>

					<div className={styles.contactForm}>
						<h4>Get Started</h4>
						<form>
							<div className={styles.textAreaBox}>
								<textarea placeholder='Ask us anything or leave best number to reach you at'></textarea>
							</div>
							<div className={styles.inputsBox}>
								<input type='text' placeholder='Name' />
								<input type='email' placeholder='Email Address' />
								<Button text='Send' />
							</div>
						</form>
					</div>
				</div>
				<div className={styles.footerBottom}>
					<p>© {year} DeSophy. All rights reserved.</p>
					<SocialMediaIcons />
				</div>
			</div>
		</footer>
	)
}

export default Footer
