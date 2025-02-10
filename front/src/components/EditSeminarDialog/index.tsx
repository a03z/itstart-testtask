import type { Seminar } from '@/types/seminar'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import { editSeminarFx } from '@/store/seminars'
import { useUnit } from 'effector-react'

interface EditSeminarDialogProps {
	seminar: Seminar
	isOpen: boolean
	onOpenChange: (open: boolean) => void
}

export default function EditSeminarDialog({
	seminar,
	isOpen,
	onOpenChange,
}: EditSeminarDialogProps) {
	const [editSeminar] = useUnit([editSeminarFx])
	const { register, handleSubmit } = useForm<Seminar>({
		defaultValues: seminar,
	})

	const onSubmit = (data: Seminar) => {
		editSeminar({ ...data, id: seminar.id })
		toast(`Семинар "${seminar.title}" обновлен`)
		onOpenChange(false)
	}

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Редактировать семинар</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='title' className='text-right'>
								Название
							</Label>
							<Input
								id='title'
								className='col-span-3'
								{...register('title', { required: true })}
							/>
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='description' className='text-right'>
								Описание
							</Label>
							<Textarea
								id='description'
								className='col-span-3 resize-none h-24'
								{...register('description', { required: true })}
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							type='button'
							variant='secondary'
							onClick={() => onOpenChange(false)}>
							Отмена
						</Button>
						<Button type='submit'>Сохранить</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
