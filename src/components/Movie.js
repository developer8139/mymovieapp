import '../movies.css';

export const Movie = ({url}) => {
    return (
        <div className="movie-img">
            <img width="200" height="250" src={url}/>
        </div>
    )
}