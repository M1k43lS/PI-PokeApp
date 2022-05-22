import React from 'react';
import BtnCreate from '../BtnCreate/BtnCreate';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => {


	return (
		<div className={style.container}>
			<NavLink to='/'>
				<div className={style.crown} />
			</NavLink>
			{/* <NavLink to='/create'>
				<BtnCreate flag={true} />
			</NavLink> */}
		</div>
	);
};

export default Header;
