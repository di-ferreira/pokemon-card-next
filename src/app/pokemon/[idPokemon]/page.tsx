import React from 'react';

interface iPokemon {
  params: { idPokemon: string };
}

const Page: React.FC<iPokemon> = ({ params }) => {
  console.log(params);

  return (
    <>
      <h1>Pokemon</h1>
    </>
  );
};

export default Page;

