'client';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Site test for api pokeapi with NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={montserrat.className}>
        <nav className='overflow-hidden w-screen h-[10vh] flex items-end gap-x-[5rem] py-[0.3rem] px-[0.75rem] bg-red-700'>
          <Image src={Logo} alt='Logo Pokémon' className='w-auto h-full' />
          <div className='w-full flex items-center'>
            <input
              type='text'
              placeholder='Buscar por NOME ou ID'
              className='bg-transparent focus-within:outline-none focus-visible:outline-none py-4 px-2 border-b-2 border-b-white w-[30rem] h-10 mr-6 text-yellow-300 placeholder-yellow-300'
            />
            <button
              type='button'
              title='Seach Pokemon'
              className='hover:bg-transparent hover:border-white hover:text-yellow-300 hover:font-normal will-change-contents h-8 m-2 p-2 flex items-center justify-center cursor-pointer font-bold bg-white border-transparent border-x-2 border-y-2 rounded-t-3xl rounded-b-3xl'
              id='btn'
            >
              BUSCAR
            </button>
            <button
              type='button'
              title='Seach All Pokemons'
              className='hover:bg-transparent hover:border-white hover:text-yellow-300 hover:font-normal will-change-contents h-8 m-2 p-2 flex items-center justify-center cursor-pointer font-bold bg-white border-transparent border-x-2 border-y-2 rounded-t-3xl rounded-b-3xl'
              id='btnAll'
            >
              Listar Todos
            </button>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}

