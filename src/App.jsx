import React from 'react'
import Home from './pages/Home/Home'

export const SearchContext = React.createContext()

function App() {
	const [searchValue, setSearchValue] = React.useState('')
	return (
		<div className='App'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Home />
			</SearchContext.Provider>
		</div>
	)
}

export default App
