import type { Seminar } from '@/types/seminar'
import { MoreVertical, Pencil, Trash } from 'lucide-react'
import { useState } from 'react'
import DeleteSeminarDialog from '../DeleteSeminarDialog'
import EditSeminarDialog from '../EditSeminarDialog'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface SeminarCardProps {
	seminar: Seminar
}

export default function SeminarCard({ seminar }: SeminarCardProps) {
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

	return (
		<div className='bg-card text-card-foreground rounded-lg shadow-md overflow-hidden'>
			<img
				src={seminar.photo || ''}
				alt={seminar.title}
				className='w-full h-48 object-cover'
			/>
			<div className='p-4'>
				<div className='flex justify-between items-start mb-2'>
					<h2 className='text-xl font-semibold'>{seminar.title}</h2>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='ghost' size='icon'>
								<span className='sr-only'>Открыть меню</span>
								<MoreVertical className='h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuItem
								onSelect={() => setIsEditDialogOpen(true)}>
								<Pencil className='mr-2 h-4 w-4' />
								<span>Изменить</span>
							</DropdownMenuItem>
							<DropdownMenuItem
								onSelect={() => setIsDeleteDialogOpen(true)}>
								<Trash className='mr-2 h-4 w-4' />
								<span>Удалить</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<p className='text-muted-foreground mb-4 text-left'>
					{seminar.description}
				</p>
				<div className='flex justify-between text-sm text-muted-foreground'>
					<span>{seminar.date}</span>
					<span>{seminar.time}</span>
				</div>
			</div>
			<EditSeminarDialog
				seminar={seminar}
				isOpen={isEditDialogOpen}
				onOpenChange={setIsEditDialogOpen}
			/>
			<DeleteSeminarDialog
				seminar={seminar}
				isOpen={isDeleteDialogOpen}
				onOpenChange={setIsDeleteDialogOpen}
			/>
		</div>
	)
}
