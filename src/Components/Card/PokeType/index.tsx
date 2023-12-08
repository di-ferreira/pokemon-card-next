import { Type } from '@/@types';
import { GetTypeColor, IconImage } from '@/utils';
import Image from 'next/image';
import React from 'react';

interface iPokeType {
  types: Type[];
}

const PokeType: React.FC<iPokeType> = ({ types }) => {
  return (
    <div className='h-[120px] card-types pt-4 flex justify-around items-center child:flex child:items-center child:content-center child:p-[6px] child:text-white child:shadow-sm child:rounded-xl'>
      {types.map((type) => (
        <span
          style={{ backgroundColor: GetTypeColor(type.type.name) }}
          key={type.type.url}
          className='font-bold capitalize small-caps'
        >
          <Image
            className='w-5 mr-[5px] h-auto'
            src={IconImage(type.type.name)}
            alt={type.type.name}
          />
          {type.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokeType;

