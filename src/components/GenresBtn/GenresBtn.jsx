import React from 'react'
import './GenresBtn.css'
import { showedGenreFetchAsync } from '../../store/slices/showedMoviesSlice';
import { useDispatch, useSelector } from 'react-redux'

export default function GenresBtn({ genere }) {
  const dispatch = useDispatch();
  const selectedGenreId = useSelector(state => state.showedMovies.genreId);

  const click = (genreId) => {
    if (selectedGenreId === genreId) { return }
    dispatch(showedGenreFetchAsync({ genreId, page: 1 }));
  }

  return (
    <button className={`genreButton ${ selectedGenreId === genere.id ? 'selectedGenre': '' }`} onClick={() => click(genere.id)} >{ genere.name }</button>
  )
}