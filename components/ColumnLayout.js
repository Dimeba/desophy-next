// styles
import styles from './ColumnLayout.module.scss'

// components
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'

const ColumnLayout = ({
	children,
	image,
	src,
	alt,
	background,
	right,
	button,
	buttonText,
	buttonLink
}) => {
	switch (background) {
		case 'orange':
			background = 'orangeBackground'
			break
		case 'purple':
			background = 'purpleBackground'
			break
		case null:
			background = ''
			break
		default:
			background = ''
	}

	return (
		<>
			{!image && (
				<div
					className={`${styles.column} ${background} ${
						right ? styles.right : styles.left
					}`}
				>
					{children}
					{button && (
						<Link href={buttonLink}>
							<Button text={buttonText} />
						</Link>
					)}
				</div>
			)}
			{image && (
				<div className={styles.column}>
					<Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
				</div>
			)}
		</>
	)
}

export default ColumnLayout
