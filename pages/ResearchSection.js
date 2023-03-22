// components
import ColumnLayout from '@/components/ColumnLayout'

const ResearchSection = () => {
	return (
		<section>
			<ColumnLayout
				background='purple' // defines column background color
				right={false} // defines column position and adjusts padding
				button={true} // includes button
				buttonText='Learn More'
				buttonLink='#'
			>
				<div className='column-text'>
					<h3>Analytics & Market Research</h3>
					<p>
						Whether you want to underwrite your client&apos;s property, pull
						some comps, compile a market report or you would like to find out
						who are active sellers/buyers in the market, simply delegate all
						that to us.
					</p>
					<p>
						Our well-experienced team will do the dirty work, and you can focus
						on the things that have the biggest impact.
					</p>
				</div>
			</ColumnLayout>

			<ColumnLayout
				image='true' // sets column to image only
				src='/research.jpg'
				alt='Market Research Image'
			/>
		</section>
	)
}

export default ResearchSection
