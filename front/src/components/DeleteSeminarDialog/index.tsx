import type { Seminar } from '@/types/seminar'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '../ui/alert-dialog'
import { toast } from 'sonner'
import { useUnit } from 'effector-react'
import { deleteSeminarFx } from '@/store/seminars'

interface DeleteSeminarDialogProps {
	seminar: Seminar
	isOpen: boolean
	onOpenChange: (open: boolean) => void
}

export default function DeleteSeminarDialog({
	seminar,
	isOpen,
	onOpenChange,
}: DeleteSeminarDialogProps) {
	const [deleteSeminar] = useUnit([deleteSeminarFx])
	const handleDelete = () => {
		deleteSeminar(seminar.id)
		toast(`Семинар "${seminar.title}" удален`)
		onOpenChange(false)
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Вы уверены, что хотите удалить этот семинар?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Это действие не может быть отменено. Вы навсегда удалите
						"{seminar.title}" с нашего сервера.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отмена</AlertDialogCancel>
					<AlertDialogAction
						className='bg-red-800 hover:bg-red-400'
						onClick={handleDelete}>
						Удалить
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
