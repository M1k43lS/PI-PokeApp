import React from 'react';
import style from './SearchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsByName } from '../../actions';

const SearchBar = ({ setCurrentPage }) => {
	


	const dispatch = useDispatch();
	const [pokeName, setPokeName] = useState('');

	function handleInputChange(e) {
		e.preventDefault();
		setPokeName(e.target.value);
		console.log(pokeName)
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getPokemonsByName(pokeName.trim()));
		setCurrentPage(1);
	}


	return (
		<form className={style.container}>
			<input className={style.search} type='text' placeholder='Search Pokémon By Name' onChange={(e) => handleInputChange(e)}></input>
			{pokeName.trim() === '' || pokeName.trim().length < 3 ? (<div className={style.btn2} disabled>Buscar</div>) : 
				(
					<div className={style.btn} type='submit' onClick={(e) => {handleSubmit(e);}}>
					Buscar
					</div>
			)}
		</form>
	);
};

export default SearchBar;
