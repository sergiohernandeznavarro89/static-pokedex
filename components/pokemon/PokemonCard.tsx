import { FC } from 'react'
import { SmallPokemon } from '../../interfaces'
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { id, name, img } = pokemon;

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card
                isHoverable
                isPressable
                onClick={onClick}
            >
                <Card.Body css={{ p: 1, pt: 10, width: '100%' }}>
                    <Card.Image
                        src={img}
                        objectFit="cover"
                        width={100}
                        alt={name}
                    />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b transform='capitalize'>{name}</Text>
                        <Text b>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
