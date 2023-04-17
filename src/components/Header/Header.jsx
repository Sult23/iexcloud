import React from 'react'
import logo from '../../assets/img/logo-img.png'
import style from './header.module.scss'
import Search from '../Search/Search'

const Header = () => {
	return (
		<div className={style.header}>
			<img src={logo} alt='logo' className={style.logo} />
			<Search />
			<h1>Companies Information</h1>
		</div>
	)
}

export default Header
