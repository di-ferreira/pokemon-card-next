import Image from 'next/image';
import React from 'react';
import Loading from '../../assets/loading.gif';
const PokeLoading: React.FC = () => {
  return (
    <span className='flex flex-col items-center justify-center m-4 p-2'>
      <Image src={Loading} width={50} height={50} alt='loading' />
      <h1>PokeLoading</h1>
    </span>
  );
};

export default PokeLoading;

