import React from 'react'
import { useSelector } from 'react-redux' 
import './ShowedMovies.css'
import Movie from '../Movie/Movie';

export default function ShowedMovies() {
	const movieList = useSelector(data => data.showedMovies.showedMovies);

	return (
		<div className='showedMovies'>
			{
				movieList?.length > 0 ?
				movieList.map(item => 
					<Movie 
						key={ item.id }
						data={ item }
					/>
				) : 
				<h2>No have films</h2>
			}
		</div>
	)
}
