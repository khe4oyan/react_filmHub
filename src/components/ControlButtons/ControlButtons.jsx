import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ControlButtons.css';
import { showedGenreFetchAsync, showedListFetchAsync, showedSearchFetchAsync } from '../../store/slices/showedMoviesSlice';

export default function ControlButtons({ page, setPage, searchText }) {
	const { showedMovies, genreId } = useSelector(data => data.showedMovies);
	const dispatch = useDispatch();
	const inputRef = React.useRef(null);

	React.useEffect(() => {
		if (genreId === null) {
			dispatch(showedListFetchAsync(page));
		} else if (genreId !== 'search') {
			dispatch(showedGenreFetchAsync({ genreId, page }));
		} else {
			dispatch(showedSearchFetchAsync({ movieName: searchText, page }));
		}
	}, [page])

	React.useEffect(() => {
		setPage(1);
	}, [genreId]);

	const prev = () => {
		if (page - 1 < 1) { return; }
		setPage(prev => prev - 1);
	}

	const next = () => {
		setPage(prev => prev + 1);
	}

	const jumpTo = () => {
		if (inputRef.current.value < 1) { return; }
		setPage(inputRef.current.value);
		inputRef.current.value = '';
	}

	return (
		<div className='controlButtons'>
			<button onClick={ prev }>prev</button>
			<h2>{ page }</h2>
			{
				showedMovies?.length > 0 &&
				<button onClick={ next }>next</button>
			}
			<input 
				ref={ inputRef }
				type="number" 
				placeholder='jump to..'
			/>
			<button onClick={ jumpTo } >jump</button>
		</div>
	)
}
