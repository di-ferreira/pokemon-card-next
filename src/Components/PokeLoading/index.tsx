import Image from 'next/image';
import React from 'react';
import Loading from '../../../public/loading.gif';
const PokeLoading: React.FC = () => {
  // https://i.gifer.com/4xjS.gif
  return (
    <span className='flex flex-col items-center justify-center m-4 p-2'>
      <Image src={Loading} width={100} height={100} alt='loading' />
      <h1>PokeLoading</h1>
    </span>
  );
};

export default PokeLoading;

