
import useNowPlayingmovies from '../hooks/useNowPlayingmovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useNowPlayingmovies(); //updates the redux store with now playing movies.
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
             MainContainer 
                -VideoBackground
                -Videotitle
             SecondaryContainer
                -MovieList*n
                  -cards*n
                  -
            */}
        </div>
    )
}

export default Browse