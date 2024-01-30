import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import { OPEN_AI_KEY } from '../utils/constants';

console.log(OPEN_AI_KEY);
const GPTMovieSuggestions = () => {
  const gpt = useSelector((store) => store.GPT);
  const { gptmovies, movieNames } = gpt;
  if (!movieNames) return null; //We will show shimmer here after wards.
  return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
      <div>
        {movieNames.map((movieName, index) =>
          <MovieList key={movieName} title={movieName}
            movies={gptmovies[index]} />)
        }
      </div>
    </div>
  )
}
export default GPTMovieSuggestions