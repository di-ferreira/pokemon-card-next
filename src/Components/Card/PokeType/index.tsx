import { Type } from '@/@types';
import { GetTypeColor } from '@/utils';
import React from 'react';

interface iPokeType {
  types: Type[];
}

const PokeType: React.FC<iPokeType> = ({ types }) => {
  return (
    <div className='h-[120px] card-types pt-4 flex justify-around items-center child:flex child:items-center child:content-center child:p-[2%] child:text-white child:shadow-sm child:rounded-xl'>
      {types.map((type) => (
        <span
          style={{ backgroundColor: GetTypeColor(type.type.name) }}
          key={type.type.url}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokeType;

