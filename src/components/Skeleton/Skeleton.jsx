import ContentLoader from 'react-content-loader'

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={1400}
			height={800}
			viewBox='0 0 1096 495'
			backgroundColor='rgb(199,199,199)'
			foregroundColor='#ecebeb'
		>
			<rect x='700' y='450' rx='0' ry='0' width='110' height='30' />
			<rect x='550' y='450' rx='0' ry='0' width='110' height='30' />
			<rect x='240' y='60' rx='0' ry='0' width='800' height='370' />
		</ContentLoader>
	)
}

export default Skeleton
