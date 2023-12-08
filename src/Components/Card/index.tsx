import { iPokemonResponse } from '@/@types';
import { GetTypeColor } from '@/utils';
import React from 'react';
import PokeLoading from '../PokeLoading';
import PokeImage from './PokeImage';
import PokeName from './PokeName';
import PokeNumber from './PokeNumber';
import PokeStats from './PokeStats';
import PokeType from './PokeType';

interface iPokecard {
  PokeId: number | string;
}
const ComponentCards: React.FC<iPokecard> = ({ PokeId }) => {
  const [Pokemon, setPokemon] = React.useState<iPokemonResponse>();

  const GetPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeId}`);
    const Pokemon = await response.json();
    setPokemon(Pokemon);
  };

  GetPokemon();

  if (!Pokemon) return <PokeLoading />;
  else {
    return (
      <a href={`/pokemon/${Pokemon.id}`} className='no-underline'>
        <article
          className={`flex flex-col h-[470px] w-64 rounded-2xl card-shadow mx-4 my-4 overflow-hidden relative bg-[${GetTypeColor(
            Pokemon.types[0].type.name
          )}]`}
        >
          <span
            style={{
              backgroundColor: GetTypeColor(Pokemon.types[0].type.name),
            }}
            className='rounded-t-[50%] rounded-b-[50%] w-[300px] h-[300px] absolute -z-10 top-[-25%] left-[50%] translate-x-[-50%]'
          ></span>
          <PokeImage PokeId={Pokemon.id} />
          <PokeName name={Pokemon.name} />
          <PokeNumber number={Pokemon.id} />

          <PokeType types={Pokemon.types} />

          <PokeStats type={Pokemon.types[0].type.name} stats={Pokemon.stats} />
        </article>
      </a>
    );
  }
};

export default ComponentCards;

