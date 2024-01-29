import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className='p-2 '>
      <h1 className='text-3xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll bar' style={{ overflowX: 'scroll', WebkitOverflowScrolling: 'touch' }}>
        <div className='flex' style={{ marginRight: '-16px' }}>
          {/* Add negative margin to compensate for scrollbar */}
          {movies?.map((movie, index) => (
            <div className='m-2' key={index}>
              <MovieCard posterpath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
