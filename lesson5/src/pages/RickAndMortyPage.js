import { useDispatch, useSelector } from "react-redux"
import CharacterCard from "../components/RickAndMortyCard"
import { useEffect, useState } from "react"
import { fetchCharacters } from '../redux/actions'

const RickAndMortyPage = () => {
    const dispatch = useDispatch()
    const { characters, loading, error, info } = useSelector(state => state.charactersReducer)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [dispatch, page])

    const loadMore = () => {
        if (info.next) {
            setPage((prevPage) => prevPage + 1)
        }
    }

    return (
        <div>
            <h1>Rich and Morty Characters</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="character-grid">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
            {info.next && (
                <button onClick={loadMore} className="load-more">
                    Show More
                </button>
            )}
        </div>
    )
}

export default RickAndMortyPage