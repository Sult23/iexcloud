import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { GetData } from '../../services/DataService'
import { DragDropContext } from 'react-beautiful-dnd'
import { SearchContext } from '../../App'
import style from './home.module.scss'
import Header from '../../components/Header/Header'
import DataTable from '../../components/DataTable/DataTable'
import Skeleton from '../../components/Skeleton/Skeleton'
import Button from '../../components/UI/Button/Button'

const Home = () => {
	const queryClient = useQueryClient()
	const [page, setPage] = React.useState(0)
	const { searchValue } = React.useContext(SearchContext)
	const { data, isLoading, isError } = useQuery(
		['companies', page],
		() => GetData(searchValue, page),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false,
			staleTime: 5000,
		},
		{
			select: data =>
				data.filter(company => company.companyName.includes(searchValue)),
		}
	)

	const [newData, setNewData] = React.useState(data || [])
	React.useEffect(() => {
		queryClient.prefetchQuery(['companies', page + 1], () => GetData(page + 1))
		setNewData(data)
	}, [data, page, queryClient])

	const handleOnDragEnd = result => {
		if (!result?.destination) return
		const tasks = [...newData]

		const [reorderedItem] = tasks.splice(result.sourse.index, 1)
		tasks.splice(result.destination.index, 0, reorderedItem)
		setNewData(tasks)
	}

	if (isLoading) return <Skeleton />
	console.log(data)
	if (isError) return <div>Error!!!</div>
	if (!data) return <div>No Data!!!</div>

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<div className={style.inner}>
				<Header />
				<div>
					<DataTable data={data} />
				</div>

				<div className={style.buttons}>
					<Button
						onClick={() => setPage(page => page - 1)}
						disabled={page === 0}
						text={'Previous'}
					/>
					<Button onClick={() => setPage(page => page + 1)} text={'Next'} />
				</div>
			</div>
		</DragDropContext>
	)
}

export default Home
