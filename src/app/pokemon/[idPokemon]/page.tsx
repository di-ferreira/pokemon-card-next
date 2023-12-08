'use client';
import { iPokemonResponse, iSpeciesResponse } from '@/@types';
import {
  GetNumberPokemon,
  GetPokemonText,
  GetTypeColor,
  IconImage,
} from '@/utils';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface iPokemon {
  params: { idPokemon: string };
}

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

const Page: React.FC<iPokemon> = ({ params }) => {
  const [Pokemon, setPokemon] = React.useState<iPokemonResponse>();
  const [PokeSpecies, setPokeSpecies] = React.useState<iSpeciesResponse>();

  const GetPokemon = async () => {
    const pokemonInf = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.idPokemon}`
    );
    setPokemon(await pokemonInf.json());

    const pokemonSpecies = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${params.idPokemon}`
    );
    const PokeSpecies = await pokemonSpecies.json();
    setPokeSpecies(PokeSpecies);
  };

  useEffect(() => {
    GetPokemon();
  }, []);

  return (
    <div
      className={`${roboto.className} flex flex-col items-center justify-center w-screen h-[90vh] overflow-hidden bg-[#ddd]`}
    >
      {Pokemon && (
        <section className='relative flex w-[75%] h-[85%] p-4 bg-[#888] rounded-2xl card-shadow'>
          <span className='absolute w-[80%] h-[99%] bg-[#eee] top-[0.25rem] left-[0.25rem] rounded-s-xl rounded-e-[50px]'></span>

          <article className='flex flex-col items-center w-[300px] p-1 gap-y-6 z-50'>
            <h1 className='!text-black capitalize small-caps font-bold -mb-6 text-5xl'>
              {Pokemon.name}
            </h1>
            <h3 className='font-bold small-caps'>
              Nº {GetNumberPokemon(Pokemon.id, 4)}
            </h3>
            <div className='flex justify-center w-full -mt-6 p-5'>
              {Pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  style={{ backgroundColor: GetTypeColor(type.type.name) }}
                  className={`flex p-[2%] mx-4 items-center justify-center w-8 h-8 rounded-full`}
                >
                  <Image
                    src={IconImage(type.type.name)}
                    alt={`icon ${type.type.name}`}
                    title={`${type.type.name}`}
                  />
                </span>
              ))}
            </div>
            <div className='w-full flex flex-col gap-y-2 items-center'>
              <h4 className='text-center text-2xl'>ABILITIES</h4>
              <div className='flex justify-center flex-wrap w-full gap-y-4 gap-x-4 h-auto bg-none'>
                {Pokemon.abilities.map((ab) => (
                  <span
                    key={ab.ability.url}
                    className={`bg-[#113864] rounded uppercase font-bold text-xs text-center 
                    flex shadow-md shadow-[#113864] items-center justify-center p-2 text-gray-50 h-8`}
                  >
                    {ab.ability.name}
                  </span>
                ))}
              </div>
            </div>
            <p className='leading-5 text-start'>
              {GetPokemonText(
                PokeSpecies ? PokeSpecies.flavor_text_entries : []
              )}
            </p>
          </article>

          {/* 
      <article className="chainEvolution">
        <h1>Chain Evolution</h1>
        <div
          className="chainEvolutionImageContainer"
          *ngIf="ChainEvolution$ | async as ChainEvolution"
        >
          <article
            className="chainEvolutionImage"
            [style.justify-content]="'center'"
          >
            <a
              className="chainEvolutionImageLink"
              [routerLink]="[
                '/pokemon',
                GetUrltoIDPokemon(ChainEvolution.chain.species.url)
              ]"
              routerLinkActive="router-link-active"
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{
                  GetUrltoIDPokemon(ChainEvolution.chain.species.url)
                }}.png"
                alt="{{ ChainEvolution.chain.species.name }}"
              />
              <h5>{{ ChainEvolution.chain.species.name }}</h5>
              <span
                *ngIf="ChainEvolution.chain.evolves_to.length > 0"
                className="arrowEvolution"
                >&darr;</span
              >
            </a>
          </article>

          <article
            className="chainEvolutionImage"
            [style.justify-content]="
              ChainEvolution.chain.evolves_to.length > 3
                ? 'flex-start'
                : 'center'
            "
          >
            <a
              *ngFor="let evolutions of ChainEvolution.chain.evolves_to"
              className="chainEvolutionImageLink"
              [routerLink]="[
                '/pokemon',
                GetUrltoIDPokemon(evolutions.species.url)
              ]"
              routerLinkActive="router-link-active"
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{
                  GetUrltoIDPokemon(evolutions.species.url)
                }}.png"
                alt="{{ evolutions.species.name }}"
              />
              <h5>{{ evolutions.species.name }}</h5>
              <span
                *ngIf="ChainEvolution.chain.evolves_to[0].evolves_to.length > 0"
                className="arrowEvolution"
                >&darr;</span
              >
            </a>
          </article>

          <article
            className="chainEvolutionImage"
            [style.justify-content]="
              ChainEvolution.chain.evolves_to[0].evolves_to.length > 3
                ? 'flex-start'
                : 'center'
            "
          >
            <a
              *ngFor="
                let evolutions of ChainEvolution.chain.evolves_to[0].evolves_to
              "
              className="chainEvolutionImageLink"
              [routerLink]="[
                '/pokemon',
                GetUrltoIDPokemon(evolutions.species.url)
              ]"
              routerLinkActive="router-link-active"
            >
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{
                  GetUrltoIDPokemon(evolutions.species.url)
                }}.png"
                alt="{{ evolutions.species.name }}"
              />
              <h5>{{ evolutions.species.name }}</h5>
              <span
                *ngIf="
                  ChainEvolution.chain.evolves_to[0].evolves_to[0].evolves_to
                    .length > 0
                "
                className="arrowEvolution"
                >&darr;</span
              >
            </a>
          </article>
        </div>
      </article>

      <article className="image-container">
        <figure [style]="ReturnImagePokemon(PokemonVarietyID)"></figure>
        <div className="containerButtonsVarieties">
          <button
            className="btnVarieties"
            name="{{ forms.pokemon.name }}"
            title="{{ forms.pokemon.name }}"
            type="button"
            (click)="ChangePokemonVariety(forms.pokemon.url)"
            *ngFor="let forms of PokeSpecies.varieties"
          >
            {{ forms.pokemon.name }}
          </button>
        </div>*/}
        </section>
      )}
    </div>
  );
};

export default Page;

