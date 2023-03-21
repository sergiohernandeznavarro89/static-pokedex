import { Layout } from '../../components/layouts'
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { FavoritesList, NoFavorites } from '../../components/favorites';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavoritePokemons());
    }, []);

    return (
        <Layout title='Pokémons - Favoritos'>
            {favoritePokemons.length === 0
                ? (<NoFavorites />)
                : (<FavoritesList favoritePokemons={favoritePokemons} />
                )
            }
        </Layout>
    )
}

export default FavoritesPage