import React from 'react';
import './App.css';
import 'resetcss_khc/index.css';
import Header from './components/Header/Header';
import ShowedMovies from './components/ShowedMovies/ShowedMovies';
import ControlButtons from './components/ControlButtons/ControlButtons';

export default function App() {
	const [page, setPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState('');

	const ref = React.useRef(null);

	React.useEffect(() => {
		ref.current.scrollIntoView();
	}, [page]);

	return (
		<div ref={ ref } className="app">
			<div className='boxForHeader'>
				<Header 
					setPage={ setPage }
					searchText={ searchText }
					setSearchText={ setSearchText }
				/>
			</div>
			<ControlButtons 
				page={ page } 
				setPage={ setPage }
				searchText={ searchText }
			/>
			
			<ShowedMovies />
			
			<ControlButtons 
				page={ page } 
				setPage={ setPage }
				searchText={ searchText }
			/>
		</div>
	);
}