import Head from 'next/head'

// components
import Layout from '@/components/Layout'
import Hero from './Hero'
import ResearchSection from './ResearchSection'
import MarketingSection from './MarketingSection'

export default function Home() {
	return (
		<>
			<Head>
				<title>DeSophy</title>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta
					name='description'
					content='DeSophy is a full-service consultancy for commercial real estate brokers.'
				/>
				<meta
					name='keywords'
					content='real estate, support, marketing, branding, market research, graphic design, web development, social media, strategy, comparable sales'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Hero />
				<ResearchSection />
				<MarketingSection />
			</Layout>
		</>
	)
}
