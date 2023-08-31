import React, { useEffect } from 'react'
import './Header.css';
import GenresBtn from '../GenresBtn/GenresBtn';
import { useSelector, useDispatch } from 'react-redux'
import { genresFetchAsync } from '../../store/slices/genresSlice'
import { showedListFetchAsync, showedSearchFetchAsync } from '../../store/slices/showedMoviesSlice';

export default function Header({ setPage, searchText, setSearchText }) {
  const { genres, isLoaded } = useSelector(data => data.genresData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isLoaded) { return; }
    dispatch(genresFetchAsync());
  }, []);

  const selectedGenreId = useSelector(data => data.showedMovies.genreId);
  const allGenresListClickButton = () => {
    if (selectedGenreId === null) { return; }
    dispatch(showedListFetchAsync(1));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText !== '') {
        setPage(1);
        dispatch(showedSearchFetchAsync({ movieName: searchText, page: 1 }));
      }
    }, 2000);

    return () => { clearTimeout(timer); }
  }, [searchText]);

  return (
    <div className='boxForHeader'>
      <header className='header'>
        <div className='header__box center'>
          <h1 className='header__box__headerText'>Movie<span>hub</span></h1>
        </div>
        <div className="header__genresBox">
          <button className={`genreButton ${ selectedGenreId === null ? 'selectedGenre' : '' }`} onClick={ allGenresListClickButton }>All</button>
          {
            genres.map(item => 
              <GenresBtn 
                key={ item.id } 
                genere={ item } 
              />
            )
          }
        </div>
        <div className='header__box center'>
          <input 
            className='header__search' 
            value={ searchText }
            onChange={ (e) => setSearchText(e.target.value) }
            type="search" 
            placeholder='search'
          />
        </div>
      </header>
    </div>
  )
}
