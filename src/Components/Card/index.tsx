import React from 'react';

const ComponentCards: React.FC = () => {
  return (
    <article className='flex flex-col h-[400px] w-[250px] rounded-2xl shadow-lg mx-4 my-4 overflow-hidden relative'>
      <span className='rounded-t-[50%] rounded-b-[50%] bg-[#7AC74C] w-[300px] h-[300px] absolute -z-10 top-[-25%] left-[50%] translate-x-[-50%]'></span>
      <figure className='bg-contain h-[300px] bg-[url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png)] bg-center bg-no-repeat'></figure>
      <h2 className='h-[40px] flex items-center justify-center mt-4 text-2xl font-semibold text-gray-800 capitalize'>
        Bulbassaur
      </h2>
      <span className='h-[25px] flex items-center justify-center w-full my-2 text-gray-800 text-lg font-bold'>
        #001
      </span>

      <div className='h-[120px] card-types pt-4 flex justify-around items-center child:flex child:items-center child:content-center child:p-[2%] child:text-white child:shadow-sm child:rounded-xl'>
        <span className='bg-[#7AC74C]'>Grass</span>
        <span className='bg-[#A33EA1]'>Poison</span>
      </div>

      <div className='h-[80px] flex flex-row bg-[#7AC74C]'>
        <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
          <div className='value text-[22px] font-medium'>45</div>
          <div className='type text-[11px] font-light uppercase'>hp</div>
        </div>
        <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
          <div className='value text-[22px] font-medium'>40</div>
          <div className='type text-[11px] font-light uppercase'>Attack</div>
        </div>
        <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
          <div className='value text-[22px] font-medium'>45</div>
          <div className='type text-[11px] font-light uppercase'>Defense</div>
        </div>
        <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
          <div className='value text-[22px] font-medium'>90</div>
          <div className='type text-[11px] font-light uppercase'>Speed</div>
        </div>
      </div>
    </article>
  );
};

export default ComponentCards;

