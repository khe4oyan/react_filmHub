import React from 'react'
import defaultBanner from './loading.png';
import './Movie.css';

export default function Movie({ data }) {
	const [bannerShow, setBannerShow] = React.useState(true);

	const bannerShowHandler = () => {
		setTimeout(() => {
			setBannerShow(false);
		}, 300);
	}

	return (
		<div className='movie'>
			<div className='movie__description'>
				<h2 className='movie__description__title'>
					{ data.title }
				</h2>
				<p className='movie__description__rating center'>
					<span className="material-symbols-outlined">
						stars
					</span>
					{ data.vote_average }
				</p>
				<p className='movie__description__overview'>
					{ data.overview }
				</p>
			</div>
			{
				bannerShow && 
				<img src={ defaultBanner } className='movie__posterLoading'/>
			}
			<img 
				className='movie__poster' 
				src={ `https://image.tmdb.org/t/p/original${ data.poster_path }` } 
				onLoad={ bannerShowHandler }
				alt="poster" 
			/>
		</div>
	)
}