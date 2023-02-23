// components
import Link from 'next/link'
import Button from '@/components/Button'

//styles
import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<h1>
					Delegate your back-office operations,
					<br /> and focus on what you do best, make deals.
				</h1>
				<h3>
					DeSophy is a full-service consultancy for commercial real estate
					brokers. <br /> Our analytics and marketing teams have cut their teeth
					in the CRE industry, and by combining best practices,
					<br /> created a foolproof roadmap for our clients to work more
					efficiently and to close more deals.
				</h3>
				<div className={styles.heroLinks}>
					<Link href='#'>Analytics & Market Research</Link> |{' '}
					<Link href='#'>Branding & Marketing</Link>
				</div>
				<Link href='#footer'>
					<Button text='Get Started' />
				</Link>
			</div>
		</section>
	)
}

export default Hero
