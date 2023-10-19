import React from 'react';

interface iPokeName {
  name: string;
}

const PokeName: React.FC<iPokeName> = ({ name }) => {
  return (
    <h2 className='h-[40px] flex items-center justify-center mt-4 text-2xl font-semibold text-gray-800 capitalize'>
      {name}
    </h2>
  );
};

export default PokeName;

