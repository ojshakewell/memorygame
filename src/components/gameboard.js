import React from 'react'
import GameTile from './gametile'

const GameBoard = () => {
	return(
		<nav className = 'game-board'>
			<h1>Gameboard area</h1>
			<GameTile />
		</nav>
	);
};
export default GameBoard;