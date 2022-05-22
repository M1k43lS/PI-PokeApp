import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loaded from '../Loaded/Loaded';
import style from './cards.module.css';

const Cards = ({ allPokemons }) => {

	console.log(allPokemons);

	return (

		<div className={style.cards}>
			{allPokemons.length ? (
				allPokemons.map((poke) => {
					return (
						<Link
							to={`/pokemons/${poke.id}`}
							style={{ textDecoration: 'none' }}
						>
							<Card
								key={poke.id}
								id={poke.id}
								name={poke.name}
								img={poke.img}
								types={poke.types}
								def={poke.defense}
							/>
						</Link>
					);
				})
			) : (
				<Loaded />
			)}
		</div>
	);
};

export default Cards;
