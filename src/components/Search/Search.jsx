import React from 'react'
import style from './search.module.scss'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
import searchicon from '../../assets/img/search-icon.png'
import exit from '../../assets/img/exit-logo.png'

const Search = () => {
	const { setSearchValue } = React.useContext(SearchContext)
	const [inputValue, setInputValue] = React.useState('')
	const inputRef = React.useRef()
	const clearInput = () => {
		setInputValue('')
		setSearchValue('')
		inputRef.current.focus()
	}
	const updateSearchValue = React.useCallback(
		debounce(str => {
			setSearchValue(str)
		}, 500),
		[]
	)
	const onChangeInput = event => {
		setInputValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (
		<div className={style.inner}>
			<img src={searchicon} className={style.search} alt='icon' />
			<input
				ref={inputRef}
				onChange={onChangeInput}
				value={inputValue}
				placeholder='Поиск пиццы'
				className={style.input}
			/>
			{inputValue && (
				<img
					onClick={clearInput}
					src={exit}
					className={style.exit}
					alt='icon'
				/>
			)}
		</div>
	)
}

export default Search
