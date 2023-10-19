'use client';
import Card from '@/Components/Card';
import React from 'react';

export default function Home() {
  const [PokeList, setPokeList] = React.useState<(number | string)[]>([]);

  React.useEffect(() => {
    UpdateListPokemons();
  }, []);

  const UpdateListPokemons = (
    QtdOrNamePokemon: string | number = 151
  ): void => {
    let ListPokenums: (number | string)[] = [];
    if (typeof QtdOrNamePokemon === 'string') {
      ListPokenums.push(QtdOrNamePokemon.toLowerCase());
    } else {
      for (let i = 1; i < Number(QtdOrNamePokemon) + 1; i++) {
        ListPokenums.push(i);
      }
    }

    setPokeList(ListPokenums);
  };
  return (
    <main className='flex overflow-x-hidden overflow-y-auto w-screen h-[90vh] flex-wrap'>
      {PokeList.map((PokeId) => (
        <Card key={PokeId} PokeId={PokeId} />
      ))}
    </main>
  );
}

