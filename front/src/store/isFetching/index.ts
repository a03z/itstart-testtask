import { combine } from 'effector'
import { deleteSeminarFx, editSeminarFx, fetchSeminarsFx } from '../seminars'

export const $isFetching = combine(
	[fetchSeminarsFx.pending, editSeminarFx.pending, deleteSeminarFx.pending],
	(pendings) => pendings.some(Boolean)
)
$isFetching.watch((s) => console.log(s))
// в эффекте хранится несколько сторон, один из них - pending, это позволяет нам создать такой стор,
// который объединяет в себе состояние запросов из всех эффектов
