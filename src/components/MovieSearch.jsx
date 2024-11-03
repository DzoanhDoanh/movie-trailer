import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MovieContext } from '../Context/MovieProvider';


function MovieSearch({title, data}) {

    const {handleTrailer} = useContext(MovieContext)

    return ( 
        <div className='text-white p-10 mb-10'>
            <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
                {data && data.length > 0 && data.map((movie) => 
                    <div key={movie.id} className="w-[200px] h-[300px] relative group" onClick={() => handleTrailer(movie.id)}>
                    <div className='group-hover:scale-105 
                    transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40'/>
                        <img src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`} alt={movie.title} className='object-cover w-full h-full'/>
                        <div className="absolute bottom-4 left-2">
                            <p className='uppercase text-md'>
                                {movie.title || movie.original_title}
                            </p>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
     );
}

MovieSearch.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}
export default MovieSearch;