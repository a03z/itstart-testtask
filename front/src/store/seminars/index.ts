import { Seminar } from '@/types/seminar'
import axios from 'axios'
import { createEffect, createStore, sample } from 'effector'

// stores
export const $seminars = createStore<Seminar[] | null>(null)

// effects
export const fetchSeminarsFx = createEffect(async () => {
	try {
		const { data } = await axios.get('http://localhost:3000/seminars')
		return data
	} catch (e) {
		console.error(e)
		throw e
	}
})

export const deleteSeminarFx = createEffect(async (id: number) => {
	try {
		await axios.delete(`http://localhost:3000/seminars/${id}`)
	} catch (e) {
		console.error(e)
	}
})

export const editSeminarFx = createEffect(async (seminar: Seminar) => {
	try {
		await axios.put(`http://localhost:3000/seminars/${seminar.id}`, seminar)
	} catch (e) {
		console.error(e)
	}
})

// handlers
sample({
	source: $seminars,
	clock: [deleteSeminarFx.done, editSeminarFx.done],
	target: fetchSeminarsFx,
})

$seminars.on(fetchSeminarsFx.doneData, (_, seminars) => seminars)
