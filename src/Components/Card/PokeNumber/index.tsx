import React from 'react';

interface iPokeNumber {
  number: number;
}

const PokeNumber: React.FC<iPokeNumber> = ({ number }) => {
  const GetNumberPokemon = (n: number, totalZeros: number): string => {
    return `#${String(n).padStart(totalZeros, '0')}`;
  };
  return (
    <span className='h-[25px] flex items-center justify-center w-full my-2 text-gray-800 text-lg font-bold'>
      {GetNumberPokemon(number, 4)}
    </span>
  );
};

export default PokeNumber;

