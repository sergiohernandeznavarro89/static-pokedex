import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((item) => <PokemonCard key={item.id} pokemon={item} />)
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => (
    {
      ...poke,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
    }
  ))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
