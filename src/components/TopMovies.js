export const TopMovies = ({movi}) => {
    return (
        <ul>
            {movi !== null ? movi.map(movie => <li><img src={movie.image}/></li>) : ""}
        </ul>
    )
}