import React from 'react';
interface iPokeID {
  PokeId: number;
}
const PokeImage: React.FC<iPokeID> = ({ PokeId }) => {
  const GetImagePokemon = (id: number): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  };
  return (
    <>
      <figure
        style={{ backgroundImage: `url(${GetImagePokemon(Number(PokeId))})` }}
        className={`bg-contain h-[300px]  bg-center bg-no-repeat`}
      ></figure>
    </>
  );
};

export default PokeImage;

