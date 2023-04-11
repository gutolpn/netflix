import React, {useEffect} from   'react'
import { getMovies } from '../api';

function Row({title, path}) {
    const [movies, setMovies] = React.useState([])

    const fetchMovies = async (_path) => {
       try{

        const data = await getMovies(_path);

        setMovies(data?.results)    //apenas se data não for vazio
        console.log(data)

       }catch(error) {
        console.log('error Row: ', error)
       }

    }

    useEffect( () => {

        fetchMovies(path)

    }, [path] )


    return (
        <div className='row-container'>
            <h2 className='row-header'>{title}</h2>
            <div className='row-cards'>
                {movies?.map( (movie) => {
                    return <div key={movie.id}> {movie.original_title} </div>
                } )}
            </div>
        </div>
    )

}

export default Row;