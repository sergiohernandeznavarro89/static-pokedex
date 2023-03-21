import { Card } from '@nextui-org/react';
import router from 'next/router';
import { FC } from 'react'

interface Props {
    favoritePokemon: number
}

export const FavoriteCardPokemon: FC<Props> = ({ favoritePokemon }) => {

    const onClick = (id: number) => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Card isHoverable isPressable onClick={() => onClick(favoritePokemon)} css={{ padding: 10 }}>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${favoritePokemon}.svg`}
                width={'100%'}
                height={140}
            />
        </Card>
    )
}