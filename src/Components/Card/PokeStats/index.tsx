import { Stat } from '@/@types';
import { GetTypeColor } from '@/utils';
import React from 'react';

interface iPokeStats {
  type: string;
  stats: Stat[];
}

const PokeStats: React.FC<iPokeStats> = ({ type, stats }) => {
  return (
    <section
      style={{ backgroundColor: GetTypeColor(type) }}
      className='h-[80px] flex flex-row'
    >
      <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
        <div className='value text-[22px] font-medium'>
          {stats[0].base_stat}
        </div>
        <div className='type text-[11px] font-light uppercase'>hp</div>
      </div>
      <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
        <div className='value text-[22px] font-medium'>
          {stats[1].base_stat}
        </div>
        <div className='type text-[11px] font-light uppercase'>Attack</div>
      </div>
      <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
        <div className='value text-[22px] font-medium'>
          {stats[2].base_stat}
        </div>
        <div className='type text-[11px] font-light uppercase'>Defense</div>
      </div>
      <div className='stat w-[25%] p-2 flex items-center justify-center flex-col text-white'>
        <div className='value text-[22px] font-medium'>
          {stats[stats.length - 1].base_stat}
        </div>
        <div className='type text-[11px] font-light uppercase'>Speed</div>
      </div>
    </section>
  );
};

export default PokeStats;

