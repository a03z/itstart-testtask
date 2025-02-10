interface SpinnerProps {
	size?: 'small' | 'medium' | 'large'
	color?: string
}

const Spinner = ({
	size = 'medium',
	color = 'text-blue-500',
}: SpinnerProps) => {
	const sizeClasses = {
		small: 'h-6 w-6',
		medium: 'h-8 w-8',
		large: 'h-12 w-12',
	}

	return (
		<div className='flex justify-center items-center'>
			<div
				className={`animate-spin rounded-full border-t-2 border-b-2 ${color} ${sizeClasses[size]}`}></div>
		</div>
	)
}

export default Spinner
