import { useEffect } from 'react'
import SeminarCard from '../SeminarCard'
import Spinner from '../ui/spinner'
import { useUnit } from 'effector-react'
import { $seminars, fetchSeminarsFx } from '@/store/seminars'
import { $isFetching } from '@/store/isFetching'

export default function SeminarList() {
	const [seminars, fetchSeminars, isFetching] = useUnit([
		$seminars,
		fetchSeminarsFx,
		$isFetching,
	])

	useEffect(() => {
		fetchSeminars()
	}, [])

	return (
		<div className='flex flex-col gap-8 min-h-screen'>
			<h1 className='text-2xl font-bold'>Список семинаров</h1>
			{isFetching && <Spinner size={'large'} />}
			{!isFetching && seminars?.length === 0 && (
				<p>Здесь пока что пусто 😞</p>
			)}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{!isFetching &&
					seminars?.map((seminar) => (
						<SeminarCard key={seminar.id} seminar={seminar} />
					))}
			</div>
		</div>
	)
}
