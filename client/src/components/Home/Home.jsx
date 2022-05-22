import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPokemons,
	getTypes,
	filterByCreatedOrExist,
	filterByTypes,
	orderBy,
} from '../../actions';
import { NavLink } from 'react-router-dom';

//Components
import Cards from '../Cards/Cards';
import BtnCreate from '../BtnCreate/BtnCreate';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Paged from '../Paged/Paged';
import style from './home.module.css';

const Home = () => {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	const [order, setOrder] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [pokePerPage, SetPokePerPage] = useState(8);
	const lastPoke = currentPage * pokePerPage;
	const firstPoke = lastPoke - pokePerPage;
	const currentPokes = allPokemons.slice(firstPoke, lastPoke);
	const paged = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const types = useSelector((state) => state.types);

	useEffect(() => {
		dispatch(getPokemons());
		dispatch(getTypes());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getPokemons());
	}

	function handleFilterCreated(e) {
		e.preventDefault();
		dispatch(filterByCreatedOrExist(e.target.value));
	}

	function handleFilterTypes(e) {
		e.preventDefault();
		dispatch(filterByTypes(e.target.value));
	}

	function handleSort(e) {
		e.preventDefault();
		dispatch(orderBy(e.target.value));
		setCurrentPage(1);
		setOrder(e.target.value);
	}

	function handlePrevPage (){
		setCurrentPage(currentPage - 1);
	}
	function handleNextPage (){
		setCurrentPage(currentPage + 1 );
	}
	


    return (
        <div className={style.container}>
            
            <div className={style.home}>

            	<Header />
            	<NavBar className={style.navBar} types={types}clearFilter={handleClick}filterCreated={handleFilterCreated}filterTypes={handleFilterTypes}sort={handleSort}setCurrentPage={setCurrentPage}/>

                <NavLink classname = {style.navlink} to="/create">
                    <BtnCreate />
                </NavLink>


                <Cards allPokemons={currentPokes} />


                <Paged  pokemonsLength={allPokemons.length} pokePerPage={pokePerPage} currentPage={currentPage} paged={paged}/>

			<div className={style.prevBtn} onClick={handlePrevPage}></div>
			<div className={style.nextBtn} onClick={handleNextPage}></div>
            </div>
                
        </div>
    );
};


export default Home;