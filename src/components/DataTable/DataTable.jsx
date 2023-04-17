import style from './dataTable.module.scss'
import { StrictModeDroppable as Droppable } from '../../helpers/StrictModeDroppable'
import { Draggable } from 'react-beautiful-dnd'
const DataTable = ({ data }) => {
	return (
		<Droppable droppableId='droppable'>
			{provided => (
				<div
					className={style.inner}
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<table>
						<thead className={style.thead}>
							<tr>
								<th>№</th>
								<th>Company name</th>
								<th>Industry</th>
								<th>Sektor</th>
							</tr>
						</thead>
						<tbody>
							{data.map((obj, id) => (
								<Draggable
									className={style.draggable}
									key={id}
									draggableId={id.toString()}
									index={id}
								>
									{provided => (
										<tr
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<td>{id + 1}</td>
											<td>{obj.companyName}</td>
											<td>{obj.industry ? obj.industry : 'No data'}</td>
											<td>{obj.sector ? obj.sector : 'No data'}</td>
										</tr>
									)}
								</Draggable>
							))}
						</tbody>
					</table>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default DataTable
