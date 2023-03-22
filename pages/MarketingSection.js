// components
import ColumnLayout from '@/components/ColumnLayout'

const MarketingSection = () => {
	return (
		<section>
			<ColumnLayout
				image='true' // sets column to image only
				src='/marketing.jpg'
				alt='Market Research Image'
			/>

			<ColumnLayout
				background='orange' // defines column background color
				right={true} // defines column position and adjusts padding
				button={true} // includes button
				buttonText='Learn More'
				buttonLink='#'
			>
				<div className='column-text'>
					<h3>Branding & Marketing</h3>
					<p>
						Our creative team has cut its teeth in-house and at creative teams
						across the real estate brokerage companies and advertising
						consultancies.
					</p>
					<p>
						We can produce striking material that will convey your team&apos;s
						uniqueness look and feel, and make people want to talk to and about
						you.
					</p>
				</div>
			</ColumnLayout>
		</section>
	)
}

export default MarketingSection
